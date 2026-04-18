import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../../data/portfolio';

export const Skills = () => (
  <div className="bg-white dark:bg-navy-950 py-12 md:py-16 overflow-hidden relative transition-colors duration-300 border-y border-navy-100 dark:border-navy-800">
    <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <p className="text-navy-500 dark:text-navy-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8 md:mb-10 text-center">
        Technical Arsenal
      </p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-12">
        {SKILLS.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.2, color: '#102a43', y: -5 }}
            className="text-navy-900 dark:text-navy-300 text-xl md:text-3xl font-black tracking-tighter transition-colors cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </div>
);
