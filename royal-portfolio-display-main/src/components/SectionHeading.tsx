import { cn } from "@/lib/utils";
import { GoldDivider } from "./GoldDivider";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ 
  label, 
  title, 
  subtitle, 
  className,
  align = "center" 
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "space-y-4 mb-16",
      align === "center" && "text-center",
      className
    )}>
      {label && (
        <p className="text-primary tracking-[0.3em] uppercase text-xs font-sans">
          {label}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <GoldDivider withOrnament className="mt-8" />
    </div>
  );
};
