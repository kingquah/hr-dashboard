export const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Employees", href: "/employees" },
  { label: "Leave", href: "#" },
  { label: "KPI", href: "#" },
  { label: "Performance", href: "#" },
  { label: "Integrity", href: "/integrity" },
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

export type EmployeeStatus = "Active" | "On Leave" | "Probation";

export type IntegrityHistoryEntry = {
  month: string;
  integrityScore: string;
  supervisorRemark: string;
};

export type KpiHistoryEntry = {
  month: string;
  kpiScore: string;
  notes: string;
};

export type LeaveHistoryEntry = {
  startDate: string;
  endDate: string;
  leaveType: string;
  days: string;
  remainingBalance: string;
};

export type Employee = {
  name: string;
  department: string;
  role: string;
  latestIntegrityScore: string;
  latestKpiScore: string;
  leaveBalance: string;
  status: EmployeeStatus;
  integrityHistory: IntegrityHistoryEntry[];
  kpiHistory: KpiHistoryEntry[];
  leaveHistory: LeaveHistoryEntry[];
};

export const employees: Employee[] = [
  {
    name: "Ava Patel",
    department: "Engineering",
    role: "Frontend Engineer",
    latestIntegrityScore: "92%",
    latestKpiScore: "91%",
    leaveBalance: "12 days",
    status: "Active",
    integrityHistory: [
      {
        month: "January 2026",
        integrityScore: "90%",
        supervisorRemark: "Strong response time and collaboration.",
      },
      {
        month: "February 2026",
        integrityScore: "91%",
        supervisorRemark: "Good follow-through and documentation.",
      },
      {
        month: "March 2026",
        integrityScore: "92%",
        supervisorRemark: "Consistent ownership and proactive updates.",
      },
    ],
    kpiHistory: [
      { month: "January 2026", kpiScore: "88%", notes: "Delivered sprint goals." },
      { month: "February 2026", kpiScore: "90%", notes: "Improved release quality." },
      { month: "March 2026", kpiScore: "91%", notes: "Exceeded UI delivery target." },
    ],
    leaveHistory: [
      {
        startDate: "2026-01-18",
        endDate: "2026-01-19",
        leaveType: "Sick Leave",
        days: "2",
        remainingBalance: "14 days",
      },
      {
        startDate: "2026-03-10",
        endDate: "2026-03-11",
        leaveType: "Annual Leave",
        days: "2",
        remainingBalance: "12 days",
      },
    ],
  },
  {
    name: "Mason Rivera",
    department: "Design",
    role: "Product Designer",
    latestIntegrityScore: "89%",
    latestKpiScore: "87%",
    leaveBalance: "9 days",
    status: "Active",
    integrityHistory: [
      {
        month: "January 2026",
        integrityScore: "86%",
        supervisorRemark: "Solid meeting punctuality.",
      },
      {
        month: "February 2026",
        integrityScore: "88%",
        supervisorRemark: "Communication quality improved.",
      },
      {
        month: "March 2026",
        integrityScore: "89%",
        supervisorRemark: "Reliable updates with stronger ownership.",
      },
    ],
    kpiHistory: [
      { month: "January 2026", kpiScore: "84%", notes: "Completed key wireframes." },
      { month: "February 2026", kpiScore: "86%", notes: "Shipped revised design system." },
      { month: "March 2026", kpiScore: "87%", notes: "Maintained design QA quality." },
    ],
    leaveHistory: [
      {
        startDate: "2026-02-14",
        endDate: "2026-02-14",
        leaveType: "Personal Leave",
        days: "1",
        remainingBalance: "10 days",
      },
      {
        startDate: "2026-03-22",
        endDate: "2026-03-23",
        leaveType: "Annual Leave",
        days: "2",
        remainingBalance: "9 days",
      },
    ],
  },
  {
    name: "Sophia Kim",
    department: "Sales",
    role: "Account Executive",
    latestIntegrityScore: "94%",
    latestKpiScore: "93%",
    leaveBalance: "7 days",
    status: "Active",
    integrityHistory: [
      {
        month: "January 2026",
        integrityScore: "91%",
        supervisorRemark: "Excellent responsiveness.",
      },
      {
        month: "February 2026",
        integrityScore: "93%",
        supervisorRemark: "Very reliable handoffs.",
      },
      {
        month: "March 2026",
        integrityScore: "94%",
        supervisorRemark: "Outstanding consistency across team requests.",
      },
    ],
    kpiHistory: [
      { month: "January 2026", kpiScore: "90%", notes: "Closed three strategic deals." },
      { month: "February 2026", kpiScore: "92%", notes: "Improved pipeline conversion." },
      { month: "March 2026", kpiScore: "93%", notes: "Exceeded revenue target." },
    ],
    leaveHistory: [
      {
        startDate: "2026-01-06",
        endDate: "2026-01-07",
        leaveType: "Annual Leave",
        days: "2",
        remainingBalance: "9 days",
      },
      {
        startDate: "2026-03-03",
        endDate: "2026-03-04",
        leaveType: "Family Leave",
        days: "2",
        remainingBalance: "7 days",
      },
    ],
  },
  {
    name: "Noah Bennett",
    department: "HR",
    role: "HR Specialist",
    latestIntegrityScore: "83%",
    latestKpiScore: "84%",
    leaveBalance: "10 days",
    status: "On Leave",
    integrityHistory: [
      {
        month: "January 2026",
        integrityScore: "79%",
        supervisorRemark: "Needs improvement in follow-up speed.",
      },
      {
        month: "February 2026",
        integrityScore: "81%",
        supervisorRemark: "Better ownership on recurring tasks.",
      },
      {
        month: "March 2026",
        integrityScore: "83%",
        supervisorRemark: "Improving consistency in updates.",
      },
    ],
    kpiHistory: [
      { month: "January 2026", kpiScore: "80%", notes: "Handled onboarding backlog." },
      { month: "February 2026", kpiScore: "82%", notes: "Improved response SLA." },
      { month: "March 2026", kpiScore: "84%", notes: "Completed policy refresh." },
    ],
    leaveHistory: [
      {
        startDate: "2026-03-25",
        endDate: "2026-03-29",
        leaveType: "Medical Leave",
        days: "5",
        remainingBalance: "10 days",
      },
    ],
  },
  {
    name: "Emma Thompson",
    department: "Marketing",
    role: "Campaign Manager",
    latestIntegrityScore: "90%",
    latestKpiScore: "89%",
    leaveBalance: "11 days",
    status: "Active",
    integrityHistory: [
      {
        month: "January 2026",
        integrityScore: "87%",
        supervisorRemark: "Good preparation for launches.",
      },
      {
        month: "February 2026",
        integrityScore: "89%",
        supervisorRemark: "Clearer progress reporting.",
      },
      {
        month: "March 2026",
        integrityScore: "90%",
        supervisorRemark: "Steady communication and accountability.",
      },
    ],
    kpiHistory: [
      { month: "January 2026", kpiScore: "85%", notes: "Campaign engagement up 8%." },
      { month: "February 2026", kpiScore: "88%", notes: "Improved lead quality." },
      { month: "March 2026", kpiScore: "89%", notes: "On-track quarterly outcomes." },
    ],
    leaveHistory: [
      {
        startDate: "2026-02-03",
        endDate: "2026-02-04",
        leaveType: "Annual Leave",
        days: "2",
        remainingBalance: "11 days",
      },
    ],
  },
  {
    name: "Liam Foster",
    department: "Finance",
    role: "Financial Analyst",
    latestIntegrityScore: "85%",
    latestKpiScore: "86%",
    leaveBalance: "8 days",
    status: "Probation",
    integrityHistory: [
      {
        month: "January 2026",
        integrityScore: "80%",
        supervisorRemark: "Needs faster response on urgent requests.",
      },
      {
        month: "February 2026",
        integrityScore: "83%",
        supervisorRemark: "Better punctuality and preparation.",
      },
      {
        month: "March 2026",
        integrityScore: "85%",
        supervisorRemark: "Notable improvement in initiative.",
      },
    ],
    kpiHistory: [
      { month: "January 2026", kpiScore: "81%", notes: "Completed month-end reports." },
      { month: "February 2026", kpiScore: "84%", notes: "Reduced reconciliation errors." },
      { month: "March 2026", kpiScore: "86%", notes: "Strong budget variance analysis." },
    ],
    leaveHistory: [
      {
        startDate: "2026-01-27",
        endDate: "2026-01-27",
        leaveType: "Personal Leave",
        days: "1",
        remainingBalance: "9 days",
      },
      {
        startDate: "2026-03-14",
        endDate: "2026-03-14",
        leaveType: "Sick Leave",
        days: "1",
        remainingBalance: "8 days",
      },
    ],
  },
  {
    name: "Olivia Chen",
    department: "Operations",
    role: "Operations Lead",
    latestIntegrityScore: "91%",
    latestKpiScore: "90%",
    leaveBalance: "13 days",
    status: "Active",
    integrityHistory: [
      {
        month: "January 2026",
        integrityScore: "88%",
        supervisorRemark: "Strong execution and communication.",
      },
      {
        month: "February 2026",
        integrityScore: "90%",
        supervisorRemark: "Good ownership across cross-team items.",
      },
      {
        month: "March 2026",
        integrityScore: "91%",
        supervisorRemark: "Reliable decision-making and prioritization.",
      },
    ],
    kpiHistory: [
      { month: "January 2026", kpiScore: "87%", notes: "Met process efficiency targets." },
      { month: "February 2026", kpiScore: "89%", notes: "Improved ticket turnaround." },
      { month: "March 2026", kpiScore: "90%", notes: "Exceeded SLA compliance target." },
    ],
    leaveHistory: [
      {
        startDate: "2026-02-20",
        endDate: "2026-02-21",
        leaveType: "Annual Leave",
        days: "2",
        remainingBalance: "13 days",
      },
    ],
  },
  {
    name: "Ethan Brooks",
    department: "Support",
    role: "Customer Support Rep",
    latestIntegrityScore: "84%",
    latestKpiScore: "82%",
    leaveBalance: "6 days",
    status: "On Leave",
    integrityHistory: [
      {
        month: "January 2026",
        integrityScore: "80%",
        supervisorRemark: "Needs stronger punctuality in handovers.",
      },
      {
        month: "February 2026",
        integrityScore: "82%",
        supervisorRemark: "Improved response consistency.",
      },
      {
        month: "March 2026",
        integrityScore: "84%",
        supervisorRemark: "More proactive communication this month.",
      },
    ],
    kpiHistory: [
      { month: "January 2026", kpiScore: "78%", notes: "Resolved queue backlog." },
      { month: "February 2026", kpiScore: "80%", notes: "Reduced re-opened tickets." },
      { month: "March 2026", kpiScore: "82%", notes: "Improved CSAT trend." },
    ],
    leaveHistory: [
      {
        startDate: "2026-03-18",
        endDate: "2026-03-21",
        leaveType: "Annual Leave",
        days: "4",
        remainingBalance: "6 days",
      },
    ],
  },
];

