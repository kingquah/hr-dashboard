export const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Employees", href: "/employees" },
];

export type Employee = {
  name: string;
  department: string;
  role: string;
  status: "Active" | "On Leave" | "Probation";
  latestIntegrityScore: string;
  latestKpiScore: string;
  leaveBalance: string;
  integrityHistory: { month: string; integrityScore: string; supervisorRemark: string }[];
  kpiHistory: { month: string; kpiScore: string; notes: string }[];
  leaveHistory: { startDate: string; endDate: string; leaveType: string; days: number; remainingBalance: string }[];
};

export const employees: Employee[] = [
  {
    name: "Ava Patel",
    department: "Engineering",
    role: "Frontend Engineer",
    status: "Active",
    latestIntegrityScore: "88%",
    latestKpiScore: "91%",
    leaveBalance: "12 days",
    integrityHistory: [{ month: "March", integrityScore: "88%", supervisorRemark: "Dependable ownership." }],
    kpiHistory: [{ month: "March", kpiScore: "91%", notes: "Delivered sprint goals." }],
    leaveHistory: [{ startDate: "2026-04-12", endDate: "2026-04-15", leaveType: "Annual", days: 4, remainingBalance: "12 days" }],
  },
  {
    name: "Noah Bennett",
    department: "HR",
    role: "HR Specialist",
    status: "On Leave",
    latestIntegrityScore: "81%",
    latestKpiScore: "84%",
    leaveBalance: "10 days",
    integrityHistory: [{ month: "March", integrityScore: "81%", supervisorRemark: "Consistent support." }],
    kpiHistory: [{ month: "March", kpiScore: "84%", notes: "Improved response time." }],
    leaveHistory: [{ startDate: "2026-05-01", endDate: "2026-05-03", leaveType: "Sick", days: 3, remainingBalance: "10 days" }],
  },
];
