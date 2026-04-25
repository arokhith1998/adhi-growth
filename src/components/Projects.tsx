import { ExternalLink } from "lucide-react";

function Github({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.082-.73.082-.73 1.205.086 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.478 5.92.43.37.813 1.096.813 2.21 0 1.595-.014 2.88-.014 3.27 0 .318.216.694.825.576C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  link: string | null;
  repo: string | null;
  gradient: string;
  emoji: string;
};

const projects: Project[] = [
  {
    title: "D2C Fashion - 300% ROI via Paid Search Restructure",
    blurb:
      "Rebuilt a D2C fashion brand's paid search account from scratch - Google Merchant Center cleanup, Shopping feed restructure, smart bidding, and creative refresh - delivering a 300% ROI lift within a month.",
    tags: ["Paid Search", "Google Ads", "Shopping", "D2C"],
    link: null,
    repo: "https://github.com/arokhith1998/Projects/blob/main/D2C-Fashion-Brand-300percent-ROI-via-Paid-Search-Restructure.pdf",
    gradient: "from-rose-500 via-red-600 to-pink-700",
    emoji: "👗",
  },
  {
    title: "Early-Stage Paid Growth at Pixis",
    blurb:
      "Growth playbook for an early-stage AI adtech platform - paid acquisition, onboarding, and expansion motions across $1.4M in global D2C client budgets. 3x ROAS, 50% churn reduction.",
    tags: ["AI Adtech", "Growth", "Paid Media", "Customer Success"],
    link: null,
    repo: "https://github.com/arokhith1998/Projects/blob/main/Early-Stage%20Paid%20Growth%20at%20Pixis%20-%20AI%20Adtech%20Platform.pdf",
    gradient: "from-purple-500 via-violet-600 to-indigo-700",
    emoji: "🚀",
  },
  {
    title: "B2B Lead Generation - LinkedIn & Paid Search",
    blurb:
      "B2B lead-gen playbook combining LinkedIn paid campaigns with search demand capture - audience layering, bid strategy, creative testing, and attribution across the MQL-to-SQL funnel.",
    tags: ["LinkedIn Ads", "Paid Search", "B2B", "Lead Gen"],
    link: null,
    repo: "https://github.com/arokhith1998/Projects/blob/main/B2B-Lead-Generation-LinkedIn%26%20Paid%20Search.pdf",
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    emoji: "🎯",
  },
  {
    title: "Enterprise SEO Gap Analysis & Execution Strategy",
    blurb:
      "SEO strategy deck for an enterprise site - technical audit, content-gap analysis against competitors, and a prioritized execution roadmap targeting organic discoverability and keyword share-of-voice gains.",
    tags: ["SEO", "Content Strategy", "Technical SEO", "Enterprise"],
    link: null,
    repo: "https://github.com/arokhith1998/Projects/blob/main/Enterprise-SEO-Gap-Analysis-Execution-Strategy.pdf",
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    emoji: "🔍",
  },
  {
    title: "SwipeHire - AI Job Matching",
    blurb:
      "Built an AI job-matching MVP and ran paid + organic acquisition experiments (Google, Meta, Reddit, LinkedIn) to validate CAC, activation, and retention. Set up full attribution stack (GA4, GTM, dashboards) from scratch.",
    tags: ["AI", "Product", "GA4", "Paid Acquisition"],
    link: "https://swipehire.io/",
    repo: null,
    gradient: "from-fuchsia-600 via-pink-600 to-rose-700",
    emoji: "💼",
  },
  {
    title: "NSE Paper-Trading Bot",
    blurb:
      "Local paper-trading system for the Indian stock market that pulls live prices via nsepython and Yahoo Finance, scores a watchlist with technical indicators, and surfaces picks in an interactive HTML dashboard.",
    tags: ["AI", "Python", "pandas", "yfinance"],
    link: "https://nse-bot-lake.vercel.app/",
    repo: "https://github.com/arokhith1998/nse-bot",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    emoji: "📈",
  },
  {
    title: "Bleeders & Leakers Analytics",
    blurb:
      "4-page Power BI dashboard for FY2026 margin recovery across 1,200 opportunities ($626M target). Classifies accounts as bleeders vs leakers with regional deep-dives, sales pipeline funnel, product family scorecards, and rep-level performance. Sanitized data.",
    tags: ["Power BI", "Pricing", "Analytics", "Dashboard"],
    link: null,
    repo: "https://github.com/arokhith1998/Projects/blob/main/Bleeders_Leakers_2026_Report.pdf",
    gradient: "from-yellow-500 via-amber-600 to-orange-700",
    emoji: "📉",
  },
  {
    title: "Optimal Pricing Prediction Model",
    blurb:
      "Regression and ML-driven pricing model identifying the price point that maximizes revenue - feature engineering, cross-validation, and price-elasticity analysis in Python.",
    tags: ["Pricing", "ML", "Python", "Elasticity"],
    link: null,
    repo: "https://github.com/arokhith1998/Projects",
    gradient: "from-amber-500 via-orange-600 to-red-700",
    emoji: "💰",
  },
  {
    title: "Credit Card Approval Prediction",
    blurb:
      "Classification models predicting credit card approvals - logistic regression, decision trees, and ensemble methods benchmarked on applicant features.",
    tags: ["Python", "Classification", "Finance"],
    link: null,
    repo: "https://github.com/arokhith1998/Projects",
    gradient: "from-indigo-600 via-blue-600 to-sky-700",
    emoji: "💳",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Featured Projects
      </h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-zinc-600 transition-colors flex flex-col"
          >
            <div
              className={`relative h-40 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
                  backgroundSize: "24px 24px, 32px 32px",
                }}
              />
              <span className="text-6xl drop-shadow-lg transition-transform group-hover:scale-110">
                {p.emoji}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-semibold text-zinc-100 text-lg">{p.title}</h3>
              <p className="mt-2 text-[15px] text-zinc-400 leading-relaxed flex-1">
                {p.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {(p.link || p.repo) && (
                <div className="mt-5 flex gap-4 text-sm">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-zinc-50"
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-zinc-50"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
