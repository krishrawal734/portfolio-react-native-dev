import React from 'react';
import { 
  Zap, 
  CloudLightning, 
  RotateCw, 
  Compass, 
  Sliders, 
  CheckCircle2
} from 'lucide-react';

export const ExpoShowcase: React.FC = () => {

  const features = [
    {
      icon: CloudLightning,
      title: "EAS Cloud Build & Submit",
      desc: "Zero-dependency cloud compilation for iOS .ipa and Android .aab with automated keystore & provisioning profile management.",
      badge: "EAS Build",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: RotateCw,
      title: "Over-The-Air (OTA) Updates",
      desc: "Emergency hotfixes and continuous feature drops pushed directly to active mobile devices within seconds, bypassing App Store queue delays.",
      badge: "EAS Update",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Compass,
      title: "Expo Router v4 (Universal)",
      desc: "Typed, file-based routing with native tabs, stacks, sheet modals, and web SSR/SSG parity out-of-the-box.",
      badge: "File Routing",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Sliders,
      title: "Expo Config Plugins & Prebuild",
      desc: "Safely inject native Android Manifest permissions and iOS Info.plist entitlements using declarative TypeScript plugins without ejecting.",
      badge: "Managed Native",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="expo-stack" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Expo Ecosystem Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise Mobile Delivery with Expo & EAS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I don't just write React Native code; I engineer resilient mobile deployment pipelines that save engineering teams hundreds of build hours.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-all group"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feat.color} p-0.5 mb-5 flex items-center justify-center text-white shadow-lg`}>
                  <feat.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900 text-brand-300 border border-slate-800">
                  {feat.badge}
                </span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2 group-hover:text-cyan-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>

        {/* eas.json terminal preview */}
        <div className="mt-12 rounded-3xl bg-slate-950 border border-slate-800 p-6 overflow-hidden font-mono text-xs shadow-2xl">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="text-slate-400 ml-2 font-mono text-[11px]">eas.json — Production EAS Pipeline</span>
            </div>
            <span className="text-slate-500 text-[11px]">React Native 0.76+ New Arch</span>
          </div>

          <pre className="text-slate-300 overflow-x-auto leading-relaxed">
{`{
  "cli": { "version": ">= 12.0.0" },
  "build": {
    "production": {
      "channel": "production",
      "ios": { "simulator": false, "autoIncrement": true },
      "android": { "buildType": "app-bundle", "autoIncrement": true },
      "env": { "EXPO_PUBLIC_NEW_ARCH": "1" }
    }
  },
  "submit": {
    "production": {
      "ios": { "appleId": "dev@rivera.com", "ascAppId": "1672349102" },
      "android": { "track": "production", "serviceAccountKeyPath": "./google-service-key.json" }
    }
  }
}`}
          </pre>
        </div>

      </div>
    </section>
  );
};
