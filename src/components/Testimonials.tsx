"use client";

import { Quote } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type Testimonial = {
  name: string;
  title: string;
  company: string;
  linkedin: string;
  photo?: string; // optional path in /public/recommenders/
  quote: string;
  pullQuote?: string; // short highlight shown larger
};

const testimonials: Testimonial[] = [
  {
    name: "Erik Smith",
    title: "Senior Director - Product Marketing",
    company: "Plug Power",
    linkedin: "https://www.linkedin.com/in/erik-smith-4016378/",
    photo: "/recommenders/erik-smith.jpg",
    quote:
      "Adhithya is a talented marketing professional with a bright future. He is skilled at creating and executing digital marketing campaigns optimized to achieve specific goals. Adhi is self-motivated and constantly working to improve and find new ways to add value.",
    pullQuote:
      "A talented marketing professional with a bright future - skilled at creating and executing campaigns optimized to achieve specific goals.",
  },
  {
    name: "Sandra Saathoff",
    title: "Senior Digital Marketing Manager",
    company: "Plug Power",
    linkedin:
      "https://www.linkedin.com/in/sandra-saathoff-4276a13/?skipRedirect=true",
    photo: "/recommenders/sandra-saathoff.jpg",
    quote:
      "I worked with Adhi at Plug both directly and indirectly for approximately 9 months. Adhi was a pleasure to work with. He came up to speed quickly and was almost immediately able to contribute meaningfully to our marketing team goals. His analysis skills are very good and his ability to take ownership of an issue and follow it through to completion, despite hurdles, enabled our team to implement marketing platform improvements resulting in increases in lead generation. He is able to create and share reports with a variety of team members in a way that helps them understand the results and readily accepts feedback for improvement of our campaign processes. I would enjoy working with Adhi again!",
    pullQuote:
      "His analysis skills are very good and his ability to take ownership of an issue and follow it through to completion... enabled our team to implement marketing platform improvements resulting in increases in lead generation.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({ t }: { t: Testimonial }) {
  if (t.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={t.photo}
        alt={t.name}
        className="w-12 h-12 rounded-full object-cover border border-zinc-700"
      />
    );
  }
  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-700 flex items-center justify-center text-sm font-semibold text-zinc-100">
      {initials(t.name)}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800"
    >
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Testimonials
      </h2>
      <p className="mt-3 text-zinc-400 max-w-2xl">
        Kind words from managers and colleagues I&apos;ve had the pleasure of
        working with.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition-colors flex flex-col"
          >
            <Quote className="w-8 h-8 text-zinc-700" />
            <blockquote className="mt-3 text-[15px] text-zinc-200 leading-relaxed">
              {t.pullQuote ? (
                <>
                  <span className="text-zinc-50 font-medium">
                    &ldquo;{t.pullQuote}&rdquo;
                  </span>
                  <details className="mt-3 text-zinc-400 text-sm">
                    <summary className="cursor-pointer hover:text-zinc-200 transition-colors select-none">
                      Read full recommendation
                    </summary>
                    <p className="mt-2 leading-relaxed">{t.quote}</p>
                  </details>
                </>
              ) : (
                <span>&ldquo;{t.quote}&rdquo;</span>
              )}
            </blockquote>

            <div className="mt-auto pt-6 flex items-center gap-3 border-t border-zinc-800 mt-6">
              <Avatar t={t} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-zinc-100 truncate">
                  {t.name}
                </p>
                <p className="text-xs text-zinc-400 truncate">
                  {t.title} · {t.company}
                </p>
              </div>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
                title="View on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
