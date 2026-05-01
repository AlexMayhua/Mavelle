import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mavelle Fashion | Elegant Formal Wear in Lima",
  description:
    "Mavelle Fashion is a formal clothing boutique in Lima, Peru, offering blazers, dress pants, formal shoes, ties, shirts, and elegant accessories for modern professionals.",
  openGraph: {
    title: "Mavelle Fashion | Elegant Formal Wear in Lima",
    description: "Formal clothing boutique in Lima, Peru.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#08070A]">{children}</body>
    </html>
  );
}
