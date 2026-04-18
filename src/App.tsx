import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Research } from './components/sections/Research';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Awards } from './components/sections/Awards';
import { Contact } from './components/sections/Contact';

const AppContent = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-navy-950 text-navy-900 dark:text-white font-sans selection:bg-navy-900 selection:text-white dark:selection:bg-white dark:selection:text-navy-900 relative transition-colors duration-300">
      {/* Global Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Research />
        <Projects />
        <Education />
        <Awards />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
