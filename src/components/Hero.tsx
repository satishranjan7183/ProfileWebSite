import React from 'react';
import { Cloud, Server, GitBranch } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Cloud className="text-blue-400" size={48} />
            <Server className="text-blue-400" size={48} />
            <GitBranch className="text-blue-400" size={48} />
          </div>
          <h1 className="text-5xl font-bold mb-6">DevOps Engineer</h1>
          <p className="text-xl text-gray-300 mb-8">
            Experienced DevOps Engineer with 3.5 years at Capgemini Engineering and 10 years in IT.
            Specializing in Azure Cloud, CI/CD pipelines, and infrastructure automation.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Get in Touch
            </a>
            <a href="#experience" className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors">
              View Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}