import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className }: LogoProps) {
  const isLight = variant === "light";

  return (
    <a
      href="#home"
      className={cn("flex items-center gap-2 group", className)}
      aria-label="Mavelle Fashion — home"
    >
      <div
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-sm border text-sm font-bold tracking-wider transition-colors",
          isLight
            ? "border-white/30 text-white group-hover:border-[#C4B5FD] group-hover:text-[#C4B5FD]"
            : "border-[#08070A]/20 text-[#08070A] group-hover:border-[#7C3AED] group-hover:text-[#7C3AED]"
        )}
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        MF
      </div>
      <div className="leading-none">
        <span
          className={cn(
            "block text-sm font-semibold tracking-widest uppercase",
            isLight ? "text-white" : "text-[#08070A]"
          )}
          style={{ fontFamily: "var(--font-inter), Arial, sans-serif" }}
        >
          Mavelle Fashion
        </span>
      </div>
    </a>
  );
}
