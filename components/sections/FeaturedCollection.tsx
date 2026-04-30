import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { collections } from "@/data/collections";

export function FeaturedCollection() {
  return (
    <section id="collection" className="bg-[#08070A] py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Featured collection"
            title="Formal outfits made to leave a strong impression."
            description="Our featured collection brings together timeless pieces for professional life, elegant events, and occasions where presence matters."
            light
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full group rounded-2xl border border-white/10 bg-[#111018] p-8 transition-all duration-300 hover:border-[#7C3AED]/40 hover:-translate-y-1">
                <span className="inline-block rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-[#C4B5FD]">
                  {item.tag}
                </span>
                <h3
                  className="mt-5 text-xl font-bold text-white md:text-2xl"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA] md:text-base">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
