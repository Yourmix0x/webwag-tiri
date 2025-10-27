"use client";
import { Code2, Heart, Coffee, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-gray-200/50 dark:border-slate-700/50 mt-20">
      <div className="absolute inset-0 bg-linear-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-lg">
              <Code2 className="w-8 h-8 text-white" />
            </div>
          </div>

          <h3 className="text-2xl font-orbitron font-bold text-gray-900 dark:text-white mb-4">
            Built with Passion & Code
          </h3>

          <div className="flex items-center justify-center space-x-2 mb-6 text-gray-600 dark:text-gray-400">
            <span className="font-inter">Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="font-inter">by</span>
            <span className="font-orbitron font-semibold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Yourmix0x
            </span>
            <Coffee className="w-4 h-4 text-amber-600" />
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/yourmix0x"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-xl transition-colors group"
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/Yourmix0x/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-xl transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
            </a>
            <a
              href="https://x.com/Yourmix0x"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-xl transition-colors group"
            >
              <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
