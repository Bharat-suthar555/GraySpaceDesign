"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { BlueprintPlan, SpecBlock } from "@/components/ui/blueprint";
import { ArrowIcon, BlueprintMark, FacebookIcon, InstagramIcon, PhoneIcon } from "@/components/ui/icons";

const inputClass =
  "h-12 w-full border border-neutral-800 bg-ink/80 px-4 text-sm text-studio outline-none transition-colors placeholder:text-studio/38 focus:border-blueprint";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div className="absolute inset-0 blueprint-grid opacity-25" />
      <div className="absolute inset-0 noise opacity-70" />
      <BlueprintPlan className="absolute -bottom-14 right-0 h-[360px] w-[460px] text-studio/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[12px] uppercase tracking-widest text-blueprint">Contact</p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-studio sm:text-5xl">
              Let's design something timeless.
            </h2>
            <SpecBlock className="mt-6" items={["Client Intake", "Scale: 1:1", "Studio Location"]} />
            <div className="mt-9 space-y-5 text-studio/76">
              <a href="tel:8094325459" className="flex items-center gap-4 transition-colors hover:text-blueprint">
                <PhoneIcon />
                <span>+91 8094325459</span>
              </a>
              <a
                href="https://www.instagram.com/grayspace_design_/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 transition-colors hover:text-blueprint"
              >
                <InstagramIcon />
                <span>gray_space__design</span>
              </a>
              <a
                href="https://www.facebook.com/ldarchitect555/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 transition-colors hover:text-blueprint"
              >
                <FacebookIcon />
                <span>LD Architect</span>
              </a>
            </div>
            <a
              href="https://maps.app.goo.gl/afr5tsJqGC1LedzH7"
              target="_blank"
              rel="noreferrer"
              className="crosshair mt-9 inline-flex h-12 items-center justify-center gap-4 border border-neutral-700 px-6 font-mono text-[12px] uppercase tracking-[0.16em] text-studio transition-colors hover:border-blueprint"
            >
              Open Studio Map <ArrowIcon />
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="technical-frame border border-neutral-800 bg-ink/60 p-4 lg:p-6"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input id="name" name="name" required placeholder="Your Name" className={inputClass} />
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input id="email" name="email" type="email" required placeholder="Email Address" className={inputClass} />
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input id="phone" name="phone" required placeholder="Phone Number" className={inputClass} />
              <label className="sr-only" htmlFor="service">
                Service Needed
              </label>
              <select id="service" name="service" required className={inputClass}>
                <option value="">Service Needed</option>
                <option>Interior Design</option>
                <option>Exterior Design</option>
                <option>2D & 3D Visualization</option>
                <option>Turnkey Construction</option>
              </select>
            </div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project"
              className={`${inputClass} mt-3 h-32 resize-none py-4`}
            />
            <button
              type="submit"
              className="crosshair mt-3 inline-flex h-12 w-full items-center justify-center gap-4 border border-blueprint bg-blueprint px-7 font-mono text-[12px] uppercase tracking-[0.16em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              {sent ? "Message Ready" : "Send Message"} <ArrowIcon />
            </button>
            {sent && (
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-blueprint">
                Thank you. Please call +91 8094325459 for fastest confirmation.
              </p>
            )}
          </motion.form>
        </div>

        <footer className="mt-20 flex flex-col gap-6 border-t border-neutral-800 pt-8 text-sm text-studio/58 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="flex items-center gap-3 text-studio">
            <BlueprintMark className="h-9 w-9" />
            <span className="font-display text-lg font-semibold">Gray Space Design</span>
          </a>
          <p>© 2026 Gray Space Design. All rights reserved.</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em]">Designed & Built with precision.</p>
        </footer>
      </div>
    </section>
  );
}
