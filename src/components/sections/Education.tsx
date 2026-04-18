import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { EDUCATION } from '../../data/portfolio';

export const Education = () => (
  <Section title="Education" icon={GraduationCap} variant="soft" id="education">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {EDUCATION.map((edu, idx) => (
        <Card key={idx} className="group p-0 overflow-hidden flex flex-col">
          <div className="h-40 md:h-48 overflow-hidden shrink-0">
            <img
              src={edu.image}
              alt={edu.institution}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="font-black text-navy-900 dark:text-white leading-tight mb-2 text-lg">{edu.institution}</h3>
            <p className="text-sm font-bold text-navy-500 dark:text-navy-400 mb-1">{edu.degree}</p>
            <p className="text-xs font-black text-navy-900 dark:text-white mb-2 mt-auto">{edu.result}</p>
            {edu.details && (
              <p className="text-[10px] text-navy-400 dark:text-navy-500 uppercase tracking-widest font-bold">{edu.details}</p>
            )}
          </div>
        </Card>
      ))}
    </div>
  </Section>
);
