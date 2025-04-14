import React from "react";
import { Trophy, BarChart, Search, PenTool, Globe, MessageSquare, Bot, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="h-10 w-10 mb-4 text-primary" />,
      title: "SEO",
      description: "Search Engine Optimization-Improving your website's visibility in search engine results."
    },
    {
      icon: <Globe className="h-10 w-10 mb-4 text-primary" />,
      title: "SMM",
      description: "Social Media Marketing-Building a strong online presence through social media platforms."
    },
    {
      icon: <PenTool className="h-10 w-10 mb-4 text-primary" />,
      title: "Web Design & Development",
      description: "Stunning, responsive websites that convert visitors into loyal customers."
    },
    {
      icon: <Trophy className="h-10 w-10 mb-4 text-primary" />,
      title: "Brand Strategy",
      description: "Developing a unique brand identity that sets you apart from competitors."
    },
    {
      icon: <BarChart className="h-10 w-10 mb-4 text-primary" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence."
    },
    {
      icon: <MessageSquare className="h-10 w-10 mb-4 text-primary" />,
      title: "Content Marketing",
      description: "Creating and distributing valuable and engaging content to attract and convert customers."
    },
    {
      icon: <DollarSign className="h-10 w-10 mb-4 text-primary" />,
      title: "Affiliate Marketing",
      description: "Earn commissions by promoting products or services through your website or social media channels."
    },
    {
      icon: <Bot className="h-10 w-10 mb-4 text-primary" />,
      title: "AI Automation",
      description: "Automating repetitive tasks to save time and increase efficiency."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-background"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What We Do
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            We provide comprehensive digital solutions tailored to your business goals.
            Our services are designed to help you stand out in a crowded marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-xl hover:bg-card/80 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-grow">
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
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
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
