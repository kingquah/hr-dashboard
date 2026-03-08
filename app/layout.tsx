import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HR Dashboard",
  description: "Internal HR management dashboard with key workforce insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 antialiased">{children}</body>
    </html>
  );
}
