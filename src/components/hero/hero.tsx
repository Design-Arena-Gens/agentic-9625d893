"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Database,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";

const pipelineStages = [
  {
    key: "ingest",
    title: "Intelligent Ingestion",
    blurb: "Turn any enterprise content — PDFs, tickets, call transcripts, design files — into harmonized, queryable knowledge.",
    icon: <Database className="h-6 w-6 text-sky-300" />,
    metrics: [
      { label: "Source adapters", value: "120+" },
      { label: "Latency", value: "<180ms" },
      { label: "PII scrubbing", value: "Built-in" }
    ],
    gradient: "from-sky-500/80 via-blue-600/70 to-indigo-700/70"
  },
  {
    key: "orchestrate",
    title: "Workflow Orchestration",
    blurb: "Compose domain-specific playbooks, governance, and guardrails that let agents act with enterprise context and compliance.",
    icon: <Workflow className="h-6 w-6 text-emerald-300" />,
    metrics: [
      { label: "Policy engine", value: "Deterministic" },
      { label: "Graph depth", value: "25 hops" },
      { label: "Audit trails", value: "Real-time" }
    ],
    gradient: "from-emerald-500/80 via-teal-500/70 to-cyan-600/60"
  },
  {
    key: "deploy",
    title: "Agentic Deployment",
    blurb: "Stream enriched signals into multimodal copilots, autonomous agents, and LLMs that actually understand your business.",
    icon: <Bot className="h-6 w-6 text-purple-300" />,
    metrics: [
      { label: "Agent runtime", value: "Hybrid" },
      { label: "Routing success", value: "98.7%" },
      { label: "LLM agnostic", value: "Yes" }
    ],
    gradient: "from-purple-500/80 via-fuchsia-500/70 to-rose-500/60"
  }
];

const trustLogos = [
  "Helios Aerospace",
  "Aperture Health",
  "Nordwind Logistics",
  "DeepForge Capital",
  "Zenith Systems",
  "Parallax Retail"
];

const proofPoints = [
  {
    value: "35%",
    label: "Faster agent resolution across enterprise ops"
  },
  {
    value: "92%",
    label: "Reduction in manual tagging & triage time"
  },
  {
    value: "11x",
    label: "Increase in reusable workflow assets"
  }
];

