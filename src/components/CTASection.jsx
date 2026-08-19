import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CTASection() {
  const [showRequestInfo, setShowRequestInfo] = useState(false);

  return (
    <section className="page-shell pb-22 scroll-mt-24" id="request">
      <div className="rounded-[24px] border border-line bg-charcoal p-6 text-white shadow-[0_24px_80px_rgba(31,31,29,0.16)] sm:p-10">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-white/60">Private beta</p>
            <h2 className="max-w-[14ch] text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
              Ready to plan your migration?
            </h2>
          </div>
          <button
            type="button"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-black text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#f06f5d] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20 lg:mt-0"
            onClick={() => setShowRequestInfo(true)}
          >
            Request access <ArrowRight size={17} />
          </button>
        </div>

        {showRequestInfo && (
          <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 md:grid-cols-3">
            {["Share your service repo", "Choose cloud target", "Review migration plan"].map((item, index) => (
              <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4" key={item}>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-white/45">Step {index + 1}</p>
                <p className="mt-2 text-sm font-black text-white">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
