import { useState } from 'react';
import { CalendarDays, Clock3, Heart, Mail, MessageCircle, Send, SmilePlus } from 'lucide-react';
import { submitComment } from '../lib/comments';
import { Modal } from './Modal';
import { SectionHeader } from './SectionHeader';

const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/qair-equipo/demo';

const emotions = ['Interés', 'Confianza', 'Curiosidad', 'Preocupación', 'Motivación'];

const meetingSlots = [
  { label: 'Revisión con jurados', detail: 'Presentación de 20 minutos + preguntas del prototipo.' },
  { label: 'Mesa técnica', detail: 'Profundización en motor de cálculo, datos e infraestructura.' },
  { label: 'Aliados institucionales', detail: 'Conversación sobre aplicación con autoridades ambientales o academia.' },
];

export function ContactInteractionSection() {
  const [form, setForm] = useState({ name: '', email: '', emotion: 'Interés', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const updateField = (field, value) => setForm((current) => ({ ...current, [field]: value }));

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const response = await submitComment(form);
      setResult(response);
      setForm({ name: '', email: '', emotion: 'Interés', message: '' });
    } catch (submissionError) {
      setError(submissionError.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contacto" className="bg-slate-950">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contacto e interacción"
          title="Queremos escuchar comentarios, emociones y oportunidades de mejora."
          description="Este espacio está diseñado para recibir retroalimentación de jurados, expertos y aliados. En producción, el formulario puede conectarse a una API que almacene comentarios en DynamoDB."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-soft">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-200">Nombre</span>
                <input
                  required
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className="focus-ring mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-200">Correo</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className="focus-ring mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500"
                  placeholder="nombre@correo.com"
                />
              </label>
            </div>

            <div className="mt-6">
              <span className="text-sm font-bold text-slate-200">¿Qué emoción te genera QAIR?</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {emotions.map((emotion) => (
                  <button
                    type="button"
                    key={emotion}
                    onClick={() => updateField('emotion', emotion)}
                    className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${
                      form.emotion === emotion ? 'bg-teal-300 text-slate-950' : 'border border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {emotion}
                  </button>
                ))}
              </div>
            </div>

            <label className="mt-6 block">
              <span className="text-sm font-bold text-slate-200">Comentario</span>
              <textarea
                required
                rows="6"
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                className="focus-ring mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500"
                placeholder="Comparte una recomendación, pregunta o posible aplicación del proyecto."
              />
            </label>

            {error ? <p className="mt-4 rounded-2xl bg-red-500/10 p-3 text-sm text-red-200">{error}</p> : null}

            <button
              type="submit"
              disabled={submitting}
              className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-teal-200 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {submitting ? 'Enviando...' : 'Enviar comentario'}
              <Send className="h-4 w-4" />
            </button>
          </form>

          <aside className="space-y-5">
            <div className="rounded-[2rem] border border-teal-300/20 bg-teal-300/10 p-6 shadow-glow">
              <CalendarDays className="h-8 w-8 text-teal-200" />
              <h3 className="mt-4 text-2xl font-bold text-white">Agenda una conversación</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Coordina una sesión con el equipo para revisar el prototipo, resolver dudas técnicas o explorar escenarios de implementación.
              </p>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-teal-100"
              >
                Abrir agenda
                <Clock3 className="h-4 w-4" />
              </a>
            </div>

            {meetingSlots.map((slot) => (
              <article key={slot.label} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 text-teal-300" />
                  <div>
                    <h4 className="font-bold text-white">{slot.label}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{slot.detail}</p>
                  </div>
                </div>
              </article>
            ))}

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-teal-300" />
                <div>
                  <h4 className="font-bold text-white">Contacto del proyecto</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-400">qair.alertas@unal.edu.co</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Modal open={Boolean(result)} title="Comentario recibido" onClose={() => setResult(null)}>
        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-2xl bg-teal-300/10 p-4 text-teal-100">
            <SmilePlus className="h-6 w-6" />
            <p className="font-semibold">Gracias por aportar a QAIR. Tu retroalimentación ayuda a mejorar la solución.</p>
          </div>
          <p className="text-sm leading-6">
            Modo de registro: <span className="font-bold text-white">{result?.mode === 'api' ? 'API conectada' : 'demo local'}</span>. En producción, el comentario se enviaría a un servicio seguro que almacena la información en DynamoDB.
          </p>
          <p className="flex items-center gap-2 text-sm text-slate-400">
            <Heart className="h-4 w-4 text-rose-300" />
            Gracias por ayudarnos a convertir una alerta técnica en una acción ciudadana útil.
          </p>
        </div>
      </Modal>
    </section>
  );
}
