import { Sidebar } from "./sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row md:py-6">
        <Sidebar />
        <main className="flex-1 px-4 py-6 sm:px-6 md:px-8">{children}</main>
      </div>
    </div>
  );
}
