import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Quote, ArrowRight } from 'lucide-react';

const MOCK_TESTIMONIALS = [
  { 
    id: 1, 
    name: "David R.", 
    role: "CTO at FinTech Solutions", 
    image: "https://ui-avatars.com/api/?name=David+R&background=FF824D&color=fff", 
    content: "URI Technologies fundamentally transformed our monolithic architecture. Their API & Microservices solutions drastically reduced our deployment times and increased system resilience." 
  },
  { 
    id: 2, 
    name: "Sarah M.", 
    role: "VP of Operations, Nexus Health", 
    image: "https://ui-avatars.com/api/?name=Sarah+M&background=0F172A&color=fff", 
    content: "Integrating their Cloud Platform Services yielded an unprecedented 40% increase in operational efficiency. The transition was seamless with zero downtime. Highly recommended." 
  },
  { 
    id: 3, 
    name: "Michael T.", 
    role: "Director of InfoSec, Global Bank", 
    image: "https://ui-avatars.com/api/?name=Michael+T&background=FF824D&color=fff", 
    content: "Their Zero-Trust Cyber Security frameworks secured our hybrid environments effortlessly. We now have complete observability and robust compliance controls in place across all our global branches." 
  },
  { 
    id: 4, 
    name: "Elena G.", 
    role: "Head of Engineering, SaaS Corp", 
    image: "https://ui-avatars.com/api/?name=Elena+G&background=0F172A&color=fff", 
    content: "The DevOps & Agile transformation coaching provided by URI changed our engineering culture. Our release frequency has tripled, and bug rates in production have plummeted." 
  },
  { 
    id: 5, 
    name: "James L.", 
    role: "CEO, Stellar Manufacturing", 
    image: "https://ui-avatars.com/api/?name=James+L&background=FF824D&color=fff", 
    content: "We needed a complete IT infrastructure overhaul to support our smart factory initiatives. URI delivered beyond our expectations, ensuring compliance and extreme reliability." 
  },
  { 
    id: 6, 
    name: "Anita W.", 
    role: "Data Architect, Quantum Retail", 
    image: "https://ui-avatars.com/api/?name=Anita+W&background=0F172A&color=fff", 
    content: "Thanks to their Data & Analytics team, our supply chain forecasting is now fully automated and driven by real-time intelligence. The ROI was visible within the first quarter." 
  }
];

export const metadata = {
  title: 'Testimonials | URI Tech',
  description: 'Read success stories and testimonials from enterprise leaders who have transformed their businesses with URI Technologies.',
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Client Success Stories</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Hear from the technology leaders and executives who have partnered with us to achieve digital excellence.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/40 flex flex-col justify-between hover:-translate-y-1 hover:border-orange-500/30 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 group-hover:text-orange-50 transition-colors" />
              
              <div className="relative z-10 mb-8">
                <div className="flex text-orange-500 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current mr-0.5" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed font-medium text-[15px] italic">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>

              <div className="flex items-center pt-6 border-t border-slate-100">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={48} 
                  height={48} 
                  unoptimized 
                  className="w-12 h-12 rounded-full mr-4 bg-slate-100 object-cover" 
                />
                <div>
                  <h4 className="font-extrabold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 font-bold">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to write your success story?</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 font-medium">
              Consult with our systems architects today to evaluate your infrastructure requirements.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              Contact Our Experts <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
