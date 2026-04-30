import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]";

  const variants = {
    primary: "bg-[#7C3AED] text-white hover:bg-[#4C1D95]",
    secondary:
      "border border-white/20 text-white hover:border-[#7C3AED] hover:text-[#C4B5FD]",
    dark: "border border-[#08070A]/20 text-[#08070A] hover:border-[#7C3AED] hover:text-[#7C3AED]",
  };

  if (href) {
    return (
      <a href={href} className={cn(base, variants[variant], className)}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  );
}
