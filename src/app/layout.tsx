import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adhithya Rokhith Bhaskar - Growth Marketing Leader",
  description:
    "Growth Marketing Leader specializing in Digital, SEM, SEO, Performance Marketing, and Paid Media. M.S. Simon Business School.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        {children}
        {/* tw-safelist */}
        <span className="hidden bg-emerald-500/10 border-emerald-500/40 border-emerald-500/30 text-emerald-300 text-emerald-200 bg-emerald-400" aria-hidden />
        <Analytics />
      </body>
    </html>
  );
}
