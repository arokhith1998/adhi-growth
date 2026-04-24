import { Award } from "lucide-react";

const certs = [
  { name: "Google Search Ads", issuer: "Google" },
  { name: "Google Shopping Ads", issuer: "Google" },
  { name: "Google Display & Video 360", issuer: "Google" },
  { name: "Google Analytics (GA4)", issuer: "Google" },
  { name: "Search Ads 360 (SA360)", issuer: "Google Marketing Platform" },
  { name: "Amazon Ads Retail Certification", issuer: "Amazon Ads" },
  { name: "Amazon Ads Advanced Sponsored Ads", issuer: "Amazon Ads" },
  { name: "Amazon DSP Certification", issuer: "Amazon Ads" },
  { name: "Meta Certified Digital Marketing Associate", issuer: "Meta" },
  { name: "Digital Marketing", issuer: "London Business School" },
  { name: "Inbound Marketing", issuer: "HubSpot Academy" },
  { name: "Email Marketing", issuer: "HubSpot Academy" },
  { name: "Criteo Marketer Certification", issuer: "Criteo" },
  { name: "Principles of Negotiation", issuer: "Yale" },
  { name: "Advanced Pricing", issuer: "Simon Business School" },];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800"
    >
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Certifications
      </h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c) => (
          <div
            key={c.name}
            className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:border-zinc-600 transition-colors"
          >
            <Award className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-zinc-100 leading-snug">
                {c.name}
              </p>
              <p className="text-xs text-zinc-500 mt-0.5">{c.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
