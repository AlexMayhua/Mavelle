import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function ProductCard({
  title,
  description,
  icon,
  className,
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "h-full group rounded-2xl border border-[#08070A]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/40 hover:shadow-md md:p-8",
        className
      )}
    >
      {icon && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#7C3AED]/20 bg-[#F7F5FA] text-[#7C3AED]">
          {icon}
        </div>
      )}
      <h3
        className="mb-2 text-lg font-semibold text-[#08070A] md:text-xl"
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
