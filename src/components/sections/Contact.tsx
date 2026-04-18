import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, User, AtSign, Sparkles, MessageSquare, Send } from 'lucide-react';
import { Section } from '../ui/Section';
import { Input, TextArea } from '../ui/Input';
import { Button } from '../ui/Button';
import { PERSONAL_INFO } from '../../data/portfolio';
import { submitContact, type ContactPayload } from '../../services/contact';

const EMPTY_FORM: ContactPayload = { name: '', email: '', subject: '', message: '' };

const CONTACT_ITEMS = [
  { icon: Mail,  label: 'Email',    key: 'email'    as const, color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
  { icon: Phone, label: 'Phone',    key: 'phone'    as const, color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400'       },
  { icon: User,  label: 'Location', key: 'location' as const, color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400'             },
];

export const Contact = () => {
  const [formData, setFormData] = useState<ContactPayload>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const set = (field: keyof ContactPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const result = await submitContact(formData);
      setSubmitStatus({ type: 'success', message: result.message });
      setFormData(EMPTY_FORM);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to send message. Please check your connection.';
      setSubmitStatus({ type: 'error', message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      title="Let's Connect"
      icon={Mail}
      id="contact"
      className="bg-white dark:bg-navy-950 -mx-6 px-6 py-24 md:py-32 rounded-[3rem] md:rounded-[5rem] text-navy-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-y border-navy-100 dark:border-navy-800"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10 dark:opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-navy-200 dark:bg-navy-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-navy-100 dark:bg-navy-400 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 relative z-10">
        <div className="lg:col-span-5 space-y-8 md:space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-none mb-6 text-navy-900 dark:text-white">
              Have a project <span className="text-navy-500 dark:text-navy-300 italic">in mind?</span>
            </h3>
            <p className="text-navy-600 dark:text-navy-300 text-base md:text-lg leading-relaxed max-w-md">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            {CONTACT_ITEMS.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 md:gap-6 group"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 ${item.color} border border-navy-100 dark:border-white/5`}>
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs font-bold text-navy-400 dark:text-navy-500 uppercase tracking-widest">{item.label}</p>
                  <p className="text-base md:text-lg font-bold text-navy-900 dark:text-white group-hover:text-navy-600 dark:group-hover:text-navy-300 transition-colors">
                    {PERSONAL_INFO[item.key]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-white/5 p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] backdrop-blur-md border border-navy-100 dark:border-white/10 shadow-xl dark:shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input label="Name"  icon={User}   required value={formData.name}    onChange={set('name')}    placeholder="Your name"         className="bg-navy-50 dark:bg-navy-800/50 border-navy-100 dark:border-white/5 focus:bg-white dark:focus:bg-navy-800 text-navy-900 dark:text-white placeholder:text-navy-400" />
              <Input label="Email" icon={AtSign} type="email" required value={formData.email}   onChange={set('email')}   placeholder="your@email.com"    className="bg-navy-50 dark:bg-navy-800/50 border-navy-100 dark:border-white/5 focus:bg-white dark:focus:bg-navy-800 text-navy-900 dark:text-white placeholder:text-navy-400" />
            </div>
            <Input label="Subject" icon={Sparkles} required value={formData.subject} onChange={set('subject')} placeholder="What is this about?" className="bg-navy-50 dark:bg-navy-800/50 border-navy-100 dark:border-white/5 focus:bg-white dark:focus:bg-navy-800 text-navy-900 dark:text-white placeholder:text-navy-400" />
            <TextArea label="Message" icon={MessageSquare} required rows={4} value={formData.message} onChange={set('message')} placeholder="Your message..." className="bg-navy-50 dark:bg-navy-800/50 border-navy-100 dark:border-white/5 focus:bg-white dark:focus:bg-navy-800 text-navy-900 dark:text-white placeholder:text-navy-400" />

            <Button type="submit" variant="secondary" isLoading={isSubmitting} className="w-full py-5 md:py-6 text-base md:text-lg bg-navy-900 dark:bg-white text-white dark:text-navy-900">
              Send Message
              <Send className="w-5 h-5" />
            </Button>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-[2rem] text-center border-2 ${
                  submitStatus.type === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${
                    submitStatus.type === 'success' ? 'bg-emerald-500 shadow-emerald-500/20' : 'bg-rose-500 shadow-rose-500/20'
                  }`}>
                    {submitStatus.type === 'success' ? <Sparkles className="w-6 h-6" /> : <AtSign className="w-6 h-6" />}
                  </div>
                  <p className="font-black tracking-tight text-lg">{submitStatus.message}</p>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
};
