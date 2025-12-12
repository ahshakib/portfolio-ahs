"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import ProjectDrawer from "./ProjectDrawer";

const projects: Project[] = [
  {
    id: "storytelling",
    title: "Collaborative Storytelling App",
    description: "A web app for writers to create and continue stories together. Features real-time collaboration, user profiles, and story categorization.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.io"],
    features: [
      "Real-time collaborative writing",
      "User authentication & profiles",
      "Story voting and ranking system",
      "Mobile-responsive design"
    ],
    color: "#67f7ff", // Neon Cyan
    githubUrl: "https://github.com/ahshakib/Collaborative-Storytelling-App",
    image: "/storytelling-preview.png",
    liveUrl: "https://collaborative-storytelling-app.vercel.app/"
  },
  {
    id: "handson",
    title: "Hands-On Platform",
    description: "A full-stack app connecting volunteers with events and help requests. Focuses on impact tracking and easy coordination for teams.",
    techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    features: [
      "Event management & scheduling",
      "Volunteer team formation",
      "Impact hour tracking",
      "Role-based access control"
    ],
    color: "#b48aff", // Soft Purple
    githubUrl: "https://github.com/ahshakib/hands-on-platform",
    image: "/handson-preview.png",
  },
  {
    id: "helpinghand",
    title: "Helping Hand",
    description: "Service booking platform with role-based access. Users can book services, manage staff, and make secure payments.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "SSL Commerz", "Gemini AI"],
    features: [
      "Secure payment gateway integration",
      "AI-powered recommendations",
      "Admin/Employee/Customer dashboards",
      "Service booking management"
    ],
    color: "#ff67f7", // Pinkish
    frontendUrl: "https://github.com/ahshakib/helping-hand-client",
    backendUrl: "https://github.com/ahshakib/helping-hand-server",
    image: "/helpinghand-preview.png",
  },
  {
    id: "taskmanager",
    title: "Task Manager",
    description: "A drag-and-drop task management app with board and list views. Users can organize tasks by priority and status.",
    techStack: ["React", "MongoDB", "Express", "Tailwind CSS"],
    features: [
      "Drag-and-drop task board",
      "Real-time updates",
      "Priority filtering",
      "Authentication"
    ],
    color: "#4f46e5", // Indigo
    githubUrl: "https://github.com/ahshakib/task-manager",
    liveUrl: "https://taskmn.vercel.app/dashboard",
    image: "/taskmanager-preview.png",
  }
];

export default function ProjectDock() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative w-full">
      <div className="flex overflow-x-auto pb-8 gap-8 px-4 snap-x snap-mandatory scrollbar-hide">
        {projects.map((project) => (
          <div key={project.id} className="snap-center">
            <ProjectCard 
              project={project} 
              onClick={setSelectedProject} 
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDrawer 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
