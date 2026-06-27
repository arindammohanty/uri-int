"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, GraduationCap, Briefcase, UserCheck, BookOpen, Globe2, ArrowRight
} from 'lucide-react';

const RECRUITMENT_SERVICES = [
  {
    slug: "it-staff-augmentation",
    title: "IT Staff Augmentation",
    desc: "Augment your team with top-tier IT professionals on demand to meet critical project deadlines and scale operations efficiently.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "campus-hiring-solutions",
    title: "Campus Hiring Solutions",
    desc: "Strategically source, engage, and recruit fresh graduate talent from top technical institutions to build your future workforce.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "leadership-hiring",
    title: "Leadership Hiring",
    desc: "Executive search services dedicated to identifying and securing visionary leaders who can drive enterprise growth and transformation.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "permanent-recruitment",
    title: "Permanent Recruitment",
    desc: "End-to-end talent acquisition solutions to help you build stable, high-performing core teams aligned with your corporate culture.",
    icon: UserCheck,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "hire-train-deploy",
    title: "Hire, Train & Deploy",
    desc: "A customized talent development model where we source candidates, train them on specific tech stacks, and deploy them to your projects.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "borderless-talent-solutions",
    title: "Borderless Talent Solutions",
    desc: "Break geographical barriers and tap into a global talent pool, enabling remote workforce integration and cross-border team building.",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      <section className="relative pt-24 pb-16 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Services</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Empowering global corporations through sophisticated digital engineering and future-proof technological evolution models.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECRUITMENT_SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link 
                href={`/services/${service.slug}`}
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
                  {/* Reduced overlay opacity to bg-slate-900/70 for better image visibility */}
                  <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
                </div>

                {/* Content Container (z-10 ensures it stays above the image) */}
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
