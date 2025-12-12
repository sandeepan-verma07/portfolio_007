import React, { useState } from 'react';
import { Cpu, Code, Wrench, Cloud, Users, ChevronRight, Terminal } from 'lucide-react';
import { technicalSkills } from '../data/mock';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const categories = [
    { id: 'languages', label: 'LANGUAGES', icon: Terminal, data: technicalSkills.languages },
    { id: 'frameworks', label: 'FRAMEWORKS', icon: Code, data: technicalSkills.frameworks },
    { id: 'aiTechniques', label: 'AI TECHNIQUES', icon: Cpu, data: technicalSkills.aiTechniques },
    { id: 'tools', label: 'TOOLS', icon: Wrench, data: technicalSkills.tools },
    { id: 'cloud', label: 'CLOUD & DB', icon: Cloud, data: technicalSkills.cloud },
    { id: 'softSkills', label: 'SOFT SKILLS', icon: Users, data: technicalSkills.softSkills },
  ];

  return (
    <section id="skills" className="relative py-32 bg-[#0a0a0b]">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#D4A853 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <Cpu size={24} className="text-[#D4A853]" />
          <h2 className="font-military text-3xl md:text-4xl font-bold tracking-[0.1em] gradient-text">
            WEAPONS ARSENAL
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4A853]/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#00ff88]" />
              <span className="font-mono text-[#00ff88] text-xs tracking-wider">// SELECT CATEGORY</span>
            </div>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-4 p-4 border transition-all duration-300 group ${
                    activeCategory === cat.id
                      ? 'border-[#D4A853] bg-[#D4A853]/10'
                      : 'border-[#333] bg-[#111113] hover:border-[#D4A853]/30'
                  }`}
                >
                  <cat.icon
                    size={20}
                    className={`${
                      activeCategory === cat.id ? 'text-[#D4A853]' : 'text-[#8b8b8b] group-hover:text-[#D4A853]'
                    } transition-colors`}
                  />
                  <span
                    className={`font-military tracking-wider text-sm ${
                      activeCategory === cat.id ? 'text-[#D4A853]' : 'text-[#8b8b8b] group-hover:text-[#e5e5e5]'
                    } transition-colors`}
                  >
                    {cat.label}
                  </span>
                  <ChevronRight
                    size={16}
                    className={`ml-auto transition-all duration-300 ${
                      activeCategory === cat.id
                        ? 'text-[#D4A853] translate-x-1'
                        : 'text-[#333] group-hover:text-[#8b8b8b]'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <div className="hud-border p-8 bg-[#111113]/80 min-h-[400px]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#D4A853]" />
                  <span className="font-mono text-[#D4A853] text-xs tracking-wider">
                    // {categories.find((c) => c.id === activeCategory)?.label} LOADED
                  </span>
                </div>
                <span className="font-mono text-[#8b8b8b] text-xs">
                  COUNT: {categories.find((c) => c.id === activeCategory)?.data.length}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories
                  .find((c) => c.id === activeCategory)
                 ?.data.map((skill, index) => {
  // support both string entries and { name, level } objects
  const name = typeof skill === 'object' && skill !== null ? skill.name : skill;
  const level =
    typeof skill === 'object' && skill !== null && typeof skill.level !== 'undefined'
      ? skill.level
      : 70 + index * 5; // fallback to your old auto width

  return (
    <div
      key={index}
      className="group relative p-4 border border-[#333] bg-[#0a0a0b] hover:border-[#D4A853]/50 transition-all duration-300"
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4A853] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4A853] opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-[#00ff88] group-hover:bg-[#D4A853] transition-colors" />
        <span className="font-mono text-[#c5c5c5] group-hover:text-[#e5e5e5] text-sm transition-colors">
          {name}
        </span>
      </div>
      
      {/* Loading bar effect */}
      <div className="mt-3 h-1 bg-[#1a1a1d] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#D4A853] to-[#D4A853]/30 transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
})
}
              </div>

              {/* Terminal Footer */}
              <div className="mt-8 p-4 bg-[#0a0a0b] border border-[#333] font-mono text-xs">
                <span className="text-[#00ff88]">$</span>
                <span className="text-[#8b8b8b]"> system.loadSkills(</span>
                <span className="text-[#D4A853]">"{categories.find((c) => c.id === activeCategory)?.label}"</span>
                <span className="text-[#8b8b8b]">) </span>
                <span className="text-[#00ff88] animate-pulse">|</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
