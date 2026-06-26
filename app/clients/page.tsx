import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Globe2, TrendingUp } from 'lucide-react';

const MOCK_CLIENTS = [
  { name: "Apex Financial", industry: "Banking", region: "North America", type: "Enterprise" },
  { name: "Nexus Health Systems", industry: "Healthcare", region: "Europe", type: "Enterprise" },
  { name: "Zenith Logistics", industry: "Supply Chain", region: "Asia Pacific", type: "Mid-Market" },
  { name: "Quantum Retail", industry: "E-Commerce", region: "Global", type: "Enterprise" },
  { name: "Aura Technologies", industry: "SaaS", region: "North America", type: "Startup" },
  { name: "Stellar Manufacturing", industry: "Industrial", region: "Europe", type: "Enterprise" },
  { name: "Pioneer Telecom", industry: "Telecommunications", region: "Asia Pacific", type: "Enterprise" },
  { name: "Vanguard Education", industry: "EdTech", region: "North America", type: "Mid-Market" },
  { name: "Crest Energy", industry: "Energy", region: "Global", type: "Enterprise" },
];

export const metadata = {
  title: 'Our Clients | URI Tech',
  description: 'Discover the global enterprises and organizations that trust URI Technologies with their digital transformation.',
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span className="mx-2 text-slate-300">{'>'}</span>
            <span className="text-orange-500">Clients</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Global Clients</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Trusted by industry pioneers worldwide to engineer robust, scalable, and secure digital infrastructure.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-xl">
            <Globe2 className="w-10 h-10 text-orange-500 mb-6" />
            <h3 className="text-4xl font-extrabold mb-2">30+</h3>
            <p className="text-slate-400 font-medium">Countries Reached</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-orange-500 text-white shadow-xl shadow-orange-500/20">
            <Building2 className="w-10 h-10 text-white mb-6" />
            <h3 className="text-4xl font-extrabold mb-2">100+</h3>
            <p className="text-orange-100 font-medium">Enterprise Partners</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm">
            <TrendingUp className="w-10 h-10 text-orange-500 mb-6" />
            <h3 className="text-4xl font-extrabold text-slate-900 mb-2">98%</h3>
            <p className="text-slate-500 font-medium">Client Retention Rate</p>
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Partnering Across Industries</h2>
          <p className="text-slate-500 text-lg">We adapt our technological frameworks to suit the specific regulatory and scaling needs of diverse sectors.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_CLIENTS.map((client, idx) => (
            <div key={idx} className="group p-8 rounded-[2rem] border border-slate-200 bg-white hover:border-orange-500 hover:shadow-xl transition-all duration-300 cursor-default">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
                <span className="font-extrabold text-slate-400 group-hover:text-orange-500 text-lg">{client.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{client.name}</h3>
              <div className="flex flex-col space-y-2 mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 font-medium">Industry</span>
                  <span className="text-slate-700 font-bold">{client.industry}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 font-medium">Region</span>
                  <span className="text-slate-700 font-bold">{client.region}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-50 rounded-[2.5rem] p-12 md:p-20 border border-slate-100">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Join Our Partner Network</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
            Scale your operations and secure your infrastructure with our enterprise-grade solutions.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
          >
            Start a Conversation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
