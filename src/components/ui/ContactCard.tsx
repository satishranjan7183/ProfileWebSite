import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function ContactCard({ href, icon: Icon, label }: ContactCardProps) {
  return (
    <a
      href={href}
      className="flex flex-col items-center p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
    >
      <Icon size={32} className="mb-4 text-blue-400" />
      <span>{label}</span>
    </a>
  );
}