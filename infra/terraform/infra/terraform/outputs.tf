output "website_bucket_name" {
  description = "Private S3 bucket used as CloudFront origin."
  value       = aws_s3_bucket.spa.bucket
}

output "s3_website_endpoint" {
  description = "S3 website endpoint configured for the bucket. CloudFront is the recommended public entry point."
  value       = aws_s3_bucket_website_configuration.spa.website_endpoint
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID used for cache invalidations."
  value       = aws_cloudfront_distribution.spa.id
}

output "cloudfront_domain_name" {
  description = "CloudFront public domain name."
  value       = aws_cloudfront_distribution.spa.domain_name
}

output "comments_table_name" {
  description = "DynamoDB table for contact form comments."
  value       = aws_dynamodb_table.comments.name
}
