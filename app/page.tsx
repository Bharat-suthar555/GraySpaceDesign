"use client";

import { Contact } from "@/components/sections/contact";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Services } from "@/components/sections/services";
import { SiteHeader } from "@/components/sections/site-header";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-studio">
      <SiteHeader />
      <Hero />
      <Services />
      <ProcessTimeline />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}
