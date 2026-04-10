/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import {
  Settings, Plug, Globe, Cloud, Zap, Shield,
  Mail, Phone, Linkedin, Github, ArrowRight, FileText, Menu, X
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-black/70 border-b border-border ${scrolled ? 'py-4 px-8 md:px-16' : 'py-6 px-8 md:px-16'}`}>
      <div className="flex justify-between items-center">
        <a href="#" className="font-display font-extrabold text-xl tracking-tight text-white no-underline">
          Sedira<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex gap-10 items-center">
          <li><a href="#services" className="text-muted hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">Services</a></li>
          <li><a href="#work" className="text-muted hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">Work</a></li>
          <li><a href="#plugins" className="text-muted hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">WordPress</a></li>
          <li><a href="#erp" className="text-muted hover:text-white text-sm font-medium tracking-wider uppercase transition-colors">ERP</a></li>
          <li><a href="#contact" className="bg-accent hover:bg-accent-hover text-black px-6 py-2.5 rounded-full font-semibold transition-all hover:-translate-y-0.5 uppercase tracking-wider text-sm">Get in touch</a></li>
        </ul>
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6 pt-8 pb-4 border-t border-white/10 mt-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-white text-sm font-medium tracking-wider uppercase">Services</a>
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-white text-sm font-medium tracking-wider uppercase">Work</a>
              <a href="#plugins" onClick={() => setMobileMenuOpen(false)} className="text-white text-sm font-medium tracking-wider uppercase">WordPress</a>
              <a href="#erp" onClick={() => setMobileMenuOpen(false)} className="text-white text-sm font-medium tracking-wider uppercase">ERP</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-accent text-black px-6 py-3 rounded-full font-semibold uppercase tracking-wider text-sm text-center mt-2">Get in touch</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 pt-40 pb-24 overflow-hidden">
      <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(200,255,0,0.07)_0%,transparent_70%)] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 -left-[5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,92,43,0.05)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 text-accent px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-widest uppercase mb-10">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-blink" />
          Available for new projects
        </motion.div>

        <motion.h1 variants={fadeInUp} className="font-display font-extrabold text-5xl md:text-7xl lg:text-[7rem] leading-[0.95] tracking-tight max-w-[14ch]">
          We build systems that <em className="not-italic font-semibold text-accent">scale.</em>
        </motion.h1>

        <motion.p variants={fadeInUp} className="max-w-xl text-muted text-lg md:text-xl mt-8 leading-relaxed">
          A boutique software engineering agency crafting production-grade ERP platforms, WordPress ecosystems, and web applications — with precision and ownership.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-12">
          <a href="#work" className="bg-accent hover:bg-accent-hover text-black px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,255,0,0.3)] tracking-wide">
            View our work
          </a>
          <a href="#contact" className="border border-border hover:border-white hover:bg-white/5 text-white px-8 py-4 rounded-full font-medium text-sm md:text-base transition-all tracking-wide">
            Start a project
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-12 md:gap-16 mt-24 pt-12 border-t border-border">
          {[
            { num: "40", sym: "+", label: "Active ERP users" },
            { num: "99.9", sym: "%", label: "Platform uptime" },
            { num: "325", sym: "%", label: "E-commerce growth" },
            { num: "100k", sym: "+", label: "Monthly users served" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight">
                {stat.num}<span className="text-accent">{stat.sym}</span>
              </div>
              <div className="text-muted text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  const items = [
    "ERP Development", "WordPress Engineering", "Custom Plugins",
    "Cloud Infrastructure", "API Integration", "Performance Optimization",
    "RBAC & Security", "Research & Innovation"
  ];

  return (
    <div className="overflow-hidden border-y border-border py-5 bg-mid">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 font-display text-xs md:text-sm font-bold tracking-[0.12em] uppercase text-muted">
            {item} <span className="text-accent text-lg leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    { icon: <Settings className="w-6 h-6 text-accent" />, title: "ERP & Business Systems", desc: "Custom-built enterprise resource planning platforms tailored to your workflows — multi-module, multi-department, production-grade." },
    { icon: <Plug className="w-6 h-6 text-accent" />, title: "WordPress Plugin Development", desc: "Bespoke plugins that extend WooCommerce and WordPress beyond what off-the-shelf tools can do — from AJAX filter systems to custom checkout flows." },
    { icon: <Globe className="w-6 h-6 text-accent" />, title: "Web Application Development", desc: "Full-stack web apps with modern frameworks, REST APIs, and secure authentication — built for performance and long-term maintainability." },
    { icon: <Cloud className="w-6 h-6 text-accent" />, title: "Cloud & Infrastructure", desc: "AWS architecture, Redis caching, Docker deployments, CI/CD pipelines, and Linux server administration — we handle the infra so you don't have to." },
    { icon: <Zap className="w-6 h-6 text-accent" />, title: "Performance Optimization", desc: "Auditing and rebuilding slow platforms — from 4.2s to 1.7s load times, 90% stock discrepancy reduction, and 80+ hours of manual work automated monthly." },
    { icon: <Shield className="w-6 h-6 text-accent" />, title: "Security & Compliance", desc: "RBAC systems, audit logging, vulnerability research, and secure API design. Backed by published IEEE security research." },
  ];

  return (
    <section id="services" className="py-28 px-8 md:px-16 bg-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"
      >
        <div>
          <div className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-5">What we do</div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-[18ch]">
            End-to-end digital engineering
          </h2>
        </div>
        <p className="max-w-sm text-muted leading-relaxed">
          From custom ERP platforms to performance-tuned WordPress ecosystems, we own the full stack and deliver systems that run at scale — not prototypes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: (i % 3) * 0.1 } }
            }}
            className="group relative bg-black p-10 md:p-12 overflow-hidden transition-colors hover:bg-[#111]"
          >
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mb-8">
              {s.icon}
            </div>
            <h3 className="font-display font-bold text-xl mb-3 tracking-tight">{s.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    { num: "01", featured: "Featured", name: "Informatics DZ — Agency Website", desc: "Full corporate website for a technology company in Algiers. Clean, professional, and conversion-focused — built to generate leads and establish digital credibility.", tags: ["WordPress", "PHP", "SEO"], link: "https://informatics-dz.com/" },
    { num: "02", featured: "E-commerce", name: "IPN-DZ — WooCommerce Platform", desc: "End-to-end WooCommerce implementation with custom plugins, performance tuning, and Redis caching. Optimized for speed on shared hosting with LiteSpeed and Cloudflare.", tags: ["WooCommerce", "Redis", "Cloudflare"], link: "https://ipn-dz.com/" },
    { num: "03", featured: "International", name: "MellowSleep — Headless CMS", desc: "Production headless CMS serving 100K+ monthly views, achieving 95+ Lighthouse performance score. Reduced average page load time from 4.2s to 1.7s through AWS + caching strategy optimization.", tags: ["Next.js", "AWS", "Headless CMS"], link: "https://mellowsleep.com/" },
    { num: "04", featured: "Enterprise", name: "Custom ERP Platform — Informatics", desc: "12-module ERP built from scratch as sole developer. Serves 40+ employees across 7 departments with 99.9% uptime. Eliminated 80+ hours of manual work monthly and prevented 4M DZD in inventory losses.", tags: ["PHP", "MySQL", "Dolibarr"], link: "#erp" },
    { num: "05", featured: "Research", name: "Image Processing Pipeline — Blackbox", desc: "Optimized Python/OpenCV pipeline processing 10K+ daily images. Implemented Redis caching and query optimization, cutting per-image processing time from 2.5s to 800ms (68% improvement).", tags: ["Python", "OpenCV", "Redis"], internal: true },
  ];

  return (
    <section id="work" className="py-28 px-8 md:px-16 bg-[#0d0d0d]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mb-16"
      >
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-5">Selected work</div>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          Projects we're proud of
        </h2>
      </motion.div>

      <div className="flex flex-col gap-[1px] bg-border">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
            }}
            className="group bg-[#0d0d0d] hover:bg-[#141414] transition-colors p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[1fr_200px_140px] gap-8 items-center"
          >
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-display text-xs font-bold text-muted tracking-widest">{p.num}</span>
                <span className="bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-widest uppercase">
                  {p.featured}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl tracking-tight mb-2">{p.name}</h3>
              <p className="text-muted text-sm leading-relaxed max-w-3xl">{p.desc}</p>
            </div>

            <div className="flex flex-row lg:flex-col flex-wrap gap-2">
              {p.tags.map((tag, j) => (
                <span key={j} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-muted w-fit">
                  {tag}
                </span>
              ))}
            </div>

            <div>
              {p.internal ? (
                <div className="text-muted text-xs">Internal project</div>
              ) : (
                <a href={p.link} target={p.link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-wide uppercase transition-all hover:gap-3">
                  {p.link.startsWith('http') ? 'Visit site' : 'Read more'} <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Plugins = () => {
  const plugins = [
    { num: "01", title: "Multisite Content Syndication", desc: "Architected a centralized network system allowing granular content synchronization from a master site to multiple child sites, giving administrators precise control over which data points propagate.", stack: ["WordPress Multisite", "REST API", "PHP"] },
    { num: "02", title: "WooCommerce Automated Dispatch", desc: "Streamlined logistics by automatically generating and pushing delivery waybills (bordereaux) directly from WooCommerce orders to third-party delivery provider APIs.", stack: ["WooCommerce", "Logistics API", "Automation"] },
    { num: "03", title: "B2B Partner Membership Engine", desc: "Developed a custom membership portal for B2B partners, featuring automated tier-based discount management, role-based access, and dedicated partner dashboards.", stack: ["WordPress", "Memberships", "Pricing Logic"] },
    { num: "04", title: "ERP Helpdesk Integration", desc: "Bridged the gap between the customer-facing website and the internal ERP by building a seamless, bi-directional ticket synchronization system for customer support.", stack: ["API Integration", "ERP", "Customer Service"] },
    { num: "05", title: "AJAX Product Attribute Filter", desc: "A custom WooCommerce filter plugin built for the Woodmart theme with full Cloudflare compatibility. Supports AJAX + URL hybrid filtering and per-widget attribute configuration.", stack: ["WooCommerce", "AJAX", "Woodmart"] },
    { num: "06", title: "Redis OOM & Cache Recovery", desc: "Diagnosed and resolved a cascading failure chain on shared hosting: Redis out-of-memory events, LiteSpeed Cache misconfiguration, CageFS socket path issues, and a re-entrant infinite loop bug.", stack: ["Redis", "LiteSpeed", "Debug"] },
  ];

  return (
    <section id="plugins" className="py-28 px-8 md:px-16 bg-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-5">WordPress expertise</div>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-[20ch]">
          Custom plugins, built for real business needs
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border mt-16">
        {plugins.map((p, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: (i % 2) * 0.1 } }
            }}
            className="relative bg-black p-10 md:p-12 overflow-hidden transition-colors hover:bg-[#0e0e0e] group"
          >
            <div className="absolute top-8 right-10 font-display text-6xl font-extrabold text-white/5 leading-none pointer-events-none transition-transform group-hover:scale-110 group-hover:text-white/10">
              {p.num}
            </div>
            <h3 className="font-display font-bold text-xl mb-3 tracking-tight relative z-10">{p.title}</h3>
            <p className="text-muted text-sm leading-relaxed relative z-10">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-6 relative z-10">
              {p.stack.map((tech, j) => (
                <span key={j} className="bg-white/5 border border-white/10 px-3 py-1 rounded text-xs text-[#999] font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ERP = () => {
  const modules = [
    "Inventory", "Financials", "HR & Payroll", "RBAC", "Audit Logging", "Logistics",
    "Customer Returns", "Installments", "Reporting", "PDF Generation", "Cheque Management", "Multi-warehouse"
  ];

  return (
    <section id="erp" className="py-28 px-8 md:px-16 bg-[#080808]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-5">Enterprise engineering</div>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          A full ERP, built from the ground up
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p className="text-muted leading-relaxed text-base md:text-lg mb-6">
            As the sole developer, we architected, built, and currently maintain a 12-module ERP platform for Informatics — handling everything from inventory and financials to RBAC and logistics. This is not a SaaS subscription. It's a custom system owned entirely by the business.
          </p>
          <p className="text-muted leading-relaxed text-base md:text-lg mb-10">
            The platform automates month-end financial reconciliation from 5 days to real-time, tracks multi-warehouse inventory with 90% fewer discrepancies, and integrates third-party logistics APIs that cut fulfillment cycles by 70%.
          </p>
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-muted mb-4">Modules covered</h4>
            <div className="flex flex-wrap gap-2">
              {modules.map((m, i) => (
                <span key={i} className="bg-accent/5 border border-accent/10 text-accent/80 px-3 py-1.5 rounded text-sm font-medium">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="grid grid-cols-2 gap-[1px] bg-border"
        >
          {[
            { val: "12", label: "Custom modules" },
            { val: "40+", label: "Active users" },
            { val: "99.9%", label: "Uptime" },
            { val: "4M DZD", label: "Revenue protected" },
            { val: "80h+", label: "Saved monthly" },
            { val: "70%", label: "Faster fulfillment" },
          ].map((m, i) => (
            <div key={i} className="bg-[#080808] p-8 text-center">
              <div className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-accent mb-1">{m.val}</div>
              <div className="text-muted text-xs md:text-sm">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Research = () => {
  return (
    <section id="research" className="py-28 px-8 md:px-16 bg-black border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-5">Academic credibility</div>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          Research-backed expertise
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mt-12 bg-gradient-to-br from-[#111] to-[#0e1a00] border border-accent/10 rounded-2xl p-8 md:p-14 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center"
      >
        <div>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-3 py-1.5 rounded text-xs font-bold tracking-widest uppercase mb-6">
            <FileText className="w-4 h-4" /> IEEE Publication · April 2024
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl leading-snug tracking-tight max-w-[45ch] mb-4">
            An Intersection Attack on the CirclePIN Smartwatch Authentication Mechanism
          </h3>
          <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
            Published in IEEE Internet of Things Journal, Vol. 11, No. 7. Reverse-engineered a commercial smartwatch authentication protocol, built a Python simulation engine achieving 80%+ PIN recovery success rate, and demonstrated a real-world intersection attack via a mobile application.
          </p>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            This research demonstrates our deep capability in reverse engineering, security analysis, and applied cryptographic research — not just application development.
          </p>
        </div>
        <div className="bg-[#003087] p-8 md:p-10 rounded-xl text-center min-w-[160px] shadow-2xl shadow-[#003087]/20">
          <div className="font-display font-extrabold text-3xl text-white tracking-wider">IEEE</div>
          <div className="text-xs text-white/60 mt-1 uppercase tracking-widest font-semibold">IoT Journal</div>
          <div className="text-[0.65rem] text-white/40 mt-3 font-mono">Vol. 11 · No. 7</div>
        </div>
      </motion.div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('submitting');
    
    // Simulate a brief loading state for UX
    setTimeout(() => {
      const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:yassersedira20@gmail.com?subject=${subject}&body=${body}`;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="py-28 px-8 md:px-16 bg-cream text-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="text-xs font-bold tracking-[0.15em] uppercase text-[#5a6e00] mb-5">Work with us</div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-black">
            Let's build something serious.
          </h2>
          <p className="text-[#555] leading-relaxed text-lg mt-6">
            Whether you need a custom ERP, a high-performance WooCommerce store, or a bespoke WordPress plugin — we take ownership and deliver production-ready work.
          </p>
          <p className="text-[#555] leading-relaxed mt-4 font-medium">
            Available for remote projects worldwide. Based in Algeria.
          </p>

          <div className="flex flex-col gap-4 mt-10">
            <a href="mailto:yassersedira20@gmail.com" className="group flex items-center gap-4 text-black no-underline font-medium p-4 border-2 border-black/10 rounded-xl transition-all hover:border-[#5a6e00] hover:bg-[#5a6e00]/5 hover:translate-x-1">
              <Mail className="w-5 h-5 text-[#5a6e00]" />
              <div>
                <div className="text-sm">yassersedira20@gmail.com</div>
                <div className="text-xs text-[#888] mt-0.5">Email</div>
              </div>
            </a>
            <a href="tel:+213553645603" className="group flex items-center gap-4 text-black no-underline font-medium p-4 border-2 border-black/10 rounded-xl transition-all hover:border-[#5a6e00] hover:bg-[#5a6e00]/5 hover:translate-x-1">
              <Phone className="w-5 h-5 text-[#5a6e00]" />
              <div>
                <div className="text-sm">+213 553 645 603</div>
                <div className="text-xs text-[#888] mt-0.5">Phone / WhatsApp</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/yassersedira" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-black no-underline font-medium p-4 border-2 border-black/10 rounded-xl transition-all hover:border-[#5a6e00] hover:bg-[#5a6e00]/5 hover:translate-x-1">
              <Linkedin className="w-5 h-5 text-[#5a6e00]" />
              <div>
                <div className="text-sm">linkedin.com/in/yassersedira</div>
                <div className="text-xs text-[#888] mt-0.5">LinkedIn</div>
              </div>
            </a>
            <a href="https://github.com/SediraYasser20" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-black no-underline font-medium p-4 border-2 border-black/10 rounded-xl transition-all hover:border-[#5a6e00] hover:bg-[#5a6e00]/5 hover:translate-x-1">
              <Github className="w-5 h-5 text-[#5a6e00]" />
              <div>
                <div className="text-sm">github.com/SediraYasser20</div>
                <div className="text-xs text-[#888] mt-0.5">GitHub</div>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-black/5"
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-widest uppercase text-[#666]">Your name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="e.g. Karim Benali" 
                className="bg-white border-2 border-black/10 rounded-lg px-4 py-3 text-sm text-black transition-colors focus:outline-none focus:border-[#5a6e00]" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-widest uppercase text-[#666]">Email address</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="you@company.com" 
                className="bg-white border-2 border-black/10 rounded-lg px-4 py-3 text-sm text-black transition-colors focus:outline-none focus:border-[#5a6e00]" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-widest uppercase text-[#666]">What do you need?</label>
              <textarea 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Briefly describe your project — ERP, WordPress plugin, website, or something else..." 
                className="bg-white border-2 border-black/10 rounded-lg px-4 py-3 text-sm text-black transition-colors focus:outline-none focus:border-[#5a6e00] resize-none" 
              />
            </div>
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-[#222] hover:-translate-y-0.5 self-start mt-2 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send message →'}
            </button>
            {status === 'success' && (
              <p className="text-sm text-[#5a6e00] font-medium mt-2">
                Opening your email client...
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-8 md:px-16 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-muted text-sm">© {new Date().getFullYear()} Sedira Studio. All rights reserved.</div>
      <div className="flex flex-wrap gap-8 justify-center">
        <a href="https://informatics-dz.com/" target="_blank" rel="noreferrer" className="text-muted hover:text-white text-sm transition-colors">informatics-dz.com</a>
        <a href="https://ipn-dz.com/" target="_blank" rel="noreferrer" className="text-muted hover:text-white text-sm transition-colors">ipn-dz.com</a>
        <a href="https://mellowsleep.com/" target="_blank" rel="noreferrer" className="text-muted hover:text-white text-sm transition-colors">mellowsleep.com</a>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Plugins />
        <ERP />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
