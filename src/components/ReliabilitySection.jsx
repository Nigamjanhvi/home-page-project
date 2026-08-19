import { Activity, BellRing, Scaling, ShieldCheck } from "lucide-react";

const blocks = [
  { icon: Scaling, title: "Auto-scaling defaults", body: "Cairn proposes scaling limits, health probes, and capacity settings based on the service profile it discovers." },
  { icon: BellRing, title: "Monitoring from day one", body: "Alert rules, dashboard checks, and service-level signals are generated with the migration plan." },
  { icon: ShieldCheck, title: "Rollback readiness", body: "Every cutover keeps a validated return path until the migrated service is verified in production." },
];

export default function ReliabilitySection() {
  return (
    <section className="page-shell section-pad">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.14em] text-accent">After the migration</p>
          <h2 className="section-title font-black text-charcoal">Built for what happens after cutover, not just the move.</h2>
          <p className="mt-5 max-w-[62ch] text-base leading-7 text-muted">
            Cairn treats reliability as part of the migration, so the target environment starts with stronger operational defaults.
          </p>
        </div>
        <div className="grid gap-4">
          {blocks.map((block) => (
            <article className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_14px_40px_rgba(31,31,29,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-accent/30" key={block.title}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-warm-bg text-muted">
                <block.icon size={21} />
              </span>
              <div>
                <h3 className="font-black text-charcoal">{block.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{block.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
