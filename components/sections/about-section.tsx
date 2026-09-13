"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Counter } from "@/components/effects/counter";
import { MapPin, Calendar, Award, Star } from "lucide-react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", icon: Calendar },
  { value: 3000, suffix: "+", label: "Apps Developed", icon: Award },
  { value: 122, suffix: "", label: "GitHub Repos", icon: Star },
  { value: 100, suffix: "%", label: "Satisfaction", icon: Star },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 mb-4 text-sm font-mono text-cyber-cyan border border-cyber-cyan/30 rounded-full">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Building Digital <span className="text-gradient-cyber">Experiences</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Android Developer with nearly 12 years of hands-on experience building secure, 
                scalable, and user-friendly mobile applications. Strong in Kotlin and modern 
                Jetpack development (Compose, ViewModel, Room), Firebase integration, and REST API consumption.
              </p>
              <p>
                I focus on clean architecture, maintainable code, and practical security. 
                Comfortable delivering features end-to-end—from UI to networking, local caching, 
                testing, and release-ready builds.
              </p>
              <div className="flex items-center gap-2 text-cyber-cyan pt-4">
                <MapPin className="w-5 h-5" />
                <span>Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cyber-card p-6 text-center light-beam"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyber-cyan" />
                <div className="text-3xl font-bold text-white mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="text-2xl font-display font-bold mb-12 text-center">Experience Timeline</h3>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-pink to-cyber-yellow" />
            
            {[
              { year: "2024", title: "Senior Android Developer", company: "Tech Corp", side: "left" },
              { year: "2020", title: "Android Lead", company: "StartupXYZ", side: "right" },
              { year: "2016", title: "Mid-Level Developer", company: "Digital Agency", side: "left" },
              { year: "2012", title: "Junior Developer", company: "First Company", side: "right" },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex ${item.side === "left" ? "justify-start" : "justify-end"} mb-12`}
              >
                <div className={`w-5/12 ${item.side === "left" ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="cyber-card p-4 inline-block">
                    <div className="text-cyber-cyan font-mono text-sm">{item.year}</div>
                    <div className="font-bold text-white">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.company}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-cyan border-4 border-cyber-black" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
