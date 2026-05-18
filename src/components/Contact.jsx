import { useState } from 'react';

const contactMetadata = [
  { label: 'Location', value: 'Bhubaneswar, Odisha, India' },
  { label: 'Phone', value: '+91 8260552253' },
  { label: 'Email', value: 'tarunkumar22536371@gmail.com' },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('Message ready to send! Please wire this form to your preferred backend.');
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
      <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-700/60 bg-slate-900/85 p-6 shadow-neon backdrop-blur-xl sm:p-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
            placeholder="Tarun Kumar"
            className="mt-3 w-full rounded-2xl border border-slate-700/70 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-2 focus:ring-cyan-400/20"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="tarun@example.com"
            className="mt-3 w-full rounded-2xl border border-slate-700/70 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:bg-slate-900 focus:ring-2 focus:ring-emerald-400/20"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formState.message}
            onChange={handleChange}
            placeholder="Describe your project or collaboration opportunity"
            className="mt-3 w-full rounded-3xl border border-slate-700/70 bg-slate-950/80 px-4 py-4 text-slate-100 outline-none transition focus:border-emerald-400 focus:bg-slate-900 focus:ring-2 focus:ring-emerald-400/20"
            required
          />
        </div>
        <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
          Send Message
        </button>
      </form>
      <aside className="space-y-6 rounded-3xl border border-slate-700/60 bg-slate-900/90 p-6 shadow-neon backdrop-blur-xl sm:p-8">
        <div className="rounded-3xl border border-slate-700/60 bg-slate-950/70 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Direct Metadata</p>
          <h3 className="mt-4 text-2xl font-semibold text-slate-100">Contact Directory</h3>
          <p className="mt-3 text-slate-400 leading-7">Reach out for enterprise systems, NLP research, or collaboration on production-grade machine learning pipelines.</p>
        </div>
        <div className="space-y-4">
          {contactMetadata.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-700/60 bg-slate-950/85 p-4 text-sm text-slate-200">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{item.label}</p>
              <p className="mt-2 text-base font-medium text-slate-100">{item.value}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
