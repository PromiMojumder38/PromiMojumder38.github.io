import React from 'react';
import { LucideIcon } from 'lucide-react';

const BASE = `
  w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl
  focus:outline-none focus:border-white/40 focus:bg-white/10
  transition-all text-sm text-white placeholder:text-navy-500
`;

interface FieldProps {
  label: string;
  icon: LucideIcon;
  error?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface InputProps extends FieldProps {
  type?: string;
}

interface TextAreaProps extends FieldProps {
  rows?: number;
}

export const Input = ({ label, icon: Icon, error, className = '', value, placeholder, required, onChange, type }: InputProps) => (
  <div className="space-y-3">
    <label className="text-xs font-bold text-navy-400 uppercase tracking-widest ml-1">{label}</label>
    <div className="relative group/input">
      <Icon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-500 group-focus-within/input:text-white transition-colors" />
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
        className={`${BASE} ${error ? 'border-rose-500/50' : ''} ${className}`}
      />
    </div>
    {error && <p className="text-xs text-rose-400 ml-1">{error}</p>}
  </div>
);

export const TextArea = ({ label, icon: Icon, error, className = '', value, placeholder, required, onChange, rows }: TextAreaProps) => (
  <div className="space-y-3">
    <label className="text-xs font-bold text-navy-400 uppercase tracking-widest ml-1">{label}</label>
    <div className="relative group/input">
      <Icon className="absolute left-5 top-6 w-5 h-5 text-navy-500 group-focus-within/input:text-white transition-colors" />
      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
        className={`${BASE} resize-none ${error ? 'border-rose-500/50' : ''} ${className}`}
      />
    </div>
    {error && <p className="text-xs text-rose-400 ml-1">{error}</p>}
  </div>
);
