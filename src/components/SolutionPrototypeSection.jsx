import {
  BarChart3,
  Building2,
  CheckCircle2,
  CircuitBoard,
  Database,
  ExternalLink,
  Gauge,
  MapPinned,
  Workflow,
} from 'lucide-react';
import { engineeringTools, milestones, stakeholders, technicalArchitecture } from '../data/project';
import { SectionHeader } from './SectionHeader';

const steps = [
  {
    title: 'Fuente oficial e ingesta',
    description: 'La captura se plantea desde SISAIRE/IDEAM con extracción programada, validación de archivos y control de trazabilidad.',
    icon: Database,
  },
  {
    title: 'ETL y normalización',
    description: 'Los datos se limpian, estandarizan en ug/m³ y se preparan para cálculo normativo, auditoría y visualización.',
    icon: Workflow,
  },
  {
    title: 'Motor normativo',
    description: 'El sistema aplica medias móviles de 24 horas, seguimiento de 48 horas y persistencia superior al 75%.',
    icon: Gauge,
  },
  {
    title: 'Dashboard y alertas',
    description: 'La información se presenta en un tablero geoespacial y puede activar reportes o notificaciones para decisión inmediata.',
    icon: BarChart3,
  },
];

export function SolutionPrototypeSection() {
  return (
    <section id="solucion" className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/60 to-transparent" />
      <div className="section-shell">
        <SectionHeader
          eyebrow="Solución y prototipo"
          title="QAIR automatiza el ciclo de vida del dato ambiental: captura, cálculo, visualización y alerta."
          description="La alternativa seleccionada integra web scraping, ETL, almacenamiento estructurado, lógica normativa y visualización geoespacial para apoyar a la CAR y a las autoridades ambientales en la toma de decisiones sobre PM2.5."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-300/15 text-teal-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            <VisualCard
              src="/assets/pitch/pitch-e2-tecnico.jpg"
              title="Especificaciones técnicas"
              description="Ingesta, procesamiento, dashboard y alertas se organizan como componentes desacoplados para facilitar evolución y mantenimiento."
            />
            <VisualCard
              src="/assets/pitch/pitch-e2-modelo-v.jpg"
              title="Modelo en V para validación"
              description="El prototipo conecta definición, diseño, desarrollo y pruebas para verificar cálculo, integración, sistema y aceptación de usuario."
            />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <CircuitBoard className="h-8 w-8 text-teal-300" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-300">Arquitectura del prototipo</p>
                <h3 className="mt-1 text-2xl font-bold text-white">De mediciones horarias a alertas accionables</h3>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {technicalArchitecture.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-7 space-y-4">
              {engineeringTools.map((tool) => (
                <div key={tool} className="flex gap-3 rounded-2xl bg-white/[0.05] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
                  <p className="text-sm leading-6 text-slate-300">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <Building2 className="h-7 w-7 text-teal-300" />
              <h3 className="text-2xl font-bold text-white">Co-creación con actores y expertos</h3>
            </div>
            <p className="mt-4 leading-8 text-slate-300">
              QAIR se formula alrededor de las necesidades de quienes reciben, validan y ejecutan la alerta: entidades ambientales,
              salud pública, comunidad y expertos técnicos. El objetivo no es solo calcular un valor, sino convertirlo en una decisión clara.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stakeholders.map((stakeholder) => (
                <article key={stakeholder.actor} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">{stakeholder.actor}</p>
                  <h4 className="mt-2 font-bold text-white">{stakeholder.role}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{stakeholder.value}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <VisualCard
              src="/assets/prototype/arbol-alternativas-qair.jpg"
              title="Árbol de alternativas"
              description="La solución selecciona caminos tecnológicos, institucionales, operativos y comunicativos para atacar las causas del problema."
            />
            <a
              href="/assets/docs/qair-trabajo-grupo-2.pdf"
              className="focus-ring flex items-center justify-between rounded-[2rem] border border-teal-300/30 bg-teal-300/10 p-5 text-teal-50 transition hover:bg-teal-300/15"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span className="block font-bold">Abrir documento técnico actualizado</span>
                <span className="text-sm text-teal-100/80">Objetivos, solución inicial, EDT, hitos y conclusiones.</span>
              </span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-soft">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-300">EDT y ruta de implementación</p>
              <h3 className="mt-2 text-2xl font-bold text-white">Hitos para convertir el prototipo en una plataforma operativa</h3>
            </div>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-200">Abril - junio 2026</span>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <article key={milestone.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm font-black text-teal-300">{milestone.date}</p>
                <h4 className="mt-2 font-bold text-white">{milestone.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">{milestone.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualCard({ src, title, description }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-soft">
      <img src={src} alt={title} className="h-72 w-full object-cover" />
      <div className="p-5">
        <div className="flex items-start gap-3">
          <MapPinned className="mt-1 h-5 w-5 shrink-0 text-teal-300" />
          <div>
            <h3 className="font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
