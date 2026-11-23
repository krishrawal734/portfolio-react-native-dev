import React from 'react';
import { Smartphone, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-slate-300 font-semibold text-sm">
                {personal.name}
              </p>
              <p className="text-slate-500 text-[11px]">
                React Native & Expo Mobile Engineer
              </p>
            </div>
          </div>

          {/* Center note */}
          <div className="flex items-center gap-1 text-slate-400 text-center sm:text-left">
            <span>Crafted for high performance with React, Vite & Tailwind CSS</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all text-xs"
          >
            <ArrowUp className="w-3.5 h-3.5 text-brand-400" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
