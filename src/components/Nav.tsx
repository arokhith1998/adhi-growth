"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#clients", label: "Clients" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold tracking-tight text-zinc-100">
          Adhithya<span className="text-zinc-500">.</span>
        </a>
        <ul className="hidden sm:flex items-center gap-6 text-sm text-zinc-400">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-zinc-100 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
