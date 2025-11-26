"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
  liveUrl?: string;
  color: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group cursor-pointer min-w-[300px] md:min-w-[350px] h-[400px] rounded-2xl bg-midnight-navy border border-white/10 overflow-hidden"
      onClick={() => onClick(project)}
    >
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: `linear-gradient(to bottom right, ${project.color}, transparent)` }}
      />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between z-10">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" />
          </div>
          
          <p className="text-gray-400 line-clamp-3 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span 
                key={tech} 
                className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Preview Image */}
        <div className="w-full h-32 bg-black/20 rounded-lg border border-white/5 overflow-hidden">
          {project.image ? (
            <img 
              src={project.image} 
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-sm text-gray-500">Project Preview</div>
            </div>
          )}
        </div>
      </div>
      
      {/* Hover Glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-cyan/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
}
