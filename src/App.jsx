import { ContactInteractionSection } from './components/ContactInteractionSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ResourcesDocumentsSection } from './components/ResourcesDocumentsSection';
import { SolutionPrototypeSection } from './components/SolutionPrototypeSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { TeamSection } from './components/TeamSection';

function App() {
  return (
    <div className="min-h-screen bg-qair-night font-sans text-slate-100 antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <TeamSection />
        <SolutionPrototypeSection />
        <ResourcesDocumentsSection />
        <SustainabilitySection />
        <ContactInteractionSection />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 px-4 py-10 text-center text-sm text-slate-400">
        <p className="font-medium text-slate-200">QAIR Alertas - Datos ambientales convertidos en acción</p>
        <p className="mt-2">Universidad Nacional de Colombia · Facultad de Ingeniería · Taller de Proyectos Interdisciplinarios 2026-1</p>
      </footer>
    </div>
  );
}

export default App;
