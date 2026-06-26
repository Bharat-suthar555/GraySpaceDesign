"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (index: number) => ({
    pathLength: 1,
    opacity: 1,
      transition: {
        duration: 1.5,
        delay: index * 0.08,
        ease
      }
  })
};

const planPaths = [
  "M24 32H176V88H236V174H24V32Z",
  "M24 88H176M88 32V174M142 88V174",
  "M176 88V128H236",
  "M88 116c22 0 38 14 38 36",
  "M142 128c22 0 36-15 36-40",
  "M42 32v-14h92v14M42 18h92",
  "M236 108h14v44h-14M250 108v44",
  "M24 196H236M24 188v16M236 188v16"
];

export function BlueprintPlan({
  className = "",
  labels = false,
  animated = true
}: {
  className?: string;
  labels?: boolean;
  animated?: boolean;
}) {
  return (
    <svg className={className} viewBox="0 0 270 220" fill="none" aria-hidden="true">
      {planPaths.map((path, index) => (
        <motion.path
          key={path}
          d={path}
          stroke={index === 0 ? "#007BFF" : "currentColor"}
          strokeWidth={index === 0 ? 1.2 : 0.85}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="square"
          strokeLinejoin="miter"
          variants={draw}
          custom={index}
          initial={animated ? "hidden" : false}
          whileInView={animated ? "visible" : undefined}
          viewport={{ once: true, margin: "-90px" }}
        />
      ))}
      {["11725 mm", "7000 mm", "SCALE 1:50"].map((text, index) => (
        <motion.text
          key={text}
          x={index === 0 ? 70 : index === 1 ? 206 : 28}
          y={index === 0 ? 13 : index === 1 ? 102 : 215}
          className="fill-neutral-500 font-mono text-[7px] uppercase tracking-[0.22em]"
          initial={animated ? { opacity: 0 } : false}
          whileInView={animated ? { opacity: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + index * 0.12, duration: 0.5 }}
        >
          {text}
        </motion.text>
      ))}
      {labels && (
        <g className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <RoomTag x={40} y={55} label="LIVING AREA" />
          <RoomTag x={96} y={138} label="BEDROOM" />
          <RoomTag x={158} y={126} label="STUDIO" />
          <RoomTag x={184} y={62} label="KITCHEN" />
        </g>
      )}
    </svg>
  );
}

function RoomTag({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={label.length * 5.3 + 12}
        height="15"
        fill="rgba(13,13,13,0.86)"
        stroke="rgba(250,250,250,0.28)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <text x={x + 6} y={y + 10.5} className="fill-studio font-mono text-[6.5px] uppercase tracking-[0.18em]">
        {label}
      </text>
    </g>
  );
}

export function TechnicalFrame({
  children,
  className = "",
  label = "11725 mm",
  labelSide = "top"
}: {
  children: ReactNode;
  className?: string;
  label?: string;
  labelSide?: "top" | "bottom" | "right";
}) {
  const labelClass =
    labelSide === "right"
      ? "right-[-34px] top-1/2 -translate-y-1/2 rotate-90"
      : labelSide === "bottom"
        ? "bottom-[-22px] left-4"
        : "left-4 top-[-22px]";

  return (
    <div className={`technical-frame relative border border-neutral-800 ${className}`}>
      <span className={`pointer-events-none absolute font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500 ${labelClass}`}>
        {label}
      </span>
      {children}
    </div>
  );
}

export function SpecBlock({
  items,
  className = ""
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={`grid gap-1.5 border-l border-blueprint pl-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 ${className}`}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
