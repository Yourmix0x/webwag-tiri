"use client";
import { Sparkles, Rocket, Brain } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="p-4 bg-linear-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-3xl shadow-2xl">
              <Sparkles className="w-16 h-16 text-indigo-600 dark:text-indigo-400 animate-bounce" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-gray-900 dark:text-white mb-6">
          <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            webwag
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">tiri</span>
        </h1>

        <p className="text-xl md:text-2xl font-inter text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
          with WAGMI, React, and modern development tools.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="group p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-orbitron font-semibold text-gray-900 dark:text-white mb-2">
              WAGMI
            </h3>
            <p className="font-inter text-gray-600 dark:text-gray-300 text-sm">
              React hooks for Ethereum interactions
            </p>
          </div>

          <div className="group p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-orbitron font-semibold text-gray-900 dark:text-white mb-2">
              Building DApps
            </h3>
            <p className="font-inter text-gray-600 dark:text-gray-300 text-sm">
              Creating decentralized applications step by step
            </p>
          </div>

          <div className="group p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-orbitron font-semibold text-gray-900 dark:text-white mb-2">
              Open Source
            </h3>
            <p className="font-inter text-gray-600 dark:text-gray-300 text-sm">
              Sharing knowledge with the developer community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
