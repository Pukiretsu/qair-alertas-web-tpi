import { ArrowRight, CloudSun, Database, Gauge, ShieldCheck, Sparkles } from 'lucide-react';
import { problemHighlights, projectFacts } from '../data/project';

export function HeroSection() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-radial-teal">
      <div className="absolute inset-0 -z-10 bg-qair-grid bg-[length:44px_44px] opacity-25" />
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute -right-32 top-52 -z-10 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="section-shell grid items-center gap-12 pt-16 lg:grid-cols-[1fr_0.95fr] lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100">
            <CloudSun className="h-4 w-4" />
            Alertas tempranas de contaminación atmosférica
          </div>

          <h1 className="mt-7 max-w-5xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            QAIR transforma datos manuales en alertas que ayudan a salvar vidas.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Propuesta digital para automatizar la validación y generación de alertas de PM2.5 en Bogotá-Cundinamarca,
            integrando datos oficiales, cálculo normativo, visualización geoespacial y comunicación accionable para autoridades ambientales.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#solucion"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm font-black text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-teal-200"
            >
              Explorar solución
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#recursos"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Ver pitch y documentos
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projectFacts.map((fact) => (
              <div key={fact.label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <p className="text-3xl font-black text-white">{fact.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-glow backdrop-blur-2xl">
            <img src="/assets/pitch/pitch-e2-cover.jpg" alt="Portada del pitch QAIR Alertas" className="h-56 w-full object-cover sm:h-72" />
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-teal-300">Reto principal</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">Datos vs. acción</h2>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">Pitch actualizado</span>
              </div>

              <div className="mt-6 grid gap-3">
                {problemHighlights.map((item, index) => (
                  <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-300 text-sm font-black text-slate-950">{index + 1}</span>
                      <div>
                        <h3 className="font-bold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <MetricCard icon={Database} label="Fuente" value="SISAIRE / IDEAM" tone="text-sky-200" />
                <MetricCard icon={Gauge} label="Cálculo" value="Media móvil 24h" tone="text-teal-200" />
                <MetricCard icon={ShieldCheck} label="Normativa" value="Res. 2254/2017" tone="text-lime-200" />
                <MetricCard icon={Sparkles} label="Salida" value="Dashboard + alertas" tone="text-amber-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon: Icon, label, value, tone }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.05] p-4">
      <Icon className={`h-6 w-6 ${tone}`} />
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-1 font-bold text-white">{value}</p>
    </article>
  );
}