export const integrityMonths = [
  "January 2026",
  "February 2026",
  "March 2026",
  "April 2026",
  "May 2026",
  "June 2026",
];

export const integritySections = [
  {
    category: "Responsiveness",
    items: [
      "Replied to all official matters (emails/texts/calls)",
      "No silence that blocked work or decisions",
      "Returned or acknowledged updates/calls promptly",
    ],
  },
  {
    category: "Punctuality & Preparedness",
    items: [
      "Arrived on time or early for official meetings and engagements",
      "Informed before time if unavoidable delay",
      "Read and prepared all pre-reads/agendas prior",
      "Brought required updates / data / facts",
      "Able to participate and contribute in discussions",
    ],
  },
  {
    category: "Work Delivery",
    items: [
      "All tasks delivered on or before deadline",
      "Delays communicated in advance",
      "Quality of work is above acceptable range",
    ],
  },
  {
    category: "Weekly Improvements",
    items: [
      "No repeated mistakes after feedback",
      "No reminders needed for basic duties",
      "Did not slow others down due to personal defect/delay",
    ],
  },
  {
    category: "Professional Maturity",
    items: [
      "No waiting to be told what to do",
      "No poor documentation",
      "Have good prioritisation sense",
      "Not defensive when corrected",
    ],
  },
] as const;

export type IntegrityJournalEntry = {
  employee: string;
  month: string;
  score: string;
  supervisorRemark: string;
};

export const integrityJournal: IntegrityJournalEntry[] = [
  {
    employee: "Ava Patel",
    month: "March 2026",
    score: "88%",
    supervisorRemark: "Strong ownership and timely communication.",
  },
  {
    employee: "Noah Bennett",
    month: "March 2026",
    score: "81%",
    supervisorRemark: "Good improvement after feedback on documentation.",
  },
];
