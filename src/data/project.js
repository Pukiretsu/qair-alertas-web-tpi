export const projectFacts = [
  { value: 'PM2.5', label: 'Contaminante priorizado para el prototipo de alerta temprana' },
  { value: 'Res. 2254', label: 'Marco normativo usado para umbrales y categorización' },
  { value: '48 h', label: 'Ventana de persistencia para validar la declaratoria' },
  { value: '55 días', label: 'Plan operativo del prototipo, con 15 actividades técnicas' },
];

export const problemHighlights = [
  {
    title: 'Crisis ambiental',
    description: 'Los niveles de PM2.5 superan los límites de referencia y aumentan la exposición de la población a contaminantes finos.',
  },
  {
    title: 'Impacto en salud',
    description: 'La mala calidad del aire incrementa enfermedades respiratorias y afecta de forma especial a población vulnerable.',
  },
  {
    title: 'Brecha técnica',
    description: 'Existen sensores y límites, pero el paso de dato a alerta sigue siendo manual, fragmentado y reactivo.',
  },
];

export const stakeholders = [
  {
    actor: 'IDEAM',
    role: 'Fuente oficial y validador técnico',
    value: 'Aporta protocolos, trazabilidad de datos y lineamientos para el monitoreo nacional de calidad del aire.',
  },
  {
    actor: 'CAR / SDA Bogotá',
    role: 'Autoridad ambiental decisora',
    value: 'Usa la alerta técnica para evaluar acciones territoriales, restricciones y medidas de mitigación.',
  },
  {
    actor: 'Secretaría de Salud',
    role: 'Actor consultivo de salud pública',
    value: 'Relaciona eventos de contaminación con riesgos sanitarios, picos epidemiológicos y población sensible.',
  },
  {
    actor: 'Comunidades',
    role: 'Beneficiarias finales',
    value: 'Reciben información clara para ajustar hábitos diarios y reducir exposición durante episodios críticos.',
  },
  {
    actor: 'Ing. Verónica Gil',
    role: 'Product Owner / enlace institucional',
    value: 'Apoya la validación de requerimientos, fuentes oficiales y formularios de ingesta manual.',
  },
  {
    actor: 'Ing. Johan Suescun',
    role: 'Ingeniero Cloud',
    value: 'Acompaña la arquitectura de ingesta, el diseño del web scraper y la integración hacia nube.',
  },
];

export const engineeringTools = [
  'Captura programada desde fuentes oficiales como SISAIRE/IDEAM, priorizando PM2.5 y trazabilidad de origen.',
  'ETL para limpiar, normalizar y validar datos horarios antes de almacenarlos y procesarlos.',
  'Motor normativo con media móvil de 24 horas, seguimiento de 48 horas y persistencia superior al 75%.',
  'Visualización geoespacial orientada a ArcGIS Web, dashboard de estaciones y consulta para autoridades.',
  'Modelo de validación tipo V con pruebas unitarias, integración, sistema y aceptación de usuario.',
];

export const technicalArchitecture = [
  {
    title: 'Ingesta de datos',
    description: 'Web scraping o integración REST/JSON cuando exista disponibilidad, con validación de esquema y control de errores.',
  },
  {
    title: 'Procesamiento',
    description: 'Python 3.x, ETL, ArcGIS Notebooks y librerías geoespaciales para transformar mediciones en evidencia técnica.',
  },
  {
    title: 'Dashboard',
    description: 'Interfaz responsive para visualizar estaciones, tendencias, carga manual de archivos y exportación de memorias.',
  },
  {
    title: 'Alertas',
    description: 'Servicio de notificación SMTP/Push o API, activado por disparadores normativos y espaciales.',
  },
];

export const milestones = [
  { date: '26 abr. 2026', title: 'Pipeline de ingesta', description: 'Datos fluyendo automáticamente desde IDEAM hacia persistencia.' },
  { date: '10 may. 2026', title: 'Motor normativo', description: 'El sistema identifica alertas según Resolución 2254 de 2017.' },
  { date: '24 may. 2026', title: 'Web app completa', description: 'Panel BI, carga de archivos y visualización funcional.' },
  { date: '13 jun. 2026', title: 'Entrega final', description: 'Sistema operativo, pruebas, documentación y cierre.' },
];
