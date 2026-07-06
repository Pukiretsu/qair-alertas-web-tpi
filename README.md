# QAIR - SPA de presentación para stakeholders

QAIR es una Single Page Application desarrollada con React, Vite y Tailwind CSS para presentar el proyecto **QAIR - IDEAM Alertas** ante jurados, stakeholders y aliados institucionales.

La propuesta busca automatizar la generación de alertas tempranas de calidad del aire para Bogotá-Cundinamarca, integrando ingesta de datos, motor de cálculo de PM2.5, visualización ejecutiva, reportabilidad y comunicación accionable.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- AWS S3 + CloudFront
- DynamoDB para comentarios
- Terraform
- GitHub Actions

## Estructura

```text
.
├── .github/workflows/deploy.yml
├── infra/terraform
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── terraform.tfvars.example
├── public/assets
│   ├── docs
│   ├── prototype
│   └── team
├── src
│   ├── components
│   ├── data
│   ├── lib
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── package.json
└── vite.config.js
```

## Ejecución local

Recomendado: Node.js 20 LTS y npm 10.

```bash
npm ci
npm run dev
```

Aplicación local:

```text
http://localhost:5173
```

## Build de producción

```bash
npm run lint
npm run build
npm run preview
```

El build final queda en:

```text
dist/
```

## Variables de entorno frontend

Copia `.env.example` a `.env.local` si necesitas personalizar enlaces.

```bash
cp .env.example .env.local
```

Variables disponibles:

```env
VITE_PUBLIC_DOCS_BASE_URL=https://qair-public-assets.s3.amazonaws.com/docs
VITE_GITHUB_REPOSITORY_URL=https://github.com/organization/qair
VITE_COMMENTS_API_URL=
VITE_CALENDLY_URL=https://calendly.com/qair-equipo/demo
```

Si `VITE_COMMENTS_API_URL` está vacío, el formulario funciona en modo demo local usando `localStorage`. En producción debe apuntar a una API segura que escriba en DynamoDB.

## Infraestructura AWS

Terraform crea:

- Bucket S3 privado para la SPA.
- Static Website Hosting configurado en S3.
- CloudFront con Origin Access Control.
- Bucket policy para lectura exclusiva desde CloudFront.
- Tabla DynamoDB `qair-prod-comments` con partition key `commentId`.

Ejemplo:

```bash
cd infra/terraform
cp terraform.tfvars.example terraform.tfvars
terraform init
terraform plan
terraform apply
```

## CI/CD

El workflow `.github/workflows/deploy.yml` realiza:

1. Setup de Node.js.
2. Instalación con `npm ci`.
3. Lint del frontend.
4. Build de Vite.
5. Autenticación AWS con OIDC.
6. `terraform init`, `validate` y `apply`.
7. Sincronización de `dist/` al bucket S3.
8. Invalidación de CloudFront.

Secrets/variables recomendadas en GitHub:

```text
Secrets:
AWS_ROLE_TO_ASSUME

Variables:
AWS_REGION
QAIR_SPA_BUCKET_NAME
VITE_PUBLIC_DOCS_BASE_URL
VITE_GITHUB_REPOSITORY_URL
VITE_COMMENTS_API_URL
VITE_CALENDLY_URL
```

## Enfoque de contenido

La SPA cubre la rúbrica del proyecto:

- Equipo completo con mentor, carreras, aportes e intereses futuros.
- Descripción de solución, prototipo, actores, expertos, usabilidad y co-creación.
- Recursos y documentos del curso.
- ODS asociados con impactos ambientales, económicos y sociales.
- Formulario de contacto, comentarios y agenda de reuniones.
- Diseño moderno, responsivo e interactivo para stakeholders.
