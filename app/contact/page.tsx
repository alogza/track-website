"use client";

import type React from "react";
import { useState } from "react";
import HeroSection from "@/components/heading";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your message has been successfully sent! We will contact you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        description="We deliver top-tier audio-visual production services for events, advertisements, and beyond."
        image="/hasan1.jpeg"
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-extralight text-gray-900 tracking-tighter">
              <span className="bg-gradient-to-r from-gray-900 to-[#28bba4] bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 mt-4 font-light">We're here to help bring your vision to life.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", value: "hello@track.com" },
                { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, title: "Location", value: "Creative District" },
              ].map((item, index) => (
                <GlassCard
                  key={index}
                  className="p-6 group hover:scale-105 transition-all duration-500 hover:shadow-xl"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-[#28bba4]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-[#28bba4]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                      <p className="text-gray-600 font-light group-hover:text-gray-700">{item.value}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}

              {/* Social Media */}
              <div className="pt-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us On</h3>
                <div className="flex gap-4">
                  {[
                    {
                      icon: Facebook,
                      href: "https://facebook.com/nutritionclinic",
                      className: "bg-blue-600 hover:bg-blue-700",
                    },
                    {
                      icon: Instagram,
                      href: "https://instagram.com/nutritionclinic",
                      className: "bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
                    },
                    {
                      icon: Twitter,
                      href: "https://twitter.com/nutrition_clinic",
                      className: "bg-blue-400 hover:bg-blue-500",
                    },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com/company/nutritionclinic",
                      className: "bg-blue-700 hover:bg-blue-800",
                    },
                  ].map(({ icon: Icon, href, className }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${className} transition-colors`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location on the Map</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center text-center">
                  <div>
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Map Location</p>
                    <p className="text-sm text-gray-400">The map will be added soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <GlassCard className="p-8 hover:scale-105 h-[500px] transition-all duration-500 hover:shadow-2xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:border-[#28bba4] focus:ring-[#28bba4]/20 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:border-[#28bba4] focus:ring-[#28bba4]/20 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:border-[#28bba4] focus:ring-[#28bba4]/20 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                ></textarea>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#28bba4] to-[#28bba4]/80 hover:from-[#28bba4]/90 hover:to-[#28bba4]/70 text-white py-4 rounded-2xl font-medium tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                >
                  <span className="flex items-center justify-center">
                    Send
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Quick Contact</h2>
              <p className="text-gray-600">
                For immediate consultation or urgent appointment bookings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="tel:771794448"
                style={{ backgroundColor: "#5a9e9d" }}
                className="text-white p-4 rounded-2xl text-center hover:opacity-90 transition-colors duration-300 group"
              >
                <Phone className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Call Now</h3>
                <p className="opacity-90">771794448</p>
              </a>

              <a
                href="https://wa.me/967771794448"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#d03a82" }}
                className="text-white p-4 rounded-2xl text-center hover:opacity-90 transition-colors duration-300 group"
              >
                <MessageCircle className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="opacity-90">Immediate contact</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
