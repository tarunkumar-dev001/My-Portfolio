export default function LoadingFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-950/95 text-slate-300">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-700/60 bg-slate-900/90 px-8 py-6 shadow-neon backdrop-blur-xl">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-400/30 border-t-cyan-300" />
        <p className="text-sm tracking-wide text-slate-200">Loading neural canvas…</p>
      </div>
    </div>
  );
}
