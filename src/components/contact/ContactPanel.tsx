"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPanel() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSent(true);
        form.reset();
        setTimeout(() => setIsSent(false), 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Let&apos;s Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-soft-purple">
            Something Amazing
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Have a project in mind or just want to say hi? I&apos;m always open to discussing new ideas and opportunities.
        </p>
        
        <div className="flex gap-4 pt-4">
          <a href="mailto:ahshakib75@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-cyan transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/ahshakib" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-cyan transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/ahshakib" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-cyan transition-colors">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-soft-purple rounded-2xl blur-lg opacity-20" />
        <form 
          onSubmit={handleSubmit}
          className="relative bg-midnight-navy border border-white/10 p-8 rounded-2xl space-y-6 shadow-2xl"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-gray-400">Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
              placeholder="John Doe"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-400">Email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-gray-400">Message</label>
            <textarea 
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isSending || isSent}
            className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
              isSent 
                ? "bg-green-500 text-white"
                : "bg-gradient-to-r from-neon-cyan to-soft-purple text-midnight-navy hover:opacity-90"
            }`}
          >
            {isSent ? (
              "Message Sent!"
            ) : isSending ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
