import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";
import { features } from "@/data/features";
import {
  RiSparklingLine,
  RiMedalLine,
  RiBriefcase4Line,
  RiUserStarLine,
} from "react-icons/ri";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <RiSparklingLine size={20} />,
  badge: <RiMedalLine size={20} />,
  briefcase: <RiBriefcase4Line size={20} />,
  star: <RiUserStarLine size={20} />,
};

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Style, confidence, and elegance in every detail."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.1}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon ? iconMap[feature.icon] : undefined}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
