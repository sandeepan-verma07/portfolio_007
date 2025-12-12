import React, { useState } from 'react';
import { Plane, Gauge, Mountain, Flame, ChevronLeft, ChevronRight, Crosshair } from 'lucide-react';
import { aircraft } from '../data/mock';

const AircraftShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isFading, setIsFading] = useState(false); // NEW: controls background fade


  const currentAircraft = aircraft[activeIndex];

 // Small helper to fade out the background, swap image, then fade in
const changeIndex = (newIndex) => {
  if (newIndex === activeIndex || isFading) return; // guard
  setIsFading(true);

  const FADE_MS = 400; // fade-out duration (ms) — change this if you want faster/slower

  // after fade-out, switch image and quickly fade in
  setTimeout(() => {
    setActiveIndex(newIndex);

    // tiny pause to ensure new image is painted, then fade back in
    setTimeout(() => {
      setIsFading(false);
    }, 20);
  }, FADE_MS);
};

const handlePrev = () => {
  changeIndex(activeIndex === 0 ? aircraft.length - 1 : activeIndex - 1);
};

const handleNext = () => {
  changeIndex(activeIndex === aircraft.length - 1 ? 0 : activeIndex + 1);
};


  const specIcons = {
    maxSpeed: Gauge,
    range: Plane,
    ceiling: Mountain,
    thrust: Flame,
  };

  const specLabels = {
    maxSpeed: 'MAX SPEED',
    range: 'RANGE',
    ceiling: 'CEILING',
    thrust: 'THRUST',
  };

  return (
    <section id="aircraft" className="relative py-32 bg-[#0a0a0b] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
  className="absolute inset-0"
  style={{
    backgroundImage: `url(${currentAircraft.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: isFading ? 0 : 0.6,               // toggle opacity during fade
    transition: 'opacity 400ms ease',         // match FADE_MS above
    filter: 'blur(2px)',
  }}
/>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-transparent to-[#0a0a0b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-transparent to-[#0a0a0b]" />
      </div>

      {/* HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner brackets */}
        <div className="absolute top-32 left-6 w-20 h-20 border-t-2 border-l-2 border-[#D4A853]/30" />
        <div className="absolute top-32 right-6 w-20 h-20 border-t-2 border-r-2 border-[#D4A853]/30" />
        <div className="absolute bottom-32 left-6 w-20 h-20 border-b-2 border-l-2 border-[#D4A853]/30" />
        <div className="absolute bottom-32 right-6 w-20 h-20 border-b-2 border-r-2 border-[#D4A853]/30" />

        {/* Targeting lines */}
        <div className="absolute top-1/2 left-0 w-32 h-[1px] bg-gradient-to-r from-[#D4A853]/50 to-transparent" />
        <div className="absolute top-1/2 right-0 w-32 h-[1px] bg-gradient-to-l from-[#D4A853]/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <Plane size={24} className="text-[#D4A853]" />
          <h2 className="font-military text-3xl md:text-4xl font-bold tracking-[0.1em] gradient-text">
            IAF FLEET
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4A853]/50 to-transparent" />
          <div className="flex items-center gap-4">
            <span className="font-mono text-[#8b8b8b] text-xs">
              {String(activeIndex + 1).padStart(2, '0')} / {String(aircraft.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-[#333] flex items-center justify-center hover:border-[#D4A853] hover:text-[#D4A853] text-[#8b8b8b] transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-[#333] flex items-center justify-center hover:border-[#D4A853] hover:text-[#D4A853] text-[#8b8b8b] transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Aircraft Image */}
          <div
            className="relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* HUD Frame */}
              <div className="absolute inset-0 border-2 border-[#D4A853]/20 z-10 pointer-events-none">
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4A853]" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4A853]" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D4A853]" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4A853]" />
              </div>

              {/* Crosshair */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none transition-all duration-300 ${
                  isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              >
                <Crosshair size={60} className="text-[#D4A853] target-lock" />
              </div>

              <img
                src={currentAircraft.image}
                alt={currentAircraft.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
            </div>

            {/* Aircraft Name Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#D4A853]" />
                <span className="font-mono text-[#D4A853] text-xs tracking-wider">TARGET ACQUIRED</span>
              </div>
            </div>
          </div>

          {/* Aircraft Info */}
          <div>
            {/* Designation */}
            <div className="mb-6">
              <span className="font-mono text-[#8b8b8b] text-xs tracking-wider">DESIGNATION</span>
              <h3 className="font-military text-4xl md:text-5xl text-[#e5e5e5] mt-2">
                {currentAircraft.name}
              </h3>
            </div>

            {/* Codename & Role */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 border border-[#333] bg-[#111113]">
                <span className="font-mono text-[#8b8b8b] text-xs">CODENAME</span>
                <p className="font-military text-[#D4A853] text-lg mt-1">{currentAircraft.codename}</p>
              </div>
              <div className="p-4 border border-[#333] bg-[#111113]">
                <span className="font-mono text-[#8b8b8b] text-xs">ROLE</span>
                <p className="font-military text-[#e5e5e5] text-lg mt-1">{currentAircraft.role}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#8b8b8b] leading-relaxed mb-8">
              {currentAircraft.description}
            </p>

            {/* Specifications */}
            <div className="hud-border p-6 bg-[#111113]/80">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-[#00ff88] animate-pulse" />
                <span className="font-mono text-[#00ff88] text-xs tracking-wider">// SPECIFICATIONS</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentAircraft.specs).map(([key, value]) => {
                  const Icon = specIcons[key];
                  return (
                    <div key={key} className="flex items-center gap-4 p-3 bg-[#0a0a0b] border border-[#333]">
                      {Icon && <Icon size={20} className="text-[#D4A853]" />}
                      <div>
                        <span className="font-mono text-[#8b8b8b] text-xs">{specLabels[key]}</span>
                        <p className="font-military text-[#e5e5e5] font-semibold">{value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Aircraft Selector */}
        <div className="flex justify-center gap-4 mt-12">
          {aircraft.map((ac, index) => (
            <button
              key={ac.id}
             onClick={() => changeIndex(index)}

              className={`px-6 py-3 border font-military tracking-wider text-sm transition-all duration-300 ${
                activeIndex === index
                  ? 'border-[#D4A853] bg-[#D4A853]/10 text-[#D4A853]'
                  : 'border-[#333] text-[#8b8b8b] hover:border-[#D4A853]/30 hover:text-[#e5e5e5]'
              }`}
            >
              {ac.name.split(' ').pop()}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AircraftShowcase;
