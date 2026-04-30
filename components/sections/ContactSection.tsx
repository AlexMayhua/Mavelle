import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { brand } from "@/data/brand";
import { RiMailLine, RiPhoneLine, RiInstagramLine, RiMapPinLine } from "react-icons/ri";

const contactItems = [
  {
    icon: <RiMailLine size={18} />,
    label: "Email",
    value: brand.email,
    href: `mailto:${brand.email}`,
  },
  {
    icon: <RiPhoneLine size={18} />,
    label: "Phone",
    value: brand.phone,
    href: `tel:${brand.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <RiInstagramLine size={18} />,
    label: "Instagram",
    value: brand.instagram,
    href: "#",
  },
  {
    icon: <RiMapPinLine size={18} />,
    label: "Address",
    value: brand.address,
    href: "#location",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#08070A] py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Contact us"
              title="Find your next formal outfit with us."
              description="Contact Mavelle Fashion or visit our store to discover blazers, formal shoes, ties, dress pants, shirts, and accessories for your next important occasion."
              light
              align="left"
            />
            <div className="mt-8">
              <Button variant="primary" href={`mailto:${brand.email}`}>
                Send Us an Email
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-[#111018] p-5 transition-all duration-300 hover:border-[#7C3AED]/40"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A1A1AA]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
