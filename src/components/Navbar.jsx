import { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 mb-6 flex items-center justify-between rounded-3xl border border-slate-700/60 bg-slate-950/80 px-4 py-4 shadow-neon backdrop-blur-xl sm:px-6">
      <a href="#home" className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/90">
        TARUN.DEV //
      </a>
      <nav className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-200">
            {item.name}
          </a>
        ))}
      </nav>
      <div className="hidden items-center gap-3 md:flex">
        <a href="https://github.com/Tarunkumar-dev001" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700/70 bg-slate-900/90 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-200">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com/in/tarun-kumar-naik-90b9122b7" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700/70 bg-slate-900/90 p-2 text-slate-300 transition hover:border-emerald-400 hover:text-emerald-200">
          <Linkedin size={18} />
        </a>
      </div>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/90 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-200 md:hidden"
        onClick={() => setOpen((current) => !current)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open ? (
        <div className="absolute inset-x-4 top-full mt-3 rounded-3xl border border-slate-700/60 bg-slate-950/95 p-4 shadow-neon backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900/80 hover:text-cyan-200">
                {item.name}
              </a>
            ))}
            <div className="mt-2 flex gap-3">
              <a href="https://github.com/Tarunkumar-dev001" target="_blank" rel="noreferrer" className="flex-1 rounded-2xl border border-slate-700/70 bg-slate-900/90 px-4 py-3 text-center text-slate-300 transition hover:border-cyan-400 hover:text-cyan-200">
                GitHub
              </a>
              <a href="https://linkedin.com/in/tarun-kumar-naik-90b9122b7" target="_blank" rel="noreferrer" className="flex-1 rounded-2xl border border-slate-700/70 bg-slate-900/90 px-4 py-3 text-center text-slate-300 transition hover:border-emerald-400 hover:text-emerald-200">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
