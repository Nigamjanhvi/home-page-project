import { BadgeCheck, CloudCog, DollarSign, FileCode2, GitBranch, RotateCcw } from "lucide-react";

const features = [
  { icon: FileCode2, title: "Automated infrastructure-as-code", body: "Generate Terraform modules from discovered services, networks, secrets, and runtime settings." },
  { icon: GitBranch, title: "CI/CD pipeline setup", body: "Create deployment workflows that match your target cloud and review process." },
  { icon: DollarSign, title: "Cost estimation before migration", body: "Preview target resources and estimated monthly ranges before committing to a plan." },
  { icon: RotateCcw, title: "Rollback safety", body: "Keep prior routes, images, and infrastructure state ready until verification passes." },
  { icon: BadgeCheck, title: "Compliance and audit trail", body: "Record plans, approvals, generated commands, and execution logs in one history." },
  { icon: CloudCog, title: "Multi-cloud support", body: "Plan migrations across AWS, Azure, and GCP without rewriting workflows by hand." },
];

export default function FeaturesGrid() {
  return (
    <section className="page-shell section-pad scroll-mt-24" id="features">
      <div className="mb-10 max-w-3xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.14em] text-accent">Features</p>
        <h2 className="section-title font-black text-charcoal">Everything a migration actually needs.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article className="rounded-2xl border border-line bg-white p-5 shadow-[0_14px_40px_rgba(31,31,29,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-accent/30 active:scale-[0.98]" key={feature.title}>
            <feature.icon className="mb-5 text-muted" size={25} />
            <h3 className="text-lg font-black text-charcoal">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
