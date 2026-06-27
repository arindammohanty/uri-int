"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/crn') {
    return null;
  }

  return (
    <footer className="bg-[#F8F9FA] pt-12 pb-12 border-t border-slate-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* CTA Banner */}
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

        {/* Main Footer Section */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm">
          
          {/* 3-Column Grid Layout with increased spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-12 w-full items-start">
            
            {/* Column 1: Logo, Contact Us, Company */}
            <div className="flex flex-col">
              <Link href="/" className="inline-flex items-center bg-slate-900/95 p-4 rounded-2xl hover:bg-slate-900 transition-colors shadow-sm mb-8 w-fit">
                <Image 
                  src="/images/logo.png" 
                  alt="URI Technologies Logo" 
                  width={240} 
                  height={80} 
                  className="h-10 md:h-12 w-auto" 
                />
              </Link>

              <div className="mb-10">
                <h3 className="font-bold text-slate-900 mb-5 text-[15px] md:text-base">Contact us</h3>
                <div className="space-y-3 text-slate-500 text-sm font-medium leading-relaxed">
                  <p>Phone: +91 674 6066050</p>
                  <p>Email: sales@uritechnologies.com</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-5 text-[15px] md:text-base">Company</h3>
                <ul className="space-y-3 text-slate-500 text-sm font-medium">
                  <li><Link href="/about" className="hover:text-[#FF6B35] transition-colors">About Us</Link></li>
                  <li><Link href="/managed-services" className="hover:text-[#FF6B35] transition-colors">Managed Services</Link></li>
                  <li><Link href="/services" className="hover:text-[#FF6B35] transition-colors">All Services</Link></li>
                  <li><Link href="/contact" className="hover:text-[#FF6B35] transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 2: Core Services, Managed Services */}
            <div className="flex flex-col pt-2 lg:pt-0">
              <div className="mb-10">
                <h3 className="font-bold text-slate-900 mb-5 text-[15px] md:text-base">Core Services</h3>
                <ul className="space-y-3 text-slate-500 text-sm font-medium">
                  <li><Link href="/services/it-staff-augmentation" className="hover:text-[#FF6B35] transition-colors">IT Staff Augmentation</Link></li>
                  <li><Link href="/services/campus-hiring-solutions" className="hover:text-[#FF6B35] transition-colors">Campus Hiring Solutions</Link></li>
                  <li><Link href="/services/leadership-hiring" className="hover:text-[#FF6B35] transition-colors">Leadership Hiring</Link></li>
                  <li><Link href="/services/permanent-recruitment" className="hover:text-[#FF6B35] transition-colors">Permanent Recruitment</Link></li>
                  <li><Link href="/services/hire-train-deploy" className="hover:text-[#FF6B35] transition-colors">Hire, Train & Deploy</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-5 text-[15px] md:text-base">Managed Services</h3>
                <ul className="space-y-3 text-slate-500 text-sm font-medium">
                  <li><Link href="/managed-services/application-management-maintenance" className="hover:text-[#FF6B35] transition-colors">App Management & Maintenance</Link></li>
                  <li><Link href="/managed-services/data-centre-services" className="hover:text-[#FF6B35] transition-colors">Data Centre Services</Link></li>
                  <li><Link href="/managed-services/telecom-applications" className="hover:text-[#FF6B35] transition-colors">Telecom Applications</Link></li>
                  <li><Link href="/managed-services/network-security" className="hover:text-[#FF6B35] transition-colors">Network Security</Link></li>
                  <li><Link href="/managed-services/end-user-support-services" className="hover:text-[#FF6B35] transition-colors">End User Support Services</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Reach Us */}
            <div className="flex flex-col pt-2 lg:pt-0">
              <h3 className="font-bold text-slate-900 mb-5 text-[15px] md:text-base">Reach Us</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">India Office</h4>
                  <ul className="space-y-4 text-sm text-slate-500 font-medium">
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2 mt-0.5">•</span>
                      <span className="leading-relaxed block break-words">
                        B-36, 2nd Floor, Rupali Street<br />
                        Sahid Nagar, Bhubaneswar - 751007
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2 mt-0.5">•</span>
                      <span className="leading-relaxed block break-words">
                        1-60/30, Gachibowli - Miyapur Rd,<br />
                        Jayabheri Enclave, Gachibowli,<br />
                        Hyderabad, Telangana 500032
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">Global Office</h4>
                  <ul className="space-y-4 text-sm text-slate-500 font-medium">
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2 mt-0.5">•</span>
                      <span className="leading-relaxed block break-words">
                        A-10-11, Brickfields,<br />
                        50470 Kuala Lumpur,<br />
                        Federal Territory of Kuala Lumpur
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-sm font-medium text-center md:text-left">
              © {new Date().getFullYear()} URI Technologies. All rights reserved.
            </p>
            <div className="flex items-center space-x-5 text-slate-900">
              <a href="#" aria-label="Facebook" className="hover:text-[#FF6B35] transition-colors">
                <Facebook className="w-5 h-5" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#FF6B35] transition-colors">
                <Instagram className="w-5 h-5" strokeWidth={2.5} />
              </a>
              <a href="#" aria-label="X (Twitter)" className="hover:text-[#FF6B35] transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#FF6B35] transition-colors">
                <Linkedin className="w-5 h-5" fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
