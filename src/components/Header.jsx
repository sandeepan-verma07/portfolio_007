import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'MISSION', href: '#about' },
    { name: 'ARSENAL', href: '#skills' },
    { name: 'OPERATIONS', href: '#projects' },
    { name: 'FLEET', href: '#aircraft' },
    { name: 'INTEL', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0b]/95 backdrop-blur-md border-b border-[#D4A853]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Callsign */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 border-2 border-[#D4A853] rotate-45 flex items-center justify-center">
                <span className="font-military text-[#D4A853] font-bold text-lg -rotate-45">SV</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00ff88] rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <p className="font-military text-xs text-[#8b8b8b] tracking-[0.2em]">CALLSIGN</p>
              <p className="font-military text-[#D4A853] font-semibold tracking-wider">PHOENIX</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="font-military text-sm tracking-[0.15em] text-[#8b8b8b] hover:text-[#D4A853] px-4 py-2 relative group transition-colors duration-300"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#D4A853] group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#333] hover:border-[#D4A853] hover:text-[#D4A853] text-[#8b8b8b] transition-all duration-300"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#333] hover:border-[#D4A853] hover:text-[#D4A853] text-[#8b8b8b] transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
            </div>
            <button
              onClick={() => scrollToSection('#contact')}
              className="font-military text-sm tracking-wider bg-[#D4A853] text-[#0a0a0b] px-5 py-2 hover:bg-[#f0e68c] transition-colors duration-300 flex items-center gap-2 group"
            >
              ENGAGE
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center border border-[#333] text-[#D4A853]"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0b]/98 backdrop-blur-md border-b border-[#D4A853]/20 transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="font-military text-left text-[#8b8b8b] hover:text-[#D4A853] py-3 border-b border-[#222] tracking-[0.15em] transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="flex items-center gap-3 pt-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-[#333] text-[#8b8b8b]"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-[#333] text-[#8b8b8b]"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 flex items-center justify-center border border-[#333] text-[#8b8b8b]"
            >
              <Mail size={18} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
