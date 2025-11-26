"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaDatabase } from "react-icons/fa";
import {
    SiCplusplus,
    SiDocker,
    SiExpress,
    SiGit,
    SiGo, SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVercel
} from "react-icons/si";

interface Skill {
  name: string;
  category: "Core" | "Frameworks" | "Tools";
  level: string;
  angle: number; // Position on the circle (degrees)
  radius: number; // Distance from center (percentage)
  icon: React.ElementType;
  color: string; // Brand color
}

const skills: Skill[] = [
  // Ring 1: Core Skills (Inner)
  { name: "Go", category: "Core", level: "Intermediate", angle: 0, radius: 20, icon: SiGo, color: "#00ADD8" },
  { name: "JavaScript", category: "Core", level: "Advanced", angle: 72, radius: 20, icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", category: "Core", level: "Beginner", angle: 144, radius: 20, icon: SiTypescript, color: "#3178C6" },
  { name: "C++", category: "Core", level: "Intermediate", angle: 216, radius: 20, icon: SiCplusplus, color: "#00599C" },
  { name: "SQL", category: "Core", level: "Intermediate", angle: 288, radius: 20, icon: FaDatabase, color: "#4479A1" },

  // Ring 2: Frameworks (Middle)
  { name: "Next.js", category: "Frameworks", level: "Intermediate", angle: 36, radius: 50, icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React", category: "Frameworks", level: "Intermediate", angle: 108, radius: 50, icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", category: "Frameworks", level: "Intermediate", angle: 180, radius: 50, icon: SiNodedotjs, color: "#339933" },
  { name: "Express", category: "Frameworks", level: "Intermediate", angle: 252, radius: 50, icon: SiExpress, color: "#FFFFFF" },
  { name: "Tailwind", category: "Frameworks", level: "Intermediate", angle: 324, radius: 50, icon: SiTailwindcss, color: "#06B6D4" },

  // Ring 3: Tools & DBs (Outer)
  { name: "PostgreSQL", category: "Tools", level: "Beginner", angle: 18, radius: 80, icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", category: "Tools", level: "Intermediate", angle: 90, radius: 80, icon: SiMongodb, color: "#47A248" },
  { name: "Git", category: "Tools", level: "Intermediate", angle: 162, radius: 80, icon: SiGit, color: "#F05032" },
  { name: "Docker", category: "Tools", level: "Beginner", angle: 234, radius: 80, icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", category: "Tools", level: "Beginner", angle: 306, radius: 80, icon: SiVercel, color: "#FFFFFF" },
];

export default function TechRadar() {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  return (
    <div className="relative w-full max-w-sm md:max-w-2xl mx-auto aspect-square flex items-center justify-center px-4">
      {/* Radar Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[20, 50, 80].map((radius, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ delay: i * 0.2, duration: 1 }}
            className="absolute rounded-full border border-neon-cyan"
            style={{ width: `${radius * 2}%`, height: `${radius * 2}%` }}
          />
        ))}
        {/* Rotating Scan Line */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformOrigin: "center" }}
        >
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-neon-cyan/40 to-transparent" style={{ transformOrigin: "left center" }} />
        </motion.div>
      </div>

      {/* Skills Points */}
      {skills.map((skill, index) => {
        const x = Math.cos((skill.angle * Math.PI) / 180) * skill.radius;
        const y = Math.sin((skill.angle * Math.PI) / 180) * skill.radius;
        const Icon = skill.icon;

        return (
          <motion.div
            key={skill.name}
            className="absolute w-8 h-8 -ml-4 -mt-4 cursor-pointer flex items-center justify-center"
            style={{
              left: `calc(50% + ${x}%)`,
              top: `calc(50% + ${y}%)`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + index * 0.1 }}
            whileHover={{ scale: 1.2, zIndex: 10 }}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="relative w-full h-full bg-midnight-navy rounded-full border flex items-center justify-center shadow-lg transition-all" style={{ borderColor: skill.color }}>
              <Icon className="w-5 h-5 transition-colors" style={{ color: skill.color }} />
            </div>
            
            {/* Ripple Effect on Hover */}
            <AnimatePresence>
              {hoveredSkill?.name === skill.name && (
                <>
                  <motion.div
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute inset-0 rounded-full opacity-30 -z-10"
                    style={{ backgroundColor: skill.color }}
                  />
                  
                  {/* Tooltip - Positioned relative to icon */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    className="absolute z-50 bg-midnight-navy/95 border border-neon-cyan/50 p-3 rounded-xl backdrop-blur-md shadow-2xl pointer-events-none min-w-[140px] text-center"
                    style={{
                      bottom: "120%", // Position above the icon
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div className="flex justify-center mb-2">
                       <Icon className="w-6 h-6" style={{ color: skill.color }} />
                    </div>
                    <h3 className="text-base font-bold text-white">{skill.name}</h3>
                    <p className="text-xs text-gray-400">{skill.category}</p>
                    <p className="text-[10px] text-soft-purple mt-1 uppercase tracking-wider">{skill.level}</p>
                    
                    {/* Arrow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-midnight-navy border-r border-b border-neon-cyan/50" />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
      
      {/* Center Label */}
      <div className="absolute z-10 text-xs text-neon-cyan/50 font-mono">
        TECH_RADAR_V1
      </div>
    </div>
  );
}
