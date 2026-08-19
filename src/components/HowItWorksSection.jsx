import { ClipboardCheck, GitPullRequestArrow, Route, ShieldCheck } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Assess", body: "Map services, dependencies, secrets, and runtime assumptions before a migration plan is drafted." },
  { icon: Route, title: "Plan", body: "Compare target clouds, infrastructure changes, rollout order, and rollback options before committing." },
  { icon: GitPullRequestArrow, title: "Migrate", body: "Generate IaC, CI/CD changes, monitoring config, and cutover commands behind review gates." },
  { icon: ShieldCheck, title: "Verify", body: "Run smoke tests, health checks, and rollback readiness checks before the migration is marked complete." },
];

export default function HowItWorksSection() {
  return (
    <section className="page-shell section-pad scroll-mt-24" id="how-it-works">
      <div className="mb-10 max-w-3xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.14em] text-accent">How it works</p>
        <h2 className="section-title font-black text-charcoal">From assessment to cutover, guided end to end.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article className="rounded-2xl border border-line bg-white p-5 shadow-[0_14px_40px_rgba(31,31,29,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-accent/30 active:scale-[0.98]" key={step.title}>
            <div className="mb-5 flex items-center justify-between">
              <step.icon className="text-muted" size={24} />
              <span className="text-xs font-black text-faint">0{index + 1}</span>
            </div>
            <h3 className="text-lg font-black text-charcoal">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
