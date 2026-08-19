import MigrationAssistant from "./MigrationAssistant.jsx";

export default function ProductShowcase() {
  return (
    <section className="page-shell section-pad scroll-mt-24" id="product">
      <div className="mb-10 max-w-3xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.14em] text-accent">Product</p>
        <h2 className="section-title font-black text-charcoal">See exactly what's changing before it runs.</h2>
      </div>
      <MigrationAssistant />
    </section>
  );
}
