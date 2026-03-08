const navItems = [
  "Dashboard",
  "Employees",
  "Leave",
  "KPI",
  "Performance",
];

const summaryCards = [
  {
    title: "Total Employees",
    value: "248",
    change: "+6 this month",
    accent: "bg-blue-500",
  },
  {
    title: "Pending Leave Requests",
    value: "14",
    change: "3 urgent approvals",
    accent: "bg-amber-500",
  },
  {
    title: "KPI Completion Rate",
    value: "82%",
    change: "+4% vs last quarter",
    accent: "bg-emerald-500",
  },
  {
    title: "Performance Reviews Due",
    value: "21",
    change: "8 due this week",
    accent: "bg-violet-500",
  },
];

const recentActivity = [
  {
    title: "Leave request submitted",
    detail: "Ava Patel requested annual leave for Apr 12 - Apr 15.",
    time: "10 min ago",
  },
  {
    title: "New employee onboarded",
    detail: "Mason Rivera joined the Design team.",
    time: "45 min ago",
  },
  {
    title: "Performance review completed",
    detail: "Q1 review finalized for Sophia Kim.",
    time: "1 hr ago",
  },
  {
    title: "KPI update posted",
    detail: "Sales department reached 88% KPI completion.",
    time: "3 hrs ago",
  },
];

const leaveSummary = [
  { label: "Approved", count: 32, color: "bg-emerald-500" },
  { label: "Pending", count: 14, color: "bg-amber-500" },
  { label: "Rejected", count: 5, color: "bg-rose-500" },
  { label: "Cancelled", count: 3, color: "bg-slate-400" },
];

function Sidebar() {
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
                href="#"
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

function TopHeader() {
  return (
    <header className="mb-6 flex items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500">HR overview for today</p>
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

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row md:py-6">
        <Sidebar />

        <main className="flex-1 px-4 py-6 sm:px-6 md:px-8">
          <TopHeader />

          <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className={`mb-4 h-1.5 w-12 rounded-full ${card.accent}`} />
                <h2 className="text-sm font-medium text-slate-500">{card.title}</h2>
                <p className="mt-3 text-3xl font-semibold text-slate-900">{card.value}</p>
                <p className="mt-2 text-sm text-slate-500">{card.change}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-4 lg:grid-cols-5">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-3">
              <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
              <ul className="mt-4 space-y-4">
                {recentActivity.map((activity) => (
                  <li
                    key={`${activity.title}-${activity.time}`}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-medium text-slate-800">{activity.title}</p>
                      <span className="text-xs text-slate-500">{activity.time}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{activity.detail}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
              <h2 className="text-lg font-semibold text-slate-900">Leave Status Summary</h2>
              <ul className="mt-4 space-y-3">
                {leaveSummary.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                      <span className="text-sm text-slate-700">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">{item.count}</span>
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
