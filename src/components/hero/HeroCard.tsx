"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-6xl mx-auto p-1"
    >
      {/* Neon Glow Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-soft-purple to-neon-cyan rounded-2xl blur-md opacity-75 animate-pulse" />
      
      <div className="relative bg-midnight-navy/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-purple/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
              Aftab Hossain Shakib
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center md:items-start space-y-2"
            >
              <h2 className="text-xl md:text-2xl text-neon-cyan font-medium">
                Full-Stack Developer
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                MERN | PERN | Golang
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-300"
            >
              <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                🚀 I build scalable web apps
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                🔧 I solve problems at scale
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                🚢 Never stop shipping
              </span>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 text-gray-400"
            >
              <a href="mailto:ahshakib75@gmail.com" className="flex items-center gap-2 hover:text-neon-cyan transition-colors">
                <Mail className="w-4 h-4" />
                <span>ahshakib75@gmail.com</span>
              </a>
              <a href="tel:+8801859729426" className="flex items-center gap-2 hover:text-neon-cyan transition-colors">
                <Phone className="w-4 h-4" />
                <span>+880 1859 729 426</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Barura, Comilla</span>
              </div>
            </motion.div>

            {/* Social Links & Resume */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap items-center gap-4 mt-6"
            >
              <a 
                href="/aftab-hossain-shakib.pdf" 
                download="Aftab_Hossain_Shakib_Resume.pdf"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-cyan/10 to-soft-purple/10 border border-neon-cyan/20 rounded-full hover:bg-white/5 hover:border-neon-cyan/50 transition-all duration-300 group"
              >
                <Download className="w-4 h-4 text-neon-cyan group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white font-medium">Download Resume</span>
              </a>

              <div className="flex gap-4">
                <a href="https://github.com/ahshakib" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-cyan transition-colors border border-white/10">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/ahshakib" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-cyan transition-colors border border-white/10">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan to-soft-purple rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Aftab Hossain Shakib" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
