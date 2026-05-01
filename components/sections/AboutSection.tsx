import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  { label: "Formal Wear", sub: "For every occasion" },
  { label: "Lima, Peru", sub: "Our home city" },
  { label: "Men & Women", sub: "Complete collections" },
  { label: "Modern Elegance", sub: "Refined, timeless style" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="About us"
              title="A formal fashion boutique designed for modern professionals."
              align="left"
            />

            <div className="mt-6 space-y-4">
              <p className="text-base leading-relaxed text-[#A1A1AA] md:text-lg">
                Mavelle Fashion is a formal clothing company located in Cusco,
                Peru. We offer elegant and modern pieces for people who want to
                look professional, confident, and stylish in every important
                moment.
              </p>
              <p className="text-base leading-relaxed text-[#A1A1AA] md:text-lg">
                Our collection includes blazers, dress pants, formal shoes,
                ties, shirts, belts, and accessories carefully selected for
                business meetings, interviews, ceremonies, and special events.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#08070A]/10 bg-[#F7F5FA] p-5 md:p-6"
                >
                  <p
                    className="text-lg font-semibold text-[#08070A] md:text-xl"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-[#A1A1AA]">{item.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
