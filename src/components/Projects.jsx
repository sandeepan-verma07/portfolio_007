import React, { useState } from 'react';
import { Rocket, ExternalLink, ChevronRight, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const getStatusIcon = (status) => {
    if (status.toLowerCase().includes('ongoing')) return <Clock size={14} className="text-[#00ff88]" />;
    if (status.toLowerCase().includes('hackathon')) return <AlertTriangle size={14} className="text-[#D4A853]" />;
    return <CheckCircle size={14} className="text-[#00ff88]" />;
  };

  const getStatusColor = (status) => {
    if (status.toLowerCase().includes('ongoing')) return 'text-[#00ff88] border-[#00ff88]/30 bg-[#00ff88]/5';
    if (status.toLowerCase().includes('hackathon')) return 'text-[#D4A853] border-[#D4A853]/30 bg-[#D4A853]/5';
    return 'text-[#00ff88] border-[#00ff88]/30 bg-[#00ff88]/5';
  };

  return (
    <section id="projects" className="relative py-32 bg-[#111113]">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <Rocket size={24} className="text-[#D4A853]" />
          <h2 className="font-military text-3xl md:text-4xl font-bold tracking-[0.1em] gradient-text">
            COMBAT OPERATIONS
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4A853]/50 to-transparent" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Mission Number */}
              <div className="absolute -left-4 top-0 font-military text-6xl font-bold text-[#1a1a1d] select-none">
                0{index + 1}
              </div>

              <div className="relative hud-border p-8 bg-[#0a0a0b]/80 hover:bg-[#0a0a0b] transition-all duration-500">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[#8b8b8b] text-xs">OPERATION_{String(index + 1).padStart(3, '0')}</span>
                    <div className={`flex items-center gap-2 px-3 py-1 border ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)}
                      <span className="font-mono text-xs tracking-wider">{project.status.toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#00ff88] animate-pulse" />
                    <span className="font-mono text-[#00ff88] text-xs">LIVE</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <h3 className="font-military text-2xl text-[#e5e5e5] mb-4 group-hover:text-[#D4A853] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#8b8b8b] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.highlights.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className="flex items-center gap-2 px-3 py-2 bg-[#111113] border border-[#333]"
                        >
                          <CheckCircle size={12} className="text-[#00ff88]" />
                          <span className="font-mono text-xs text-[#c5c5c5]">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="lg:col-span-1">
                    <div className="p-4 border border-[#333] bg-[#111113]">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-[#D4A853]" />
                        <span className="font-mono text-[#D4A853] text-xs tracking-wider">TECH STACK</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-2 py-1 bg-[#0a0a0b] border border-[#333] font-mono text-xs text-[#8b8b8b] hover:text-[#D4A853] hover:border-[#D4A853]/30 transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expand Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={24} className="text-[#D4A853]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-4 border border-[#333] bg-[#0a0a0b] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#00ff88] animate-pulse" />
            <span className="font-mono text-[#8b8b8b] text-xs">MORE OPERATIONS CLASSIFIED</span>
          </div>
          <span className="font-mono text-[#D4A853] text-xs">CLEARANCE LEVEL: PUBLIC</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
