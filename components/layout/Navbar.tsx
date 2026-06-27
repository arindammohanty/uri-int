"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/jobs', label: 'Jobs' },
    { href: '/services', label: 'Services' },
    { href: '/managed-services', label: 'Managed Services' },
    { href: '/clients', label: 'Clients' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (pathname === '/crn') {
    return null;
  }

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          
          <Link href="/" className="flex items-center cursor-pointer bg-slate-900/95 p-3 rounded-2xl hover:bg-slate-900 transition-colors shadow-sm">
            <Image 
              src="/images/logo.png" 
              alt="URI Technologies Logo" 
              width={200} 
              height={80} 
              className="h-12 sm:h-14 w-auto" 
              priority 
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold transition-colors ${
                    isActive ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/crn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              Login
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-600 hover:text-orange-500 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 absolute w-full left-0 shadow-2xl z-[100]">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block w-full text-left px-4 py-4 rounded-xl text-base font-bold transition-colors ${
                    isActive ? 'bg-orange-50 text-orange-500' : 'text-slate-600 hover:bg-slate-50 hover:text-orange-500'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 px-2">
              <Link 
                href="/crn" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-orange-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
