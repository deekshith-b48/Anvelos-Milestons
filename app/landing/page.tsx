import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { Rocket, LayoutDashboard, Component, ArrowRight, Sparkles, Layers, Code2, Zap } from 'lucide-react';

export default function Landing() {
  return (
    <div className="bg-slate-50 dark:bg-[#0A0A0A] text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300 min-h-screen flex flex-col relative selection:bg-primary-500/30">
      
      {/* Decorative Background grid & glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-accent-500/20 dark:bg-accent-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      {/* Floating Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 flex justify-center">
        <header className="w-full max-w-6xl flex items-center justify-between px-6 py-3 rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-lg shadow-inner">
              <Sparkles size={18} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Anvelos
            </h1>
          </div>
          <ThemeToggle />
        </header>
      </div>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center pt-40 pb-20 px-4 w-full max-w-6xl mx-auto">
        
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in flex flex-col items-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm text-sm font-medium text-slate-600 dark:text-slate-300 mb-8 backdrop-blur-md">
            <Zap size={14} className="text-yellow-500" />
            <span>Welcome to the Evolution of UI</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tighter text-slate-900 dark:text-white">
            Engineering <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 animate-pulse-ring">
              Digital Excellence
            </span>
          </h2>
          
          <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed mb-10">
            Explore the progressive journey of Anvelos Softwares through our three definitive project milestones.
          </p>
          
          <div className="flex gap-4">
            <a href="#milestones" className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 transition-transform duration-200 shadow-xl flex items-center gap-2">
              Explore Milestones <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Bento Grid Milestones */}
        <div id="milestones" className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* Milestone 1 (Spans 1 column) */}
          <a href="/milestone-1/index.html" className="group relative col-span-1 bg-white/80 dark:bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden hover:border-primary-500/50 transition-colors duration-500 flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-transparent transition-all duration-500"></div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-slate-200 mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                <Rocket size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">The Foundation</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Milestone 1 establishes the core landing page architecture and initial brand aesthetics.
              </p>
            </div>
            <div className="flex items-center text-sm font-bold text-primary-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Launch Project <ArrowRight size={16} className="ml-1" />
            </div>
          </a>

          {/* Milestone 2 (Spans 2 columns) */}
          <a href="/milestone-2/index.html" className="group relative col-span-1 md:col-span-2 bg-slate-900 dark:bg-[#111111] p-8 rounded-[2rem] border border-slate-800 dark:border-white/10 overflow-hidden hover:border-accent-500/50 transition-colors duration-500 flex flex-col justify-between">
            {/* Background Image / Decoration */}
            <div className="absolute right-0 bottom-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 translate-x-1/4 translate-y-1/4">
              <LayoutDashboard size={250} className="text-accent-500" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/10 group-hover:to-transparent transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-accent-500 transition-all duration-300">
                <Layers size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">Dashboard Interface</h3>
              <p className="text-slate-400 font-medium max-w-md text-lg">
                Milestone 2 dives deep into administrative tooling, featuring complex data tables, stat cards, and dark mode integration using Tailwind CSS.
              </p>
            </div>
            <div className="relative z-10 flex items-center text-sm font-bold text-accent-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Launch Project <ArrowRight size={16} className="ml-1" />
            </div>
          </a>

          {/* Milestone 3 (Spans all 3 columns) */}
          <a href="/milestone-3/index.html" className="group relative col-span-1 md:col-span-3 bg-gradient-to-r from-primary-600 to-accent-600 p-8 md:p-12 rounded-[2rem] border border-white/20 overflow-hidden hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Glowing orb inside card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/10 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000 ease-out"></div>
            
            <div className="relative z-10 max-w-xl">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Code2 size={28} />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">The Final Polish</h3>
              <p className="text-white/80 font-medium text-lg md:text-xl">
                Milestone 3 brings everything together into a refined, production-ready user interface. Experience fluid animations, perfect spacing, and robust structural code.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <div className="w-16 h-16 rounded-full bg-white text-primary-600 flex items-center justify-center group-hover:scale-110 shadow-xl transition-transform duration-300">
                <ArrowRight size={24} />
              </div>
            </div>
          </a>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-lg mt-20 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Sparkles size={16} className="text-primary-500" />
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Anvelos Softwares <span className="text-slate-400 font-normal">© 2026</span>
            </p>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <span className="text-slate-500 hover:text-primary-500 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-slate-500 hover:text-primary-500 cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-slate-500 hover:text-primary-500 cursor-pointer transition-colors">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
