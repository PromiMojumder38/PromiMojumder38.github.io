import React from 'react';
import { Code2, Github, Youtube, ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';
import { PROJECTS } from '../../data/portfolio';

export const Projects = () => (
  <Section title="Projects" icon={Code2} id="projects">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {PROJECTS.map((project, idx) => (
        <div key={idx} className="group relative">
          <div className="relative h-80 rounded-[3rem] overflow-hidden mb-8 shadow-2xl">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy-900 hover:scale-110 transition-transform">
                    <Github className="w-6 h-6" />
                  </a>
                )}
                {project.youtube && (
                  <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-rose-600 hover:scale-110 transition-transform">
                    <Youtube className="w-6 h-6" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 hover:scale-110 transition-transform">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="px-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-navy-50 dark:bg-navy-800 text-navy-500 dark:text-navy-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                {project.type}
              </span>
              <span className="text-navy-300 dark:text-navy-600 text-xs font-bold">{project.date}</span>
            </div>
            <h3 className="text-3xl font-black text-navy-900 dark:text-white mb-4 tracking-tight group-hover:text-navy-600 dark:group-hover:text-navy-300 transition-colors">
              {project.name}
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-bold text-navy-400 dark:text-navy-500">#{t}</span>
              ))}
            </div>
            <ul className="space-y-2">
              {project.description.map((item, i) => (
                <li key={i} className="text-sm text-navy-500 dark:text-navy-400 flex gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-navy-200 dark:bg-navy-700 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
