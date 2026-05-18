const skillCards = [
  {
    title: 'Primary Backend Ecosystem',
    skills: ['Java (J2EE)', 'Spring Boot', 'Hibernate Framework', 'Spring Data JPA', 'RESTful Architecture', 'MySQL Datastores'],
  },
  {
    title: 'Data Engineering & NLP',
    skills: ['Python Platform', 'NumPy & Pandas', 'Scikit-learn Execution', 'BERT Architecture', 'Sentence-BERT (SBERT)', 'Transformer Pipeline Tuning'],
  },
  {
    title: 'Toolchain & Core Controls',
    skills: ['Git / GitHub Engine', 'IntelliJ IDEA & Eclipse', 'VS Code Deployment', 'Postman API Assertions', 'Apache Maven Engine', 'HTML5, CSS3, JavaScript'],
  },
];

export default function Skills() {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-3">
      {skillCards.map((card) => (
        <div key={card.title} className="group rounded-3xl border border-slate-700/60 bg-slate-950/90 p-6 shadow-neon transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/90">
          <h3 className="text-xl font-semibold text-slate-100">{card.title}</h3>
          <div className="mt-5 space-y-3">
            {card.skills.map((skill) => (
              <p key={skill} className="rounded-2xl border border-slate-700/50 bg-slate-900/80 px-4 py-2 text-sm text-slate-300 transition group-hover:border-cyan-400/50">
                {skill}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
