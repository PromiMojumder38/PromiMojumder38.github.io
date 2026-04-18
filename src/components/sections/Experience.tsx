import React from 'react';
import { Briefcase } from 'lucide-react';
import { Section } from '../ui/Section';
import { WORK_EXPERIENCE } from '../../data/portfolio';

export const Experience = () => (
  <Section title="Experience" icon={Briefcase} id="experience">
    <div className="space-y-12 md:space-y-20">
      {WORK_EXPERIENCE.map((exp, idx) => (
        <div key={idx} className="relative pl-8 md:pl-16 border-l-2 border-navy-100 dark:border-navy-800 transition-colors duration-300">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-navy-900 dark:bg-white shadow-lg shadow-navy-900/20 dark:shadow-white/20" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] md:text-xs font-black text-navy-400 dark:text-navy-500 uppercase tracking-[0.2em] mb-3">{exp.period}</p>
              <h3 className="text-2xl md:text-3xl font-black text-navy-900 dark:text-white tracking-tight leading-tight mb-2">{exp.company}</h3>
              <p className="text-base md:text-lg font-bold text-navy-500 dark:text-navy-400">{exp.role}</p>
              {exp.image && (
                <div className="mt-6 rounded-3xl overflow-hidden border border-navy-100 dark:border-navy-800 shadow-xl max-w-sm">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-4 md:space-y-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-4 text-navy-600 dark:text-navy-300 leading-relaxed text-sm md:text-base">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-navy-900 dark:bg-white shrink-0 opacity-30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
