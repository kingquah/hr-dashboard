export const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Employees", href: "/employees" },
  { label: "Leave", href: "#" },
  { label: "KPI", href: "#" },
  { label: "Performance", href: "#" },

];

export const summaryCards = [
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

export const recentActivity = [
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

export const leaveSummary = [
  { label: "Approved", count: 32, color: "bg-emerald-500" },
  { label: "Pending", count: 14, color: "bg-amber-500" },
  { label: "Rejected", count: 5, color: "bg-rose-500" },
  { label: "Cancelled", count: 3, color: "bg-slate-400" },
];


export type Employee = {
  name: string;
  department: string;
  role: string;

};

export const employees: Employee[] = [
  {
    name: "Ava Patel",
    department: "Engineering",
    role: "Frontend Engineer",

  },
  {
    name: "Mason Rivera",
    department: "Design",
    role: "Product Designer",

  },
  {
    name: "Sophia Kim",
    department: "Sales",
    role: "Account Executive",

  },
  {
    name: "Noah Bennett",
    department: "HR",
    role: "HR Specialist",

  },
  {
    name: "Emma Thompson",
    department: "Marketing",
    role: "Campaign Manager",

  },
  {
    name: "Liam Foster",
    department: "Finance",
    role: "Financial Analyst",

  },
  {
    name: "Olivia Chen",
    department: "Operations",
    role: "Operations Lead",

  },
  {
    name: "Ethan Brooks",
    department: "Support",
    role: "Customer Support Rep",
