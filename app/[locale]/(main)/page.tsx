import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { ServicesSection } from "@/components/sections/services-section";
import { ContactCTA } from "@/components/sections/contact-cta";
import { CyberGrid } from "@/components/effects/cyber-grid";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CyberGrid />
      
      <div className="relative z-10">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsGrid limit={6} />
        <ServicesSection />
        <ContactCTA />
      </div>
    </main>
  );
}
