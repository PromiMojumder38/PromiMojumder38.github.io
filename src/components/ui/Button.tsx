import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  className?: string;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const VARIANTS = {
  primary:   'bg-navy-900 text-white hover:bg-navy-800',
  secondary: 'bg-white text-navy-900 hover:bg-navy-50',
  outline:   'bg-transparent border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
  dark:      'bg-navy-900 text-white hover:bg-navy-950',
};

export const Button = ({ children, variant = 'primary', className = '', isLoading, type = 'button', disabled, onClick }: ButtonProps) => (
  <motion.button
    type={type}
    disabled={disabled || isLoading}
    onClick={onClick}
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className={`
      px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest
      transition-all duration-300 flex items-center justify-center gap-3
      disabled:opacity-50 disabled:cursor-not-allowed
      ${VARIANTS[variant]} ${className}
    `}
  >
    {isLoading
      ? <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      : children}
  </motion.button>
);