export function HeroSection() {
  const [active, setActive] = useState(pipelineStages[0]);

  const gradientClass = useMemo(() => {
    return `bg-gradient-to-br ${active.gradient}`;
  }, [active.gradient]);

  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-28 lg:pt-32">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-sky-300" />
            <span>Workflow Intelligence for Autonomous Enterprises</span>
          </div>
          <div>
            <motion.h1
              className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Turn proprietary chaos into orchestrated intelligence for the next generation of AI.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg text-white/70 sm:text-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              NeuraForge unifies your unstructured knowledge, compliance rules, and operational playbooks into a dynamic workflow fabric that every AI agent and multimodal copilot can trust.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Button size="lg" href="https://cal.com/" target="_blank" rel="noreferrer">
              Book a demo
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              href="#architecture"
              className="group border-white/20 text-white/80 transition hover:text-white"
            >
              Explore the architecture
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </motion.div>
          <motion.div
            className="grid gap-6 sm:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {proofPoints.map((point) => (
              <div key={point.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-3xl font-semibold text-white">{point.value}</div>
                <div className="mt-2 text-sm text-white/60">{point.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative flex h-full min-h-[400px] flex-col justify-between rounded-[40px] border border-white/10 bg-white/[0.08] p-8 shadow-[0_35px_120px_rgba(13,29,69,0.6)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[40px]">
            <div className={clsx("absolute inset-0 opacity-60 blur-3xl", gradientClass)} />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-slate-900/40 to-slate-900/60" />
          </div>

          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Signal graph</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Enterprise brain preview</h3>
            </div>
            <ShieldCheck className="h-6 w-6 text-emerald-300" />
          </div>

          <div className="relative mt-8 flex flex-col gap-5">
            <div className="flex gap-2">
              {pipelineStages.map((stage) => (
                <button
                  key={stage.key}
                  onMouseEnter={() => setActive(stage)}
                  onFocus={() => setActive(stage)}
                  className={clsx(
                    "group relative flex-1 overflow-hidden rounded-2xl border px-4 py-3 text-left transition",
                    stage.key === active.key
                      ? "border-white/20 bg-white/10 shadow-[0_18px_45px_rgba(14,52,104,0.35)]"
                      : "border-white/5 bg-white/[0.04] hover:border-white/15 hover:bg-white/[0.08]"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 text-sm font-medium text-white/80">
                    <span>{stage.title}</span>
                    <motion.div
                      className="rounded-full bg-white/10 p-2"
                      animate={{
                        scale: stage.key === active.key ? 1.05 : 1
                      }}
                      transition={{ type: "spring", stiffness: 230, damping: 18 }}
                    >
                      {stage.icon}
                    </motion.div>
                  </div>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/10 opacity-70" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white/10 p-3">{active.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{active.title}</h4>
                      <p className="text-sm text-white/60">{active.blurb}</p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {active.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70"
                      >
                        <p className="text-xs uppercase tracking-[0.22em] text-white/40">{metric.label}</p>
                        <p className="mt-1 text-base font-semibold text-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative mt-8 flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4 text-sm text-white/70">
            <div className="flex items-center gap-3">
              <Network className="h-5 w-5 text-sky-300" />
              <span>Live knowledge graph sync active · 87 data planes orchestrated</span>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px] shadow-emerald-300" />
              Stable
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 grid gap-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/50">
          <span className="mr-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-white/60">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
            Trusted by AI-first enterprises
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="animate-marquee flex min-w-full items-center gap-12 whitespace-nowrap text-white/40">
              {trustLogos.map((logo) => (
                <span key={logo} className="text-sm uppercase tracking-[0.35em]">
                  {logo}
                </span>
              ))}
              {trustLogos.map((logo) => (
                <span key={`${logo}-clone`} className="text-sm uppercase tracking-[0.35em]">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          id="architecture"
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(78,132,255,0.3),transparent_45%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/70">
                Blueprint
              </div>
              <h2 className="text-2xl font-semibold text-white">
                An end-to-end intelligence fabric your agents can trust
              </h2>
              <div className="grid gap-5 text-sm text-white/70">
                <Item
                  title="Capture"
                  description="Adapters normalize every content format — audio, video, structured, unstructured — into a governed knowledge atlas."
                />
                <Item
                  title="Compose"
                  description="Dynamic workflow graph maps roles, decisions, compliance, and escalation logic directly into agent toolkits."
                />
                <Item
                  title="Activate"
                  description="Streaming API and agent SDK push context, intent, and actions into multimodal AI surfaces in milliseconds."
                />
              </div>
            </div>
            <motion.div
              className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/10 p-2">
                    <Sparkles className="h-5 w-5 text-sky-300" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Workflow telemetry</p>
                    <p className="text-base font-semibold text-white">Live signal density</p>
                  </div>
                </div>
                <motion.span
                  className="text-2xl font-semibold text-white"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                >
                  98.7%
                </motion.span>
              </div>
              <div className="relative mt-4 h-40 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
                <Waveform />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <div className="flex items-center gap-3 text-white/70">
                    <Bot className="h-4 w-4 text-purple-300" />
                    Multi-agent toolkit deployment
                  </div>
                  <span className="text-xs text-emerald-300">Synced</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <div className="flex items-center gap-3 text-white/70">
                    <Sparkles className="h-4 w-4 text-sky-300" />
                    Adaptive runbooks generated
                  </div>
                  <span className="text-xs text-emerald-300">Auto</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <div className="flex items-center gap-3 text-white/70">
                    <ArrowUpRight className="h-4 w-4 text-emerald-300" />
                    Human-in-the-loop approvals
                  </div>
                  <span className="text-xs text-emerald-300">Compliant</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 h-2 w-2 flex-none rounded-full bg-gradient-to-br from-sky-300 via-brand-400 to-indigo-400 shadow-[0_0_12px_rgba(79,140,255,0.7)]" />
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-white/60">{description}</p>
      </div>
    </div>
  );
}

function Waveform() {
  const lines = Array.from({ length: 42 }, (_, i) => i);

  return (
    <div className="flex h-full w-full items-end justify-around p-4">
      {lines.map((line) => (
        <motion.span
          key={line}
          className="w-1 rounded-full bg-gradient-to-t from-brand-500/40 via-brand-400/70 to-white/80"
          animate={{
            height: [
              `${Math.max(24, (line % 5) * 28 + 20)}%`,
              `${Math.max(28, ((line + 1) % 5) * 32 + 20)}%`,
              `${Math.max(22, (line % 4) * 30 + 20)}%`
            ]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2.8 + (line % 6) * 0.12,
            ease: "easeInOut",
            delay: line * 0.03
          }}
        />
      ))}
    </div>
  );
}
