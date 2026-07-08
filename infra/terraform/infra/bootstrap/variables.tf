variable "aws_region" {
  description = "AWS region where the Terraform remote state bucket will be created."
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name used for tagging."
  type        = string
  default     = "qair"
}

variable "environment" {
  description = "Environment name used for tagging."
  type        = string
  default     = "prod"
}

variable "state_bucket_name" {
  description = "Globally unique S3 bucket name for Terraform remote state. Example: qair-prod-tfstate-duvana983."
  type        = string
}
