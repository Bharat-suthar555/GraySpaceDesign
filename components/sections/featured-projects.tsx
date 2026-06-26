"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { filters, projects } from "@/lib/data";
import { ArrowIcon } from "@/components/ui/icons";

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="relative border-b border-line bg-panel/55 py-20 sm:py-24">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-blueprint">Work</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-studio sm:text-5xl">
              Featured Projects
            </h2>
          </div>
          <div className="thin-scrollbar flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`h-10 shrink-0 border px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                  activeFilter === filter
                    ? "border-blueprint bg-blueprint text-white"
                    : "border-line text-studio/72 hover:border-blueprint hover:text-studio"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 22, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group overflow-hidden border border-line bg-ink"
              >
                <div className="grid grid-cols-3 border-b border-line font-mono text-[10px] uppercase tracking-[0.18em] text-studio/58">
                  <span className="border-r border-line px-4 py-3">2D Plan</span>
                  <span className="border-r border-line px-4 py-3">3D Render</span>
                  <span className="px-4 py-3">Built</span>
                </div>
                <div className="relative h-56 overflow-hidden bg-ink">
                  <Image
                    src="/images/blueprint-texture.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src={project.image}
                    alt={`${project.title} finished project`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-0 transition-all duration-700 ease-premium group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-y-0 left-1/3 w-px bg-studio/45 transition-transform duration-500 group-hover:translate-x-10" />
                  <div className="absolute inset-y-0 left-2/3 w-px bg-studio/45 transition-transform duration-500 group-hover:-translate-x-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-medium text-studio">{project.title}</h3>
                  <p className="mt-2 text-sm text-studio/62">
                    {project.type} <span className="mx-2 text-blueprint">-</span> {project.location}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.14em] text-blueprint"
                  >
                    View Project <ArrowIcon />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
