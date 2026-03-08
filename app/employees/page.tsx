"use client";

import { useMemo, useState } from "react";
import { DashboardShell } from "../components/dashboard-shell";
import { employees } from "../components/hr-data";
import { TopHeader } from "../components/top-header";

const statusStyles = {
  Active: "bg-emerald-100 text-emerald-700",
  "On Leave": "bg-amber-100 text-amber-700",
  Probation: "bg-violet-100 text-violet-700",
};

export default function EmployeesPage() {
  const [query, setQuery] = useState("");

  const filteredEmployees = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return employees;
    }

    return employees.filter((employee) =>
      [
        employee.name,
        employee.department,
        employee.role,
        employee.kpiScore,
        employee.leaveBalance,
        employee.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [query]);

  return (
    <DashboardShell>
      <TopHeader
        title="Employees"
        subtitle="View and track employee status, KPI scores, and leave balances"
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Employee Directory</h2>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search employees..."
            className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm text-slate-700 outline-none ring-slate-200 transition focus:border-slate-400 focus:ring-2 sm:max-w-xs"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-y border-slate-200 bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Department</th>
                <th className="px-4 py-3 font-medium">Role</th>
                <th className="px-4 py-3 font-medium">KPI Score</th>
                <th className="px-4 py-3 font-medium">Leave Balance</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.name} className="border-b border-slate-100 text-slate-700">
                  <td className="px-4 py-3 font-medium text-slate-900">{employee.name}</td>
                  <td className="px-4 py-3">{employee.department}</td>
                  <td className="px-4 py-3">{employee.role}</td>
                  <td className="px-4 py-3">{employee.kpiScore}</td>
                  <td className="px-4 py-3">{employee.leaveBalance}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[employee.status]}`}
                    >
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredEmployees.length === 0 && (
          <p className="mt-4 text-sm text-slate-500">
            No employees matched your search. Try a different keyword.
          </p>
        )}
      </section>
    </DashboardShell>
  );
}
