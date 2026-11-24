import React from 'react';
import { 
  Smartphone, 
  Zap, 
  Code, 
  Layers, 
  Apple, 
  Cpu, 
  RefreshCw, 
  Database, 
  Globe, 
  Activity, 
  Touchpad, 
  Palette, 
  List, 
  Sparkles, 
  GitMerge, 
  Wrench, 
  Bell, 
  CheckCircle,
  Terminal,
  Compass,
  CloudLightning
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Dynamic icon resolver
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Smartphone': return <Smartphone className="w-5 h-5 text-cyan-400" />;
    case 'Zap': return <Zap className="w-5 h-5 text-brand-400 fill-current" />;
    case 'Code': return <Code className="w-5 h-5 text-indigo-400" />;
    case 'Layers': return <Layers className="w-5 h-5 text-purple-400" />;
    case 'Apple': return <Apple className="w-5 h-5 text-slate-300" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-400" />;
    case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-cyan-400" />;
    case 'Database': return <Database className="w-5 h-5 text-amber-400" />;
    case 'Globe': return <Globe className="w-5 h-5 text-blue-400" />;
    case 'Activity': return <Activity className="w-5 h-5 text-red-400" />;
    case 'Touchpad': return <Touchpad className="w-5 h-5 text-brand-400" />;
    case 'Palette': return <Palette className="w-5 h-5 text-pink-400" />;
    case 'List': return <List className="w-5 h-5 text-emerald-400" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-yellow-400" />;
    case 'GitMerge': return <GitMerge className="w-5 h-5 text-indigo-400" />;
    case 'Wrench': return <Wrench className="w-5 h-5 text-teal-400" />;
    case 'Bell': return <Bell className="w-5 h-5 text-orange-400" />;
    case 'CheckCircle': return <CheckCircle className="w-5 h-5 text-emerald-400" />;
    case 'Compass': return <Compass className="w-5 h-5 text-cyan-400" />;
    case 'CloudLightning': return <CloudLightning className="w-5 h-5 text-amber-400" />;
    default: return <Code className="w-5 h-5 text-slate-400" />;
  }
};

export const Skills: React.FC = () => {
  const { skillsCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Mobile Tech Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From the New Architecture (Fabric & TurboModules) and Reanimated 3 worklets to cloud builds with Expo Application Services (EAS).
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillsCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="glass-card rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6 flex flex-col justify-between"
            >
              <div>
                <div className="space-y-1 mb-4 sm:mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {category.description}
                  </p>
                </div>

                {/* Skills list */}
                <div className="space-y-2.5 sm:space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 sm:p-3 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 shrink-0 group-hover:scale-105 transition-transform">
                        {getIcon(skill.iconName)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                            {skill.name}
                          </span>
                          <span className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full font-medium shrink-0 ${
                            skill.level === 'Expert'
                              ? 'bg-brand-500/15 text-brand-300 border border-brand-500/30'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Callout Banner */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-950/60 via-slate-900 to-indigo-950/60 border border-brand-800/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-current" /> Architecture Philosophy
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Why React Native Fabric & Expo in 2026?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                By leveraging React Native's Fabric rendering engine and TurboModules with synchronous C++ JSI bindings, we eliminate the asynchronous JSON bridge bottleneck. Combined with Expo Prebuild config plugins and EAS continuous cloud pipelines, teams get 100% native power with 10x faster iteration speeds.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-stretch sm:justify-start lg:justify-end">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-100 transition-all shadow-lg shadow-white/10"
              >
                <span>Hire an Expo Specialist</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
