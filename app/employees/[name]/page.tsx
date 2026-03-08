import Link from "next/link";
import { notFound } from "next/navigation";
import { DashboardShell } from "../../components/dashboard-shell";
import { employees } from "../../components/hr-data";
import { TopHeader } from "../../components/top-header";

const statusStyles = {
  Active: "bg-emerald-100 text-emerald-700",
  "On Leave": "bg-amber-100 text-amber-700",
  Probation: "bg-violet-100 text-violet-700",
};

export function generateStaticParams() {
  return employees.map((employee) => ({
    name: encodeURIComponent(employee.name),
  }));
}

export default async function EmployeeDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  const employee = employees.find((item) => item.name === decodedName);

  if (!employee) {
    notFound();
  }

  return (
    <DashboardShell>
      <TopHeader
        title={employee.name}
        subtitle="Employee integrity, KPI, and leave history overview"
      />

      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Profile Summary</p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-900">{employee.name}</h2>
            <p className="mt-1 text-sm text-slate-600">
              {employee.role} · {employee.department}
            </p>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[employee.status]}`}
          >
            {employee.status}
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Latest Integrity Score</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">{employee.latestIntegrityScore}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Latest KPI Score</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">{employee.latestKpiScore}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Leave Balance</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">{employee.leaveBalance}</p>
          </div>
        </div>

        <Link
          href="/employees"
          className="mt-5 inline-block text-sm font-medium text-slate-600 underline-offset-2 hover:text-slate-900 hover:underline"
        >
          ← Back to Employees
        </Link>
      </section>

      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-lg font-semibold text-slate-900">Monthly Integrity Journal</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-y border-slate-200 bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Month</th>
                <th className="px-4 py-3 font-medium">Integrity Score</th>
                <th className="px-4 py-3 font-medium">Supervisor Remark</th>
              </tr>
            </thead>
            <tbody>
              {employee.integrityHistory.map((entry) => (
                <tr key={entry.month} className="border-b border-slate-100">
                  <td className="px-4 py-3 text-slate-700">{entry.month}</td>
                  <td className="px-4 py-3 text-slate-700">{entry.integrityScore}</td>
                  <td className="px-4 py-3 text-slate-700">{entry.supervisorRemark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-lg font-semibold text-slate-900">KPI History</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-y border-slate-200 bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Month</th>
                <th className="px-4 py-3 font-medium">KPI Score</th>
                <th className="px-4 py-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {employee.kpiHistory.map((entry) => (
                <tr key={entry.month} className="border-b border-slate-100">
                  <td className="px-4 py-3 text-slate-700">{entry.month}</td>
                  <td className="px-4 py-3 text-slate-700">{entry.kpiScore}</td>
                  <td className="px-4 py-3 text-slate-700">{entry.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-lg font-semibold text-slate-900">Leave History</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-y border-slate-200 bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Start Date</th>
                <th className="px-4 py-3 font-medium">End Date</th>
                <th className="px-4 py-3 font-medium">Leave Type</th>
                <th className="px-4 py-3 font-medium">Days</th>
                <th className="px-4 py-3 font-medium">Remaining Balance</th>
              </tr>
            </thead>
            <tbody>
              {employee.leaveHistory.map((entry) => (
                <tr key={`${entry.startDate}-${entry.endDate}`} className="border-b border-slate-100">
                  <td className="px-4 py-3 text-slate-700">{entry.startDate}</td>
                  <td className="px-4 py-3 text-slate-700">{entry.endDate}</td>
                  <td className="px-4 py-3 text-slate-700">{entry.leaveType}</td>
                  <td className="px-4 py-3 text-slate-700">{entry.days}</td>
                  <td className="px-4 py-3 text-slate-700">{entry.remainingBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardShell>
  );
}
