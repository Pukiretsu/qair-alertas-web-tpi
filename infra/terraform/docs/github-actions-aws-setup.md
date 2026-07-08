# GitHub Actions + AWS + Terraform State

Este repositorio despliega la SPA QAIR en AWS usando GitHub Actions, Terraform, S3, CloudFront y DynamoDB.

## 1. Secretos requeridos

Crea este secreto en:

`Settings > Secrets and variables > Actions > Secrets`

| Nombre | Valor | Uso |
|---|---|---|
| `AWS_ROLE_TO_ASSUME` | ARN del rol IAM que GitHub Actions asumirá por OIDC. Ejemplo: `arn:aws:iam::123456789012:role/github-actions-qair-deploy-role` | Permite al workflow desplegar sin guardar access keys en GitHub. |

No guardes `AWS_ACCESS_KEY_ID` ni `AWS_SECRET_ACCESS_KEY` si vas a usar OIDC.

## 2. Variables requeridas

Crea estas variables en:

`Settings > Secrets and variables > Actions > Variables`

| Nombre | Ejemplo | Uso |
|---|---|---|
| `AWS_REGION` | `us-east-1` | Región principal para S3 y DynamoDB. |
| `TF_STATE_BUCKET_NAME` | `qair-prod-tfstate-duvana983` | Bucket S3 donde se guardará el estado remoto de Terraform. |
| `TF_STATE_KEY` | `qair/prod/terraform.tfstate` | Ruta del archivo `.tfstate` dentro del bucket. |
| `TF_STATE_REGION` | `us-east-1` | Región del bucket de estado. Si no la configuras, usa `AWS_REGION`. |
| `QAIR_SPA_BUCKET_NAME` | `qair-prod-spa-duvana983` | Bucket privado donde se publicará el sitio estático. Debe ser único globalmente. |

## 3. Variables opcionales del frontend

| Nombre | Uso |
|---|---|
| `VITE_PUBLIC_DOCS_BASE_URL` | URL base pública para documentos si luego los mueves a otro bucket/CDN. |
| `VITE_GITHUB_REPOSITORY_URL` | URL del repositorio GitHub mostrado en la página. |
| `VITE_COMMENTS_API_URL` | Endpoint de una API futura para guardar comentarios en DynamoDB. |
| `VITE_CALENDLY_URL` | URL para agendar reuniones. |

## 4. Crear bucket de estado remoto

Tienes dos opciones.

### Opción A: crear el bucket con Terraform bootstrap

```bash
cd infra/bootstrap
cp terraform.tfvars.example terraform.tfvars
# Edita state_bucket_name con un nombre único globalmente.
terraform init
terraform apply
```

Luego usa el output `state_bucket_name` como valor de la variable `TF_STATE_BUCKET_NAME` en GitHub.

### Opción B: crear el bucket manualmente

Si prefieres crearlo desde AWS Console o AWS CLI, habilita como mínimo:

- Bloqueo de acceso público.
- Versionamiento.
- Cifrado SSE-S3 o SSE-KMS.
- No activar static website hosting para este bucket.

## 5. Permisos mínimos del rol AWS para GitHub Actions

El rol debe poder administrar:

- El bucket de estado: leer/escribir `terraform.tfstate` y el archivo `.tflock`.
- El bucket S3 de la SPA.
- CloudFront distribution e invalidaciones.
- DynamoDB table de comentarios.
- Recursos auxiliares usados por Terraform: bucket policy, OAC de CloudFront, tags, etc.

Para una demo académica puedes comenzar con permisos amplios controlados sobre recursos `qair-*`. Para producción, reduce los permisos por ARN.

## 6. Inicialización local del stack principal

Después de crear el bucket remoto:

```bash
cd infra/terraform
terraform init \
  -backend-config="bucket=qair-prod-tfstate-tu-sufijo-unico" \
  -backend-config="key=qair/prod/terraform.tfstate" \
  -backend-config="region=us-east-1" \
  -backend-config="use_lockfile=true"

terraform plan \
  -var="bucket_name=qair-prod-spa-tu-sufijo-unico"
```

## 7. Despliegue automático

El workflow `.github/workflows/deploy.yml` hará:

1. Build de React/Vite.
2. Login AWS por OIDC.
3. `terraform init` usando el bucket de estado remoto.
4. `terraform apply`.
5. Sync de `dist/` al bucket S3 de la SPA.
6. Invalidación de CloudFront.
