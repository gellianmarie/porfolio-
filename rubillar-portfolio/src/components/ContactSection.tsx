import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gellianmarie.rubillar@hcdc.edu.ph",
    href: "mailto:gellianmarie.rubillar@hcdc.edu.ph",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 993 672 3628",
    href: "tel:+639936723628",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Davao City, Philippines",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. I'll respond shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-luxury">
        <SectionHeading
          label="Connect"
          title="Get in Touch"
          subtitle="I would be delighted to hear from you. Let's create something extraordinary together."
        />

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="pt-8 border-t border-border">
              <p className="font-display text-xl italic text-muted-foreground">
                "The art of communication lies in the elegance of connection."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border focus:border-primary/50 h-12"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border focus:border-primary/50 h-12"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-border focus:border-primary/50 min-h-[150px] resize-none"
                  placeholder="Share your thoughts..."
                  required
                />
              </div>
            </div>

            <Button variant="royal-solid" size="lg" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
