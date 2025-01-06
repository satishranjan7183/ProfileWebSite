import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    company: "Capgemini Engineering",
    role: "DevOps Engineer",
    period: "Sep 2021 - Present",
    description: [
      "Design and implement CI/CD pipelines using Azure DevOps and YAML",
      "Manage cloud infrastructure using Terraform and Azure services",
      "Set up monitoring using Prometheus and Grafana",
      "Implement container orchestration with Docker and Kubernetes",
      "Provide production support and resolve issues promptly",
      "Work closely with development teams for smooth deployments"
    ]
  },
  {
    company: "Avacend Solutions",
    role: "Senior Engineer",
    period: "July 2021 - Sep 2021",
    description: [
      "Implemented monitoring tools for system reliability",
      "Managed VMs and containers using Azure",
      "Enhanced infrastructure performance through optimization",
      "Conducted system maintenance and troubleshooting"
    ]
  },
  {
    company: "ManpowerGroup",
    role: "Engineer",
    period: "Dec 2017 - July 2021",
    description: [
      "Linux system administration and configuration",
      "Kubernetes cluster setup and management",
      "Infrastructure monitoring and maintenance",
      "Deployment automation and scripting"
    ]
  },
    {
    company: "GIGroup",
    role: "Engineer",
    period: "Dec 2015 - Nov 2017",
    description: [
      "Linux system administration and configuration",
      "Implemented backup and recovery strategies using tar, and other tools",
      "Ensured high availability and managed Linuxserver environments",
    ]
  },
    {
    company: "OmniGlobe International",
    role: "Data Processing Engineer",
    period: "Jan 2014 - Dec 2015",
    description: [
      "Server Deployment, OS Installation and their configuration",
      "Manage and Maintain Servers",
      "Manage and Maintain SQL Database"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp) => (
            <div key={exp.company} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <Building2 size={16} className="mr-2" />
                    <p>{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-500">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
                    <span>{item}</span>
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