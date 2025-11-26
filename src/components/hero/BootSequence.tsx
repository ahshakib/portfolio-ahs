"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    const sequence = [
      "Loading Aftab Hossain Shakib...",
      "Initializing Developer Environment...",
      "Loading Modules: [React, Next.js, Go, Node.js]...",
      "Establishing Secure Connection...",
      "Launching Portfolio UI...",
    ];

    let delay = 0;
    sequence.forEach((line, index) => {
      delay += 800; // Delay between lines
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (index === sequence.length - 1) {
          setTimeout(onComplete, 1000); // Wait a bit after last line before completing
        }
      }, delay);
    });
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight-navy font-mono text-neon-cyan p-4">
      <div className="w-full max-w-md space-y-2">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-soft-purple">{">"}</span>
            <span>{line}</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="h-5 w-2 bg-neon-cyan inline-block ml-2"
        />
      </div>
    </div>
  );
}
