import React from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://forms.gle/co9eUBMQ9bSPvX7z7', '_blank');
  };

  return (
    <div className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-accent/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get in Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Ready to elevate your creative journey? Let's discuss how CreatorNex can empower your vision and bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div className="ml-4">
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:creatornex.main@gamil.com" className="text-muted-foreground hover:text-primary transition-colors">
                      creatornex.main@gamil.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div className="ml-4">
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 9704736991
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div className="ml-4">
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      CreatorNex Hub<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/creatornex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background rounded-lg border border-border hover:bg-accent/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="https://x.com/creatornex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background rounded-lg border border-border hover:bg-accent/10 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/creatornex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background rounded-lg border border-border hover:bg-accent/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
