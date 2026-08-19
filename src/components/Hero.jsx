import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pipelineSteps = [
  "Assess",
  "Containerize",
  "Provision",
  "Deploy",
  "Verify",
];

const currentStep = 3;

export default function Hero() {
  return (
    <section className="hero-glow soft-grid">
      <div className="page-shell grid min-h-[calc(100vh-76px)] items-center gap-12 pb-18 pt-16 md:gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)] lg:gap-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-line bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-muted">
            Now in private beta
          </p>
          <h1 className="hero-title max-w-[12ch] font-black text-charcoal">Move to the cloud without moving blind</h1>
          <p className="mt-6 max-w-[64ch] text-lg leading-8 text-muted">
            Cairn automates your migration and the DevOps tooling around it: pipelines, infrastructure, monitoring, all reviewed before they run.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-black text-white shadow-[0_12px_28px_rgba(232,96,76,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f06f5d] active:scale-[0.98]" href="#request">
              Request access <ArrowRight size={17} />
            </a>
            <a className="inline-flex min-h-12 items-center justify-center rounded-xl border border-line bg-white px-5 text-sm font-black text-charcoal transition duration-200 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-accent-wash active:scale-[0.98]" href="#how-it-works">
              See how it works
            </a>
          </div>
        </div>

        <HeroPipeline />
      </div>
    </section>
  );
}

function HeroPipeline() {
  return (
    <div className="min-w-0 lg:justify-self-end" aria-hidden="true">
      <p className="mb-5 text-center text-xs font-black uppercase tracking-[0.14em] text-faint lg:text-left">
        payments-api to AWS us-east-1
      </p>
      <div className="relative mx-auto w-full max-w-[620px] py-8 sm:py-10 lg:max-w-none">
        <div className="absolute left-[10%] right-[10%] top-[calc(50%-12px)] h-0.5 bg-line" />
        <motion.div
          className="pipeline-fill absolute left-[10%] top-[calc(50%-12px)] h-0.5"
          animate={{ width: ["0%", "40%", "80%"], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative grid grid-cols-5 gap-1 sm:gap-3">
          {pipelineSteps.map((step, index) => {
            const stepNumber = index + 1;
            const state = getStepState(stepNumber);

            return (
              <div className="flex min-w-0 flex-col items-center gap-3 text-center" key={step}>
                <motion.span
                  className={heroNodeClass(state)}
                  animate={state === "current" ? { scale: [1, 1.08, 1], boxShadow: ["0 0 0 8px rgba(232,96,76,0.10),0 12px 28px rgba(232,96,76,0.18)", "0 0 0 15px rgba(232,96,76,0.17),0 18px 42px rgba(232,96,76,0.28)", "0 0 0 8px rgba(232,96,76,0.10),0 12px 28px rgba(232,96,76,0.18)"] } : {}}
                  transition={state === "current" ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" } : undefined}
                >
                  {stepNumber}
                </motion.span>
                <span className={`w-full truncate text-[clamp(0.65rem,2.4vw,0.86rem)] font-black ${state === "current" ? "text-charcoal" : "text-muted"}`}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-auto flex max-w-[620px] flex-wrap justify-center gap-2 lg:justify-start">
        {["5-stage pipeline", "Human-reviewed", "Rollback ready"].map((chip) => (
          <span className="rounded-full border border-line bg-white/70 px-3 py-1.5 text-xs font-bold text-muted shadow-[0_10px_30px_rgba(31,31,29,0.05)]" key={chip}>
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

function getStepState(stepNumber) {
  if (stepNumber < currentStep) return "completed";
  if (stepNumber === currentStep) return "current";
  return "upcoming";
}

function heroNodeClass(state) {
  const base = "grid h-[clamp(2.45rem,8vw,3.5rem)] w-[clamp(2.45rem,8vw,3.5rem)] place-items-center rounded-full text-sm transition duration-200";
  const states = {
    completed: "border border-accent-soft bg-accent-soft font-black text-charcoal",
    current: "border border-accent bg-white font-black text-accent shadow-[0_0_0_8px_rgba(232,96,76,0.14),0_10px_28px_rgba(232,96,76,0.25)]",
    upcoming: "border border-line bg-white text-faint",
  };

  return `${base} ${states[state]}`;
}
