
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Elite Fashion E-Commerce",
      category: "web-design",
      image: "https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?q=80&w=2370&auto=format&fit=crop",
      description: "Complete website redesign with 200% increase in conversion rate",
      tags: ["UI/UX", "E-Commerce", "Web Development"]
    },
    {
      id: 2,
      title: "GreenTech SEO Campaign",
      category: "seo",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2340&auto=format&fit=crop",
      description: "Organic traffic increased by 150% in 3 months",
      tags: ["SEO", "Content Strategy", "Analytics"]
    },
    {
      id: 3,
      title: "LuxeCraft Brand Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2342&auto=format&fit=crop",
      description: "Complete brand overhaul with 35% increase in brand recognition",
      tags: ["Branding", "Design", "Strategy"]
    },
    {
      id: 4,
      title: "TechVision Social Campaign",
      category: "social-media",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2370&auto=format&fit=crop",
      description: "600% increase in engagement across platforms",
      tags: ["Social Media", "Content Creation", "Analytics"]
    },
    {
      id: 5,
      title: "HealthPlus Mobile App",
      category: "web-design",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2370&auto=format&fit=crop",
      description: "Award-winning health tracking application with 50k+ downloads",
      tags: ["Mobile Design", "UX Research", "Development"]
    },
    {
      id: 6,
      title: "Culinary Masters Campaign",
      category: "social-media",
      image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2370&auto=format&fit=crop",
      description: "Viral campaign reaching 2M+ people with 15% conversion rate",
      tags: ["Social Media", "Advertising", "Video Production"]
    }
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "web-design", label: "Web Design" },
    { id: "seo", label: "SEO" },
    { id: "branding", label: "Branding" },
    { id: "social-media", label: "Social Media" }
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Browse our latest projects and see how we've helped brands 
            achieve their digital goals with strategic solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover-scale"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="#"
                    className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
