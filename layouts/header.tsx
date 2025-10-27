"use client";
import { ExternalLink, Github } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-orbitron font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              webwag tiri
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/Yourmix0x/webwag-tiri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <Github className="w-4 h-4" />
              <span className="font-inter font-medium">GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
