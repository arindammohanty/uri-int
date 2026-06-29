"use client";

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Mail, Globe, ShieldCheck } from 'lucide-react';

interface ServiceDetail {
  title: string;
  tagline: string;
  intro: string;
  provisions: string[];
  justifications: string[];
  industries: string[];
}

const SERVICE_DATA_STORE: Record<string, ServiceDetail> = {
  "it-staff-augmentation": {
    title: "IT Staff Augmentation",
    tagline: "Scale Your Team, On Demand.",
    intro: "Bridge skill gaps and accelerate project delivery with our IT Staff Augmentation services. We provide highly qualified tech professionals ready to integrate seamlessly into your existing teams without the overhead of permanent hiring.",
    provisions: [
      "Flexible Scaling: Quickly ramp up or down based on fluctuating project demands.",
      "Access to Niche Skills: Source specialized talent in Cloud, AI, Cybersecurity, and Software Engineering.",
      "Seamless Integration: Candidates are pre-vetted for both technical proficiency and cultural fit.",
      "Reduced Overhead: Avoid the long-term administrative and financial burdens of full-time employment."
    ],
    justifications: [
      "Speed to Market: Fill critical tech roles in days, not months, to keep projects on track.",
      "Cost Efficiency: Pay only for the specialized talent and hours you actually need.",
      "Risk Mitigation: Evaluate professional performance on a contract basis before committing long-term."
    ],
    industries: ["Information Technology", "Financial Services & Fintech", "Healthcare Tech", "E-commerce"]
  },
  "campus-hiring-solutions": {
    title: "Campus Hiring Solutions",
    tagline: "Building Your Future Workforce.",
    intro: "Discover and secure top emerging talent directly from premier educational institutions. Our end-to-end campus hiring solutions streamline the graduate recruitment process, ensuring you build a pipeline of future leaders.",
    provisions: [
      "Targeted Campus Drives: Facilitating direct access to top engineering and management institutes.",
      "Comprehensive Assessments: Administering tailored technical, cognitive, and aptitude testing.",
      "Brand Building: Enhancing your employer brand presence among emerging young professionals.",
      "Onboarding Support: Ensuring a smooth logistical transition from campus to corporate environments."
    ],
    justifications: [
      "High Volume, High Quality: Efficiently processing thousands of candidates to find the top percentile.",
      "Future Leaders: Injecting fresh perspectives and modern technical training directly into your teams.",
      "Reduced Time-to-Hire: Taking the burden of logistical and event management off your internal HR."
    ],
    industries: ["IT Services", "Business Consulting", "Manufacturing", "Telecommunications"]
  },
  "leadership-hiring": {
    title: "Leadership Hiring",
    tagline: "Securing Visionary Talent.",
    intro: "Our executive search practice focuses on identifying, evaluating, and securing transformative C-level and senior leadership talent that aligns perfectly with your strategic vision and corporate culture.",
    provisions: [
      "Executive Search & Selection: Retained search execution for C-Suite, VP, and Director-level roles.",
      "Market Mapping & Intelligence: Delivering deep insights into competitor talent landscapes.",
      "Rigorous Assessment: Multi-stage evaluations focusing on leadership capability and strategic foresight.",
      "Confidential Engagement: Discreetly approaching passive, high-impact candidates on your behalf."
    ],
    justifications: [
      "Strategic Impact: Securing leaders who drive measurable organizational growth and stability.",
      "Reduced Hiring Risk: Highly structured validation processes ensure executive reliability.",
      "Extensive Network: Leveraging our exclusive connections to top-tier, passive executives."
    ],
    industries: ["Banking & Finance", "Healthcare & Life Sciences", "Technology & SaaS", "Retail Enterprise"]
  },
  "permanent-recruitment": {
    title: "Permanent Recruitment",
    tagline: "Your Core Team, Solidified.",
    intro: "Build a stable, high-performing workforce with our permanent recruitment services. We handle the entire lifecycle of talent acquisition to find candidates who are in it for the long haul.",
    provisions: [
      "End-to-End Recruitment Lifecycle: Managing everything from job profiling to final offer negotiation.",
      "Advanced Sourcing Strategies: Utilizing AI-driven matching and our extensive proprietary talent databases.",
      "Cultural Fit Alignment: Deep behavioral screening to ensure candidates match your corporate ethos.",
      "Market Salary Benchmarking: Providing competitive compensation advisory to secure top choices."
    ],
    justifications: [
      "Quality of Hire: Rigorous vetting processes ensure long-term employee retention.",
      "Time Savings: Freeing up your internal HR resources to focus on strategic initiatives.",
      "Guaranteed Replacements: Risk-free hiring backed by our standard replacement clauses."
    ],
    industries: ["Engineering & IT", "FMCG", "Product Development", "Logistics & Supply Chain"]
  },
  "hire-train-deploy": {
    title: "Hire, Train & Deploy",
    tagline: "Custom-Trained For Your Needs.",
    intro: "Address specific skill shortages with our customized Hire, Train & Deploy model. We recruit promising talent, upskill them on your exact tech stack, and deploy them ready to deliver from day one.",
    provisions: [
      "Custom Curriculum Design: Training modules built specifically around your proprietary systems and needs.",
      "Talent Sourcing & Screening: Identifying baseline candidates possessing high learning agility.",
      "Intensive Bootcamp Training: Hands-on, practical skill development led by industry experts.",
      "Day-One Productivity: Deploying candidates who arrive fully productive and domain-aware."
    ],
    justifications: [
      "Zero Skill Gap: Ensuring an exact match for your niche and emerging technology requirements.",
      "Lower Attrition: Candidates invested in through dedicated training consistently show higher loyalty.",
      "Cost-Effective Scaling: Predictable, optimized costs for building customized talent pipelines."
    ],
    industries: ["Global Capability Centers (GCCs)", "IT Consulting", "Automotive Technology", "Fintech"]
  },
  "borderless-talent-solutions": {
    title: "Borderless Talent Solutions",
    tagline: "Global Talent, Zero Boundaries.",
    intro: "Expand your search beyond geographical limits. Our Borderless Talent Solutions help you build diverse, remote teams by tapping into the best global talent pools seamlessly and compliantly.",
    provisions: [
      "Global Talent Sourcing: Accessing top-tier candidates across international and emerging markets.",
      "Employer of Record (EoR) Services: Enabling compliant hiring without setting up local legal entities.",
      "Remote Workforce Management: Providing infrastructure support for seamless remote team integration.",
      "Cross-Border Payroll & Compliance: Navigating complex international labor laws and tax regulations."
    ],
    justifications: [
      "Access to the Best: Refusing to settle for local limits when the optimal talent resides overseas.",
      "Cost Arbitrage: Leveraging geo-economic advantages for highly optimized workforce operational costs.",
      "Risk-Free Expansion: Full legal, payroll, and administrative compliance handled entirely by our experts."
    ],
    industries: ["Technology Startups", "Global E-commerce", "Digital Agencies", "Multinational Corporations"]
  }
};

