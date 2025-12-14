import { GoldDivider } from "./GoldDivider";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-charcoal-light/30">
      <div className="container-luxury">
        <GoldDivider className="mb-12" />
        
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <h3 className="font-serif text-2xl text-foreground">
            Portfolio
          </h3>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {["Certificates", "Educational Tour", "Reflections", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-muted-foreground text-sm tracking-wider uppercase hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Ornament */}
          <div className="text-primary/40 text-xl tracking-[0.5em]">✦ ✦ ✦</div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} All rights reserved. Crafted with elegance.
          </p>
        </div>
      </div>
    </footer>
  );
};
