"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiCodechef, SiCodeforces, SiHackerrank, SiLeetcode } from "react-icons/si";

interface PlatformStats {
  name: string;
  icon: React.ReactNode;
  stats: { label: string; value: string }[];
  color: string;
  link: string;
  isLoading?: boolean;
}

export default function AlgoHeatmap() {
  const [platforms, setPlatforms] = useState<PlatformStats[]>([
    {
      name: "Codeforces",
      icon: <SiCodeforces className="w-6 h-6" />,
      stats: [
        { label: "Max Rating", value: "..." },
        { label: "Max Rank", value: "..." },
        { label: "Solved", value: "..." },
      ],
      color: "#ff8c00",
      link: "https://codeforces.com/profile/AHS",
      isLoading: true,
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="w-6 h-6" />,
      stats: [
        { label: "Rating", value: "1483" },
        { label: "Solved", value: "250+" },
        { label: "Top", value: "49.79%" },
      ],
      color: "#ffa116",
      link: "https://leetcode.com/Shakib_srk",
    },
    {
      name: "CodeChef",
      icon: <SiCodechef className="w-6 h-6" />,
      stats: [
        { label: "Rating", value: "1282" },
        { label: "Stars", value: "1★" },
        { label: "Solved", value: "90+" },
      ],
      color: "#5b4638",
      link: "https://www.codechef.com/users/shakib_srk",
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank className="w-6 h-6" />,
      stats: [
        { label: "Badges", value: "4" },
        { label: "Skills", value: "Problem Solving" },
        { label: "Solved", value: "58" },
      ],
      color: "#2ec866",
      link: "https://www.hackerrank.com/aftabshakib",
    },
  ]);

  useEffect(() => {
    // Fetch Codeforces data
    fetch('/api/codeforces')
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setPlatforms(prev => prev.map(platform => 
            platform.name === "Codeforces" 
              ? {
                  ...platform,
                  stats: [
                    { label: "Max Rating", value: data.maxRating.toString() },
                    { label: "Max Rank", value: data.maxRank },
                    { label: "Solved", value: data.solved.toString() },
                  ],
                  isLoading: false,
                }
              : platform
          ));
        } else {
          // If error, show fallback data
          setPlatforms(prev => prev.map(platform => 
            platform.name === "Codeforces" 
              ? {
                  ...platform,
                  stats: [
                    { label: "Rating", value: "N/A" },
                    { label: "Rank", value: "N/A" },
                    { label: "Solved", value: "N/A" },
                  ],
                  isLoading: false,
                }
              : platform
          ));
        }
      })
      .catch(() => {
        // On error, show fallback
        setPlatforms(prev => prev.map(platform => 
          platform.name === "Codeforces" 
            ? {
                ...platform,
                stats: [
                  { label: "Rating", value: "N/A" },
                  { label: "Rank", value: "N/A" },
                  { label: "Solved", value: "N/A" },
                ],
                isLoading: false,
              }
            : platform
        ));
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {platforms.map((platform, index) => (
        <motion.a
          key={platform.name}
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="relative group bg-midnight-navy border border-white/10 rounded-xl p-6 overflow-hidden hover:border-neon-cyan/50 transition-colors"
        >
          {/* Background Glow */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{ background: platform.color }}
          />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-lg bg-white/5 text-white group-hover:text-neon-cyan transition-colors">
                {platform.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{platform.name}</h3>
            </div>

            <div className="space-y-4 flex-grow">
              {platform.stats.map((stat) => (
                <div key={stat.label} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                  <span className={`font-mono font-bold ${platform.isLoading ? 'text-gray-500 animate-pulse' : 'text-neon-cyan'}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center text-sm text-gray-500 group-hover:text-white transition-colors">
              View Profile →
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
