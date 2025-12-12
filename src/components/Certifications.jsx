import React from 'react';
import { Award, BadgeCheck, ExternalLink } from 'lucide-react';
import { certifications, education } from '../data/mock';

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-32 bg-[#111113]">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <Award size={24} className="text-[#D4A853]" />
          <h2 className="font-military text-3xl md:text-4xl font-bold tracking-[0.1em] gradient-text">
            CREDENTIALS & TRAINING
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4A853]/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-[#D4A853]" />
              <span className="font-mono text-[#D4A853] text-xs tracking-wider">// CERTIFICATIONS</span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="group hud-border p-6 bg-[#0a0a0b]/80 hover:bg-[#0a0a0b] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* clickable certificate icon - opens cert.link in a new tab */}
<a
  href={cert.link || '#'}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Open ${cert.title} certificate`}
  className="inline-block rounded focus:outline-none focus:ring-2 focus:ring-[#D4A853]/30"
>
  <div className="w-12 h-12 flex items-center justify-center border border-[#D4A853] bg-[#D4A853]/10 transform transition-transform duration-150 hover:-translate-y-1">
    <BadgeCheck size={24} className="text-[#D4A853]" />
  </div>
</a>

                    <div className="flex-1">
                      <h4 className="font-military text-[#e5e5e5] text-lg group-hover:text-[#D4A853] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-[#8b8b8b] text-sm mt-1">{cert.subtitle}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="font-mono text-xs text-[#8b8b8b]">{cert.issuer}</span>
                        <span className="w-1 h-1 bg-[#8b8b8b] rounded-full" />
                        <span className="flex items-center gap-1 font-mono text-xs text-[#00ff88]">
                          <span className="w-2 h-2 bg-[#00ff88] rounded-full" />
                          VERIFIED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-[#00ff88]" />
              <span className="font-mono text-[#00ff88] text-xs tracking-wider">// EDUCATION</span>
            </div>

            {/* University */}
            <div className="hud-border p-6 bg-[#0a0a0b]/80 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[#8b8b8b] text-xs">PRIMARY TRAINING</span>
                <span className="px-3 py-1 border border-[#00ff88]/30 bg-[#00ff88]/5 font-mono text-[#00ff88] text-xs">
                  {education.duration}
                </span>
              </div>
              
              <h4 className="font-military text-[#e5e5e5] text-xl mb-2">
                {education.degree}
              </h4>
              <p className="text-[#8b8b8b] mb-4">{education.university}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-[#111113] border border-[#333]">
                  <span className="font-mono text-[#8b8b8b] text-xs">CGPA</span>
                  <p className="font-military text-[#D4A853] text-2xl font-bold mt-1">{education.cgpa}</p>
                </div>
                <div className="p-3 bg-[#111113] border border-[#333]">
                  <span className="font-mono text-[#8b8b8b] text-xs">GRADUATION</span>
                  <p className="font-military text-[#e5e5e5] text-lg mt-1">{education.expectedGraduation}</p>
                </div>
              </div>
            </div>

            {/* School */}
            <div className="p-6 border border-[#333] bg-[#0a0a0b]/50">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[#8b8b8b] text-xs">SECONDARY TRAINING</span>
                <span className="font-mono text-[#8b8b8b] text-xs">{education.school.year}</span>
              </div>
              <h4 className="font-military text-[#c5c5c5] text-lg">{education.school.name}</h4>
              <p className="text-[#8b8b8b] text-sm mt-2">{education.school.details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
