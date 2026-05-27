import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veridian Protocol | DRHM — UAE's Yield-Bearing Synthetic Dirham",
  description:
    "Veridian Protocol is building DRHM — the UAE's first yield-bearing synthetic dirham. AED-pegged, Shariah-certified, CBUAE-aligned. 8–14% APY for retail savers, SMEs, and institutions.",
  keywords: [
    "DRHM", "synthetic dirham", "UAE stablecoin", "yield-bearing stablecoin",
    "AED stablecoin", "Veridian Protocol", "UAE DeFi", "CBUAE PTSR",
    "Islamic finance crypto", "UAE crypto", "dirham stablecoin"
  ],
  openGraph: {
    title: "Veridian Protocol | DRHM Synthetic Dirham",
    description: "UAE's first yield-bearing synthetic dirham — 8–14% APY, Shariah-certified, CBUAE-aligned.",
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
