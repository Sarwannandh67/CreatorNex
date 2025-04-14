
import React from "react";
import { Trophy, BarChart, Search, PenTool, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: <BarChart className="h-10 w-10 mb-4 text-primary" />,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive traffic, engagement, and conversions across platforms."
    },
    {
      icon: <Search className="h-10 w-10 mb-4 text-primary" />,
      title: "SEO Optimization",
      description: "Boost visibility and rankings with data-driven search engine optimization strategies."
    },
    {
      icon: <PenTool className="h-10 w-10 mb-4 text-primary" />,
      title: "Web Design & Development",
      description: "Stunning, responsive websites that convert visitors into loyal customers."
    },
    {
      icon: <Trophy className="h-10 w-10 mb-4 text-primary" />,
      title: "Content Marketing",
      description: "Engaging content that tells your brand story and resonates with your audience."
    },
    {
      icon: <Globe className="h-10 w-10 mb-4 text-primary" />,
      title: "Social Media Management",
      description: "Build community and drive engagement with strategic social media campaigns."
    },
    {
      icon: <MessageSquare className="h-10 w-10 mb-4 text-primary" />,
      title: "Brand Strategy",
      description: "Develop a cohesive brand identity that communicates your unique value proposition."
    }
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/90 backdrop-blur-sm"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-primary">What We Do</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            We provide comprehensive digital solutions tailored to your business goals.
            Our services are designed to help you stand out in a crowded marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="neo-card p-8 rounded-xl hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-grow">
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              <a 
                href="#contact" 
                className="text-primary hover:text-accent transition-colors font-medium inline-flex items-center mt-2 group"
              >
                Learn More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="neo-card text-primary hover:bg-white hover:shadow-lg text-lg px-8 py-6 hover-lift">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
