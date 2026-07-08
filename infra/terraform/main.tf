terraform {
  required_version = ">= 1.10.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = local.common_tags
  }
}

locals {
  name_prefix = "${var.project_name}-${var.environment}"

  common_tags = {
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "terraform"
    Application = "qair-stakeholder-spa"
  }
}

resource "aws_s3_bucket" "spa" {
  bucket        = var.bucket_name != "" ? var.bucket_name : "${local.name_prefix}-spa"
  force_destroy = var.force_destroy_bucket
}

resource "aws_s3_bucket_ownership_controls" "spa" {
  bucket = aws_s3_bucket.spa.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_bucket_public_access_block" "spa" {
  bucket = aws_s3_bucket.spa.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "spa" {
  bucket = aws_s3_bucket.spa.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "spa" {
  bucket = aws_s3_bucket.spa.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_website_configuration" "spa" {
  bucket = aws_s3_bucket.spa.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_cloudfront_origin_access_control" "spa" {
  name                              = "${local.name_prefix}-oac"
  description                       = "Origin Access Control for QAIR SPA private S3 bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "spa" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "QAIR stakeholder SPA"
  default_root_object = "index.html"
  aliases             = var.domain_aliases
  price_class         = var.cloudfront_price_class

  origin {
    domain_name              = aws_s3_bucket.spa.bucket_regional_domain_name
    origin_id                = "qair-s3-origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.spa.id
  }

  default_cache_behavior {
    target_origin_id       = "qair-s3-origin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn            = var.acm_certificate_arn != "" ? var.acm_certificate_arn : null
    cloudfront_default_certificate = var.acm_certificate_arn == "" ? true : false
    minimum_protocol_version       = var.acm_certificate_arn != "" ? "TLSv1.2_2021" : null
    ssl_support_method             = var.acm_certificate_arn != "" ? "sni-only" : null
  }
}

data "aws_iam_policy_document" "spa_bucket_policy" {
  statement {
    sid     = "AllowCloudFrontServicePrincipalReadOnly"
    effect  = "Allow"
    actions = ["s3:GetObject"]

    resources = ["${aws_s3_bucket.spa.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.spa.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "spa" {
  bucket = aws_s3_bucket.spa.id
  policy = data.aws_iam_policy_document.spa_bucket_policy.json

  depends_on = [aws_s3_bucket_public_access_block.spa]
}

resource "aws_dynamodb_table" "comments" {
  name         = "${local.name_prefix}-comments"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "commentId"

  attribute {
    name = "commentId"
    type = "S"
  }

  point_in_time_recovery {
    enabled = true
  }

  server_side_encryption {
    enabled = true
  }
}
