export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        About
      </h2>
      <div className="mt-6 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 space-y-4 text-zinc-300 leading-relaxed">
          <p>
            I live inside the paid media stack - <strong className="text-zinc-100">paid advertising</strong>, <strong className="text-zinc-100">SEM</strong>, <strong className="text-zinc-100">SEO</strong>, <strong className="text-zinc-100">performance marketing</strong>, and <strong className="text-zinc-100">paid media</strong>. Four years running PPC, display, and Shopping campaigns, rebuilding organic discoverability, and engineering the funnels that turn clicks into revenue for B2B and D2C ecommerce brands.
          </p>
          <p>
            I&apos;m drawn to the problems where the answer sits at the
            handshake between customer insight, acquisition, and price - the
            place where experimentation compounds into real revenue.
          </p>
          <p>
            My path: Mechanical Engineering at BITS Pilani → paid and SEO
            strategy at GenY Medium, Pixis, and Plug Power → M.S. Marketing
            Analytics with a Pricing specialization at Simon Business School →
            Product Marketing at Sensata Technologies.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/50">
            <h3 className="text-sm font-semibold text-zinc-100">Quick facts</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-zinc-500">Based in</dt>
                <dd className="text-zinc-100">Boston, MA</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Focus</dt>
                <dd className="text-zinc-100">Digital · SEM · SEO · Paid Media</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Education</dt>
                <dd className="text-zinc-100">M.S. Simon (Rochester)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Open to</dt>
                <dd className="text-zinc-100">Full-time roles</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
