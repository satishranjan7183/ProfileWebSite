import React from 'react';
import { Cloud, Server, GitBranch, Monitor } from 'lucide-react';

const skills = [
  {
    category: "Cloud & Infrastructure",
    icon: <Cloud className="text-blue-500 mb-4" size={32} />,
    items: ["Azure Cloud", "Terraform", "Docker", "Kubernetes"]
  },
  {
    category: "CI/CD & Version Control",
    icon: <GitBranch className="text-blue-500 mb-4" size={32} />,
    items: ["Azure DevOps", "Azure Pipelines", "Git", "YAML"]
  },
  {
    category: "Monitoring & Operations",
    icon: <Monitor className="text-blue-500 mb-4" size={32} />,
    items: ["Prometheus", "Grafana", "Linux", "System Administration"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-gray-50 rounded-lg p-6 shadow-lg text-center">
              {skillGroup.icon}
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}