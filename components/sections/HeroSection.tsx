"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#08070A] pt-16 overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, #4C1D95 0%, transparent 70%)",
        }}
      />

      <Container>
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-start justify-center py-20 md:flex-row md:items-center md:gap-16 lg:gap-24">
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0 }}
            >
              <span className="inline-block rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#C4B5FD]">
                Formal wear boutique in Cusco, Peru
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.15 }}
              className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Mavelle
              <br />
              <span className="text-[#C4B5FD]">Fashion</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.3 }}
              className="mt-4 text-lg font-light tracking-wide text-[#A1A1AA] md:text-xl"
            >
              Formal elegance for every occasion.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.45 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-[#A1A1AA]"
            >
              Discover elegant formal wear for men and women, including blazers,
              dress pants, formal shoes, ties, shirts, and accessories designed
              for confidence, presence, and professional style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button variant="primary" href="#products">
                Explore Collection
              </Button>
              <Button variant="secondary" href="#location">
                Visit Our Store
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" as const, delay: 0.3 }}
            className="mt-12 flex-1 md:mt-0"
          >
            <div className="relative mx-auto max-w-sm md:max-w-full">
              <div className="rounded-3xl border border-white/10 bg-linear-to-br from-[#111018] to-[#0f0d16] p-10 md:p-12">
                <div className="space-y-5">
                  {[
                    { label: "Blazers", value: "Tailored for impact" },
                    { label: "Dress Pants", value: "Clean, confident fit" },
                    { label: "Formal Shoes", value: "Distinction at every step" },
                    { label: "Ties & Shirts", value: "The finishing touch" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut" as const,
                        delay: 0.6 + i * 0.1,
                      }}
                      className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-white">
                        {item.label}
                      </span>
                      <span className="text-xs text-[#7C3AED]">
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[#7C3AED]/20 bg-[#7C3AED]/5 px-6 py-4 text-center">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#C4B5FD]">
                    Cusco, Peru
                  </p>
                  <p
                    className="mt-1 text-lg font-semibold text-white"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    Avenida El Sol 450
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
