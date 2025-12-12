import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Radio } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    // Reset after showing success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'EMAIL', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'PHONE', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'LOCATION', value: personalInfo.location },
  ];

  const socialLinks = [
    { icon: Github, label: 'GITHUB', href: personalInfo.github },
    { icon: Linkedin, label: 'LINKEDIN', href: personalInfo.linkedin },
  ];

  return (
    <section id="contact" className="relative py-32 bg-[#0a0a0b]">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#D4A853 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <Radio size={24} className="text-[#D4A853]" />
          <h2 className="font-military text-3xl md:text-4xl font-bold tracking-[0.1em] gradient-text">
            ESTABLISH CONTACT
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4A853]/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-[#00ff88] animate-pulse" />
              <span className="font-mono text-[#00ff88] text-xs tracking-wider">// COMMUNICATION CHANNELS</span>
            </div>

            <div className="space-y-4 mb-12">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-6 p-5 border border-[#333] bg-[#111113] hover:border-[#D4A853]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-[#D4A853]/50 bg-[#D4A853]/5">
                    <item.icon size={20} className="text-[#D4A853]" />
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-[#8b8b8b] text-xs">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block font-military text-[#e5e5e5] group-hover:text-[#D4A853] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-military text-[#e5e5e5]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#D4A853]" />
              <span className="font-mono text-[#D4A853] text-xs tracking-wider">// SOCIAL LINKS</span>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 border border-[#333] bg-[#111113] hover:border-[#D4A853] hover:bg-[#D4A853]/5 transition-all duration-300"
                >
                  <link.icon size={20} className="text-[#8b8b8b] group-hover:text-[#D4A853] transition-colors" />
                  <span className="font-military text-[#8b8b8b] group-hover:text-[#e5e5e5] tracking-wider transition-colors">
                    {link.label}
                  </span>
                  <ExternalLink size={14} className="text-[#333] group-hover:text-[#D4A853] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="hud-border p-8 bg-[#111113]/80">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#D4A853]" />
                  <span className="font-mono text-[#D4A853] text-xs tracking-wider">// TRANSMISSION FORM</span>
                </div>
                <span className="font-mono text-[#8b8b8b] text-xs">
                  STATUS: {submitted ? 'SENT' : 'READY'}
                </span>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-[#00ff88] flex items-center justify-center">
                    <Send size={32} className="text-[#00ff88]" />
                  </div>
                  <h4 className="font-military text-[#00ff88] text-xl mb-2">TRANSMISSION SUCCESSFUL</h4>
                  <p className="font-mono text-[#8b8b8b] text-sm">Message received. Expect response within 24hrs.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[#8b8b8b] text-xs mb-2 block">CALLSIGN</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-[#0a0a0b] border-[#333] text-[#e5e5e5] font-mono text-sm placeholder:text-[#555] focus:border-[#D4A853] focus:ring-[#D4A853]"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[#8b8b8b] text-xs mb-2 block">FREQUENCY</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-[#0a0a0b] border-[#333] text-[#e5e5e5] font-mono text-sm placeholder:text-[#555] focus:border-[#D4A853] focus:ring-[#D4A853]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[#8b8b8b] text-xs mb-2 block">SUBJECT</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Mission subject"
                      className="w-full bg-[#0a0a0b] border-[#333] text-[#e5e5e5] font-mono text-sm placeholder:text-[#555] focus:border-[#D4A853] focus:ring-[#D4A853]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[#8b8b8b] text-xs mb-2 block">MESSAGE</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Enter your transmission..."
                      className="w-full bg-[#0a0a0b] border-[#333] text-[#e5e5e5] font-mono text-sm placeholder:text-[#555] focus:border-[#D4A853] focus:ring-[#D4A853] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-military tracking-[0.15em] bg-[#D4A853] text-[#0a0a0b] py-6 hover:bg-[#f0e68c] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="w-4 h-4 border-2 border-[#0a0a0b]/30 border-t-[#0a0a0b] rounded-full animate-spin" />
                        TRANSMITTING...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Send size={18} />
                        SEND TRANSMISSION
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
