"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { ArrowIcon } from "@/components/ui/icons";

export function ProcessTimeline() {
  const [active, setActive] = useState(1);

  return (
    <section id="process" className="relative border-b border-line bg-ink py-20 sm:py-24">
      <div className="absolute inset-0 noise opacity-80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-blueprint">Process</p>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-studio sm:text-5xl">
            A transparent journey from concept to completion.
          </h2>
        </div>

        <div className="thin-scrollbar mt-14 overflow-x-auto pb-7">
          <div className="relative grid min-w-[860px] grid-cols-5 gap-0">
            <div className="absolute left-[9%] right-[9%] top-10 h-px bg-studio/22" />
            <motion.div
              className="absolute left-[9%] top-10 h-px bg-blueprint shadow-blue"
              initial={{ width: "0%" }}
              whileInView={{ width: "82%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
            />
            {timeline.map((item, index) => {
              const isActive = active === index;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className="relative flex min-h-[260px] flex-col items-center px-4 text-center"
                >
                  <motion.span
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      boxShadow: isActive
                        ? "0 0 32px rgba(0, 123, 255, 0.62)"
                        : "0 0 0 rgba(0, 123, 255, 0)"
                    }}
                    className={`relative z-10 grid h-20 w-20 place-items-center rounded-full border ${
                      isActive ? "border-blueprint text-blueprint" : "border-studio/54 text-studio"
                    } bg-ink transition-colors duration-300`}
                  >
                    <span className="font-display text-2xl">{item.step}</span>
                  </motion.span>
                  <span className="mt-6 font-display text-xl font-medium text-studio">{item.title}</span>
                  <span className="mt-3 max-w-[180px] text-sm leading-6 text-studio/58">{item.body}</span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={timeline[active].title}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md border border-blueprint/70 bg-blueprint/[0.07] p-5 shadow-blue"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blueprint">
            Active Stage {timeline[active].step}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold">{timeline[active].title}</h3>
          <ul className="mt-4 space-y-2 text-sm text-studio/72">
            {["Space planning", "Dimensioned drawings", "Material & finish planning", "MEP coordination"].map(
              (item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-blueprint" />
                  {item}
                </li>
              )
            )}
          </ul>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.14em] text-blueprint"
          >
            See Sample Plan <ArrowIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
