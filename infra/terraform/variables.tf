variable "aws_region" {
  description = "AWS region where S3 and DynamoDB resources will be created. CloudFront remains global."
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name used for resource naming."
  type        = string
  default     = "qair"
}

variable "environment" {
  description = "Deployment environment name."
  type        = string
  default     = "prod"
}

variable "bucket_name" {
  description = "Optional globally unique S3 bucket name. Leave empty to use project-environment-spa."
  type        = string
  default     = ""
}

variable "force_destroy_bucket" {
  description = "Whether Terraform can delete the S3 bucket even if it contains objects. Use false in production."
  type        = bool
  default     = false
}

variable "cloudfront_price_class" {
  description = "CloudFront price class."
  type        = string
  default     = "PriceClass_100"
}

variable "domain_aliases" {
  description = "Optional custom domains for CloudFront. Requires acm_certificate_arn in us-east-1."
  type        = list(string)
  default     = []
}

variable "acm_certificate_arn" {
  description = "Optional ACM certificate ARN in us-east-1 for custom CloudFront aliases."
  type        = string
  default     = ""
}
