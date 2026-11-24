import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  MapPin, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, experiences } = portfolioData;

  const handlePrint = () => {
    window.open('/resume.html', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Click outside backdrop to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 animate-fadeIn my-auto">
        
        {/* Top Control Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-800 bg-slate-950/80 sticky top-0 z-20">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold text-white truncate">Krish Rawal — Verified Resume</h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono truncate">ATS-Optimized • Frontend & React Native</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-[11px] sm:text-xs font-semibold shadow-md transition-all active:scale-98"
              title="Open print-ready view to save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-4 sm:p-10 space-y-6 sm:space-y-8 overflow-y-auto bg-slate-900/60 font-sans text-slate-200">
          
          {/* Header Block */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                {personal.name}
              </h1>
              <h2 className="text-sm sm:text-base font-bold text-cyan-400 mt-1">
                {personal.role}
              </h2>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>{personal.location} • Available for Full-Time & High-Impact Contracts</span>
              </p>
            </div>

            <div className="text-xs text-slate-400 space-y-1.5 font-mono min-w-0">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${personal.email}`} className="text-slate-200 hover:underline break-all">{personal.email}</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${personal.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:underline">{personal.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:underline break-all">github.com/krishrawal734</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:underline break-all">linkedin.com/in/krish-rawal</a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-brand-400 uppercase tracking-wider font-mono">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              Results-driven <strong>Frontend & Mobile Developer</strong> specialized in architecting high-performance cross-platform mobile apps for iOS & Android with <strong>React Native</strong> and <strong>Expo SDK 52</strong>, and responsive web applications with <strong>React.js</strong> and <strong>TypeScript</strong>. Experienced in device hardware APIs (anti-fraud mock location detection, reverse geocoding, PDF generation), state management, and maintaining <strong>63+ public repositories</strong> on GitHub with clean architecture.
            </p>
          </div>

          {/* Core Technical Arsenal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-brand-400 uppercase tracking-wider font-mono">
              Technical Arsenal
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="font-semibold text-white block mb-1">Mobile Development</span>
                <span className="text-slate-400 leading-relaxed">
                  React Native, Expo SDK 52, Expo Router v4, NativeWind (Tailwind), expo-location (Anti-Mock GPS), expo-print, Reanimated 3
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="font-semibold text-white block mb-1">Frontend & Web</span>
                <span className="text-slate-400 leading-relaxed">
                  React.js, TypeScript, JavaScript (ES6+), Next.js, HTML5, CSS3, Vite, Tailwind CSS, Bootstrap 5
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="font-semibold text-white block mb-1">State, Data & APIs</span>
                <span className="text-slate-400 leading-relaxed">
                  Redux Toolkit, Context API, Supabase (PostgreSQL & RLS), RESTful APIs, Axios, WebSockets, JWT
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="font-semibold text-white block mb-1">DevOps & Tooling</span>
                <span className="text-slate-400 leading-relaxed">
                  EAS Build & Updates (OTA), Git, GitHub, Vercel, Netlify, Maestro E2E, Postman, VS Code
                </span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-brand-400 uppercase tracking-wider font-mono">
              Work Experience & Internship
            </h4>

            {experiences.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="text-sm font-bold text-white">{exp.role}</span>
                    <span className="text-brand-400 text-xs font-semibold ml-1.5">• {exp.company}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{exp.period} | {exp.location}</span>
                </div>
                
                <p className="text-xs text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 pt-1">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Production Projects */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-brand-400 uppercase tracking-wider font-mono">
              Key Production Projects
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">WorkPulse (Payroll & Attendance)</span>
                  <a href="https://github.com/krishrawal734/payroll-attendance-app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-[10px]">GitHub ↗</a>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Expo SDK 52 mobile app with mock-location anti-fraud GPS detection, automated night shift overtime rules (checkout &gt;= 19:00), and PDF payslip generator.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">Land Survey Gujarat</span>
                  <a href="https://land-survey-gujarat-enos.vercel.app" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline text-[10px]">Live Demo ↗</a>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  React + TypeScript platform exploring Gujarat land survey numbers, 7/12 & 8A records, village maps, and land resources with instant search indexing.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-brand-400 uppercase tracking-wider font-mono">
              Education
            </h4>
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
              <div>
                <span className="font-bold text-white">Integrated BCA (Bachelor of Computer Applications)</span>
                <span className="text-slate-400 block sm:inline sm:ml-1.5">• Pragati College (GGTU)</span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">2024 - Present | Rajasthan, India</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-t border-slate-800 bg-slate-950/80">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-md transition-all active:scale-98"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Download PDF / Print</span>
          </button>

          <button
            onClick={onClose}
            className="px-3.5 sm:px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all active:scale-98"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
