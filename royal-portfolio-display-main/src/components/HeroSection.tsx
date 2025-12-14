import profilePhoto from "@/assets/profile-photo.png";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { GoldDivider } from "./GoldDivider";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/20 via-background to-background" />

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 text-primary/30 text-2xl">✦</div>
      <div className="absolute top-8 right-8 text-primary/30 text-2xl">✦</div>
      <div className="absolute bottom-24 left-8 text-primary/30 text-2xl">✦</div>
      <div className="absolute bottom-24 right-8 text-primary/30 text-2xl">✦</div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-10">
        
        {/* Profile Photo — LOWERED */}
        <div
          className="opacity-0 animate-fade-up pt-10"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48">
            <div className="absolute inset-0 rounded-full border-2 border-primary/50" />
            <div className="absolute inset-2 rounded-full border border-primary/30" />
            <img
              src={profilePhoto}
              alt="Gellian Marie S. Rubillar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Label */}
        <p
          className="text-primary tracking-[0.4em] uppercase text-xs md:text-sm font-sans opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          About Me
        </p>

        {/* Name — ONE LINE + ONE COLOR */}
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <span className="text-foreground">Gellian Marie S. Rubillar</span>
        </h1>

        {/* Divider */}
        <div
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <GoldDivider withOrnament />
        </div>

        {/* Description */}
        <p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          Passionate individual dedicated to excellence and continuous growth.
          With a love for learning and a commitment to making a positive impact,
          I strive to bring creativity and dedication to everything I do.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        >
          <Button
            variant="royal-solid"
            size="lg"
            onClick={() => scrollToSection("certificates")}
          >
            View Certificates
          </Button>

          <Button
            variant="royal"
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("certificates")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors duration-300 opacity-0 animate-fade-up cursor-pointer"
        style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  );
};
