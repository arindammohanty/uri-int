"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  AppWindow, Server, Radio, ShieldAlert, Headset, ArrowRight
} from 'lucide-react';

const MANAGED_SERVICES = [
  {
    slug: "application-management-maintenance",
    title: "Application Management & Maintenance",
    desc: "End-to-end lifecycle management for your enterprise applications, ensuring high availability, continuous updates, and legacy modernization.",
    icon: AppWindow,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "data-centre-services",
    title: "Data Centre Services",
    desc: "Comprehensive management of your core IT infrastructure, bridging on-premise servers and cloud environments for optimal performance.",
    icon: Server,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "telecom-applications",
    title: "Telecom Applications",
    desc: "Specialized operational support for OSS/BSS systems, billing platforms, and 5G network infrastructure management.",
    icon: Radio,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "network-security",
    title: "Network Security",
    desc: "Proactive threat hunting, firewall management, and 24/7 SOC operations to secure your perimeter and internal traffic.",
    icon: ShieldAlert,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "end-user-support-services",
    title: "End User Support Services",
    desc: "Persistent L1/L2/L3 helpdesk operations, asset management, and rapid troubleshooting to keep your global workforce productive.",
    icon: Headset,
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ManagedServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      <section className="relative pt-24 pb-16 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Managed IT Services</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Ensure peak operational efficiency and absolute security with our round-the-clock, enterprise-grade managed services.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MANAGED_SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link 
                href={`/managed-services/${service.slug}`}
                key={service.slug} 
                className="relative block overflow-hidden rounded-[2rem] bg-white p-8 border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:border-orange-500/50 hover:-translate-y-1 group min-h-[380px] flex flex-col justify-between"
              >
                {/* Background Hover Image & Overlay */}
                <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:border-white/30 transition-colors duration-300 backdrop-blur-sm">
                    <IconComponent className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed font-medium mb-8 text-[15px] group-hover:text-slate-200 transition-colors duration-300 flex-1">
                    {service.desc}
                  </p>
                  
                  <div className="inline-flex items-center text-orange-500 font-bold group-hover:text-white transition-colors mt-auto">
                    Explore Capabilities <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
