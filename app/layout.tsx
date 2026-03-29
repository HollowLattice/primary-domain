import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hollow Lattice — Software & AI Solutions",
  description:
    "Hollow Lattice builds intelligent software, AI-powered tools, and mobile applications.",
  openGraph: {
    title: "Hollow Lattice — Software & AI Solutions",
    description:
      "Hollow Lattice builds intelligent software, AI-powered tools, and mobile applications.",
    url: "https://hollowlattice.com",
    siteName: "Hollow Lattice",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
