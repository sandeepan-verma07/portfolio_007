import React, { useEffect, useState } from 'react';
import { ChevronDown, Target, Radar, Plane } from 'lucide-react';
import { personalInfo, heroImages } from '../data/mock';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Background Image */}
      <div
        className="absolute inset-0 hero-bg-wrapper"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) scale(1.08)`,
        }}
      >
        <img
          src={heroImages.main}
          alt="Fighter Jet"
          className={`w-full h-full object-cover hero-bg-img ${loaded ? 'is-loaded' : ''}`}
          style={{
            opacity: 0.72, // Tweak this to make whole image darker (lower = darker)
            filter: 'brightness(0.88) contrast(0.98) saturate(0.95)', // Tweak brightness() too
            willChange: 'transform, opacity, filter',
          }}
        />

        {/* Top->center soft vignette */}
        <div className={`absolute inset-0 hero-overlay-top ${loaded ? 'is-loaded' : ''}`} />

        {/* Center->bottom soft vignette */}
        <div className={`absolute inset-0 hero-overlay-bottom ${loaded ? 'is-loaded' : ''}`} />
      </div>



      {/* HUD Overlay Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scan Line */}
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent scan-line" />
        
        {/* Corner HUD Elements - Hidden on mobile */}
        <div className="hidden md:block absolute top-24 left-6 text-[#00ff88]/60 font-mono text-xs">
          <div className="hud-flicker">
            <p>SYS: ONLINE</p>
            <p>LAT: 20.2961°N</p>
            <p>LON: 85.8245°E</p>
          </div>
        </div>

        <div className="hidden md:block absolute top-24 right-6 text-[#D4A853]/60 font-mono text-xs text-right">
          <div className="hud-flicker">
            <p>RADAR: ACTIVE</p>
            <p>TGT: LOCKED</p>
            <p>RNG: ∞</p>
          </div>
        </div>

{/* Radar Circle (centered, two rings, detection dot + slow sweep) */}
<div
  className={`absolute bottom-24 left-6 w-24 h-24 hidden lg:flex items-center justify-center radar-container ${loaded ? 'opacity-100' : 'opacity-0'}`}
  aria-hidden
>
  {/* outer ring + inner ring are drawn by CSS on .radar-inner pseudo elements */}
  <div className="relative w-16 h-16 flex items-center justify-center radar-inner">
    {/* sweep arm that rotates around center */}
    <div className="radar-sweep" />

    {/* center dot (small) */}
    {/* <div className="radar-dot" /> */}

    {/* detection dot on the ring (move with left/top if needed) */}
    <div className="radar-detection" />
  </div>
</div>





        {/* Target Reticle */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block">
          <div className="w-20 h-20 border border-[#D4A853]/30 rotate-45 target-lock" />
          <div className="absolute inset-2 border border-[#D4A853]/20 rotate-45" />
          <div className="absolute inset-4 border border-[#D4A853]/10 rotate-45" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status Badges */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 border border-[#00ff88]/30 bg-[#00ff88]/5">
            <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
            <span className="font-mono text-[#00ff88] text-xs tracking-wider">SYSTEMS ACTIVE</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border border-[#D4A853]/30 bg-[#D4A853]/5">
            <Target size={14} className="text-[#D4A853]" />
            <span className="font-mono text-[#D4A853] text-xs tracking-wider">AI RESEARCHER</span>
          </div>
        </div>

        {/* Callsign */}
        <div
          className={`mb-4 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="font-military text-[#8b8b8b] text-sm tracking-[0.3em]"></span>
        </div>

        {/* Name */}
        <h1
          className={`font-military text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="gradient-text">{personalInfo.name.toUpperCase()}</span>
        </h1>

        {/* Title */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-900 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4A853]" />
          <h2 className="font-military text-xl md:text-2xl text-[#e5e5e5] tracking-[0.2em]">
            {personalInfo.title.toUpperCase()}
          </h2>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4A853]" />
        </div>

        {/* Tagline */}
        <p
          className={`max-w-2xl mx-auto text-[#8b8b8b] text-lg mb-12 leading-relaxed transition-all duration-1000 delay-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-1100 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden font-military text-sm tracking-[0.15em] bg-[#D4A853] text-[#0a0a0b] px-8 py-4 hover:bg-[#f0e68c] transition-colors duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Radar size={18} />
              VIEW OPERATIONS
            </span>
          </button>
          <button
            onClick={() => document.querySelector('#aircraft')?.scrollIntoView({ behavior: 'smooth' })}
            className="group font-military text-sm tracking-[0.15em] border border-[#D4A853]/50 text-[#D4A853] px-8 py-4 hover:bg-[#D4A853]/10 transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              <Plane size={18} />
              EXPLORE FLEET
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[#8b8b8b] text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={20} className="text-[#D4A853] animate-bounce" />
      </div>

      {/* Bottom HUD Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent" />
    </section>
  );
};

export default Hero;
