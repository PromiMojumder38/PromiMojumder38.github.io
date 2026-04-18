import React from 'react';
import { Trophy, Calendar, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Section } from '../ui/Section';
import { ACHIEVEMENTS, ECA } from '../../data/portfolio';

const RANK_BADGE = ['🥇', '🥈', '🥉'];

export const Awards = () => (
  <>
    <Section title="Awards & Achievements" icon={Trophy} variant="soft" id="awards" className="relative overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.45 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-400 aspect-[4/3] cursor-default"
            onClick={() => ach.link && window.open(ach.link, '_blank', 'noopener')}
            style={{ cursor: ach.link ? 'pointer' : 'default' }}
          >
            {ach.image ? (
              <img
                src={ach.image}
                alt={ach.title}
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-600" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-2xl leading-none">{RANK_BADGE[idx] ?? '🏅'}</span>
                <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Achievement
                </span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-snug drop-shadow-lg">
                  {ach.title}
                </p>
                {ach.details && (
                  <p className="text-white/70 text-xs mt-1">{ach.details}</p>
                )}
              </div>
            </div>

            <div className="absolute inset-0 ring-2 ring-inset ring-white/0 group-hover:ring-white/20 rounded-2xl transition-all duration-300" />
          </motion.div>
        ))}
      </div>
    </Section>

    <Section title="Extra-Curricular" icon={Calendar} id="extracurricular">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ECA.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            whileHover={{ y: -6 }}
            onClick={() => item.link && window.open(item.link, '_blank', 'noopener')}
            style={{ cursor: item.link ? 'pointer' : 'default' }}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-400 aspect-video"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-500" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <div className="flex justify-end">
                {item.date && (
                  <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                )}
              </div>
              <div className="flex items-end gap-3">
                <Star className="shrink-0 w-5 h-5 text-amber-400 mb-0.5" />
                <p className="text-white font-bold text-sm leading-snug drop-shadow-lg">
                  {item.title}
                </p>
              </div>
            </div>

            <div className="absolute inset-0 ring-2 ring-inset ring-white/0 group-hover:ring-white/20 rounded-2xl transition-all duration-300" />
          </motion.div>
        ))}
      </div>
    </Section>
  </>
);
