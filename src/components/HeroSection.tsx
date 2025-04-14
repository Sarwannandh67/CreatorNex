
import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute top-2/3 left-2/3 w-72 h-72 rounded-full bg-accent/20 blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            We Scale <span className="text-gradient bg-white">Brands</span> Digitally ✨
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Strategic digital solutions that transform your vision into impactful online experiences. 
            We blend creativity with data-driven strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Let's Work Together
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
        <a href="#about" className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce-slow" size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
