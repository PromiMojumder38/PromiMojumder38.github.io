import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

type SectionVariant = 'default' | 'soft' | 'dark';

interface SectionProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  id?: string;
  variant?: SectionVariant;
  className?: string;
}

const VARIANTS: Record<SectionVariant, string> = {
  default: 'bg-transparent',
  soft:    'bg-white/70 dark:bg-navy-900/40 backdrop-blur-md border-y border-navy-100 dark:border-navy-800 shadow-sm',
  dark:    'bg-navy-900 dark:bg-navy-800 text-white rounded-[4rem]',
};

export const Section = ({ title, icon: Icon, children, id, variant = 'default', className = '' }: SectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`py-24 px-6 -mx-6 scroll-mt-24 transition-colors duration-300 ${VARIANTS[variant]} ${className}`}
  >
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-6 mb-16 group/section">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-2xl transition-all ${
            variant === 'dark'
              ? 'bg-white text-navy-900'
              : 'bg-navy-900 dark:bg-white text-white dark:text-navy-900 group-hover/section:bg-navy-800 dark:group-hover/section:bg-navy-50'
          }`}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
        <div className="relative">
          <h2 className={`text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none transition-colors duration-300 ${
            variant === 'dark' ? 'text-white' : 'text-navy-900 dark:text-white'
          }`}>
            {title}
          </h2>
          <div className="flex gap-1 mt-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`h-2 rounded-full transition-colors duration-300 ${variant === 'dark' ? 'bg-white/30' : 'bg-navy-900 dark:bg-white'}`}
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${variant === 'dark' ? 'bg-white/30' : 'bg-navy-900 dark:bg-white'}`}
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  </motion.section>
);
