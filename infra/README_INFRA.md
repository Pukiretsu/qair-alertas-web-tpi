# QAIR - Infraestructura AWS + CI/CD

Este paquete contiene únicamente la infraestructura del proyecto QAIR:

- Terraform para crear el bucket de estado remoto (`infra/bootstrap`).
- Terraform para desplegar la SPA estática en AWS (`infra/terraform`).
- Workflow de GitHub Actions para build, deploy, sync a S3 e invalidación de CloudFront (`.github/workflows/deploy.yml`).
- Guía de configuración AWS/GitHub (`docs/github-actions-aws-setup.md`).

## Orden recomendado

1. Crear el bucket de estado remoto:

```bash
cd infra/bootstrap
cp terraform.tfvars.example terraform.tfvars
terraform init
terraform apply
```

2. Crear en GitHub las variables y secretos indicados en `docs/github-actions-aws-setup.md`.

3. Ejecutar el despliegue desde GitHub Actions o localmente:

```bash
cd infra/terraform
terraform init \
  -backend-config="bucket=<TF_STATE_BUCKET_NAME>" \
  -backend-config="key=qair/prod/terraform.tfstate" \
  -backend-config="region=us-east-1" \
  -backend-config="use_lockfile=true"
terraform apply
```

## GitHub Actions

El workflow espera estas variables:

- `AWS_REGION`
- `TF_STATE_BUCKET_NAME`
- `TF_STATE_KEY`
- `TF_STATE_REGION`
- `QAIR_SPA_BUCKET_NAME`

Y este secreto:

- `AWS_ROLE_TO_ASSUME`
