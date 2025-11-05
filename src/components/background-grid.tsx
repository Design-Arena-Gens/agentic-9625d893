"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export function BackgroundGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;
    const x = Math.sin(t / 20000) * 20;
    const y = Math.cos(t / 18000) * 20;
    ref.current.style.setProperty("--tw-translate-x", `${x}px`);
    ref.current.style.setProperty("--tw-translate-y", `${y}px`);
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,63,255,0.25),transparent_55%)]" />
      <motion.div
        ref={ref}
        className="absolute inset-[-40%] translate-x-0 translate-y-0 rounded-[45%] bg-[conic-gradient(from_90deg,rgba(61,110,255,0.18),rgba(10,20,48,0.05),rgba(10,20,48,0.4))] opacity-80 blur-[120px]"
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        animate={{ rotate: [0, 5, 0] }}
      />
      <div className="absolute inset-0">
        <svg className="h-full w-full opacity-[0.18]" viewBox="0 0 400 400">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}
