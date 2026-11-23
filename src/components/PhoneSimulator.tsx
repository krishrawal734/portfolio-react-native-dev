import React, { useState } from 'react';
import { 
  Wifi, 
  Battery, 
  Smartphone, 
  Zap, 
  MapPin, 
  ShieldCheck, 
  Moon, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Share2, 
  Cpu,
  Layers,
  Activity,
  Search
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const PhoneSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'attendance' | 'landsurvey' | 'expo'>('attendance');
  
  // WorkPulse Attendance State
  const [punchedIn, setPunchedIn] = useState(true);
  const [punching, setPunching] = useState(false);
  const [payslipShared, setPayslipShared] = useState(false);

  // Land Survey Search State
  const [surveyQuery, setSurveyQuery] = useState('Ahmedabad - Sanand 142');

  // OTA update trigger state
  const [isUpdatingOTA, setIsUpdatingOTA] = useState(false);
  const [otaSuccess, setOtaSuccess] = useState(false);

  const togglePunch = () => {
    setPunching(true);
    setTimeout(() => {
      setPunching(false);
      setPunchedIn(!punchedIn);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const sharePayslip = () => {
    setPayslipShared(true);
    confetti({ particleCount: 30, spread: 50 });
    setTimeout(() => setPayslipShared(false), 3000);
  };

  const triggerOtaUpdate = () => {
    setIsUpdatingOTA(true);
    setTimeout(() => {
      setIsUpdatingOTA(false);
      setOtaSuccess(true);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 }
      });
      setTimeout(() => setOtaSuccess(false), 4000);
    }, 1200);
  };

  return (
    <div className="relative mx-auto flex flex-col items-center">
      {/* Device wrapper with phone frame */}
      <div className="relative w-[310px] sm:w-[340px] h-[640px] sm:h-[670px] bg-slate-900 rounded-[50px] p-3 shadow-2xl shadow-brand-500/10 border-4 border-slate-700/80 ring-1 ring-slate-800">
        
        {/* Physical buttons on the sides */}
        <div className="absolute -left-4 top-24 w-1 h-8 bg-slate-700 rounded-l-md"></div>
        <div className="absolute -left-4 top-36 w-1 h-12 bg-slate-700 rounded-l-md"></div>
        <div className="absolute -left-4 top-52 w-1 h-12 bg-slate-700 rounded-l-md"></div>
        <div className="absolute -right-4 top-32 w-1 h-14 bg-slate-700 rounded-r-md"></div>

        {/* Screen Bezel */}
        <div className="relative w-full h-full bg-slate-950 rounded-[38px] overflow-hidden flex flex-col border border-slate-800 shadow-inner select-none font-sans">
          
          {/* Dynamic Island / Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-40 flex items-center justify-between px-2.5 shadow-md">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse"></div>
          </div>

          {/* iOS Status Bar */}
          <div className="h-10 pt-2 px-6 flex items-center justify-between text-[11px] font-semibold text-slate-300 z-30">
            <span>07:24 PM</span>
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono">5G</span>
              <Battery className="w-4 h-4 fill-slate-300" />
            </div>
          </div>

          {/* Screen Content Area */}
          <div className="flex-1 overflow-y-auto px-4 pt-1 pb-16 text-slate-100 scrollbar-none">
            
            {/* TAB 1: WORKPULSE GPS ATTENDANCE & PAYROLL APP */}
            {activeTab === 'attendance' && (
              <div className="space-y-3 animate-fadeIn">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">WorkPulse Mobile</h4>
                      <p className="text-[10px] text-slate-400 font-mono">Expo SDK 52 • NativeWind</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    GPS Active
                  </span>
                </div>

                {/* Night Rule & Anti-Fraud Notice */}
                <div className="p-2.5 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1 text-brand-300 font-semibold">
                      <Moon className="w-3.5 h-3.5 text-amber-300" /> Night Present Rule
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[9px] font-mono font-bold">
                      7:00 PM Active
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-300 leading-tight">
                    Checkout recorded after 19:00 automatically awards night shift allowance.
                  </p>
                </div>

                {/* GPS Location & Anti-Mock check */}
                <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-[11px] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">Ahmedabad, Gujarat (23.03° N, 72.50° E)</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[10px]">
                    <span className="text-slate-400 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" /> Anti-Mock Location:
                    </span>
                    <span className="font-mono text-emerald-400 font-semibold">CLEAN (No Fake GPS)</span>
                  </div>
                </div>

                {/* Big Punch Action Card */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950/60 to-slate-900 border border-slate-800 text-center space-y-2.5">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Today's Shift Status</div>
                  <div className="text-2xl font-black font-mono tracking-tight text-white">
                    07:24:18 PM
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{punchedIn ? "Punched In at 09:30 AM" : "Currently Punched Out"}</span>
                  </div>

                  <button
                    onClick={togglePunch}
                    disabled={punching}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 ${
                      punchedIn
                        ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/25'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/25'
                    }`}
                  >
                    {punching ? (
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Clock className="w-3.5 h-3.5" />
                        <span>{punchedIn ? "Punch Out with GPS (Night Shift)" : "Punch In Attendance"}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Dynamic PDF Payslip Generator */}
                <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand-400" />
                    <div>
                      <p className="font-semibold text-white text-[11px]">November Payslip (PDF)</p>
                      <p className="text-[9px] text-slate-400">Generated via expo-print</p>
                    </div>
                  </div>
                  <button
                    onClick={sharePayslip}
                    className="px-2 py-1 rounded-lg bg-brand-600/20 hover:bg-brand-600/30 border border-brand-500/30 text-brand-300 text-[10px] font-medium flex items-center gap-1 transition-all"
                  >
                    <Share2 className="w-3 h-3" />
                    <span>Share PDF</span>
                  </button>
                </div>
                {payslipShared && (
                  <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 text-[10px] text-center font-medium animate-fadeIn">
                    Payslip PDF rendered & shared via expo-sharing!
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: GUJARAT LAND SURVEY RECORDS */}
            {activeTab === 'landsurvey' && (
              <div className="space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">Land Survey Gujarat</h4>
                    <p className="text-[10px] text-slate-400">React + TypeScript Platform</p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live Vercel
                  </span>
                </div>

                {/* Search Box */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    value={surveyQuery}
                    onChange={(e) => setSurveyQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none"
                    placeholder="Search Survey No / Village"
                  />
                </div>

                {/* Mock Record Card */}
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-cyan-400">Survey Record #142/B</span>
                    <span className="text-[9px] font-mono bg-brand-500/20 text-brand-300 px-1.5 py-0.5 rounded">
                      7/12 Verified
                    </span>
                  </div>
                  <div className="space-y-1 text-[11px] text-slate-300">
                    <p><span className="text-slate-500">District:</span> Ahmedabad</p>
                    <p><span className="text-slate-500">Taluka:</span> Sanand</p>
                    <p><span className="text-slate-500">Land Area:</span> 2.45 Hectares</p>
                    <p><span className="text-slate-500">Owner Status:</span> Clear Title / Encumbrance Free</p>
                  </div>
                  <a
                    href="https://land-survey-gujarat-enos.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-[10px] font-semibold text-center block transition-all"
                  >
                    Open Live Web Platform ↗
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-[9px] text-slate-400 block">Districts</span>
                    <span className="text-xs font-bold font-mono text-white">33 Gujarat</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-[9px] text-slate-400 block">Record Lookups</span>
                    <span className="text-xs font-bold font-mono text-cyan-400">Instant</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: EXPO DEV MENU (SDK 52) */}
            {activeTab === 'expo' && (
              <div className="space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-brand-400 fill-current" /> Expo Dev Menu
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    SDK 52
                  </span>
                </div>

                {/* Native Arch Stats */}
                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                      <Cpu className="w-3 h-3 text-cyan-400" /> Expo Router v4
                    </span>
                    <span className="font-mono font-bold text-emerald-400 text-[10px]">TYPED ROUTES</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                      <Layers className="w-3 h-3 text-indigo-400" /> NativeWind v4 (Tailwind)
                    </span>
                    <span className="font-mono font-bold text-emerald-400 text-[10px]">COMPILED</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                      <Activity className="w-3 h-3 text-emerald-400" /> Refresh Rate
                    </span>
                    <span className="font-mono font-bold text-cyan-400 text-[10px]">60.0 FPS</span>
                  </div>
                </div>

                {/* Over The Air Update Test */}
                <div className="p-3 rounded-2xl bg-brand-950/40 border border-brand-800/40 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-brand-200 text-[11px]">EAS Update (OTA)</span>
                    <span className="text-[9px] font-mono text-slate-400">channel: production</span>
                  </div>
                  <p className="text-[10px] text-slate-300">
                    Download and apply remote hotfixes directly without App Store delays.
                  </p>
                  <button
                    onClick={triggerOtaUpdate}
                    disabled={isUpdatingOTA}
                    className="w-full py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 disabled:opacity-50"
                  >
                    {isUpdatingOTA ? (
                      <>
                        <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-[10px]">Checking EAS Manifest...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-3 h-3 fill-current text-cyan-300" />
                        <span className="text-[10px]">Simulate EAS Hotfix Reload</span>
                      </>
                    )}
                  </button>
                  {otaSuccess && (
                    <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-[10px] text-center font-medium animate-fadeIn">
                      WorkPulse v1.2 OTA patch loaded!
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Tab Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-slate-900/90 backdrop-blur-md border-t border-slate-800/80 px-4 flex items-center justify-around z-30">
            <button
              onClick={() => setActiveTab('attendance')}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === 'attendance' ? 'text-brand-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span className="text-[9px]">WorkPulse</span>
            </button>

            <button
              onClick={() => setActiveTab('landsurvey')}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === 'landsurvey' ? 'text-emerald-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span className="text-[9px]">Land Survey</span>
            </button>

            <button
              onClick={() => setActiveTab('expo')}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === 'expo' ? 'text-cyan-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span className="text-[9px]">Expo EAS</span>
            </button>
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full z-40"></div>
        </div>
      </div>

      {/* Interactive Helper Caption */}
      <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-md">
        <Smartphone className="w-3.5 h-3.5 text-brand-400" />
        <span>Click tabs inside phone to test WorkPulse & Land Survey!</span>
      </div>
    </div>
  );
};
