import { Cloud, Play, Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    name: "Assess",
    description: "Scans the existing service and its dependencies to build a migration plan.",
    example: "Analyzing payments-api: 3 dependencies, 2 env configs found.",
    duration: "~3 min",
  },
  {
    name: "Containerize",
    description: "Generates a Dockerfile and container config for the service based on its detected runtime and dependencies.",
    example: "Writing Dockerfile for Node.js 20 service.",
    duration: "~5 min",
  },
  {
    name: "Provision",
    description: "Creates the target cloud infrastructure (VPC, compute, networking) via Terraform or equivalent IaC.",
    example: "Applying Terraform plan: 12 resources to add.",
    duration: "~7 min",
  },
  {
    name: "Deploy",
    description: "Pushes the containerized service to the provisioned infrastructure and configures the deployment pipeline (e.g. GitHub Actions).",
    example: "Deploying to AWS us-east-1, rolling update.",
    duration: "~6 min",
  },
  {
    name: "Verify",
    description: "Runs health checks, smoke tests, and rollback readiness checks to confirm the migration succeeded.",
    example: "All health checks passing. Rollback plan ready.",
    duration: "~4 min",
  },
];

export default function MigrationAssistant() {
  const [currentStep, setCurrentStep] = useState(3);
  const [selectedStep, setSelectedStep] = useState(3);
  const [query, setQuery] = useState("");
  const [confirmation, setConfirmation] = useState("");

  return (
    <section className="w-full rounded-[24px] border border-line bg-surface p-4 shadow-[0_24px_80px_rgba(31,31,29,0.10)] sm:p-6 lg:p-8">
      <header className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-faint">Cairn migration assistant</p>
          <h1 className="mt-2 text-[clamp(1.7rem,4vw,2.65rem)] font-black leading-tight tracking-[-0.035em] text-charcoal">
            payments-api migration
          </h1>
        </div>
        <span className="inline-flex min-h-11 w-fit items-center gap-2 rounded-xl border border-line bg-warm-bg px-3 text-sm font-bold text-muted">
          <Cloud size={17} />
          target AWS us-east-1
        </span>
      </header>

      <div className="py-6">
        <StepTracker currentStep={currentStep} selectedStep={selectedStep} onSelect={setSelectedStep} />
        <StepInfo currentStep={currentStep} selectedStep={selectedStep} />
      </div>

      <div className="grid gap-4 border-t border-line pt-5 lg:grid-cols-[1fr_0.9fr]">
        <CommandPalette query={query} setQuery={setQuery} onConfirm={setConfirmation} />
        <QuickAction onConfirm={setConfirmation} />
      </div>
      <div className="min-h-7 pt-3" aria-live="polite">
        {confirmation && <p className="text-sm font-semibold text-muted">{confirmation}</p>}
      </div>
    </section>
  );
}

function StepTracker({ currentStep, selectedStep, onSelect }) {
  return (
    <div className="overflow-x-auto pb-2 sm:overflow-visible">
      <div className="relative min-w-[580px] sm:min-w-0">
        <div className="absolute left-[10%] right-[10%] top-[22px] h-0.5 bg-line" aria-hidden="true" />
        <div
          className="absolute left-[10%] top-[22px] h-0.5 bg-charcoal/20 transition-all duration-300"
          style={{ width: `${Math.max(currentStep - 1, 0) * 20}%` }}
          aria-hidden="true"
        />
        <div className="relative grid grid-cols-5 gap-3">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const state = getStepState(stepNumber, currentStep);
            const isSelected = selectedStep === stepNumber;
            return (
              <button
                type="button"
                key={step.name}
                className="group flex min-h-[76px] min-w-20 flex-col items-center gap-2 rounded-xl px-2 py-1 text-center transition duration-200 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
                onClick={() => onSelect(stepNumber)}
                aria-label={`Select ${step.name} step`}
              >
                <span className={nodeClass(state, isSelected)}>{stepNumber}</span>
                <span className="text-sm font-bold text-charcoal">{step.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StepInfo({ currentStep, selectedStep }) {
  const step = steps[selectedStep - 1];
  const status = selectedStep < currentStep ? "Completed" : selectedStep === currentStep ? "In progress" : "Pending";

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={step.name}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="mt-5 rounded-2xl border border-line bg-warm-bg p-4 sm:p-5"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.13em] text-faint">Selected step</p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.025em] text-charcoal">{step.name}</h2>
          </div>
          <span className="inline-flex min-h-11 w-fit items-center rounded-xl border border-line bg-white px-3 text-sm font-bold text-muted">
            {status}
          </span>
        </div>
        <p className="mt-4 text-[15px] leading-7 text-muted">{step.description}</p>
        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto]">
          <div className="rounded-xl border border-line bg-white p-3">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-faint">Example</p>
            <p className="mt-2 text-sm font-semibold text-charcoal">{step.example}</p>
          </div>
          <div className="rounded-xl border border-line bg-white p-3 md:min-w-36">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-faint">Estimate</p>
            <p className="mt-2 text-sm font-semibold text-charcoal">{step.duration}</p>
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}

function CommandPalette({ query, setQuery, onConfirm }) {
  return (
    <div className="rounded-2xl border border-line bg-warm-bg p-3 sm:p-4">
      <label className="flex min-h-11 items-center gap-3 rounded-xl border border-line bg-white px-3 transition duration-200 focus-within:border-accent/60 focus-within:shadow-[0_0_0_4px_rgba(232,96,76,0.13)]">
        <Search size={18} className="shrink-0 text-faint" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-charcoal outline-none placeholder:text-faint"
          placeholder="Search actions..."
        />
      </label>
      <button
        type="button"
        className="mt-3 min-h-11 w-full rounded-xl border border-transparent bg-white px-3 text-left text-sm font-semibold text-charcoal transition duration-200 hover:-translate-y-0.5 hover:border-line hover:bg-accent-wash active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/20"
        onClick={() => onConfirm("Opened migration plan for payments-api.")}
      >
        Open migration plan for payments-api
      </button>
    </div>
  );
}

function QuickAction({ onConfirm }) {
  return (
    <button
      type="button"
      className="flex min-h-full w-full items-center gap-3 rounded-2xl border border-line bg-warm-bg p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-accent-wash active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/20 sm:p-4"
      onClick={() => onConfirm("Provision step prepared and waiting for review.")}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-white">
        <Play size={18} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-black text-charcoal">Run next safe step</span>
        <span className="block text-sm text-muted">Starts Provision after review</span>
      </span>
    </button>
  );
}

function getStepState(stepNumber, currentStep) {
  if (stepNumber < currentStep) return "completed";
  if (stepNumber === currentStep) return "current";
  return "upcoming";
}

function nodeClass(state, selected) {
  const base = "grid h-11 w-11 place-items-center rounded-full text-sm transition duration-200 group-hover:shadow-[0_8px_22px_rgba(31,31,29,0.10)]";
  const states = {
    completed: "border border-charcoal/15 bg-charcoal/10 font-black text-charcoal",
    current: "border border-charcoal/45 bg-white font-black text-charcoal shadow-[0_0_0_8px_rgba(31,31,29,0.08),0_10px_28px_rgba(31,31,29,0.14)]",
    upcoming: "border border-line bg-white text-faint",
  };
  const selection = selected && state !== "current" ? " ring-2 ring-charcoal/25 ring-offset-4 ring-offset-surface" : "";
  return `${base} ${states[state]}${selection}`;
}
