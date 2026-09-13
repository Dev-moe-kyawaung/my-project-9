"use client";

import { motion } from "framer-motion";
import { TypingEffect } from "@/components/effects/typing-effect";
import { ProgressRing } from "@/components/ui/progress-ring";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const roles = [
  "Android Senior Developer",
  "Kotlin & Jetpack Specialist",
  "Clean Architecture Expert",
  "Cybersecurity Enthusiast"
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://res.cloudinary.com/dye5qpwii/video/upload/v1779052704/Javier_Pardina_10_ay7iai.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/50 via-cyber-black/80 to-cyber-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
              <span className="text-sm text-cyber-cyan font-mono">Available for Hire</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-gradient-hero">MOE KYAW AUNG</span>
            </h1>
            
            <div className="h-12 mb-6">
              <span className="text-xl md:text-2xl text-cyber-cyan font-mono">
                <TypingEffect texts={roles} speed={80} />
              </span>
            </div>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              Android Developer with nearly 12 years of hands-on experience building secure, 
              scalable, and user-friendly mobile applications. Strong in Kotlin and modern 
              Jetpack development.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/projects"
                className="px-8 py-4 bg-cyber-cyan text-black font-bold cyber-clip hover:bg-cyber-cyan/80 transition-all hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-cyber-cyan text-cyber-cyan font-bold cyber-clip hover:bg-cyber-cyan/10 transition-all"
              >
                Contact Me
              </Link>
            </div>
            
            <div className="flex gap-4">
              <Link href="https://github.com/Dev-moe-kyawaung/" className="p-3 rounded-full border border-white/20 hover:border-cyber-cyan hover:text-cyber-cyan transition-all">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/moe-kyaw-aung-2653093a1" className="p-3 rounded-full border border-white/20 hover:border-cyber-cyan hover:text-cyber-cyan transition-all">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="mailto:moekyawaung@programmer.net" className="p-3 rounded-full border border-white/20 hover:border-cyber-cyan hover:text-cyber-cyan transition-all">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Avatar & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Rotating Avatar Ring */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-cyber-cyan/30 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full border-2 border-cyber-pink/30 animate-spin-slow animation-delay-200" 
                   style={{ animationDirection: 'reverse' }} />
              
              <div className="absolute inset-4 rounded-full overflow-hidden cyber-clip">
                <Image
                  src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png"
                  alt="Moe Kyaw Aung"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-10 cyber-card p-4"
              >
                <div className="text-2xl font-bold text-cyber-cyan">10+</div>
                <div className="text-xs text-gray-400">Years Exp</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-4 bottom-10 cyber-card p-4"
              >
                <div className="text-2xl font-bold text-cyber-pink">3K+</div>
                <div className="text-xs text-gray-400">Apps</div>
              </motion.div>
            </div>

            {/* Skill Rings */}
            <div className="grid grid-cols-4 gap-4 mt-12">
              <ProgressRing progress={95} label="Kotlin" color="#00f3ff" size={80} strokeWidth={6} />
              <ProgressRing progress={90} label="Compose" color="#ff00ff" size={80} strokeWidth={6} />
              <ProgressRing progress={85} label="Firebase" color="#ffd700" size={80} strokeWidth={6} />
              <ProgressRing progress={88} label="CI/CD" color="#39ff14" size={80} strokeWidth={6} />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-cyber-cyan" />
        </motion.div>
      </div>
    </section>
  );
}
