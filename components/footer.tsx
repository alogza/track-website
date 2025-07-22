"use client";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { content } from "@/app/i18n";
import { useLanguage } from "@/app/context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const t = content[language];
  const services = [
    { name: t.footer.services.event, href: "#services" },
    { name: t.footer.services.audio, href: "#services" },
    { name: t.footer.services.visual, href: "#services" },
    { name: t.footer.services.photo, href: "#services" },
  ];

  const quickLinks = [
    { name: t.footer.quickLinks.about, href: "#about" },
    { name: t.footer.quickLinks.work, href: "#portfolio" },
    { name: t.footer.quickLinks.clients, href: "#clients" },
    { name: t.footer.quickLinks.blog, href: "#blog" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                {t.footer.companyName}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                {t.footer.description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span>{t.footer.contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span>{t.footer.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span>{t.footer.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <span className="text-slate-300 font-medium">Follow Us:</span>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-slate-700 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-lg font-medium transition-all duration-200 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} {t.footer.companyName}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
