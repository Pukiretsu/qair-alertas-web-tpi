output "state_bucket_name" {
  description = "S3 bucket that stores Terraform state."
  value       = aws_s3_bucket.terraform_state.bucket
}

output "backend_init_example" {
  description = "Command example for initializing the application stack with this backend."
  value = join(" ", [
    "terraform init",
    "-backend-config=\"bucket=${aws_s3_bucket.terraform_state.bucket}\"",
    "-backend-config=\"key=qair/prod/terraform.tfstate\"",
    "-backend-config=\"region=${var.aws_region}\"",
    "-backend-config=\"use_lockfile=true\""
  ])
}
