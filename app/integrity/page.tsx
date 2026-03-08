const integritySections = [
  {
    category: "Responsiveness",
    items: [
      "Replied to all official matters",
      "No silence that blocked work or decisions",
      "Returned or acknowledged updates promptly",
    ],
  },
  {
    category: "Punctuality & Preparedness",
    items: [
      "Arrived on time or early for meetings",
      "Informed early if delay was unavoidable",
      "Prepared for meetings and agendas",
      "Brought required updates / facts",
      "Contributed in discussions",
    ],
  },
  {
    category: "Work Delivery",
    items: [
      "Tasks delivered on or before deadline",
      "Delays communicated in advance",
      "Quality above acceptable range",
    ],
  },
  {
    category: "Weekly Improvements",
    items: [
      "No repeated mistakes after feedback",
      "No reminders needed for basic duties",
      "Did not slow others down",
    ],
  },
  {
    category: "Professional Maturity",
    items: [
      "Did not wait to be told what to do",
      "Maintained good documentation",
      "Showed good prioritisation",
      "Not defensive when corrected",
    ],
  },
];

const journalEntries = [
  {
    employee: "Ava Patel",
    month: "March 2026",
    score: "88%",
    remark: "Strong ownership and timely communication.",
  },
  {
    employee: "Noah Bennett",
    month: "March 2026",
    score: "81%",
    remark: "Improved after feedback on documentation.",
  },
];

export default function IntegrityPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Integrity Journal</h1>
          <p className="text-sm text-slate-500">
            Monthly professional integrity checklist and supervisor remarks.
          </p>
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Employee</label>
              <select className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm">
                <option>Ava Patel</option>
                <option>Noah Bennett</option>
                <option>Sophia Kim</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Month</label>
              <select className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm">
                <option>March 2026</option>
                <option>February 2026</option>
                <option>January 2026</option>
              </select>
            </div>
          </div>

          <div className="mt-6 space-y-6">
            {integritySections.map((section) => (
              <div key={section.category}>
                <h2 className="mb-3 text-lg font-semibold text-slate-900">{section.category}</h2>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <label
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 p-3 text-sm text-slate-700"
                    >
                      <input type="checkbox" className="mt-1" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Supervisor Remark
            </label>
            <textarea
              className="min-h-[120px] w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"
              placeholder="Add supervisor remarks here..."
            />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-slate-600">
              Integrity Score will be calculated in the next version
            </div>
            <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">
              Submit
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Integrity Journal</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-4 py-3">Employee</th>
                  <th className="px-4 py-3">Month</th>
                  <th className="px-4 py-3">Integrity Score</th>
                  <th className="px-4 py-3">Supervisor Remark</th>
                </tr>
              </thead>
              <tbody>
                {journalEntries.map((entry) => (
                  <tr key={`${entry.employee}-${entry.month}`} className="border-b border-slate-100">
                    <td className="px-4 py-3">{entry.employee}</td>
                    <td className="px-4 py-3">{entry.month}</td>
                    <td className="px-4 py-3">{entry.score}</td>
                    <td className="px-4 py-3">{entry.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
