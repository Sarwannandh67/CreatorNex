
import React from "react";
import { Check, Users, Trophy, Lightbulb, Target, Clock } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Creativity",
      description: "Innovative solutions that break through the noise"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "ROI-Focused",
      description: "Measurable results that impact your bottom line"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-First",
      description: "Your success is our success, always"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timely Delivery",
      description: "We respect deadlines and your time"
    }
  ];

  const whyChooseUs = [
    "Experienced team of industry experts",
    "Data-driven approach to digital marketing",
    "Transparent reporting and communication",
    "Tailored strategies for your specific needs",
    "Continuous optimization and improvement"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            We're a team of digital strategists, designers, and developers passionate about 
            transforming businesses through innovative digital solutions. Our mission is to 
            elevate brands with strategies that drive real growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-700">
              To empower businesses with digital solutions that create lasting impact
              and drive measurable growth in an ever-evolving digital landscape.
            </p>
            
            <h3 className="text-2xl font-bold">Why Choose Us</h3>
            <ul className="space-y-3">
              {whyChooseUs.map((point, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover-scale">
                  <div className="mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
