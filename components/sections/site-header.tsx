"use client";

import { motion } from "framer-motion";
import { BlueprintMark } from "@/components/ui/icons";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-neutral-800 bg-ink/82 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 text-studio">
          <BlueprintMark className="h-9 w-9 text-studio" />
          <span className="font-display text-base font-semibold sm:text-lg">Gray Space Design</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="crosshair group relative px-1 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-studio/74 transition-colors duration-300 hover:text-studio"
            >
              {item.label}
              <motion.span
                initial={index === 0 ? { scaleX: 1 } : { scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute -bottom-3 left-0 h-px w-full origin-left bg-blueprint"
              />
            </a>
          ))}
        </nav>
        <a
          href="tel:8094325459"
          className="crosshair border border-neutral-700 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-studio/86 transition-colors duration-300 hover:border-blueprint hover:text-studio"
        >
          Call
        </a>
      </div>
    </motion.header>
  );
}
