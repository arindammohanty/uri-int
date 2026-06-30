"use client";

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Mail, Globe, ShieldCheck } from 'lucide-react';

interface ManagedServiceDetail {
  title: string;
  tagline: string;
  intro: string;
  provisions: string[];
  justifications: string[];
  industries: string[];
}

const MANAGED_DATA_STORE: Record<string, ManagedServiceDetail> = {
  "application-management-maintenance": {
    title: "Application Management & Maintenance",
    tagline: "Always Online. Always Optimized.",
    intro: "We assume complete ownership of your enterprise applications. From legacy system modernization to daily patch management, our L2/L3 support teams ensure your mission-critical software runs without interruption.",
    provisions: [
      "Lifecycle Management: Full oversight from deployment to sunsetting.",
      "Incident Resolution: Rapid troubleshooting and root-cause analysis for code-level issues.",
      "Performance Tuning: Continuous code optimization to reduce latency and resource consumption.",
      "Legacy Modernization: Safely migrating older monolithic applications to microservices."
    ],
    justifications: [
      "Zero Downtime: SLAs designed to guarantee high availability for critical business functions.",
      "Reduced IT Burden: Freeing up your internal developers to focus on building new features.",
      "Predictable Costs: Fixed-rate operational maintenance avoiding unexpected emergency break-fix fees."
    ],
    industries: ["SaaS & Software", "Financial Services", "Retail", "Healthcare"]
  },
  "data-centre-services": {
    title: "Data Centre Services",
    tagline: "The Core of Your Infrastructure.",
    intro: "Whether you operate on-premise hardware, private clouds, or hybrid infrastructures, our Data Centre operations ensure absolute hardware reliability, data integrity, and disaster recovery readiness.",
    provisions: [
      "Server Management: OS patching, virtualization oversight, and resource provisioning.",
      "Storage & Backup: Automated snapshots, high-availability storage pools, and data redundancy.",
      "Disaster Recovery: Routine failover testing and rigorous RPO/RTO adherence.",
      "Capacity Planning: Real-time monitoring to predict and manage server scaling requirements."
    ],
    justifications: [
      "Absolute Stability: Preventing hardware faults from impacting end-user experiences.",
      "Compliance Ready: Ensuring data residency and hardware security meet local regulatory laws.",
      "Green IT Optimization: Consolidating workloads to reduce power consumption and cooling costs."
    ],
    industries: ["Cloud Providers", "Government", "Banking", "Telecommunications"]
  },
  "telecom-applications": {
    title: "Telecom Applications",
    tagline: "Connecting the World, Without Delay.",
    intro: "Specialized operational support for the high-throughput systems powering modern telecommunications. We manage OSS/BSS platforms, billing software, and 5G network integration logic.",
    provisions: [
      "OSS/BSS Operations: Managing operational and business support systems round-the-clock.",
      "Billing & Revenue Assurance: Maintaining the integrity of massive transactional throughput.",
      "Network Protocol Support: Monitoring signaling and routing logic for carrier-grade networks.",
      "API Gateway Management: Securing the interfaces between telecom operators and 3rd party vendors."
    ],
    justifications: [
      "Carrier-Grade Reliability: SLAs that meet the extreme uptime requirements of global networks.",
      "Revenue Protection: Ensuring billing systems capture every transaction without fault.",
      "Rapid Tech Adoption: Accelerating the rollout of 5G and edge-computing applications."
    ],
    industries: ["Telecommunications", "Internet Service Providers (ISPs)", "Broadcasting"]
  },
  "network-security": {
    title: "Network Security",
    tagline: "Your Perimeter, Fortified.",
    intro: "Advanced threat hunting and persistent monitoring to protect your corporate network from evolving cyber threats. We run a 24/7 Security Operations Center (SOC) dedicated to your safety.",
    provisions: [
      "Firewall & VPN Management: Configuring and maintaining secure edge access for remote workforces.",
      "Intrusion Detection (IDS/IPS): Real-time analysis of network traffic to block malicious payloads.",
      "Zero-Trust Architecture: Implementing identity-based micro-segmentation across the network.",
      "Vulnerability Management: Routine scanning and rapid patching of network hardware and software."
    ],
    justifications: [
      "Proactive Defense: Stopping threats at the perimeter before they enter the data environment.",
      "Regulatory Compliance: Meeting strict PCI-DSS, HIPAA, and GDPR network security standards.",
      "Rapid Response: Automated isolation of compromised endpoints to prevent lateral movement."
    ],
    industries: ["All Industries", "Fintech", "Healthcare", "Defense & Aerospace"]
  },
  "end-user-support-services": {
    title: "End User Support Services",
    tagline: "Empowering Your Workforce.",
    intro: "Keep your global employees productive with our comprehensive IT helpdesk. We handle device management, access control, and daily technical troubleshooting with lightning-fast response times.",
    provisions: [
      "Global IT Helpdesk: Multi-lingual L1/L2 support available via chat, phone, and ticketing.",
      "Endpoint Management: Remote wiping, updating, and provisioning of corporate laptops and devices.",
      "Identity & Access: Managing Active Directory, SSO provisioning, and password resets.",
      "Software Deployment: Centralized rollout of enterprise applications to the workforce."
    ],
    justifications: [
      "Increased Productivity: Drastically reducing the time employees spend waiting for IT fixes.",
      "Standardized Security: Ensuring every employee device meets strict corporate security policies.",
      "Scalable Operations: Easily supporting a growing remote or hybrid workforce."
    ],
    industries: ["Corporate Enterprises", "BPOs", "Education", "Consulting Firms"]
  }
};

export default function ManagedServiceSubPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const service = MANAGED_DATA_STORE[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      <section className="relative pt-20 pb-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-6">
            <Link href="/managed-services" className="hover:text-orange-500 flex items-center transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Managed Services
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-3">Operational Capabilities</h2>
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-3">Business Value</h2>
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
              <h3 className="text-xl font-bold mb-3">Optimize Operations</h3>
              <p className="text-orange-50 text-sm font-medium leading-relaxed mb-6">
                Connect with our Managed IT experts to evaluate your infrastructure and discuss SLA requirements.
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
