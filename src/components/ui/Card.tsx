import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

export interface CardProps {
  children: ReactNode;
  className?: string;
  whileHover?: object;
  onClick?: () => void;
  key?: string | number;
}

const DEFAULT_HOVER = { y: -8, scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } };

export const Card = ({ children, className = '', whileHover, onClick }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={whileHover ?? DEFAULT_HOVER}
    onClick={onClick}
    className={`bg-white dark:bg-navy-900/50 p-8 rounded-3xl border border-navy-100 dark:border-navy-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);
