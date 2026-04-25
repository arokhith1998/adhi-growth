"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-[1fr_auto] gap-10 items-center"
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-[11px] font-semibold px-2.5 py-0.5 uppercase tracking-wider">
              Growth Marketing
            </span>
            <span className="text-sm font-medium text-zinc-500">
              Hi, I&apos;m Adhithya
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl text-zinc-50">
            Growth Marketer -{" "}
            <span className="text-zinc-500">
              Digital, SEM, SEO & Paid Media.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            Performance marketer with 4+ years running PPC, display, Shopping, and SEO for B2B and D2C ecommerce brands. $1.4M+ in managed media budgets, 16x ROAS from a D2C Merchant Center rebuild, -25% CPA at Plug Power, and full-funnel paid media across Search, Shopping, Meta, LinkedIn, and Amazon. M.S. Marketing Analytics - Simon Business School. Based in Boston, MA.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 text-zinc-950 px-5 py-2.5 text-sm font-medium hover:bg-white transition-colors"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#clients"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 text-zinc-200 px-5 py-2.5 text-sm font-medium hover:bg-zinc-900 transition-colors"
            >
              <Briefcase className="w-4 h-4" /> Brands I&apos;ve worked with
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 text-zinc-200 px-5 py-2.5 text-sm font-medium hover:bg-zinc-900 transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1.5">
              $1.4M+ managed media
            </span>
            <span className="inline-flex items-center rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1.5">
              16x ROAS rebuild
            </span>
            <span className="inline-flex items-center rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1.5">
              -25% CPA at Plug Power
            </span>
          </div>
        </div>

        <div className="relative shrink-0 justify-self-start md:justify-self-end">
          <div className="w-44 h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl shadow-black/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Adhithya Rokhith Bhaskar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold px-2.5 py-1 whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to work
          </span>
        </div>
      </motion.div>
    </section>
  );
}
