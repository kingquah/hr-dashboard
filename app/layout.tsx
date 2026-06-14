import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strength Workout Tracker",
  description: "A premium mobile-friendly workout dashboard for strength progression.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
