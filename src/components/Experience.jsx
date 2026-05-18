const timelineItems = [
  {
    title: 'B.Tech in Computer Science & Engineering (Pursuing)',
    subtitle: 'Nalanda Institute of Technology',
    description: 'Focus on Compiler Design, Advanced Systems Engineering, and algorithmic complexity matrices.',
    metrics: '12th: 75% | 10th: 67%',
    accent: 'cyan',
  },
  {
    title: 'Published NLP Researcher',
    subtitle: 'IEEE-affiliated platforms',
    description: 'Co-authored and deployed production classification research analyzing Fake News propagation vectors inside the Odia language using advanced Transformer modeling architectures.',
    metrics: 'Research in regional language classification and model deployment.',
    accent: 'emerald',
  },
  {
    title: 'Professional Engineering Credentials',
    subtitle: 'Full Stack Java / Data Science Certifications',
    description: 'Certifications in Full Stack Java Development (Spring Framework & J2EE) and Data Science Fundamentals / Python Programming.',
    metrics: 'Applied enterprise engineering workflow and ML tooling practices.',
    accent: 'cyan',
  },
];

export default function Experience() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950/90 p-6 shadow-neon backdrop-blur-xl sm:p-8">
      <div className="absolute left-5 top-8 bottom-8 hidden w-px bg-slate-700/70 md:block" />
      <div className="space-y-8">
        {timelineItems.map((item) => {
          const accentStyle = {
            backgroundColor: item.accent === 'emerald' ? '#34d399' : '#38bdf8',
          };
          return (
            <div key={item.title} className="relative md:pl-12">
              <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700/60 bg-slate-900/95 shadow-neon md:left-[-2.5rem]">
                <span style={accentStyle} className="h-3 w-3 rounded-full" />
              </div>
              <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-inner shadow-slate-950/20 backdrop-blur-md">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
                  <span className="rounded-full border border-slate-700/60 bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                    {item.subtitle}
                  </span>
                </div>
                <p className="mt-4 text-slate-400 leading-7">{item.description}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-500">{item.metrics}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
