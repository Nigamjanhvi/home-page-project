import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 70, suffix: "%", label: "Design goal for reducing manual migration steps" },
  { value: 6, suffix: "", label: "DevOps workflow areas Cairn can prepare per service" },
  { value: 15, suffix: " min", label: "Target rollback plan window for reviewed cutovers" },
];

export default function MetricsSection() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-line bg-white py-18">
      <div className="page-shell">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.14em] text-accent">Estimated capabilities</p>
        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <article className="rounded-2xl border border-line bg-warm-bg p-6" key={metric.label}>
              <p className="text-4xl font-black tracking-[-0.045em] text-charcoal">
                <CountUp target={metric.value} start={started} />
                {metric.suffix}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">{metric.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ target, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    let frame;
    const duration = 900;
    const startedAt = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return value;
}
