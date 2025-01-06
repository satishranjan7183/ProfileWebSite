import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Satish Ranjan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;