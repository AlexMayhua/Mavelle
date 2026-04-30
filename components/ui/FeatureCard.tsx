import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {icon && (
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED]">
          {icon}
        </div>
      )}
      <h3
        className="text-lg font-semibold text-[#08070A] md:text-xl"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[#A1A1AA] md:text-base">
        {description}
      </p>
    </div>
  );
}
