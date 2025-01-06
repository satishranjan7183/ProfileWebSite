import React from 'react';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { ContactCard } from './ui/ContactCard';
import { SectionTitle } from './ui/SectionTitle';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Get in Touch</SectionTitle>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <ContactCard
              href="mailto:satish.ranjan7183@gmail.com"
              icon={Mail}
              label="Email Me"
            />
            <ContactCard
              href="https://linkedin.com/in/satish-ranjan-b80b32316"
              icon={Linkedin}
              label="LinkedIn"
            />
            <ContactCard
              href="tel:+919818892398"
              icon={Phone}
              label="Call Me"
            />
          </div>
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center text-gray-400">
              <MapPin size={20} className="mr-2" />
              <p>Delhi, New Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}