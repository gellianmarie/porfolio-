import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Certificates", href: "#certificates" },
  { label: "Tour", href: "#educational-tour" },
  { label: "Reflections", href: "#reflections" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-border" 
          : "bg-transparent"
      )}
    >
      <div className="container-luxury">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="font-serif text-xl text-foreground hover:text-primary transition-colors duration-300">
            Portfolio
          </a>

          {/* Navigation links */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu indicator */}
          <div className="md:hidden text-primary">✦</div>
        </nav>
      </div>
    </header>
  );
};
