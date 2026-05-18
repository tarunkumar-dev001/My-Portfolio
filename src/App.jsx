import { Suspense } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../WhatsApp Image 2026-05-16 at 9.32.14 AM.jpeg';
import HeroScene from './components/HeroScene.jsx';
import Navbar from './components/Navbar.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import LoadingFallback from './components/LoadingFallback.jsx';

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-30" />
      <div className="absolute inset-0">
        <Suspense fallback={<LoadingFallback />}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <Navbar />
        <main className="mt-8 flex-1">
          <section id="home" className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-950/75 px-6 py-10 shadow-neon backdrop-blur-xl sm:px-10 lg:px-12 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr] items-center">
              <div className="max-w-3xl">
                <motion.p initial="hidden" animate="visible" variants={sectionReveal} transition={{ duration: 0.6 }} className="mb-4 text-sm uppercase tracking-[0.36em] text-cyan-300/80">
                  TARUN.DEV //
                </motion.p>
                <motion.h1 initial="hidden" animate="visible" variants={sectionReveal} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl xl:text-6xl">
                  Tarun Kumar Naik
                </motion.h1>
                <motion.p initial="hidden" animate="visible" variants={sectionReveal} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Full Stack Engineer & ML Researcher specialized in building high-performance enterprise applications with Java & Spring Boot alongside advanced Deep Learning classification systems for regional Indian languages.
                </motion.p>
                <motion.div initial="hidden" animate="visible" variants={sectionReveal} transition={{ duration: 0.7, delay: 0.3 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a href="#projects" className="inline-flex min-w-[180px] items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-200 shadow-neon transition hover:border-cyan-400 hover:bg-cyan-500/15 hover:text-cyan-50">
                    View Architecture
                  </a>
                  <a href="#contact" className="inline-flex min-w-[180px] items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-200 shadow-neon transition hover:border-emerald-400 hover:bg-emerald-500/15 hover:text-emerald-50">
                    Get In Touch
                  </a>
                </motion.div>
              </div>
              <motion.div initial="hidden" animate="visible" variants={sectionReveal} transition={{ duration: 0.7, delay: 0.25 }} className="relative mx-auto w-full max-w-sm">
                <div className="absolute inset-0 rounded-[2.5rem] bg-cyan-500/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-700/60 bg-slate-900/90 p-1 shadow-neon">
                  <img src={profilePic} alt="Tarun Kumar Naik profile" className="h-[360px] w-full rounded-[2rem] object-cover" />
                </div>
                <div className="mt-6 rounded-3xl border border-slate-700/60 bg-slate-950/85 p-5 text-slate-300 shadow-inner backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Profile Snapshot</p>
                  <p className="mt-3 text-base leading-7 text-slate-200">
                    A creative engineer bridging enterprise backend systems and machine learning research with polished design, performance, and real-world delivery.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
          <motion.section id="skills" initial="hidden" animate="visible" variants={sectionReveal} transition={{ duration: 0.8, delay: 0.1 }} className="mt-14 rounded-3xl border border-slate-700/50 bg-slate-950/80 p-6 shadow-neon backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-cyan-300/80">Technical Competencies</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Crafting system-level excellence</h2>
              </div>
              <p className="max-w-xl text-slate-400 sm:text-base">A curated technology stack reflecting enterprise backend architecture, data engineering, NLP research, and developer tooling for modern software delivery.</p>
            </div>
            <Skills />
          </motion.section>
          <motion.section id="projects" initial="hidden" animate="visible" variants={sectionReveal} transition={{ duration: 0.8, delay: 0.2 }} className="mt-14 rounded-3xl border border-slate-700/50 bg-slate-950/80 p-6 shadow-neon backdrop-blur-xl sm:p-8">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.36em] text-emerald-300/75">Projects</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Interactive showcases of impact</h2>
            </div>
            <Projects />
          </motion.section>
          <motion.section id="experience" initial="hidden" animate="visible" variants={sectionReveal} transition={{ duration: 0.8, delay: 0.3 }} className="mt-14 rounded-3xl border border-slate-700/50 bg-slate-950/80 p-6 shadow-neon backdrop-blur-xl sm:p-8">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.36em] text-cyan-300/80">Experience & Education</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Illuminated timeline</h2>
            </div>
            <Experience />
          </motion.section>
          <motion.section id="contact" initial="hidden" animate="visible" variants={sectionReveal} transition={{ duration: 0.8, delay: 0.4 }} className="mt-14 rounded-3xl border border-slate-700/50 bg-slate-950/80 p-6 shadow-neon backdrop-blur-xl sm:p-8">
            <div className="mb-8 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-emerald-300/75">Contact Gateway</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Let’s build the next system together</h2>
              </div>
            </div>
            <Contact />
          </motion.section>
        </main>
        <footer className="mt-12 border-t border-slate-700/40 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Tarun Kumar Naik. Crafted for enterprise systems, NLP pipelines, and modern AI-enabled engineering.
        </footer>
      </div>
    </div>
  );
}

export default App;