export default function ServiceSubPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const service = SERVICE_DATA_STORE[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      <section className="relative pt-20 pb-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-6">
            <Link href="/services" className="hover:text-orange-500 flex items-center transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Services
            </Link>
          </div>
          <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-3">{service.tagline}</h4>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{service.title}</h1>
          <p className="text-lg text-slate-500 max-w-3xl leading-relaxed font-medium">
            {service.intro}
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-3">Core Operational Capabilities</h2>
              <div className="space-y-6">
                {service.provisions.map((prov, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                    </div>
                    <p className="ml-4 text-slate-600 font-medium leading-relaxed">{prov}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-3">Strategic Framework Value</h2>
              <div className="space-y-6">
                {service.justifications.map((just, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <ShieldCheck className="w-5 h-5 text-orange-500" />
                    </div>
                    <p className="ml-4 text-slate-600 font-medium leading-relaxed">{just}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem]">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Industries Served</h3>
              <div className="flex flex-wrap gap-2">
                {service.industries.map((ind, index) => (
                  <span key={index} className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-xl shadow-sm">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-orange-500 p-8 rounded-[2rem] text-white shadow-xl shadow-orange-500/10">
              <h3 className="text-xl font-bold mb-3">Initiate Integration</h3>
              <p className="text-orange-50 text-sm font-medium leading-relaxed mb-6">
                Connect with our recruitment experts to evaluate hiring requirements and coordinate staffing steps.
              </p>
              <div className="space-y-3 text-sm font-bold">
                <div className="flex items-center text-orange-50"><Mail className="w-4 h-4 mr-2" /> sales@uritechnologies.com</div>
                <div className="flex items-center text-orange-50"><Globe className="w-4 h-4 mr-2" /> 1-60/30, Gachibowli - Miyapur Rd, Jayabheri Enclave, Gachibowli, Hyderabad, Telangana 500032</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
