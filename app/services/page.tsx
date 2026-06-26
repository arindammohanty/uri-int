"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Briefcase, Cloud, Shield, Cpu, Code, Database, ArrowRight, Layers, FileCheck
} from 'lucide-react';

const ENTERPRISE_SERVICES = [
  {
    slug: "it-consultant-and-advisory",
    title: "IT Consultant & Advisory",
    desc: "Strategic IT consulting services to align technology infrastructure with core business objectives, covering transformation frameworks and tech audits.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "agile-it-operations",
    title: "Agile IT Operations",
    desc: "Comprehensive engineering management encompassing cloud environments, persistent helpdesk operations, and proactive infrastructure stability.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "cloud-platform-services",
    title: "Cloud Platform Services",
    desc: "Modernize legacy infrastructure deployment with secure, scalable, multi-cloud architectures built around continuous integration models.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "cyber-security-platform-services",
    title: "Cyber Security Platform Services",
    desc: "Full-spectrum digital risk management, compliance auditing, zero-trust architecture blueprints, and round-the-clock SOC management.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "devops-and-agile-transformation",
    title: "DevOps & Agile Transformation",
    desc: "Accelerate software delivery and enhance reliability by integrating CI/CD pipelines, test automation, and robust Agile coaching frameworks.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "data-and-analytics",
    title: "Data & Analytics",
    desc: "Leverage big data ecosystems, predictive modeling, and intelligent dashboards to turn raw data into actionable enterprise insights.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "custom-software-engineering",
    title: "Custom Software Engineering",
    desc: "End-to-end bespoke application development utilizing microservices architectures, serverless computing, and modern front-end frameworks.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "governance-risk-and-compliance",
    title: "Governance, Risk & Compliance",
    desc: "Implement robust frameworks to ensure rigorous regulatory compliance, manage enterprise security risks, and maintain strict data governance across all your digital assets.",
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      <section className="relative pt-24 pb-16 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Enterprise Services</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Architecting secure, scalable, and innovative digital solutions to accelerate your technological evolution models.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ENTERPRISE_SERVICES.map((service) => {
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
                  {/* Dark overlay to ensure the white text stays readable against any image */}
                  <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[2px]"></div>
                </div>

                {/* Content Container (z-10 ensures it stays above the image) */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed font-medium mb-8 text-[15px] group-hover:text-slate-300 transition-colors duration-300 flex-1">
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
