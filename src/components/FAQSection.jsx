import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Which clouds does Cairn support?",
    answer: "The current beta is focused on AWS, Azure, and GCP targets, with source discovery for common VM-based environments and Kubernetes clusters.",
  },
  {
    question: "How does rollback work if a step fails?",
    answer: "Cairn pauses the workflow, preserves the previous route or deployment state, and shows the prepared rollback action with the failed checks attached.",
  },
  {
    question: "Does Cairn replace our existing CI/CD?",
    answer: "No. Cairn works alongside GitHub Actions, GitLab CI, Azure DevOps, Jenkins, and similar systems by generating reviewed pipeline changes.",
  },
  {
    question: "What does reviewed before it runs mean?",
    answer: "Infrastructure, pipeline, monitoring, and cutover commands are presented with context and require a human approval gate before execution.",
  },
  {
    question: "Is beta pricing available?",
    answer: "Pricing is not public yet. Beta access is scoped around migration complexity, cloud targets, and the workflows your team wants to automate first.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="page-shell section-pad scroll-mt-24" id="faq">
      <div className="mb-10 max-w-3xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.14em] text-accent">FAQ</p>
        <h2 className="section-title font-black text-charcoal">Common questions.</h2>
      </div>
      <div className="grid gap-3">
        {faqs.map((faq, index) => {
          const expanded = open === index;
          return (
            <article className="rounded-2xl border border-line bg-white shadow-[0_14px_40px_rgba(31,31,29,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-accent/30" key={faq.question}>
              <button
                type="button"
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-black text-charcoal transition duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/20"
                onClick={() => setOpen(expanded ? -1 : index)}
                aria-expanded={expanded}
              >
                {faq.question}
                <ChevronDown className={`shrink-0 transition duration-200 ${expanded ? "rotate-180" : ""}`} size={19} />
              </button>
              <div className={`grid transition-[grid-template-rows] duration-200 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-6 text-muted">{faq.answer}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
