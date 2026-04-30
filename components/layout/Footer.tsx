import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { brand } from "@/data/brand";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[#08070A] border-t border-white/10">
      <Container>
        <div className="py-14 md:py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Logo variant="light" />
              <p className="mt-4 text-sm leading-relaxed text-[#A1A1AA]">
                {brand.tagline}
              </p>
              <p className="mt-2 text-sm text-[#A1A1AA]">{brand.location}</p>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#A1A1AA]">
                Navigation
              </p>
              <nav
                className="flex flex-col gap-2"
                aria-label="Footer navigation"
              >
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#A1A1AA]">
                Contact
              </p>
              <div className="flex flex-col gap-2 text-sm text-[#A1A1AA]">
                <span>{brand.email}</span>
                <span>{brand.phone}</span>
                <span>{brand.instagram}</span>
                <span>{brand.address}</span>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-[#A1A1AA]">
            © 2026 Mavelle Fashion. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
