"use client";

import React from "react";
import { useState, useEffect } from "react";
import {
  Camera,
  Monitor,
  Radio,
  Mic,
  Users,
  Music,
  Film,
  ArrowRight,
  Check,
  Star,
  Award,
  Heart,
  Target,
  Palette,
  Headphones,
  Settings,
  Globe,
  Smartphone,
  Tv,
  Volume2,
  Edit3,
  FileVideo,
  Layers,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import HeaderPage from "@/components/heading";

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [waveHeights, setWaveHeights] = useState(() => generateWaveHeights());

  function generateWaveHeights() {
    return Array.from({ length: 12 }, () => Math.random() * 100 + 20);
  }

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveHeights(generateWaveHeights());
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Auto-cycle through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const mainServices = [
    {
      id: 1,
      title: "Event Coverage",
      titleEn: "Event Coverage",
      description:
        "We provide comprehensive coverage for all types of events with the latest technologies and advanced equipment with a professional team of photographers and technicians",
      descriptionEn:
        "We provide comprehensive coverage for all types of events with the latest technologies and advanced equipment with a professional team of photographers and technicians",
      color: "#28bca2",
      icon: Camera,
      image: "/events.jpg?height=500&width=700&text=Event+Coverage",
      features: [
        "Professional Photography",
        "4K Video Recording",
        "Live Event Streaming",
        "Instant Content Editing",
        "Integrated Specialist Team",
      ],
      stats: { projects: "200+", clients: "150+", years: "8+" },
      subServices: [
        {
          name: "Wedding Photography",
          nameEn: "Wedding Photography",
          icon: Heart,
          description:
            "Comprehensive wedding coverage with a refined artistic touch",
          price: "From $1333",
        },
        {
          name: "Conferences & Seminars",
          nameEn: "Conferences & Seminars",
          icon: Users,
          description: "Professional conference coverage with live streaming",
          price: "From $800",
        },
        {
          name: "Sports Events",
          nameEn: "Sports Events",
          icon: Target,
          description: "Filming sports events with advanced technologies",
          price: "From $1066",
        },
        {
          name: "Music Concerts",
          nameEn: "Music Concerts",
          icon: Music,
          description: "Music concert coverage with studio quality",
          price: "From $1600",
        },
        {
          name: "Trade Shows",
          nameEn: "Trade Shows",
          icon: Monitor,
          description: "Documenting trade shows and events",
          price: "From $666",
        },
        {
          name: "Government Events",
          nameEn: "Government Events",
          icon: Award,
          description: "Official coverage of government events",
          price: "Upon Request",
        },
      ],
    },
    {
      id: 2,
      title: "Audio Production",
      titleEn: "Audio Production",
      description:
        "We offer comprehensive audio production services from recording to mastering with world-class quality and professional standards in our studios equipped with the latest technology",
      descriptionEn:
        "We offer comprehensive audio production services from recording to mastering with world-class quality and professional standards in our studios equipped with the latest technology",
      color: "#ff6b35",
      icon: Music,
      image: "/event2.jpg?height=500&width=700&text=Audio+Production",
      features: [
        "Advanced Recording Studio",
        "Professional Sound Engineers",
        "World-Class Equipment",
        "Mastering Services",
        "Integrated Music Production",
      ],
      stats: { projects: "500+", artists: "100+", albums: "50+" },
      subServices: [
        {
          name: "Song Recording",
          nameEn: "Song Recording",
          icon: Mic,
          description:
            "Professional song recording with an integrated music team",
          price: "From $533",
        },
        {
          name: "Shilat Production",
          nameEn: "Shilat Production",
          icon: Volume2,
          description: "Producing popular shilat in a modern style",
          price: "From $400",
        },
        {
          name: "Religious Anasheed",
          nameEn: "Religious Anasheed",
          icon: Heart,
          description: "Producing high-quality religious songs",
          price: "From $480",
        },
        {
          name: "Wedding Songs",
          nameEn: "Wedding Songs",
          icon: Music,
          description: "Producing custom wedding songs",
          price: "From $666",
        },
        {
          name: "Operettas",
          nameEn: "Operettas",
          icon: Users,
          description: "Producing national and social operettas",
          price: "From $1333",
        },
        {
          name: "Voice Over",
          nameEn: "Voice Over",
          icon: Radio,
          description: "Voice over and dubbing services",
          price: "From $133",
        },
      ],
    },
    {
      id: 3,
      title: "Visual Production",
      titleEn: "Visual Production",
      description:
        "We excel in visual content production from commercials to documentaries and short films using the latest filming and editing technologies",
      descriptionEn:
        "We excel in visual content production from commercials to documentaries and short films using the latest filming and editing technologies",
      color: "#00bcd4",
      icon: Film,
      image: "/events2.jpg?height=500&width=700&text=Visual+Production",
      features: [
        "Advanced Cinematic Cameras",
        "Professional Directing Team",
        "Integrated Editing Studio",
        "Motion Graphics Techniques",
        "Multi-Platform Production",
      ],
      stats: { videos: "300+", brands: "80+", awards: "15+" },
      subServices: [
        {
          name: "TV Commercials",
          nameEn: "TV Commercials",
          icon: Tv,
          description: "Producing professional commercials for TV and digital",
          price: "From $2133",
        },
        {
          name: "Short Films",
          nameEn: "Short Films",
          icon: Film,
          description: "Producing short films with cinematic quality",
          price: "From $4000",
        },
        {
          name: "Digital Content",
          nameEn: "Digital Content",
          icon: Smartphone,
          description: "Producing custom content for social media",
          price: "From $266",
        },
        {
          name: "Motion Graphics",
          nameEn: "Motion Graphics",
          icon: Layers,
          description: "Designing and producing animations and motion graphics",
          price: "From $800",
        },
        {
          name: "Documentaries",
          nameEn: "Documentaries",
          icon: FileVideo,
          description: "Producing professional documentaries",
          price: "From $5333",
        },
        {
          name: "Educational Videos",
          nameEn: "Educational Videos",
          icon: Monitor,
          description: "Producing interactive educational content",
          price: "From $533",
        },
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Settings,
      title: "Media Consulting",
      titleEn: "Media Consulting",
      description:
        "Specialized consulting in media planning and digital strategies",
      features: [
        "Strategic Planning",
        "Competitor Analysis",
        "Content Plans",
        "Performance Measurement",
      ],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      titleEn: "Graphic Design",
      description:
        "Designing visual identities and marketing materials in a distinctive creative style",
      features: [
        "Logo Design",
        "Visual Identities",
        "Prints",
        "Digital Design",
      ],
    },
    {
      icon: Globe,
      title: "Social Media Management",
      titleEn: "Social Media Management",
      description:
        "Comprehensive management of social media accounts with innovative strategies",
      features: [
        "Content Management",
        "Audience Interaction",
        "Advertising Campaigns",
        "Analytics",
      ],
    },
    {
      icon: Headphones,
      title: "Live Sound Services",
      titleEn: "Live Sound Services",
      description:
        "Renting and operating sound systems for events and conferences",
      features: [
        "Advanced Sound Systems",
        "Specialized Technicians",
        "Installation and Operation",
        "Continuous Technical Support",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      titleEn: "Initial Consultation",
      description:
        "We start by understanding your needs and vision for the project through a free consultation session",
      icon: Users,
      color: "#28bca2",
    },
    {
      step: "02",
      title: "Planning & Design",
      titleEn: "Planning & Design",
      description:
        "We develop a detailed project plan with initial designs and a timeline",
      icon: Edit3,
      color: "#ff6b35",
    },
    {
      step: "03",
      title: "Production & Execution",
      titleEn: "Production & Execution",
      description:
        "We execute the project with the highest quality standards with continuous progress monitoring",
      icon: Settings,
      color: "#00bcd4",
    },
    {
      step: "04",
      title: "Review & Delivery",
      titleEn: "Review & Delivery",
      description:
        "We review the work with you and make the required adjustments before final delivery",
      icon: Check,
      color: "#9c27b0",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Mohammed Al-Faisal",
      nameEn: "Ahmed Mohammed Al-Faisal",
      position: "Marketing Manager - Riyadh Development Company",
      rating: 5,
      text: "I have worked with Track on several projects and the results have always been amazing. A professional and creative team.",
      image: "/placeholder.svg?height=80&width=80&text=Ahmed",
      project: "Integrated Advertising Campaign",
    },
    {
      name: "Fatima Al-Ali",
      nameEn: "Fatima Al-Ali",
      position: "Events Coordinator - Ministry of Culture",
      rating: 5,
      text: "The best company I have dealt with in the field of event coverage. Punctuality and exceptional quality.",
      image: "/placeholder.svg?height=80&width=80&text=Fatima",
      project: "Cultural Festival Coverage",
    },
    {
      name: "Khalid Al-Saad",
      nameEn: "Khalid Al-Saad",
      position: "Artist and Singer",
      rating: 5,
      text: "Their studios are equipped with the latest technology and the production team is very professional. I highly recommend them.",
      image: "/placeholder.svg?height=80&width=80&text=Khalid",
      project: "Music Album Production",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeaderPage
        title="Track Services"
        description="Professional event coverage, audio production, and visual storytelling that brings your vision to life."
        image="/salah2.jpeg" // replace with your actual image path
      />

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-extralight text-gray-800 mb-4">
                Our{" "}
                <span className="text-5xl md:text-7xl lg:text-9xl bg-gradient-to-r from-gray-900 via-[#28bba4] to-[#28bba4] bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <div className="w-24 h-1 bg-[#28bca2] mx-auto rounded-full"></div>
            </div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of media and production services
              with the highest international quality standards
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 ${
                    isActive
                      ? "shadow-xl scale-105 text-white"
                      : "hover:scale-102 hover:shadow-lg text-gray-600 bg-white border-2 border-gray-200"
                  }`}
                  style={{
                    backgroundColor: isActive ? service.color : "white",
                    borderColor: isActive ? service.color : "#e5e7eb",
                  }}
                >
                  <Icon size={24} />
                  <div className="text-left">
                    <div className="font-bold">{service.title}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Content */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                    style={{ backgroundColor: mainServices[activeTab].color }}
                  >
                    {React.createElement(mainServices[activeTab].icon, {
                      size: 32,
                    })}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      {mainServices[activeTab].title}
                    </h3>

                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8 text-left">
                  {mainServices[activeTab].description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    Service Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {mainServices[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: `${mainServices[activeTab].color}20`,
                          }}
                        >
                          <Check
                            size={14}
                            style={{ color: mainServices[activeTab].color }}
                          />
                        </div>
                        <span className="text-gray-700 text-left">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {Object.entries(mainServices[activeTab].stats).map(
                    ([key, value], index) => (
                      <div key={index} className="text-center">
                        <div
                          className="text-2xl font-bold mb-1"
                          style={{ color: mainServices[activeTab].color }}
                        >
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl text-white"
                  style={{ backgroundColor: mainServices[activeTab].color }}
                >
                  <span className="mr-3">Order Service Now</span>
                  <ArrowRight size={20} />
                </Button>
              </div>

              {/* Visual Side */}
              <div className="relative">
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={mainServices[activeTab].image || "/placeholder.svg"}
                    alt={mainServices[activeTab].title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${mainServices[activeTab].color}40, ${mainServices[activeTab].color}10)`,
                    }}
                  />

                  {/* Border */}
                  <div
                    className="absolute inset-0 rounded-3xl border-4 transition-all duration-500"
                    style={{
                      borderColor: `${mainServices[activeTab].color}60`,
                      boxShadow: `0 0 30px ${mainServices[activeTab].color}30`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sub-services Grid */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {mainServices[activeTab].title} Details
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainServices[activeTab].subServices.map((subService, index) => {
                const Icon = subService.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: `${mainServices[activeTab].color}15`,
                          }}
                        >
                          <Icon
                            size={24}
                            style={{ color: mainServices[activeTab].color }}
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-left">
                            {subService.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {subService.nameEn}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 text-left leading-relaxed">
                        {subService.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className="font-bold text-lg"
                          style={{ color: mainServices[activeTab].color }}
                        >
                          {subService.price}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-[#28bca2]">Additional Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              Specialized services to meet all your media needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#28bca2] to-[#28bca2]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 text-left leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <Check size={14} className="text-[#28bca2]" />
                          <span className="text-left">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-[#28bca2]">Our Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              What our clients say about our services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-left">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 text-left">
                        {testimonial.position}
                      </p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-left leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>

                  <div className="text-sm text-[#28bca2] font-medium text-left">
                    Project: {testimonial.project}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
