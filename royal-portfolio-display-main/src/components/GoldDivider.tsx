import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
  withOrnament?: boolean;
}

export const GoldDivider = ({ className, withOrnament = false }: GoldDividerProps) => {
  if (withOrnament) {
    return (
      <div className={cn("flex items-center justify-center gap-6", className)}>
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
        <span className="text-primary text-lg tracking-[0.3em]">✦</span>
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
      </div>
    );
  }

  return (
    <div className={cn("h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent", className)} />
  );
};
