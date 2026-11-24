import React, { useState, useEffect } from 'react';
import { Smartphone, Zap, Moon, Sun, Menu, X, FileText, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onContactClick: () => void;
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onContactClick, onResumeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Simulator', href: '#simulator' },
    { label: 'Skills', href: '#skills' },
    { label: 'Expo Stack', href: '#expo-stack' },
    { label: 'Experience', href: '#experience' },
    { label: 'Open Source', href: '#github-activity' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group min-w-0">
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-0.5 shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform shrink-0">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm sm:text-lg tracking-tight truncate max-w-[130px] xs:max-w-none">
                  {portfolioData.personal.name}
                </span>
                <span className="hidden xs:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20 shrink-0">
                  <Zap className="w-2.5 h-2.5 fill-current" /> Expo
                </span>
              </div>
              <span className={`text-[10px] sm:text-[11px] font-mono tracking-tight truncate ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                React Native Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Dark/Light mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`p-2 rounded-xl transition-all ${
                darkMode
                  ? 'bg-slate-900 text-amber-400 hover:bg-slate-800 border border-slate-800'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume button */}
            <button
              onClick={onResumeClick}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                darkMode
                  ? 'border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                  : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-brand-400" />
              <span>Resume</span>
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl border ${
                darkMode ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden py-4 px-3 space-y-1.5 border-t rounded-b-2xl shadow-xl transition-all ${
              darkMode
                ? 'bg-slate-950/98 border-slate-800/90 text-slate-200 shadow-black/50'
                : 'bg-white/98 border-slate-200/90 text-slate-800 shadow-slate-200/50'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                  darkMode ? 'hover:bg-slate-900 active:bg-slate-850' : 'hover:bg-slate-100 active:bg-slate-200'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800/50 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="w-full py-3 px-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 text-brand-400 bg-brand-500/10 border border-brand-500/20 active:scale-98 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View & Print Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
