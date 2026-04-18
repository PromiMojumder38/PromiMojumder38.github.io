import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { NAV_LINKS } from '../../config/navigation';
import { scrollToSection, scrollToTop } from '../../lib/scroll';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md border-b border-navy-100 dark:border-navy-800 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={scrollToTop}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-navy-900 dark:bg-white rounded-lg md:rounded-xl flex items-center justify-center text-white dark:text-navy-900 font-bold text-sm md:text-base group-hover:rotate-12 transition-transform">
            PM
          </div>
          <span className="font-bold tracking-tighter text-lg md:text-xl text-navy-900 dark:text-white hidden sm:block">Promi.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
              className="text-[10px] font-black uppercase tracking-widest text-navy-500 dark:text-navy-400 hover:text-navy-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-navy-50 dark:bg-navy-800 text-navy-900 dark:text-white hover:bg-navy-100 dark:hover:bg-navy-700 transition-all shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
          </button>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="px-4 md:px-6 py-2 md:py-2.5 bg-navy-900 dark:bg-white text-white dark:text-navy-900 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-navy-900/10 dark:shadow-white/5"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};
