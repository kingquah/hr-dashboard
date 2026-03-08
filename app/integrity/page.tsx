"use client";

import { useMemo, useState } from "react";
import { DashboardShell } from "../components/dashboard-shell";
import {
  employees,
  integrityJournal,
  integrityMonths,
  integritySections,
  type IntegrityJournalEntry,
} from "../components/hr-data";
import { TopHeader } from "../components/top-header";

const totalChecklistItems = integritySections.reduce(
  (sum, section) => sum + section.items.length,
  0,
);

export default function IntegrityPage() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]?.name ?? "");
  const [selectedMonth, setSelectedMonth] = useState(integrityMonths[0] ?? "");
  const [supervisorRemark, setSupervisorRemark] = useState("");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [journalEntries, setJournalEntries] =
    useState<IntegrityJournalEntry[]>(integrityJournal);

  const checkedCount = useMemo(
    () => Object.values(checkedItems).filter(Boolean).length,
    [checkedItems],
  );

  const scorePercentage = useMemo(
    () => Math.round((checkedCount / totalChecklistItems) * 100),
    [checkedCount],
  );

  function toggleChecklistItem(item: string) {
    setCheckedItems((previous) => ({
      ...previous,
      [item]: !previous[item],
    }));
  }

  function submitIntegrityChecklist() {
    const newEntry: IntegrityJournalEntry = {
      employee: selectedEmployee,
      month: selectedMonth,
      score: `${scorePercentage}%`,
      supervisorRemark: supervisorRemark.trim() || "No remark provided.",
    };

    setJournalEntries((previous) => [newEntry, ...previous]);
    setSupervisorRemark("");
    setCheckedItems({});
  }

  return (
    <DashboardShell>
      <TopHeader
        title="Integrity"
        subtitle="Monthly Professional Integrity Checklist submissions"
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Employee
            <select
              value={selectedEmployee}
              onChange={(event) => setSelectedEmployee(event.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-700"
            >
              {employees.map((employee) => (
                <option key={employee.name} value={employee.name}>
                  {employee.name}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Month
            <select
              value={selectedMonth}
              onChange={(event) => setSelectedMonth(event.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-700"
            >
              {integrityMonths.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-700">Live Integrity Score</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <p className="text-xs text-slate-500">Checked</p>
              <p className="text-xl font-semibold text-slate-900">{checkedCount}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <p className="text-xs text-slate-500">Total Items</p>
              <p className="text-xl font-semibold text-slate-900">{totalChecklistItems}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <p className="text-xs text-slate-500">Percentage</p>
              <p className="text-xl font-semibold text-slate-900">{scorePercentage}%</p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {integritySections.map((section) => (
            <article key={section.category} className="rounded-xl border border-slate-200 p-4">
              <h2 className="mb-3 text-base font-semibold text-slate-900">{section.category}</h2>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <label className="flex items-start gap-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={Boolean(checkedItems[item])}
                        onChange={() => toggleChecklistItem(item)}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300"
                      />
                      <span>{item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <label className="mt-6 block text-sm font-medium text-slate-700">
          Supervisor Remark
          <textarea
            value={supervisorRemark}
            onChange={(event) => setSupervisorRemark(event.target.value)}
            rows={4}
            placeholder="Add supervisor remark..."
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-700"
          />
        </label>

        <button
          type="button"
          onClick={submitIntegrityChecklist}
          className="mt-4 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
        >
          Submit
        </button>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-semibold text-slate-900">Integrity Journal</h2>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-y border-slate-200 bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Employee</th>
                <th className="px-4 py-3 font-medium">Month</th>
                <th className="px-4 py-3 font-medium">Integrity Score</th>
                <th className="px-4 py-3 font-medium">Supervisor Remark</th>
              </tr>
            </thead>
            <tbody>
              {journalEntries.map((entry, index) => (
                <tr
                  key={`${entry.employee}-${entry.month}-${index}`}
                  className="border-b border-slate-100"
                >
                  <td className="px-4 py-3 font-medium text-slate-900">{entry.employee}</td>
                  <td className="px-4 py-3 text-slate-700">{entry.month}</td>
                  <td className="px-4 py-3 text-slate-700">{entry.score}</td>
                  <td className="px-4 py-3 text-slate-700">{entry.supervisorRemark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardShell>
  );
}
