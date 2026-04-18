import React from 'react';
import { Search } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { RESEARCH_WORK } from '../../data/portfolio';

export const Research = () => (
  <Section title="Research" icon={Search} variant="soft" id="research">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {RESEARCH_WORK.map((res, idx) => (
        <Card key={idx} className="group p-0 overflow-hidden flex flex-col">
          <div className="h-48 overflow-hidden relative">
            {res.secondaryImage ? (
              <div className="flex h-full">
                <img
                  src={res.image}
                  alt={res.title}
                  className="w-1/2 h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <img
                  src={res.secondaryImage}
                  alt=""
                  aria-hidden="true"
                  className="w-1/2 h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <img
                src={res.image}
                alt={res.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-navy-900 dark:text-white">
              {res.status}
            </div>
          </div>
          <div className="p-8 flex-1">
            <h3 className="text-xl font-black text-navy-900 dark:text-white mb-4 leading-tight group-hover:text-navy-600 dark:group-hover:text-navy-300 transition-colors">
              {res.title}
            </h3>
            <ul className="space-y-3">
              {res.description.map((item, i) => (
                <li key={i} className="text-sm text-navy-500 dark:text-navy-400 leading-relaxed flex gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-navy-300 dark:bg-navy-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);
