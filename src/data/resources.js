const docsBaseUrl = import.meta.env.VITE_PUBLIC_DOCS_BASE_URL || 'https://qair-public-assets.s3.amazonaws.com/docs';
const repositoryUrl = import.meta.env.VITE_GITHUB_REPOSITORY_URL || 'https://github.com/organization/qair-alertas';

export const resources = [
  {
    title: 'Pitch ejecutivo E1',
    type: 'Presentación',
    description: 'Narrativa inicial: antecedentes, PESTAL, ODS, actores, problema y pregunta reto HMW.',
    href: '/assets/docs/qair-pitch-e1.pdf',
    preview: '/assets/pitch/pitch-e1-cover.jpg',
  },
  {
    title: 'Pitch técnico E2',
    type: 'Presentación',
    description: 'Pitch actualizado: problema, objetivos, impacto, actores, arquitectura, marco legal, validación y riesgos.',
    href: '/assets/docs/qair-pitch-e2.pdf',
    preview: '/assets/pitch/pitch-e2-cover.jpg',
  },
  {
    title: 'Trabajo escrito - fase 2',
    type: 'Documento técnico',
    description: 'Objetivos, solución inicial, árbol de alternativas, especificaciones, EDT, hitos y conclusiones.',
    href: '/assets/docs/qair-trabajo-grupo-2.pdf',
    preview: '/assets/prototype/arbol-alternativas-qair.jpg',
  },
  {
    title: 'Brief de la solución',
    type: 'Guía para jurados',
    description: 'Resumen ejecutivo de alcance, valor diferencial, usuarios, riesgos y criterios de evaluación.',
    href: `${docsBaseUrl}/qair-brief-solucion.pdf`,
    preview: '/assets/pitch/pitch-e2-objetivos.jpg',
  },
  {
    title: 'Modelamientos y memorias',
    type: 'ZIP técnico',
    description: 'Cálculo de media móvil, máquina de estados, pruebas manuales y trazabilidad del motor de alertas.',
    href: `${docsBaseUrl}/qair-modelamientos.zip`,
    preview: '/assets/pitch/pitch-e2-modelo-v.jpg',
  },
  {
    title: 'Arquitectura y prototipo',
    type: 'Diseño / renders',
    description: 'Flujo de ingesta, procesamiento, dashboard, alertas y visualizaciones del prototipo geoespacial.',
    href: `${docsBaseUrl}/qair-arquitectura-prototipo.zip`,
    preview: '/assets/pitch/pitch-e2-tecnico.jpg',
  },
  {
    title: 'Impacto ambiental y social',
    type: 'Análisis',
    description: 'Relación entre salud pública, confianza institucional, participación ciudadana y mitigación climática.',
    href: `${docsBaseUrl}/qair-impacto-ambiental-social.pdf`,
    preview: '/assets/pitch/pitch-e2-problema.jpg',
  },
];

export const repository = {
  title: 'Repositorio GitHub',
  description: 'Código fuente, frontend, prototipo de alertas, infraestructura como código y pipeline de despliegue.',
  href: repositoryUrl,
};
