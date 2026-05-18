const projects = [
  {
    title: 'Enterprise Inventory & E-Commerce Management System',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'JWT'],
    description: 'Engineered a Full Stack modular application governing enterprise product lifecycles and vendor dependencies. Configured stateless JWT validation mechanisms via Spring Security for granular RBAC validation.',
  },
  {
    title: 'Secure Banking & Financial Transaction Portal',
    tech: ['Java', 'REST Web Services', 'Spring Data JPA', 'ACID Architecture'],
    description: 'Built a distributed transactional pipeline with strict ACID contract execution. Implemented programmatic ledger reconciliation, algorithmic fund-transfer validation mechanisms, and localized global exception handling filters.',
  },
  {
    title: 'Hate Speech Recognition Using SBERT Engine',
    tech: ['Python', 'Deep Learning', 'SBERT Models', 'NLP Pipelines'],
    description: 'Developing localized linguistic deep-learning models trained to flag toxic context anomalies across high-variance social text environments, leveraging Sentence-BERT token-embedding maps.',
  },
  {
    title: 'BERT-based Fake Odia News Detection Platform',
    tech: ['BERT Transformers', 'NLP', 'Python Acceleration', 'Regional Language Sets'],
    description: 'Architected a custom regional Transformer framework designed to classify linguistic disinformation arrays. Fine-tuned localized pre-trained embeddings to drastically minimize regional semantic classification noise.',
  },
];

export default function Projects() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {projects.map((project, index) => (
        <article key={project.title} className="group overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950/90 p-6 shadow-neon transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-slate-900/90">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">Project {index + 1}</span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-700/60 bg-slate-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
          <p className="mt-4 text-slate-400 leading-7">{project.description}</p>
        </article>
      ))}
    </div>
  );
}
