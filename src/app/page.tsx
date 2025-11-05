import { HeroSection } from "@/components/hero/hero";
import { BackgroundGrid } from "@/components/background-grid";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#architecture", label: "Platform" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#security", label: "Security" },
  { href: "#insights", label: "Insights" }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundGrid />
      <div className="relative z-10">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 text-white">
          <div className="flex items-center gap-8">
            <div className="text-xl font-semibold tracking-tight text-white">NeuraForge</div>
            <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a href="mailto:enterprise@neuraforge.ai" className="text-sm text-white/70 hover:text-white">
              enterprise@neuraforge.ai
            </a>
            <Button size="md" href="https://cal.com/" target="_blank" rel="noreferrer">
              Talk to us
            </Button>
          </div>
        </header>

        <HeroSection />

        <section
          id="use-cases"
          className="mx-auto mb-28 grid max-w-6xl gap-8 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-white/70 backdrop-blur-md sm:grid-cols-3"
        >
          <UseCase
            title="Autonomous Ops"
            copy="Resolve finance, supply-chain, and IT workflows with guardrailed agents that act on clean operational telemetry."
          />
          <UseCase
            title="Expert Copilots"
            copy="Deliver multimodal copilots with contextual recall, policy awareness, and explainable decisions across every role."
          />
          <UseCase
            title="AI Governance"
            copy="Monitor, audit, and route every agent action with system-of-record fidelity and enterprise-grade compliance."
          />
        </section>

        <section
          id="security"
          className="mx-auto mb-24 flex max-w-6xl flex-col gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent p-10 text-white/70 backdrop-blur-xl lg:flex-row"
        >
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/70">
              Security
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Built for the most regulated enterprises on the planet
            </h3>
            <p className="text-sm text-white/60">
              End-to-end encryption, private network deployment, and deterministic guardrails keep every workflow verifiable and compliant.
            </p>
          </div>
          <div className="grid flex-1 gap-4 text-sm text-white/60 sm:grid-cols-2">
            <SecurityItem title="Zero-trust fabric" description="Isolated runtime planes, signed agents, and policy-based entitlements down to every action." />
            <SecurityItem title="Data residency" description="Single-tenant storage, region pinning, and customer-managed keys for regulatory alignment." />
            <SecurityItem title="Continuous compliance" description="SOC 2 Type II, HIPAA, GDPR, and FedRAMP-ready controls mapped to every workflow stage." />
            <SecurityItem title="Audit time travel" description="Replayable workflow ledgers with reason-for-action detail for every autonomous decision." />
          </div>
        </section>

        <section
          id="insights"
          className="mx-auto mb-28 max-w-6xl space-y-8 rounded-[32px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-lg"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Operator insights</h3>
              <p className="mt-2 max-w-xl text-sm text-white/60">
                Deep dives on orchestrating autonomous workflows, knowledge orchestration, and AI governance best practices.
              </p>
            </div>
            <Button variant="secondary" href="https://neuraforge.ai/insights" className="self-start sm:self-auto">
              View the library
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <InsightCard
              title="Playbook design for cross-functional agent teams"
              description="How Fortune 100 operators build reusable task graphs that respect policy, compliance, and latency SLAs."
              tag="Workflow design"
            />
            <InsightCard
              title="Quantifying trust in multimodal enterprise copilots"
              description="A practical framework to measure recall, reliability, and explainability across every interaction surface."
              tag="AI assurance"
            />
            <InsightCard
              title="The governance stack for agentic automation"
              description="What it takes to operationalize agent approvals, intervention layers, and audit trails in regulated environments."
              tag="Governance"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function UseCase({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-base font-semibold text-white">{title}</p>
      <p className="mt-3 text-sm text-white/60">{copy}</p>
    </div>
  );
}

function SecurityItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-xs text-white/60">{description}</p>
    </div>
  );
}

function InsightCard({
  title,
  description,
  tag
}: {
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
      <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/60">
        {tag}
      </span>
      <p className="text-lg font-semibold text-white">{title}</p>
      <p className="text-sm text-white/60">{description}</p>
      <a
        href="https://neuraforge.ai/insights"
        className="mt-auto text-sm font-medium text-sky-300 transition hover:text-sky-200"
      >
        Read more →
      </a>
    </div>
  );
}
