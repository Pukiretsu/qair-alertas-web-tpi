import { X } from 'lucide-react';

export function Modal({ open, title, children, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <button
        type="button"
        aria-label="Cerrar modal"
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <section className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-glow">
        <div className="flex items-start justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300">QAIR</p>
            <h3 className="mt-1 text-2xl font-bold text-white">{title}</h3>
          </div>
          <button type="button" className="focus-ring rounded-full p-2 text-slate-300 hover:bg-white/10 hover:text-white" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-6 py-6 text-slate-300">{children}</div>
      </section>
    </div>
  );
}
