
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
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            We provide comprehensive digital solutions tailored to your business goals.
            Our services are designed to help you stand out in a crowded marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover-scale glass flex flex-col"
            >
              <div className="flex-grow">
                {service.icon}
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              <a 
                href="#contact" 
                className="text-primary hover:underline font-medium inline-flex items-center mt-2"
              >
                Learn More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
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
          <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
