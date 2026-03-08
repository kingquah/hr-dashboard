import { navItems } from "@/data/dashboard-data";

export default function Sidebar() {
  return (
    <aside className="w-full border-b border-slate-200 bg-white px-6 py-5 md:w-64 md:border-r md:border-b-0">
      <div className="mb-6 flex items-center justify-between md:block">
        <p className="text-lg font-semibold text-slate-900">HR Command</p>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 md:mt-2 md:inline-block">
          Internal
        </span>
      </div>
      <nav>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-1">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={item === "Dashboard" ? "/" : `/${item.toLowerCase()}`}
                className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  item === "Dashboard"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
