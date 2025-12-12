import React from 'react';
import { Crosshair, Target, Zap, Brain } from 'lucide-react';
import { personalInfo, researchInterests } from '../data/mock';

const About = () => {
  const stats = [
    { icon: Brain, label: 'FOCUS', value: 'AI/ML' },
    { icon: Target, label: 'CGPA', value: '8.66' },
    { icon: Zap, label: 'STATUS', value: 'ACTIVE' },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, #D4A853 50px, #D4A853 51px),
              repeating-linear-gradient(90deg, transparent, transparent 50px, #D4A853 50px, #D4A853 51px)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <Crosshair size={24} className="text-[#D4A853]" />
          <h2 className="font-military text-3xl md:text-4xl font-bold tracking-[0.1em] gradient-text">
            MISSION BRIEFING
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4A853]/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Profile Summary */}
          <div>
            <div className="hud-border p-8 bg-[#111113]/80">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse" />
                <span className="font-mono text-[#00ff88] text-xs tracking-wider">// PILOT PROFILE</span>
              </div>
              
              <p className="text-[#c5c5c5] leading-relaxed text-lg mb-8">
                {personalInfo.summary}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 border border-[#333] bg-[#0a0a0b]/50"
                  >
                    <stat.icon size={24} className="mx-auto mb-2 text-[#D4A853]" />
                    <p className="font-mono text-[#8b8b8b] text-xs mb-1">{stat.label}</p>
                    <p className="font-military text-[#e5e5e5] text-lg font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Research Interests */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#D4A853]" />
              <span className="font-mono text-[#D4A853] text-xs tracking-wider">// RESEARCH VECTORS</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {researchInterests.map((interest, index) => (
                <div
                  key={index}
                  className="group relative px-5 py-3 border border-[#333] bg-[#111113] hover:border-[#D4A853]/50 transition-all duration-300 cursor-default"
                >
                  <span className="font-military text-[#8b8b8b] group-hover:text-[#D4A853] tracking-wider transition-colors">
                    {interest}
                  </span>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#D4A853] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#D4A853] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* Mission Status Panel */}
            <div className="mt-10 p-6 border border-[#00ff88]/20 bg-[#00ff88]/5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[#00ff88] text-xs">CURRENT MISSION</span>
                <span className="flex items-center gap-2 font-mono text-[#00ff88] text-xs">
                  <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
                  IN PROGRESS
                </span>
              </div>
              <p className="font-military text-[#e5e5e5] text-lg">
                Hallucination Mitigation in LLMs using RAG
              </p>
              <div className="mt-4 h-2 bg-[#1a1a1d] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00ff88] to-[#00ff88]/50"
                  style={{ width: '65%' }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-mono text-[#8b8b8b] text-xs">PROGRESS</span>
                <span className="font-mono text-[#00ff88] text-xs">65%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
