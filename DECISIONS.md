# Decisions

## Chosen Track

I chose Part 2, the premium home page track. Cairn is an invented but realistic product: a migration assistant that turns a service assessment into reviewed infrastructure, CI/CD, monitoring, and rollback steps.

## Why This Direction

I focused the page around one concrete product workflow instead of broad cloud-migration marketing. The `payments-api` migration showcase gives visitors a real object to inspect: a five-step pipeline, selected-step details, examples, estimates, a command search surface, and a safe next action. That felt stronger than a generic SaaS landing page because the assessment asks to show the product, not only claim benefits.

The main visual system is quiet and operational: warm background, white surfaces, strong type, restrained borders, and muted supporting copy. I avoided fake logos, fabricated testimonials, and inflated user metrics. The metrics are labeled as design goals or target capabilities rather than pretending they are proven customer results.

## Trade-Off

Under the time limit, I built a polished frontend prototype rather than wiring real migration logic or account creation. With a real week, I would add a small mocked backend flow for the request-access CTA, persist selected pipeline state, add automated visual regression checks at 390px and 1440px, and test the interaction states with React Testing Library or Playwright.

## Motion And Interaction

Motion is intentionally limited. The hero has one ambient pipeline animation, and the product card has lightweight state transitions where they help explain the workflow. The ProductShowcase tracker separates actual progress from selected detail view: current progress stays fixed on step 3, while selected information can move freely.

## AI Usage

I used AI assistance to iterate on component structure, copy, styling, and bug fixes. I personally reviewed the generated changes, adjusted the product behavior, kept generated/build output out of Git with `.gitignore`, and verified the production build with `npm.cmd run build`.

