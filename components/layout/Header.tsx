"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08070A]/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo variant="light" />

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
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

          <div className="hidden md:block">
            <Button variant="primary" href="#contact">
              Contact Us
            </Button>
          </div>

          <button
            className="flex items-center justify-center rounded-md p-2 text-[#A1A1AA] hover:text-white md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <RiCloseLine size={22} />
            ) : (
              <RiMenuLine size={22} />
            )}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#08070A] md:hidden">
          <Container>
            <nav
              className="flex flex-col gap-1 py-4"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-[#A1A1AA] transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10">
                <Button variant="primary" href="#contact" className="w-full">
                  Contact Us
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
