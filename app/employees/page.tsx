export default function EmployeesPage() {
  const employees = [
    {
      name: "Ava Patel",
      department: "Engineering",
      role: "Frontend Engineer",
      integrity: "88%",
      kpi: "91%",
      leave: "12 days",
      status: "Active",
    },
    {
      name: "Noah Bennett",
      department: "HR",
      role: "HR Specialist",
      integrity: "81%",
      kpi: "84%",
      leave: "10 days",
      status: "On Leave",
    },
    {
      name: "Sophia Kim",
      department: "Sales",
      role: "Account Executive",
      integrity: "90%",
      kpi: "93%",
      leave: "7 days",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-2xl font-semibold text-slate-900">Employees</h1>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-slate-500">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Department</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Integrity</th>
                <th className="px-4 py-3">KPI</th>
                <th className="px-4 py-3">Leave Balance</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp) => (
                <tr key={emp.name} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {emp.name}
                  </td>
                  <td className="px-4 py-3">{emp.department}</td>
                  <td className="px-4 py-3">{emp.role}</td>
                  <td className="px-4 py-3">{emp.integrity}</td>
                  <td className="px-4 py-3">{emp.kpi}</td>
                  <td className="px-4 py-3">{emp.leave}</td>
                  <td className="px-4 py-3">{emp.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
