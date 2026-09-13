"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const navItems = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/skills", label: "skills" },
  { href: "/services", label: "services" },
  { href: "/contact", label: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations("nav");
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-cyber-black/90 backdrop-blur-lg border-b border-cyber-cyan/20 shadow-[0_0_30px_rgba(0,243,255,0.1)]" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 cyber-clip bg-gradient-to-br from-cyber-cyan to-cyber-pink flex items-center justify-center text-black font-bold text-xl group-hover:animate-pulse-glow">
              M
            </div>
            <span className="font-display font-bold text-xl hidden sm:block">
              <span className="text-white">MOE</span>
              <span className="text-cyber-cyan">KYAW</span>
              <span className="text-cyber-pink">AUNG</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {t(item.label)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-cyan transition-all group-hover:w-full" />
              </Link>
            ))}
            
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <Link
              href="https://github.com/Dev-moe-kyawaung/"
              target="_blank"
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-panel border-b border-cyber-cyan/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="block py-2 text-gray-300 hover:text-cyber-cyan transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.label)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
