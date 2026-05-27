import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MarketSection from "@/components/MarketSection";
import ProductSection from "@/components/ProductSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechnologySection from "@/components/TechnologySection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MarketSection />
        <ProductSection />
        <FeaturesSection />
        <TechnologySection />
        <RoadmapSection />

        {/* Final CTA Section */}
        <section style={{ padding: "8rem 0", position: "relative", overflow: "hidden" }}>
          <div className="blob-gold" style={{ position: "absolute", width: "600px", height: "600px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none", opacity: 0.4 }} />
          <div className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

          <div style={{ position: "relative", zIndex: 10, maxWidth: "700px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
            <span className="badge-gold" style={{ marginBottom: "1.5rem", display: "inline-block" }}>Private Access</span>
            <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              Be Part of the UAE&apos;s<br />
              <span className="text-gold-gradient">Financial Revolution</span>
            </h2>
            <p style={{ color: "#8b9bb8", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: "2.75rem", maxWidth: "520px", margin: "0 auto 2.75rem" }}>
              Whether you&apos;re an institutional investor, DeFi fund, UAE employer, or financial institution — DRHM has a product built precisely for your needs.
            </p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
              <Link
                href="/request-access"
                className="btn-gold"
                style={{ padding: "1rem 2.5rem", borderRadius: "12px", fontSize: "1.05rem", textDecoration: "none", display: "inline-block" }}
              >
                Request Access →
              </Link>
              <a
                href="#about"
                className="btn-outline-gold"
                style={{ padding: "1rem 2.5rem", borderRadius: "12px", fontSize: "1.05rem", textDecoration: "none", display: "inline-block" }}
              >
                Learn More
              </a>
            </div>

            {/* Mini trust indicators */}
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem", marginTop: "3.5rem" }}>
              {[
                { value: "AED 8B", label: "Year 3 Supply Target" },
                { value: "8–14%", label: "sDRHM APY" },
                { value: "18", label: "Integrated Features" },
                { value: "4", label: "Funding Phases" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#d4a843", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: "0.75rem", color: "#5a6a85", marginTop: "0.25rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
