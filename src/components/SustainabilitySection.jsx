import { Globe2, HeartPulse, Leaf, Scale, TreePine } from 'lucide-react';
import { odsItems } from '../data/ods';
import { SectionHeader } from './SectionHeader';

const iconMap = {
  'ODS 3': HeartPulse,
  'ODS 11': Globe2,
  'ODS 13': TreePine,
};

const impactCards = [
  {
    title: 'Impacto ambiental',
    description: 'Aporta trazabilidad para episodios de contaminación, facilita medidas de mitigación y apoya el cumplimiento de estándares de aire limpio.',
    icon: Leaf,
  },
  {
    title: 'Impacto económico',
    description: 'La automatización reduce costos operativos asociados a revisión manual y disminuye riesgos de ausentismo por enfermedades respiratorias.',
    icon: Scale,
  },
  {
    title: 'Impacto social',
    description: 'Convierte alertas técnicas en mensajes claros para que la ciudadanía adopte conductas de autocuidado de forma oportuna.',
    icon: HeartPulse,
  },
];

export function SustainabilitySection() {
  return (
    <section id="sostenibilidad" className="relative overflow-hidden bg-slate-900">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />
      <div className="section-shell relative">
        <SectionHeader
          eyebrow="Sostenibilidad y ODS"
          title="QAIR conecta tecnología, salud pública y acción climática."
          description="La solución se enmarca en un enfoque de sostenibilidad porque mejora la respuesta ante episodios críticos de contaminación y fortalece la coordinación entre instituciones y ciudadanía."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {odsItems.map((item) => {
            const Icon = iconMap[item.number];
            return (
              <article key={item.number} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lime-300/15 text-lime-200">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-white">{item.number}</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-teal-200">{item.theme}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                <ul className="mt-5 space-y-2">
                  {item.impacts.map((impact) => (
                    <li key={impact} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-lime-300" />
                      {impact}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {impactCards.map((impact) => {
            const Icon = impact.icon;
            return (
              <article key={impact.title} className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6">
                <Icon className="h-7 w-7 text-teal-300" />
                <h3 className="mt-4 text-xl font-bold text-white">{impact.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{impact.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
