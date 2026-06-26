"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowIcon } from "@/components/ui/icons";

const textEase = [0.16, 1, 0.3, 1] as const;

function BlueprintOverlay() {
  const paths = [
    "M38 128H268V76h88v178H38V128Z",
    "M88 128v126M152 128v126M212 128v126M268 128v126",
    "M38 180h318M38 218h318",
    "M122 254c0-34 22-58 55-62",
    "M296 76v178M314 76v178",
    "M54 104h76M54 94v20M130 94v20",
    "M228 52h96M228 42v20M324 42v20"
  ];

  return (
    <svg
      className="absolute left-[42%] top-28 h-[360px] w-[480px] max-w-none text-studio/24 opacity-45 mix-blend-screen sm:left-[28%] sm:top-24 sm:h-[390px] sm:w-[520px] sm:text-studio/46 sm:opacity-80"
      viewBox="0 0 420 330"
      fill="none"
      aria-hidden="true"
    >
      {paths.map((path, index) => (
        <motion.path
          key={path}
          d={path}
          stroke={index === 0 ? "#007BFF" : "currentColor"}
          strokeWidth={index === 0 ? 1.25 : 0.8}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="square"
          strokeLinejoin="miter"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: index === 0 ? 0.75 : 0.48 }}
          transition={{
            duration: 1.6,
            delay: 0.25 + index * 0.13,
            ease: "easeInOut"
          }}
        />
      ))}
      {["6700 mm", "3020 mm", "2100 mm", "4500 mm"].map((label, index) => (
        <motion.text
          key={label}
          x={214 + index * 26}
          y={62 + index * 30}
          className="fill-studio/54 font-mono text-[9px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 + index * 0.18 }}
        >
          {label}
        </motion.text>
      ))}
    </svg>
  );
}

export function Hero() {
  const { scrollYProgress } = useScroll();
  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.24], [0.9, 1]);

  return (
    <section className="relative min-h-[700px] overflow-hidden border-b border-neutral-800 bg-ink pt-16 lg:min-h-[740px]">
      <div className="absolute inset-0 blueprint-grid opacity-80" />
      <div className="absolute inset-0 border-y border-white/[0.03]" />
      <div className="absolute inset-0 noise" />
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-y-16 right-0 w-full md:w-[68%]"
      >
        <Image
          src="/images/hero-residence.png"
          alt="Luxury modern concrete and glass residence by Gray Space Design"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 68vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/52 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/36" />
      </motion.div>
      <motion.div style={{ opacity: blueprintOpacity }} className="absolute inset-0">
        <BlueprintOverlay />
      </motion.div>

      <div className="relative z-10 mx-auto grid min-h-[calc(700px-4rem)] max-w-7xl items-center px-4 py-14 sm:px-6 lg:min-h-[calc(740px-4rem)] lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: textEase }}
            className="max-w-[760px] font-display text-[clamp(3rem,5.4vw,5.9rem)] font-bold leading-[0.94] tracking-normal text-studio"
          >
            Architecture From Blueprint To Built Reality
          </motion.h1>
          <motion.p
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.42, ease: textEase }}
            className="mt-6 max-w-xl text-base leading-8 text-studio/74 sm:text-lg"
          >
            Industrial luxury interiors, exterior concepts, 2D/3D visualization, and turnkey construction led by{" "}
            <span className="text-blueprint">Lalit Suthar</span>.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.58, ease: textEase }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#work"
              className="crosshair inline-flex h-12 items-center justify-center gap-4 border border-blueprint bg-blueprint px-7 font-mono text-[12px] uppercase tracking-[0.16em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Projects <ArrowIcon />
            </a>
            <a
              href="#contact"
              className="crosshair inline-flex h-12 items-center justify-center gap-4 border border-neutral-700 px-7 font-mono text-[12px] uppercase tracking-[0.16em] text-studio transition-colors duration-300 hover:border-blueprint"
            >
              Start Consultation <ArrowIcon />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.9 }}
            className="mt-12 font-mono text-[11px] uppercase leading-6 tracking-[0.18em] text-studio/58"
          >
            <p>GS-2026</p>
            <p>
              Design <span className="mx-2 text-blueprint">|</span> Visualize{" "}
              <span className="mx-2 text-blueprint">|</span> Build
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
