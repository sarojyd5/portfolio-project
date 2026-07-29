import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact-form" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-base/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold">
            S
          </div>
          <span className="text-xl font-bold tracking-wider uppercase">Saroj</span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
  {NAV_LINKS.map((link) => (
    <a
      key={link.label}
      href={link.href}
      onMouseEnter={() => setActive(link.label)}
      onClick={() => setActive(link.label)}
      className={`relative pb-2 transition-all duration-300 ${
        active === link.label
          ? "text-white"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {link.label}

      <span
        className={`absolute left-0 bottom-0 h-[2px] bg-accent transition-all duration-300 ${
          active === link.label ? "w-full" : "w-0"
        }`}
      />
    </a>
  ))}
</nav>

        <button className="hidden lg:inline-flex bg-accent hover:bg-accent-hover px-6 py-2 rounded-md text-sm font-semibold transition-all">
          LET'S TALK
        </button>

        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-6 pb-6 border-t border-line">
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
  {NAV_LINKS.map((link) => (
    <a
      key={link.label}
      href={link.href}
      onMouseEnter={() => setActive(link.label)}
      onClick={() => setActive(link.label)}
      className={`relative pb-2 transition-all duration-300 ${
        active === link.label
          ? "text-white"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {link.label}

      <span
        className={`absolute left-0 bottom-0 h-[2px] bg-accent transition-all duration-300 ${
          active === link.label ? "w-full" : "w-0"
        }`}
      />
    </a>
  ))}
</nav>
          <button className="mt-6 w-full bg-accent hover:bg-accent-hover px-6 py-3 rounded-md text-sm font-semibold transition-all">
            LET'S TALK
          </button>
        </div>
      )}
    </header>
  );
}
