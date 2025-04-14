
import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-blue-500/70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float delay-200"></div>
        <div className="absolute top-2/3 left-2/3 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-float delay-300"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glassmorphism p-8 rounded-2xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              We Scale <span className="text-gradient-primary">Brands</span> Digitally ✨
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
              Strategic digital solutions that transform your vision into impactful online experiences. 
              We blend creativity with data-driven strategies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
              <Button 
                className="neo-card text-primary hover:bg-white/90 text-lg px-8 py-6 hover-lift"
              >
                Let's Work Together
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-6 hover-lift"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-fade-in delay-500">
        <a href="#about" className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-sm mb-2 glassmorphism px-4 py-1 rounded-full">Scroll Down</span>
          <ArrowDown className="animate-bounce-slow" size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
