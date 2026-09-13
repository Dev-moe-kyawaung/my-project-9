"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { socialLinks } from "@/lib/data/socials";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Myanmar language validation messages
    if (!formData.name.trim()) {
      newErrors.name = "နာမည် ထည့်သွင်းပါ (Please enter your name)";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "အီးမေးလ် ထည့်သွင်းပါ (Please enter email)";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "အီးမေးလ် ပုံစံ မှားယွင်းနေသည် (Invalid email format)";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "စာတိုထည့်သွင်းပါ (Please enter message)";
    } else if (formData.message.length < 10) {
      newErrors.message = "စာတိုအနည်းဆုံး ၁၀ လုံးထည့်သွင်းပါ (Minimum 10 characters)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient-cyber">Touch</span>
          </h2>
          <p className="text-gray-400">Let's build something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="cyber-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-cyber-cyan/10 text-cyber-cyan">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Phone</h3>
                <p className="text-gray-400">+95 9 889 000 889</p>
                <p className="text-gray-400">+959 666 000 050</p>
              </div>
            </div>

            <div className="cyber-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-cyber-pink/10 text-cyber-pink">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Email</h3>
                <p className="text-gray-400">moekyawaung@programmer.net</p>
                <p className="text-gray-400">moekyawaung@engineer.com</p>
              </div>
            </div>

            <div className="cyber-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-cyber-yellow/10 text-cyber-yellow">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Location</h3>
                <p className="text-gray-400">Tachileik, Myanmar</p>
                <p className="text-gray-400">Bangkok, Thailand</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {Object.entries(socialLinks).slice(0, 6).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-white/20 hover:border-cyber-cyan hover:text-cyber-cyan transition-all capitalize text-sm"
                >
                  {key}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="cyber-card p-8 space-y-6"
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-cyber-cyan mb-2">ပေးပို့ပြီးပါပြီ!</h3>
                <p className="text-gray-400">Message sent successfully!</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Name / နာမည်
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-cyber-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-cyber-pink">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email / အီးမေးလ်
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-cyber-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-cyber-pink">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message / စာတို
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-cyber-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all resize-none"
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-cyber-pink">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cyber-cyan to-cyber-pink text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message / ပေးပို့မည်</span>
                    </>
                  )}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
