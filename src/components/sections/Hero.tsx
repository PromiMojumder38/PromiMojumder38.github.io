import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Github, Linkedin, Youtube } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';
import { scrollToSection } from '../../lib/scroll';

const SOCIALS = [
  { icon: Github,   href: (g: string) => `https://github.com/${g}`,          key: 'github'   },
  { icon: Linkedin, href: (l: string) => `https://linkedin.com/in/${l}`,      key: 'linkedin' },
  { icon: Youtube,  href: (y: string) => `https://youtube.com/${y}`,          key: 'youtube'  },
] as const;

export const Hero = () => (
  <header className="max-w-5xl mx-auto pt-24 md:pt-40 pb-16 md:pb-24 px-6 relative transition-colors duration-300">
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-navy-200/40 dark:bg-navy-500/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-sky-100/30 dark:bg-sky-500/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse delay-700" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.5 },
          scale:   { duration: 0.5 },
          y:       { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="lg:col-span-4 flex justify-center lg:justify-start order-2 lg:order-1"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-navy-900 dark:bg-white rounded-[2.5rem] md:rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform duration-500" />
          <div className="relative w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 border-white dark:border-navy-800 shadow-2xl">
            <img
              src={PERSONAL_INFO.image}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white dark:bg-navy-800 p-3 md:p-4 rounded-2xl shadow-xl border border-navy-50 dark:border-navy-700">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-8 text-center lg:text-left order-1 lg:order-2"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-50 dark:bg-navy-800 text-navy-600 dark:text-navy-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          Available for new projects
        </motion.div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-navy-900 dark:text-white leading-[0.85] mb-6 md:mb-8">
          {PERSONAL_INFO.name.split(' ')[0]}<br />
          <span className="text-navy-400 dark:text-navy-500 italic">{PERSONAL_INFO.name.split(' ')[1]}</span>
        </h1>

        <p className="text-base md:text-2xl text-navy-600 dark:text-navy-300 font-medium max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-12 leading-relaxed">
          {PERSONAL_INFO.summary}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-navy-900 dark:bg-white text-white dark:text-navy-900 rounded-2xl md:rounded-3xl font-black uppercase tracking-widest text-[10px] md:text-xs shadow-xl shadow-navy-900/20 dark:shadow-white/10 transition-all"
          >
            Let's Talk
          </motion.button>

          <div className="flex items-center gap-3 md:gap-4">
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.key}
                href={s.href(PERSONAL_INFO[s.key])}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4, rotate: i % 2 === 0 ? 5 : -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 md:p-4 rounded-2xl md:rounded-3xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-800 hover:bg-navy-50 dark:hover:bg-navy-700 transition-all shadow-sm"
              >
                <s.icon className="w-5 h-5 md:w-6 md:h-6 text-navy-900 dark:text-white" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </header>
);
