"use client";

import type React from "react";
import { useState } from "react";
import HeroSection from "@/components/heading"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

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
    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
        title="About Our Creative Team"
        description="We deliver top-tier audio-visual production services for events, advertisements, and beyond."
        image="/test.jpg" // Optional: Replace with any relevant image
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                احجز موعدك الآن
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5a9e9d] focus:border-transparent"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5a9e9d] focus:border-transparent"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5a9e9d] focus:border-transparent"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    نوع الخدمة المطلوبة
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5a9e9d] focus:border-transparent"
                  >
                    <option value="">اختر نوع الخدمة</option>
                    <option value="weight-loss">خسارة الوزن</option>
                    <option value="weight-gain">زيادة الوزن</option>
                    <option value="therapeutic">التغذية العلاجية</option>
                    <option value="pregnancy">تغذية الحوامل</option>
                    <option value="children">تغذية الأطفال</option>
                    <option value="sports">تغذية الرياضيين</option>
                    <option value="consultation">استشارة عامة</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    رسالتك
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5a9e9d] focus:border-transparent"
                    placeholder="أخبرنا عن حالتك أو استفسارك..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: "#5a9e9d" }}
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                معلومات التواصل
              </h2>
              <div className="space-y-6 mb-8">
                {[
                  {
                    Icon: MapPin,
                    title: "العنوان",
                    text: "الدائري - الجامعة الجديدة - برج الرشيد",
                  },
                  { Icon: Phone, title: "الهاتف", text: "771794448" },
                  { Icon: MessageCircle, title: "واتساب", text: "771794448" },
                  {
                    Icon: Mail,
                    title: "البريد الإلكتروني",
                    text: "nutritionclinic@example.com",
                  },
                  {
                    Icon: Clock,
                    title: "مواعيد العمل",
                    text: "السبت - الخميس: 9:00 ص - 6:00 م\nالجمعة: مغلق",
                  },
                ].map(({ Icon, title, text }, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      style={{ backgroundColor: "#5a9e9d1A" }}
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                    >
                      <Icon style={{ color: "#5a9e9d" }} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {title}
                      </h3>
                      <p className="text-gray-600 whitespace-pre-line">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  تابعنا على
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/nutritionclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com/nutritionclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-lg flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/nutrition_clinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/company/nutritionclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  موقعنا على الخريطة
                </h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">خريطة الموقع</p>
                    <p className="text-sm text-gray-400">
                      سيتم إضافة الخريطة قريباً
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                تواصل سريع
              </h2>
              <p className="text-gray-600">
                للحصول على استشارة فورية أو حجز موعد عاجل
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="tel:771794448"
                style={{ backgroundColor: "#5a9e9d" }}
                className="text-white p-6 rounded-2xl text-center hover:opacity-90 transition-colors duration-300 group"
              >
                <Phone className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">اتصل الآن</h3>
                <p className="opacity-90">771794448</p>
              </a>

              <a
                href="https://wa.me/967771794448"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#d03a82" }}
                className="text-white p-6 rounded-2xl text-center hover:opacity-90 transition-colors duration-300 group"
              >
                <MessageCircle className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">واتساب</h3>
                <p className="opacity-90">تواصل فوري</p>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
