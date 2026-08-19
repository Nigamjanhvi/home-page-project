import { Cloud } from "lucide-react";

const providers = ["AWS", "Azure", "GCP"];

export default function TrustStrip() {
  return (
    <section className="page-shell -mt-6 pb-12">
      <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white px-4 py-4 shadow-[0_14px_40px_rgba(31,31,29,0.06)] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-muted">Built for teams running AWS, Azure, and GCP.</p>
        <div className="flex flex-wrap gap-2">
          {providers.map((provider) => (
            <span className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line bg-warm-bg px-3 text-sm font-black text-charcoal" key={provider}>
              <Cloud size={16} className="text-muted" />
              {provider}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
