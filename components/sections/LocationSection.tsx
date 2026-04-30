import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { brand } from "@/data/brand";
import { RiMapPinLine, RiTimeLine } from "react-icons/ri";

export function LocationSection() {
  return (
    <section id="location" className="bg-[#F7F5FA] py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Location"
            title="Visit Mavelle Fashion in Cusco, Peru."
            description="Mavelle Fashion is located in Cusco, Peru, offering elegant formal wear for customers who want a professional and sophisticated style."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4 rounded-2xl border border-[#08070A]/10 bg-white p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#7C3AED]">
                  <RiMapPinLine size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7C3AED]">
                    Address
                  </p>
                  <p
                    className="mt-1 text-lg font-semibold text-[#08070A]"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {brand.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#08070A]/10 bg-white p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#7C3AED]">
                  <RiTimeLine size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7C3AED]">
                    Store Hours
                  </p>
                  <p className="mt-1 text-base text-[#08070A]">
                    {brand.schedule}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex h-full min-h-[220px] items-center justify-center rounded-2xl border border-[#08070A]/10 bg-white p-8">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10">
                  <RiMapPinLine size={24} className="text-[#7C3AED]" />
                </div>
                <p
                  className="text-2xl font-bold text-[#08070A] md:text-3xl"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Cusco, Peru
                </p>
                <p className="mt-2 text-sm text-[#A1A1AA]">
                  Historic city center
                </p>
                <div className="mt-4 inline-block rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 px-4 py-2">
                  <span className="text-xs font-medium text-[#7C3AED]">
                    Avenida El Sol 450
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
