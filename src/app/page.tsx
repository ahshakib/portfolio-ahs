"use client";

import ContactPanel from "@/components/contact/ContactPanel";
import BootSequence from "@/components/hero/BootSequence";
import HeroCard from "@/components/hero/HeroCard";
import AlgoHeatmap from "@/components/problem-solving/AlgoHeatmap";
import ProjectDock from "@/components/projects/ProjectDock";
import TechRadar from "@/components/skills/TechRadar";
import JourneyLine from "@/components/timeline/JourneyLine";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <main className="min-h-screen bg-midnight-navy text-foreground overflow-hidden selection:bg-neon-cyan selection:text-midnight-navy">
      <AnimatePresence mode="wait">
        {isBooting ? (
          <motion.div
            key="boot"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BootSequence onComplete={() => setIsBooting(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-4 py-12 space-y-24"
          >
            <section className="min-h-[80vh] flex items-center justify-center">
              <HeroCard />
            </section>
            
            <section className="py-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-soft-purple">
                Technical Proficiency
              </h2>
              <TechRadar />
            </section>

            <section className="py-20 px-4 md:px-0">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                Featured Projects
              </h2>
              <ProjectDock />
            </section>

            <section className="py-20 px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-soft-purple">
                Problem Solving
              </h2>
              <AlgoHeatmap />
            </section>

            <section className="py-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                My Journey
              </h2>
              <JourneyLine />
            </section>

            <section className="py-20 px-4">
              <ContactPanel />
            </section>
            
            <footer className="py-8 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Aftab Hossain Shakib. All rights reserved.
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
