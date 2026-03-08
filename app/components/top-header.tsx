export function TopHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="mb-6 flex items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      <button className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
          HR
        </div>
        <span className="hidden text-sm font-medium text-slate-700 sm:block">
          Hannah Reed
        </span>
      </button>
    </header>
  );
}
