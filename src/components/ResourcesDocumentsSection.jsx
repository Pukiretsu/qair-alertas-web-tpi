import { Download, ExternalLink, FileText, GitBranch, Presentation } from 'lucide-react';
import { repository, resources } from '../data/resources';
import { SectionHeader } from './SectionHeader';

export function ResourcesDocumentsSection() {
  return (
    <section id="recursos" className="bg-slate-950">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Recursos y documentos"
            title="El pitch reemplaza la infografía y cuenta la solución con evidencia técnica."
            description="Esta sección centraliza las presentaciones de pitch, el documento técnico actualizado, modelamientos, arquitectura, validación y recursos para jurados o aliados institucionales."
          />
          <a
            href={repository.href}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-100"
          >
            <GitBranch className="h-5 w-5" />
            Ver repositorio
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resource.type === 'Presentación' ? Presentation : FileText;
            return (
              <article
                key={resource.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-soft transition hover:-translate-y-1 hover:border-teal-300/40"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={resource.preview} alt={`Vista previa de ${resource.title}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-2 text-xs font-bold text-slate-100 backdrop-blur">
                    <Icon className="h-4 w-4 text-teal-300" />
                    {resource.type}
                  </div>
                  <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-teal-300 text-sm font-black text-slate-950">{index + 1}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-7 text-slate-300">{resource.description}</p>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-teal-300 px-4 py-2 text-sm font-black text-slate-950 transition group-hover:bg-teal-200"
                  >
                    Abrir recurso
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] border border-teal-300/20 bg-gradient-to-r from-teal-300/15 via-sky-300/10 to-lime-300/10 p-6 shadow-glow">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-200">Código y despliegue</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{repository.title}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">{repository.description}</p>
            </div>
            <a
              href={repository.href}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-950/50 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-950"
            >
              Abrir GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
