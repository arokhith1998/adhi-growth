import { GraduationCap, Star } from "lucide-react";

const degrees = [
  {
    school: "Simon Business School, University of Rochester",
    degree: "M.S. in Marketing Analytics - Pricing Specialization",
    period: "Dec 2024",
    details:
      "STEM-certified. Coursework: Pricing Policies, Advanced Pricing, Pricing Analytics, Consumer Behavior, Data Management & Visualization.",
    highlights: [
      "Vice President of Academic Affairs, Masters Advisory Council",
      "Teaching Assistant - Digital Marketing Strategy & Economics and Marketing Strategy",
      "Project Manager - led 5 consultants on a pro-bono GTM expansion project for Safran",
    ],
  },
  {
    school: "Birla Institute of Technology & Science (BITS), Pilani",
    degree: "B.E. in Mechanical Engineering",
    period: "May 2020",
    details:
      "Content Writer & Business Development Associate at Qbox (entrepreneurial venture).",
    highlights: [],
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Education
      </h2>

      <div className="mt-8 grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-3 space-y-6">
          {degrees.map((d) => (
            <div
              key={d.school}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition-colors"
            >
              <div className="flex gap-5">
                <GraduationCap className="w-6 h-6 text-zinc-500 shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-zinc-100">{d.degree}</h3>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">
                      {d.period}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mt-0.5">{d.school}</p>
                  <p className="mt-3 text-[15px] text-zinc-300 leading-relaxed">
                    {d.details}
                  </p>
                  {d.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {d.highlights.map((h, i) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-zinc-300"
                        >
                          <Star
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              i === 0 ? "text-amber-400 fill-amber-400" : "text-zinc-600"
                            }`}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-2">
          <figure className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl shadow-black/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/presenting.jpg"
              alt="Adhithya presenting a project at Simon Business School"
              className="w-full h-full object-cover"
            />
            <figcaption className="px-4 py-3 bg-zinc-900/70 text-xs text-zinc-400">
              Presenting at Simon Business School - VP of Academic Affairs,
              Masters Advisory Council.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
