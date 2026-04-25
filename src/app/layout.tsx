import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adhithya Rokhith Bhaskar - Growth Marketer",
  description:
    "Growth Marketer specializing in Digital, SEM, SEO, and Paid Media. 4+ years, $1.4M+ managed media, 16x ROAS. M.S. Simon Business School.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <span className="hidden bg-emerald-500/10 border-emerald-500/40 border-emerald-500/30 text-emerald-300 text-emerald-200 bg-emerald-400" aria-hidden />

        <Analytics />
      </body>
    </html>
  );
}
