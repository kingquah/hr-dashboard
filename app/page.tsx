import Sidebar from "@/components/sidebar";
import TopHeader from "@/components/top-header";
import {
  summaryCards,
  recentActivity,
  leaveSummary,
} from "@/data/dashboard-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row md:py-6">
        <Sidebar />

        <main className="flex-1 px-4 py-6 sm:px-6 md:px-8">
          <TopHeader title="Dashboard" subtitle="HR overview for today" />

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
