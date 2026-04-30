"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/data/products";
import {
  RiShirtLine,
  RiSuitcaseLine,
  RiWalkLine,
  RiScissorsLine,
  RiBriefcaseLine,
  RiStarLine,
} from "react-icons/ri";

const iconMap: Record<string, React.ReactNode> = {
  blazer: <RiSuitcaseLine size={18} />,
  pants: <RiScissorsLine size={18} />,
  shoes: <RiWalkLine size={18} />,
  tie: <RiBriefcaseLine size={18} />,
  shirt: <RiShirtLine size={18} />,
  accessories: <RiStarLine size={18} />,
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function ProductCategories() {
  return (
    <section id="products" className="bg-[#F7F5FA] py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our products"
            title="Everything you need for a complete formal look."
            description="From sharp blazers to refined accessories, Mavelle Fashion offers essential pieces for elegant and professional outfits."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <motion.div key={product.title} variants={cardVariant}>
              <ProductCard
                title={product.title}
                description={product.description}
                icon={product.icon ? iconMap[product.icon] : undefined}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
