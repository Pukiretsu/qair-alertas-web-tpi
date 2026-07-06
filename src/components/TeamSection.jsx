import { useState } from 'react';
import { ArrowRight, GraduationCap, Sparkles, Users } from 'lucide-react';
import { teamMembers } from '../data/team';
import { Modal } from './Modal';
import { SectionHeader } from './SectionHeader';

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="equipo" className="bg-slate-950">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Equipo interdisciplinario"
            title="Talento técnico y criterio institucional para transformar datos en acción."
            description="QAIR integra perspectivas de ingeniería agrícola, civil y química, con acompañamiento académico, para abordar un problema donde confluyen salud pública, ambiente, datos y gestión territorial."
          />
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 lg:max-w-sm">
            <Users className="h-7 w-7 text-teal-300" />
            <p className="mt-3 text-sm leading-6 text-slate-300">
              La fortaleza del equipo está en convertir la diversidad disciplinar en decisiones de diseño: cálculo confiable, categorización clara, enfoque territorial y comunicación accionable.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-soft transition hover:-translate-y-1 hover:border-teal-300/40">
              <div className="relative h-64 overflow-hidden">
                <img src={member.image} alt={`Foto de ${member.name}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="rounded-full bg-teal-300 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-950">{member.role}</span>
                  <h3 className="mt-3 text-2xl font-bold text-white">{member.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 text-slate-300">
                  <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-teal-300" />
                  <p className="text-sm font-semibold">{member.career}</p>
                </div>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">{member.contribution}</p>
                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full text-sm font-bold text-teal-200 hover:text-teal-100"
                >
                  Ver aporte completo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal open={Boolean(selectedMember)} title={selectedMember?.name || ''} onClose={() => setSelectedMember(null)}>
        {selectedMember ? (
          <div className="space-y-5">
            <p className="rounded-2xl bg-white/[0.05] p-4 text-sm font-semibold text-teal-100">{selectedMember.career}</p>
            <div>
              <h4 className="flex items-center gap-2 font-bold text-white">
                <Users className="h-4 w-4 text-teal-300" /> Aporte al proyecto
              </h4>
              <p className="mt-2 leading-7">{selectedMember.contribution}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-bold text-white">
                <Sparkles className="h-4 w-4 text-teal-300" /> Intereses futuros
              </h4>
              <p className="mt-2 leading-7">{selectedMember.futureInterest}</p>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
