import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float delay-200"></div>
        <div className="absolute top-2/3 left-2/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float delay-300"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              We Scale <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Brands</span> Digitally ✨
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
              Strategic digital solutions that transform your vision into impactful online experiences. 
              We blend creativity with data-driven strategies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
              <a 
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Let's Work Together
              </a>
              <a 
                href="#portfolio"
                onClick={(e) => scrollToSection(e, "#portfolio")}
                className="inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent/10 hover:text-accent-foreground h-11 px-8"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in delay-500">
        <a 
          href="#about" 
          onClick={(e) => scrollToSection(e, "#about")}
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm mb-2 bg-background/50 backdrop-blur-sm px-4 py-1 rounded-full border border-border">
            Scroll Down
          </span>
          <ArrowDown className="animate-bounce-slow" size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
