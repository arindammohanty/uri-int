"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Facebook, Instagram, Linkedin, ChevronDown } from 'lucide-react';

const OFFICE_LOCATIONS = [
  {
    id: 'corporate',
    title: 'Corporate Office (India)',
    content: (
      <>
        B-36, 2nd Floor, Rupali Street<br />
        Sahid Nagar, Bhubaneswar - 751007
      </>
    )
  },
  {
    id: 'hub1',
    title: 'Business Hub (India)',
    content: (
      <>
        1-60/30, Gachibowli - Miyapur Rd,<br />
        Jayabheri Enclave, Gachibowli,<br />
        Hyderabad, Telangana 500032.
      </>
    )
  },
  {
    id: 'hub2',
    title: 'Business Hub (Global)',
    content: (
      <>
        A-10-11, Brickfields,<br />
        50470 Kuala Lumpur,<br />
        Federal Territory of Kuala Lumpur
      </>
    )
  }
];

export default function Footer() {
  const pathname = usePathname();
  const [activeAddress, setActiveAddress] = useState<string | null>('corporate');

  if (pathname === '/crn') {
    return null;
  }

  return (
    <footer className="bg-[#F8F9FA] pt-12 pb-12 border-t border-slate-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* RESTORED: Original Large Centered CTA Banner */}
        <div className="relative bg-[#FF6B35] rounded-[2rem] p-10 md:p-16 lg:p-20 text-center text-white mb-12 overflow-hidden shadow-lg shadow-orange-500/10">
          
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diamonds" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M32 0L64 32L32 64L0 32Z" fill="none" stroke="black" strokeOpacity="0.15" strokeWidth="1"/>
                <circle cx="32" cy="0" r="2.5" fill="black" fillOpacity="0.25"/>
                <circle cx="64" cy="32" r="2.5" fill="black" fillOpacity="0.25"/>
                <circle cx="32" cy="64" r="2.5" fill="black" fillOpacity="0.25"/>
                <circle cx="0" cy="32" r="2.5" fill="black" fillOpacity="0.25"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diamonds)" />
          </svg>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Ready for Digital Transformation?</h2>
            <p className="text-white/90 text-sm md:text-base mb-8 max-w-2xl mx-auto font-medium">
              Accelerate your growth and future-proof your enterprise with URI Technologies.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex justify-center bg-slate-900 text-white font-semibold px-8 py-4 rounded-xl items-center hover:bg-slate-800 transition-colors shadow-xl"
            >
              Consult Experts <ArrowRight className="ml-2 w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* Compact Lower Footer Section */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm">
          
          <div className="mb-8">
            <Link href="/" className="flex items-center">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">URI</span>
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#FF6B35] ml-1.5">Technologies</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-8 w-full items-start">
            
            {/* Dynamic Offices Section (One Address at a time) */}
            <div className="flex flex-col lg:col-span-4">
              <h3 className="font-bold text-slate-900 mb-4 text-[15px] md:text-base">Reach Us</h3>
              <div className="flex flex-col space-y-2">
                {OFFICE_LOCATIONS.map((office) => (
                  <div key={office.id} className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50 transition-colors">
                    <button 
                      onClick={() => setActiveAddress(activeAddress === office.id ? null : office.id)}
                      className="w-full flex items-center justify-between py-2.5 px-4 bg-white hover:bg-slate-50 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800 text-sm">{office.title}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeAddress === office.id ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out ${activeAddress === office.id ? 'max-h-[150px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className="px-4 pb-3 pt-1 border-t border-slate-100 text-slate-500 text-xs sm:text-sm font-medium">
                        <div className="flex items-start">
                          <span className="text-[#FF6B35] mr-2 mt-0.5">•</span>
                          <span className="leading-relaxed block break-words">
                            {office.content}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col lg:col-span-3 lg:pl-6">
              <h3 className="font-bold text-slate-900 mb-4 text-[15px] md:text-base">Contact us</h3>
              <div className="space-y-1.5 text-slate-500 text-sm font-medium leading-relaxed">
                <p>Phone - +91 674 6066050</p>
                <p>Email - contact@uritechnologies.com</p>
              </div>
            </div>

            {/* Core Services */}
            <div className="flex flex-col lg:col-span-3">
              <h3 className="font-bold text-slate-900 mb-4 text-[15px] md:text-base">Core Services</h3>
              <ul className="space-y-2.5 text-slate-500 text-sm font-medium">
                <li><Link href="/services/cloud-platform-services" className="hover:text-[#FF6B35] transition-colors">Cloud Platforms</Link></li>
                <li><Link href="/services/cyber-security-platform-services" className="hover:text-[#FF6B35] transition-colors">Cyber Security</Link></li>
                <li><Link href="/services/api-and-microservices-architecture" className="hover:text-[#FF6B35] transition-colors">Microservices</Link></li>
                <li><Link href="/services/devops-and-agile-transformation" className="hover:text-[#FF6B35] transition-colors">DevOps & Agile</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col lg:col-span-2">
              <h3 className="font-bold text-slate-900 mb-4 text-[15px] md:text-base">Company</h3>
              <ul className="space-y-2.5 text-slate-500 text-sm font-medium">
                <li><Link href="/about" className="hover:text-[#FF6B35] transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-[#FF6B35] transition-colors">All Services</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF6B35] transition-colors">Contact</Link></li>
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm font-medium text-center md:text-left">
              © {new Date().getFullYear()} URI Technologies. All rights reserved.
            </p>
            <div className="flex items-center space-x-5 text-slate-900">
              <a href="#" aria-label="Facebook" className="hover:text-[#FF6B35] transition-colors">
                <Facebook className="w-4 h-4" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#FF6B35] transition-colors">
                <Instagram className="w-4 h-4" strokeWidth={2.5} />
              </a>
              <a href="#" aria-label="X (Twitter)" className="hover:text-[#FF6B35] transition-colors">
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#FF6B35] transition-colors">
                <Linkedin className="w-4 h-4" fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
