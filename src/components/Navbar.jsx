import { Activity, CalendarDays, FileText, Leaf, Users } from 'lucide-react';

const navItems = [
  { label: 'Equipo', href: '#equipo', icon: Users },
  { label: 'Solución', href: '#solucion', icon: Activity },
  { label: 'Documentos', href: '#recursos', icon: FileText },
  { label: 'ODS', href: '#sostenibilidad', icon: Leaf },
  { label: 'Contacto', href: '#contacto', icon: CalendarDays },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <a href="#inicio" className="focus-ring flex items-center gap-3 rounded-2xl">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-400 font-black text-slate-950 shadow-glow">Q</span>
          <span>
            <span className="block text-lg font-black tracking-tight text-white">QAIR</span>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-slate-400 sm:block">Ideam Alertas</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1 lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4 text-teal-300" />
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contacto"
          className="focus-ring rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 shadow-soft transition hover:-translate-y-0.5 hover:bg-teal-100"
        >
          Agendar demo
        </a>
      </nav>
    </header>
  );
}
