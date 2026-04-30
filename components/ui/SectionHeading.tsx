import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-[#C4B5FD]" : "text-[#7C3AED]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-[#08070A]"
        )}
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            light ? "text-[#A1A1AA]" : "text-[#A1A1AA]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
