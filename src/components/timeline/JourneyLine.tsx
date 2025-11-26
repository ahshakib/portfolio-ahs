"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { useRef } from "react";

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  icon: React.ReactNode;
  type: "education" | "certification" | "experience";
}

const timelineData: TimelineItem[] = [
  {
    id: "edu-1",
    title: "B.Sc (Engg.) in Computer Science & Engineering",
    subtitle: "Comilla University, Comilla",
    date: "01/2019 – 01/2024",
    description: "CGPA: 3.34",
    icon: <GraduationCap className="w-6 h-6" />,
    type: "education",
  },
  {
    id: "cert-1",
    title: "MERN & PERN Full-Stack Bootcamp",
    subtitle: "BongoDev",
    date: "2023",
    icon: <Award className="w-6 h-6" />,
    type: "certification",
  },
  {
    id: "cert-2",
    title: "Back End Development and APIs",
    subtitle: "freeCodeCamp",
    date: "2023",
    icon: <Award className="w-6 h-6" />,
    type: "certification",
  },
  {
    id: "cert-3",
    title: "JavaScript Algorithms and Data Structures",
    subtitle: "freeCodeCamp",
    date: "2022",
    icon: <Award className="w-6 h-6" />,
    type: "certification",
  },
];

export default function JourneyLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto px-4">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full">
        <motion.div
          style={{ height }}
          className="w-full bg-gradient-to-b from-neon-cyan via-soft-purple to-neon-cyan rounded-full shadow-[0_0_10px_var(--color-neon-cyan)]"
        />
      </div>

      <div className="space-y-12 md:space-y-24">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content Card */}
            <div className="flex-1 ml-12 md:ml-0">
              <div className="bg-midnight-navy border border-white/10 p-6 rounded-xl hover:border-neon-cyan/50 transition-colors group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-neon-cyan font-mono">{item.date}</span>
                  <div className="p-2 rounded-full bg-white/5 text-white group-hover:text-neon-cyan transition-colors md:hidden">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-soft-purple font-medium">{item.subtitle}</p>
                {item.description && (
                  <p className="text-gray-400 mt-2 text-sm">{item.description}</p>
                )}
              </div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-midnight-navy border-2 border-neon-cyan flex items-center justify-center z-10 shadow-[0_0_15px_var(--color-neon-cyan)]">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>

            {/* Empty Space for alignment */}
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
