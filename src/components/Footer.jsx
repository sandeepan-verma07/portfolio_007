import React from 'react';
import { Github, Linkedin, Mail, Phone, ChevronUp, Plane } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111113] border-t border-[#D4A853]/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 border-2 border-[#D4A853] rotate-45 flex items-center justify-center">
                  <span className="font-military text-[#D4A853] font-bold text-lg -rotate-45">SV</span>
                </div>
              </div>
              <div>
                <p className="font-military text-[#e5e5e5] font-semibold tracking-wider">
                  {personalInfo.name.toUpperCase()}
                </p>
                <p className="font-mono text-[#8b8b8b] text-xs">{personalInfo.title}</p>
              </div>
            </div>
            <p className="text-[#8b8b8b] text-sm leading-relaxed max-w-xs">
              Research-driven AI/ML specialist passionate about pushing the boundaries of artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-military text-[#D4A853] tracking-wider mb-6">NAVIGATION</h4>
            <nav className="grid grid-cols-2 gap-3">
              {[
                { name: 'MISSION', href: '#about' },
                { name: 'ARSENAL', href: '#skills' },
                { name: 'OPERATIONS', href: '#projects' },
                { name: 'FLEET', href: '#aircraft' },
                { name: 'CREDENTIALS', href: '#certifications' },
                { name: 'CONTACT', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-[#8b8b8b] text-xs hover:text-[#D4A853] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-military text-[#D4A853] tracking-wider mb-6">CONNECT</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-[#8b8b8b] hover:text-[#D4A853] transition-colors"
              >
                <Mail size={16} />
                <span className="font-mono text-xs">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-[#8b8b8b] hover:text-[#D4A853] transition-colors"
              >
                <Phone size={16} />
                <span className="font-mono text-xs">{personalInfo.phone}</span>
              </a>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#333] hover:border-[#D4A853] hover:text-[#D4A853] text-[#8b8b8b] transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#333] hover:border-[#D4A853] hover:text-[#D4A853] text-[#8b8b8b] transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Plane size={16} className="text-[#D4A853]" />
            <p className="font-mono text-[#8b8b8b] text-xs">
              &copy; {currentYear} {personalInfo.name.toUpperCase()}. ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="font-mono text-[#555] text-xs">BUILT WITH PASSION FOR AVIATION</span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center border border-[#333] hover:border-[#D4A853] hover:text-[#D4A853] text-[#8b8b8b] transition-all"
              aria-label="Scroll to top"
            >
              <ChevronUp size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* HUD Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4A853]/20 to-transparent" />
    </footer>
  );
};

export default Footer;
