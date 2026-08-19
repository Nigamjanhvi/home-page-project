import StoneLogo from "./StoneLogo.jsx";

export default function Footer() {
  return (
    <footer className="page-shell flex flex-col gap-6 border-t border-line py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <a className="flex items-center gap-3 font-black text-charcoal" href="#">
        <StoneLogo />
        <span>Cairn</span>
      </a>
      <div className="flex flex-wrap gap-5">
        <a className="transition duration-200 hover:text-charcoal" href="#product">
          Product
        </a>
        <a className="transition duration-200 hover:text-charcoal" href="#how-it-works">
          How it works
        </a>
        <a className="transition duration-200 hover:text-charcoal" href="#faq">
          FAQ
        </a>
      </div>
      <p>(c) 2026 Cairn Labs.</p>
    </footer>
  );
}
