import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Satish Ranjan</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>
        <div className="flex gap-4">
          <a href="https://github.com" className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/satish-ranjan-b80b32316" className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:satish.ranjan7183@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}