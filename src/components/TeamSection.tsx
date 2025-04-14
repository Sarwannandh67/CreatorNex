import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "S. Lohith",
      role: "CEO & Co-Founder",
      image: "/images/lohith.jpg",
      bio: "10+ years of experience in digital marketing and business strategy",
      social: {
        twitter: "https://twitter.com/lohithsalla",
        linkedin: "https://linkedin.com/in/salla-lohith",
        instagram: "https://instagram.com/itzz.lokiii"
      }
    },
    {
      name: "Sarwan Nandh",
      role: "Co-Founder",
      image: "/images/sarwan.jpg",
      bio: "Award-winning designer with a passion for creating beautiful user experiences",
      social: {
        twitter: "https://twitter.com/Sarwannandh_67",
        linkedin: "https://linkedin.com/in/sarwannandh",
        github: "https://github.com/Sarwannandh67",
        instagram: "https://instagram.com/sarwannandh"
      }
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            We're a passionate duo working together to create amazing digital experiences.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group hover-lift glass-card p-8 rounded-xl text-center"
              >
                <div className="mb-6 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 mx-auto rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        member.name
                      )}&background=6d28d9&color=fff&size=200`;
                    }}
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-lg mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-6">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 