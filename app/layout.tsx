import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veridian Protocol | DRHM — Gulf's Yield-Bearing Digital Currency",
  description:
    "Veridian Protocol is building DRHM — the Gulf's first yield-bearing digital currency protocol. Locally-pegged, Shariah-certified, and regionally compliant. 8–14% APY for retail savers, SMEs, and institutions.",
  keywords: [
    "DRHM", "Gulf digital currency", "Gulf stablecoin", "yield-bearing stablecoin",
    "Gulf DeFi", "Veridian Protocol", "Middle East DeFi", "regional PTSR",
    "Islamic finance crypto", "Gulf crypto", "digital currency protocol"
  ],
  openGraph: {
    title: "Veridian Protocol | DRHM Digital Currency",
    description: "Gulf's first yield-bearing digital currency — 8–14% APY, Shariah-certified, regionally compliant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
