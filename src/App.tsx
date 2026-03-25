/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ShieldCheck, 
  Zap, 
  Users, 
  HardHat, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  MessageCircle,
  Construction,
  PaintBucket,
  Layers,
  Truck,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const FAST_LOGO_PLACEHOLDER = "https://picsum.photos/seed/fastlogo/200/80"; // Placeholder for the actual logo
const RSG_LOGO_PLACEHOLDER = "https://picsum.photos/seed/rsg/150/50"; // Placeholder for RSG reference

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Safety', href: '#safety' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen selection:bg-brand-green selection:text-white">
      {/* Sticky WhatsApp */}
      <a 
        href="https://wa.me/966XXXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer"
        className="sticky-whatsapp"
        aria-label="WhatsApp Now"
      >
        <MessageCircle size={32} />
      </a>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-24 bg-brand-dark flex items-center justify-center text-white font-display font-bold text-xl tracking-tighter">
              FAST
            </div>
            <span className={`text-[10px] uppercase tracking-[0.3em] font-medium ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>Finishing</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-brand-green ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary py-3 px-6 text-[10px]">Request Proposal</a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-widest font-medium text-brand-dark py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-center mt-4" onClick={() => setIsMenuOpen(false)}>Request Proposal</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/neom/1920/1080?grayscale" 
            alt="NEOM Construction Site" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-brand-green" />
              <span className="text-brand-green text-xs uppercase tracking-[0.4em] font-semibold">Saudi Vision 2030 Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-display font-bold leading-[0.9] mb-8">
              Precision Finishing for <span className="text-brand-green italic">Giga-Projects</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed">
              Delivering high-quality finishing, EIFS, and skilled manpower at the speed of Saudi Arabia's most ambitious developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
                Request Proposal <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="https://wa.me/966XXXXXXXXX" className="btn-outline border-white text-white hover:bg-white hover:text-brand-dark flex items-center justify-center gap-2">
                <MessageCircle size={16} /> WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/3 bg-brand-green"
            />
          </div>
        </div>
      </section>

      {/* Trust & Authority Bar */}
      <div className="bg-white border-y border-gray-100 overflow-hidden py-8">
        <div className="marquee-track items-center gap-12 md:gap-24">
          <div className="flex items-center gap-4 whitespace-nowrap">
            <ShieldCheck className="text-brand-green" size={24} />
            <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">Aligned with Red Sea Global Standards</span>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <Construction className="text-brand-blue" size={24} />
            <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">NEOM Approved Subcontractor</span>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <HardHat className="text-brand-accent" size={24} />
            <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">"Safer Together" Safety Culture</span>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <Users className="text-brand-green" size={24} />
            <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">500+ Certified Skilled Workforce</span>
          </div>
          {/* Repeat for seamless loop */}
          <div className="flex items-center gap-4 whitespace-nowrap">
            <ShieldCheck className="text-brand-green" size={24} />
            <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">Aligned with Red Sea Global Standards</span>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <Construction className="text-brand-blue" size={24} />
            <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">NEOM Approved Subcontractor</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-brand-green text-xs uppercase tracking-[0.4em] font-bold mb-4">The FAST Advantage</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              A Reliable Partner for <br /> Saudi Arabia's Future
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              FAST Finishing Contracting Company is a specialized finishing partner dedicated to supporting the Kingdom's Vision 2030 giga-projects. We understand the unique demands of large-scale developments like NEOM and Red Sea Global—where speed, safety, and uncompromising quality are the baseline.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our operations are built on a foundation of strong HSE culture and rapid mobilization capabilities, ensuring we meet project milestones in even the most remote locations.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                <div className="text-3xl font-display font-bold text-brand-dark mb-1">98%</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400">Safety Compliance</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-brand-dark mb-1">24h</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400">Mobilization Response</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/construction-site/800/800" 
                alt="Premium Finishing Work" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-brand-dark text-white p-8 max-w-[240px]">
              <div className="text-brand-green italic font-serif text-sm mb-2">"Safety is our core value, not a requirement."</div>
              <div className="text-[10px] uppercase tracking-widest opacity-60">— HSE Management Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-brand-green text-xs uppercase tracking-[0.4em] font-bold mb-4">Our Expertise</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Specialized Solutions for Giga-Scale Projects</h2>
            </div>
            <a href="#contact" className="text-xs uppercase tracking-widest font-bold border-b-2 border-brand-green pb-1 hover:text-brand-green transition-colors">
              View All Services
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {[
              {
                title: "Premium Finishing Works",
                icon: <Layers className="text-brand-green" />,
                problem: "Inconsistent quality across large-scale developments.",
                advantage: "European-standard finishing with local mobilization speed.",
                result: "Flawless interiors that meet Tier-1 consultant standards."
              },
              {
                title: "EIFS & Exterior Painting",
                icon: <PaintBucket className="text-brand-green" />,
                problem: "Harsh coastal environments affecting facade longevity.",
                advantage: "Weather-resistant EIFS systems designed for Red Sea humidity.",
                result: "Durable, high-aesthetic facades with superior thermal insulation."
              },
              {
                title: "GRC Installation",
                icon: <Construction className="text-brand-green" />,
                problem: "Complex architectural designs requiring precise installation.",
                advantage: "Specialized GRC teams experienced in intricate patterns.",
                result: "Rapid execution of complex architectural features."
              },
              {
                title: "Certified Manpower Supply",
                icon: <Users className="text-brand-green" />,
                problem: "Shortage of skilled, certified labor for remote sites.",
                advantage: "Pre-vetted, HSE-trained workforce ready for immediate deployment.",
                result: "Zero-delay project scaling with compliant manpower."
              },
              {
                title: "Equipment & Access Support",
                icon: <Truck className="text-brand-green" />,
                problem: "Lack of reliable access solutions in remote project areas.",
                advantage: "Certified manlifts and access equipment with operators.",
                result: "Safe and efficient high-level working environments."
              },
              {
                title: "HSE & Site Support",
                icon: <HardHat className="text-brand-green" />,
                problem: "Strict safety requirements of RSG and NEOM projects.",
                advantage: "Full HSE documentation (PTW, JSA, TBT) managed by FAST.",
                result: "Seamless compliance with giga-project safety protocols."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 hover:bg-brand-dark group transition-all duration-500">
                <div className="mb-8 p-4 bg-surface inline-block group-hover:bg-brand-green group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-6 group-hover:text-white">{service.title}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">The Challenge</div>
                    <p className="text-sm text-gray-600 group-hover:text-gray-400">{service.problem}</p>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-brand-green mb-1">FAST Advantage</div>
                    <p className="text-sm text-gray-600 group-hover:text-gray-400">{service.advantage}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 group-hover:border-white/10">
                    <div className="flex items-center gap-2 text-brand-dark group-hover:text-white font-semibold text-sm">
                      <CheckCircle2 size={16} className="text-brand-green" /> {service.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FAST Section */}
      <section className="bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-1/2 section-padding border-r border-white/10">
            <div className="text-brand-green text-xs uppercase tracking-[0.4em] font-bold mb-6">Why Partner With Us</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 leading-tight">
              Built for the <br /> <span className="text-brand-green">Red Sea Frontier</span>
            </h2>
            
            <div className="space-y-10">
              {[
                {
                  title: "Rapid Mobilization",
                  desc: "Capability to deploy manpower and equipment to remote locations like Umluj and NEOM within 24-48 hours.",
                  icon: <Zap size={20} />
                },
                {
                  title: "HSE-Driven Operations",
                  desc: "Full alignment with RSG safety standards. Every task is governed by PTW, JSA, and daily TBT.",
                  icon: <ShieldCheck size={20} />
                },
                {
                  title: "Skilled & Controlled",
                  desc: "We don't just supply labor; we provide managed teams with certified supervisors and quality control.",
                  icon: <Users size={20} />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 border border-brand-green flex items-center justify-center text-brand-green">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src="https://picsum.photos/seed/redsea/1000/1000?grayscale" 
              alt="Red Sea Project" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-green/10 mix-blend-overlay" />
            <div className="absolute bottom-12 right-12 glass-card p-8 text-brand-dark max-w-sm">
              <div className="text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" /> Live Project Status
              </div>
              <p className="text-sm font-medium mb-4 italic">"FAST has consistently met our aggressive timelines at the Red Sea coastal sites without a single safety incident."</p>
              <div className="text-[10px] uppercase tracking-widest opacity-60">— Project Manager, Tier-1 Contractor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Excellence Section */}
      <section id="safety" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full mb-6">
            <ShieldCheck size={16} />
            <span className="text-[10px] uppercase tracking-widest font-bold">Safer Together Culture</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Safety is Our Core Identity</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            In the world of giga-projects, safety isn't just a checkbox—it's the license to operate. We implement rigorous protocols to ensure every worker returns home safely.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "PTW", label: "Permit to Work", desc: "Strict control over high-risk activities." },
            { title: "TBT", label: "Toolbox Talks", desc: "Daily safety briefings for every team." },
            { title: "JSA", label: "Job Safety Analysis", desc: "Pre-task risk assessment for all works." },
            { title: "HSE", label: "Incident-Free", desc: "Targeting zero LTI across all projects." }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 border border-gray-100 hover:border-brand-green transition-colors">
              <div className="text-4xl font-display font-bold text-brand-dark/10 mb-2 group-hover:text-brand-green/20">{item.title}</div>
              <div className="text-xs uppercase tracking-widest font-bold mb-3">{item.label}</div>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Experience */}
      <section id="projects" className="section-padding bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="text-brand-green text-xs uppercase tracking-[0.4em] font-bold mb-4">Proven Track Record</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Giga-Project Portfolio</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Red Sea Coastal Villa Finishing",
                location: "Umluj, KSA",
                scope: "Premium Interior Finishing & EIFS Facade",
                image: "https://picsum.photos/seed/villa/800/600?grayscale"
              },
              {
                title: "NEOM Infrastructure Support",
                location: "Tabuk Region, KSA",
                scope: "Specialized Manpower & GRC Installation",
                image: "https://picsum.photos/seed/neom-project/800/600?grayscale"
              }
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-brand-green text-white text-[10px] uppercase tracking-widest px-3 py-1">
                    {project.location}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-brand-green transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest">{project.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="section-padding bg-brand-green relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Construction size={400} className="text-white" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
            Partner with a Finishing Contractor <br className="hidden md:block" /> That Meets Giga-Project Standards
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            Get a comprehensive proposal and mobilization plan within 24 hours. Reliable, safe, and execution-ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-white text-brand-green px-10 py-5 font-display font-bold uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-white transition-all">
              Request Proposal
            </a>
            <a href="https://wa.me/966XXXXXXXXX" className="bg-brand-dark text-white px-10 py-5 font-display font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <div className="text-brand-green text-xs uppercase tracking-[0.4em] font-bold mb-6">Get In Touch</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Let's Discuss Your Project Requirements</h2>
            <p className="text-gray-600 mb-12">
              Whether you need a full finishing package or specialized manpower for a remote site, our team is ready to support your vision.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface flex items-center justify-center text-brand-green">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Call Us</div>
                  <div className="text-lg font-bold text-brand-dark">+966 XX XXX XXXX</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface flex items-center justify-center text-brand-green">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Email Us</div>
                  <div className="text-lg font-bold text-brand-dark">info@fast-finishing.com</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface flex items-center justify-center text-brand-green">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Location</div>
                  <div className="text-lg font-bold text-brand-dark">Red Sea Region / Umluj, Saudi Arabia</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface p-10 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Full Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-brand-green transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Company</label>
                  <input type="text" className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-brand-green transition-colors" placeholder="Company Name" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Email Address</label>
                  <input type="email" className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-brand-green transition-colors" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-brand-green transition-colors" placeholder="+966" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Project Type</label>
                <select className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-brand-green transition-colors appearance-none">
                  <option>Finishing Works</option>
                  <option>EIFS & Painting</option>
                  <option>Manpower Supply</option>
                  <option>GRC Installation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Message</label>
                <textarea rows={4} className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-brand-green transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-5">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-20 bg-white flex items-center justify-center text-brand-dark font-display font-bold text-lg tracking-tighter">
                  FAST
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">Finishing</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-8">
                Premium finishing contractor specialized in Saudi Arabia's giga-projects. Delivering quality, speed, and safety in every square meter.
              </p>
              <div className="flex gap-4">
                <div className="text-brand-green font-display font-bold text-sm">الجودة. السرعة. السلامة.</div>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-brand-green transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-brand-green transition-colors">Our Services</a></li>
                <li><a href="#safety" className="hover:text-brand-green transition-colors">Safety Excellence</a></li>
                <li><a href="#projects" className="hover:text-brand-green transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">HSE Policy</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">Quality Manual</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] uppercase tracking-widest text-gray-500">
              © 2026 FAST Finishing Contracting Company. All Rights Reserved.
            </div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">
              Umluj, Red Sea Region, KSA
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
