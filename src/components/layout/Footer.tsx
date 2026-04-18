import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';
import { scrollToTop } from '../../lib/scroll';

const SOCIALS = [
  { icon: Github,   href: (g: string) => `https://github.com/${g}`,     key: 'github'   as const },
  { icon: Linkedin, href: (l: string) => `https://linkedin.com/in/${l}`, key: 'linkedin' as const },
  { icon: Youtube,  href: (y: string) => `https://youtube.com/${y}`,     key: 'youtube'  as const },
];

export const Footer = () => (
  <footer className="max-w-5xl mx-auto py-12 px-6 border-t border-navy-100 dark:border-navy-800 transition-colors duration-300">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <p className="text-2xl font-black tracking-tighter text-navy-900 dark:text-white">Promi Mojumder</p>
        <p className="text-navy-400 dark:text-navy-500 text-sm font-medium mt-1">© 2026 • Built with Passion</p>
      </div>

      <div className="flex items-center gap-4">
        {SOCIALS.map((s) => (
          <motion.a
            key={s.key}
            href={s.href(PERSONAL_INFO[s.key])}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="text-navy-400 dark:text-navy-500 hover:text-navy-900 dark:hover:text-white transition-colors"
          >
            <s.icon className="w-5 h-5" />
          </motion.a>
        ))}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          aria-label="Scroll to top"
          className="ml-4 p-3 rounded-xl bg-navy-900 dark:bg-white text-white dark:text-navy-900 shadow-lg"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  </footer>
);
