import React from 'react';
import { 
  X, 
  Github, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Cpu, 
  QrCode, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Click outside backdrop to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 animate-fadeIn my-auto">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2 min-w-0">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20 shrink-0">
              {project.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 overflow-hidden">
              {project.platform.map((p) => (
                <span key={p} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 space-y-5 sm:space-y-6 overflow-y-auto">
          {/* Main Title & Description Header */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/80 border border-slate-800">
            {project.stats.map((s, idx) => (
              <div key={idx} className="text-center min-w-0">
                <span className="text-[10px] sm:text-xs text-slate-400 block truncate">{s.label}</span>
                <span className="text-sm sm:text-xl font-bold font-mono text-cyan-400 break-words">{s.value}</span>
              </div>
            ))}
          </div>

          {/* Architecture Highlights & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-400" /> Key Features & Architecture
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expo Go & Demo QR Code Simulation */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-indigo-950/40 border border-indigo-900/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-brand-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-current text-brand-400" /> Expo Snack & QR Demo
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20">
                    Expo Go Ready
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Scan with the Expo Go app on your physical iPhone or Android device to test the live native build instantly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-3 rounded-xl bg-slate-900 border border-slate-800 text-center sm:text-left">
                <div className="p-2 bg-white rounded-lg shrink-0">
                  <QrCode className="w-10 h-10 sm:w-12 sm:h-12 text-slate-900" />
                </div>
                <div className="text-xs space-y-1 min-w-0">
                  <p className="font-semibold text-white break-all text-[11px] sm:text-xs">exp://u.expo.dev/{project.id}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400">Open Camera on iOS or Expo Go on Android</p>
                  {project.expoSnackUrl && (
                    <a
                      href={project.expoSnackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-brand-400 hover:text-brand-300 font-medium"
                    >
                      <span>Open in Browser Snack</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Technologies & Native Modules
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 sm:px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] sm:text-xs font-mono text-slate-300 flex items-center gap-1.5"
                >
                  <Cpu className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Buttons Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border-t border-slate-800 bg-slate-950/80">
          <div className="flex flex-wrap items-center gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-md shadow-brand-500/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Project Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center gap-1.5 transition-all"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub Source</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all ml-auto"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
