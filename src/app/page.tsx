"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { BlurFade } from '@/components/ui/blur-fade';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { PersonalLanding } from '@/components/ui/personal-landing';

// ==========================================
// 1. MODERN NAVBAR
// ==========================================
const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full flex justify-between items-center px-10 py-6 z-[100] backdrop-blur-md border-b border-white/5"
    >
      <div className="text-2xl font-black tracking-tighter font-outfit text-white">
        VD<span className="text-sky-400">.</span>
      </div>
      <ul className="hidden md:flex gap-10 font-medium text-xs tracking-[0.2em] uppercase">
        {['About', 'Experience', 'Certifications', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors duration-300 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="px-5 py-2 border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 text-white bg-white/5">
        Initialize Contact
      </a>
    </motion.nav>
  );
};

// ==========================================
// 2. MAIN APP
// ==========================================
export default function Home() {
  const projects = [
    {
      title: "Full Stack Web Application",
      desc: "Developed a responsive web application implementing REST APIs for dynamic content rendering. Focused on UI/UX design and deployed using modern web hosting platforms.",
      stack: ["HTML", "CSS", "JavaScript", "React.js", "REST APIs"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Backend Application",
      desc: "Developed RESTful APIs using Spring Boot and integrated SQL database for reliable data storage. Applied MVC architecture and backend best practices.",
      stack: ["Spring Boot", "SQL", "Java", "MVC"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "AI/Data Analytics Project",
      desc: "Performed exploratory data analysis and visualization using Python to build predictive models for business insights, applying machine learning basics and data preprocessing techniques.",
      stack: ["Python", "EDA", "Machine Learning", "Data Visualization"],
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  const certifications = [
    { name: "Java Foundation Certification", issuer: "Infosys Springboard" },
    { name: "Programming using Java", issuer: "Infosys Springboard" },
    { name: "Introduction to NoSQL databases", issuer: "Infosys Springboard" },
    { name: "Software Engineering and Agile software development", issuer: "Infosys Springboard" },
    { name: "Agile Scrum Certification", issuer: "Infosys Springboard" },
    { name: "Data Structures and Algorithms using Java", issuer: "Infosys Springboard" },
    { name: "Database Management System Part - 1 & 2", issuer: "Infosys Springboard" },
    { name: "Agile Scrum in Practice", issuer: "Infosys Springboard" },
    { name: "Oracle Certified AI Foundations Associate", issuer: "Oracle" },
    { name: "Engineer AI Agents with Agent Development Kit (ADK)", issuer: "Google / Credly" },
    { name: "Web Development Fundamentals", issuer: "IBM SkillsBuild" },
    { name: "Digital Literacy", issuer: "IBM SkillsBuild" },
    { name: "Software Engineering Job Simulation", issuer: "JPMorgan Chase (Forage)" },
    { name: "Data Analytics Job Simulation", issuer: "Deloitte Australia " },
    { name: "GenAI Powered Data Analytics", issuer: "Tata (Forage)" },
    { name: "Operations Job Simulation", issuer: "Goldman Sachs (Forage)" },
    { name: "Python DSA", issuer: "Unstop" }
  ];

  const skillCategories = [
    { category: "Programming Languages", skills: ["Java", "Python", "C", "JavaScript", "SQL"] },
    { category: "Web Development", skills: ["React.js", "REST APIs", "HTML/CSS", "Responsive Design", "Full-Stack"] },
    { category: "Frameworks & Tools", skills: ["Spring Framework", "Spring Boot", "Build Tools"] },
    { category: "Data & Databases", skills: ["SQL Admin", "Tableau", "EDA", "Data Visualization"] },
    { category: "Core Concepts", skills: ["Data Structures", "OOP", "SDLC", "Web App Security"] },
    { category: "Other Areas", skills: ["DevOps", "Computer Networking", "Software Testing", "Process Automation"] }
  ];

  const strengths = ["Problem Solving", "Teamwork & Leadership", "Communication & Business English", "Analytical Thinking", "Attention to Detail"];

  const experiences = [
    {
      role: "Marketing Specialist",
      company: "IT Virtuoso Club | Global Academy of Technology",
      date: "Jun 2025 - Present",
      points: [
        "Led marketing initiatives and coordinated technical and non-technical events",
        "Collaborated with cross-functional teams to improve engagement and outreach",
        "Developed communication strategies and managed event promotions",
        "Strengthened leadership, teamwork, and organizational skills"
      ]
    },
    {
      role: "Software Engineering Job Simulation",
      company: "JPMorgan Chase (Forage)",
      date: "Apr 2026",
      points: [
        "Developed REST APIs and backend services",
        "Implemented Kafka integration and database connectivity",
        "Applied Spring Boot and enterprise-level development practices"
      ]
    },
    {
      role: "Data Analytics Job Simulation",
      company: "Deloitte Australia (Forage)",
      date: "Apr 2026",
      points: [
        "Performed data analysis and forensic technology tasks",
        "Worked on data visualization, data modeling, and spreadsheet analysis",
        "Applied web application security and log analysis concepts"
      ]
    },
    {
      role: "GenAI Powered Data Analytics Simulation",
      company: "Tata (Forage)",
      date: "Apr 2026",
      points: [
        "Conducted exploratory data analysis and predictive modeling",
        "Built AI-driven insights for business decision-making",
        "Delivered data storytelling and analytical reports"
      ]
    },
    {
      role: "Operations Job Simulation",
      company: "Goldman Sachs (Forage)",
      date: "Apr 2026",
      points: [
        "Gained experience in transaction management and risk analysis",
        "Worked on process improvement and operational workflows"
      ]
    }
  ];

  return (
    <div className="bg-[#050914] text-white min-h-screen selection:bg-sky-500/30">
      <Navbar />

      <main className="w-full">
        {/* Geometric Shape Landing Hero */}
        <section id="hero" className="relative h-screen w-full">
          <HeroGeometric
            badge="Full-Stack Developer & Analyst"
            title1="Vineet Dharwad"
            title2="Engineer & Innovator"
          />
        </section>

        {/* About & Education Section */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <BlurFade direction="left">
              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="text-sky-400 font-bold tracking-[0.3em] uppercase text-xs">Summary</span>
                  <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Solving Through Logic</h2>
                </div>
                <p className="text-slate-400 leading-relaxed text-lg text-pretty">
                  Detail-oriented Computer Science student with strong proficiency in full-stack web development and a solid foundation in data analytics and AI concepts. Experienced in building responsive web applications, developing REST APIs, and working with modern development tools and platforms. Proven ability to apply analytical thinking and problem-solving skills through industry-level virtual simulations and projects.
                </p>

                {/* Key Strengths */}
                <div className="pt-4 space-y-4">
                  <span className="text-white/60 font-medium tracking-widest uppercase text-[10px]">Key Strengths</span>
                  <div className="flex flex-wrap gap-2">
                    {strengths.map(strength => (
                      <span key={strength} className="px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs text-sky-200 font-medium whitespace-nowrap">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>

            <BlurFade direction="right" delay={0.2}>
              <div className="space-y-8">
                {/* Education */}
                <div className="glass p-8 rounded-3xl border border-indigo-500/10 bg-white/[0.02]">
                  <span className="text-sky-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Education</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Global Academy Of Technology</h3>
                  <p className="text-slate-300 font-medium mb-1">Bachelor of Engineering, Computer Science</p>
                  <p className="text-slate-500 text-sm italic">Sep 2024 – Jul 2028</p>
                </div>

                {/* Technical Skills Grid */}
                <div className="glass p-8 rounded-3xl border border-sky-500/10 bg-white/[0.02] space-y-6">
                  <span className="text-sky-400 font-bold tracking-[0.2em] uppercase text-[10px] block">Technical Skills</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((group, idx) => (
                      <div key={idx} className="space-y-2">
                        <p className="text-white/80 text-xs font-bold uppercase tracking-wider">{group.category}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {group.skills.map(skill => (
                            <span key={skill} className="px-2 py-1 rounded-md border border-white/5 bg-black/40 text-[10px] text-slate-300">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2">Developer Tools</p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Visual Studio Code, IntelliJ IDEA, PyCharm, Jupyter Notebook, Command Prompt, Windows PowerShell, Ubuntu
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-[#030712] py-32 border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6 space-y-16">
            <div className="text-center space-y-4">
              <span className="text-sky-400 font-bold tracking-[0.3em] uppercase text-xs">Journey</span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Experience & Leadership</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <BlurFade key={index} delay={index * 0.1}>
                  <div className="group h-full p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-sky-500/30 transition-all duration-500 hover:bg-sky-500/[0.02]">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">{exp.role}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
                      <p className="text-sky-400 font-medium text-sm">{exp.company}</p>
                      <span className="hidden sm:inline text-slate-600">•</span>
                      <p className="text-slate-500 text-xs uppercase tracking-widest">{exp.date}</p>
                    </div>
                    <ul className="text-slate-400 text-sm space-y-3 list-disc pl-4 leading-relaxed marker:text-sky-500/50">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Scroll Section */}
        <section id="certifications" className="py-20 relative">
          <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] rounded-full scale-150 pointer-events-none"></div>
          <ContainerScroll
            titleComponent={
              <div className="mb-10">
                <BlurFade>
                  <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4">
                    Professional <br />
                    <span className="text-sky-400">Accreditations</span>
                  </h2>
                  <p className="text-slate-500 uppercase tracking-[0.2em] text-xs font-bold italic">Validated by Infosys Springboard & Global Tech Leaders</p>
                </BlurFade>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 h-full overflow-y-auto custom-scrollbar">
              {certifications.map((cert, i) => (
                <div key={i} className="p-6 bg-black/60 border border-white/5 rounded-2xl flex flex-col justify-between hover:border-sky-500/30 transition-all group hover:bg-sky-500/[0.02] backdrop-blur-sm">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-sky-400 transition-colors leading-snug">{cert.name}</h3>
                  <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </ContainerScroll>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-[#030712] border-t border-white/5 py-40">
          <div className="max-w-6xl mx-auto px-6 space-y-20">
            <div className="text-center space-y-4">
              <span className="text-sky-400 font-bold tracking-[0.3em] uppercase text-xs">Portfolio</span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Featured Engineering</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <BlurFade key={index} delay={index * 0.1}>
                  <div className="group relative p-8 h-full rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-sky-400/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden glass flex flex-col justify-between">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    <div className="relative z-10 space-y-6">
                      <h4 className="text-2xl text-white font-bold tracking-tight group-hover:text-sky-300 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-slate-400 font-light leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                    <div className="relative z-10 pt-8 flex flex-wrap gap-2 mt-auto">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-[10px] px-3 py-1 bg-black/50 text-slate-300 rounded-lg border border-white/5 uppercase tracking-widest">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <PersonalLanding />
        </section>

      </main>

      <footer className="w-full py-10 border-t border-white/5 text-center bg-[#030712] relative z-10">
        <p className="text-slate-600 text-[10px] tracking-[0.3em] uppercase font-mono">
          © 2026 VINEET DHARWAD — ENGINEERED FOR EXCELLENCE
        </p>
      </footer>
    </div>
  );
}
