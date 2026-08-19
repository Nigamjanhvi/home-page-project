import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import StoneLogo from "./StoneLogo.jsx";

const links = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("product");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-36% 0px -50% 0px", threshold: 0.01 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (event, href) => {
    event.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`mx-auto mt-3 flex min-h-14 w-[min(1240px,calc(100%_-_24px))] items-center justify-between rounded-2xl px-3 transition duration-200 sm:w-[min(1240px,calc(100%_-_40px))] ${
          scrolled ? "border border-line bg-white/80 shadow-[0_18px_60px_rgba(31,31,29,0.08)] backdrop-blur-xl" : "border border-transparent bg-transparent"
        }`}
        aria-label="Primary navigation"
      >
        <a className="flex min-h-11 items-center gap-3 rounded-xl pr-2 text-sm font-black text-charcoal" href="#">
          <StoneLogo />
          <span>Cairn</span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
          {links.map((link) => (
            <a
              className={`transition duration-200 hover:text-charcoal ${active === link.href.slice(1) ? "text-accent" : ""}`}
              href={link.href}
              key={link.label}
              onClick={(event) => goTo(event, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="hidden min-h-11 items-center justify-center rounded-xl bg-accent px-4 text-sm font-black text-white shadow-[0_12px_28px_rgba(232,96,76,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f06f5d] active:scale-[0.98] md:inline-flex"
          href="#request"
          onClick={(event) => goTo(event, "#request")}
        >
          Request access
        </a>

        <button
          className="grid min-h-11 min-w-11 place-items-center rounded-xl border border-line bg-white text-charcoal transition duration-200 hover:border-accent/35 active:scale-[0.98] md:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="page-shell mt-2 rounded-2xl border border-line bg-white/95 p-2 shadow-[0_18px_60px_rgba(31,31,29,0.08)] backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <a
              className={`block min-h-11 rounded-xl px-3 py-3 text-sm font-semibold transition duration-200 hover:bg-accent-wash ${active === link.href.slice(1) ? "text-accent" : "text-muted"}`}
              href={link.href}
              key={link.label}
              onClick={(event) => goTo(event, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a className="mt-2 flex min-h-11 items-center justify-center rounded-xl bg-accent px-4 text-sm font-black text-white active:scale-[0.98]" href="#request" onClick={(event) => goTo(event, "#request")}>
            Request access
          </a>
        </div>
      )}
    </header>
  );
}
