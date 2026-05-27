import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "AED 8B", label: "Supply Target (Year 3)", sub: "Synthetic dirham issued" },
  { value: "8–14%", label: "sDRHM Target APY", sub: "Balanced vault, Year 1–2" },
  { value: "750K", label: "Active Wallets (Yr 3)", sub: "Retail, SME & institutional" },
  { value: "AED 408M", label: "Protocol Revenue Yr 3", sub: "Across 6 revenue streams" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}
      className="grid-bg"
    >
      {/* Background blobs */}
      <div className="blob-blue" style={{ position: "absolute", width: "700px", height: "700px", top: "-200px", left: "-200px", pointerEvents: "none" }} />
      <div className="blob-gold" style={{ position: "absolute", width: "500px", height: "500px", top: "10%", right: "-100px", pointerEvents: "none" }} />
      <div className="blob-blue" style={{ position: "absolute", width: "400px", height: "400px", bottom: "-100px", left: "30%", pointerEvents: "none" }} />

      {/* Radial vignette overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(5,5,15,0.7) 100%)"
      }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "0 auto", padding: "8rem 2rem 5rem", width: "100%" }}>
        {/* Pre-headline badge */}
        <div style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Image src="/veridian-mark.svg" alt="Veridian Protocol" width={48} height={48} priority />
          <span className="badge-gold">🇦🇪 UAE · CBUAE PTSR Licensed Pathway · Shariah-Certified</span>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontSize: "clamp(2.6rem, 6vw, 5rem)",
          fontWeight: 900,
          lineHeight: 1.07,
          letterSpacing: "-0.03em",
          maxWidth: "800px",
          marginBottom: "1.75rem",
        }}>
          <span style={{ color: "#f0f2f8" }}>UAE&apos;s First</span>
          <br />
          <span className="text-gold-gradient">Yield-Bearing</span>
          <br />
          <span style={{ color: "#f0f2f8" }}>Synthetic Dirham</span>
        </h1>

        {/* Sub-headline */}
        <p style={{
          fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
          color: "#8b9bb8",
          maxWidth: "580px",
          lineHeight: 1.7,
          marginBottom: "2.75rem",
        }}>
          DRHM is an AED-pegged digital token backed by UAE sovereign sukuk, DMCC gold,
          and real-world assets — delivering 8–14% APY to retail savers, SME treasuries,
          and institutional investors. All within the CBUAE&apos;s PTSR framework.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "5rem" }}>
          <Link
            href="/request-access"
            className="btn-gold"
            style={{ padding: "0.9rem 2.25rem", borderRadius: "10px", fontSize: "1rem", textDecoration: "none", display: "inline-block" }}
          >
            Request Access →
          </Link>
          <a
            href="#about"
            className="btn-outline-gold"
            style={{ padding: "0.9rem 2.25rem", borderRadius: "10px", fontSize: "1rem", textDecoration: "none", display: "inline-block" }}
          >
            Explore DRHM
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1px",
          background: "rgba(212,168,67,0.12)",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(212,168,67,0.15)",
        }}>
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "1.75rem 1.5rem",
                background: "rgba(5,5,15,0.85)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(212,168,67,0.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(5,5,15,0.85)")}
            >
              <div className="stat-number" style={{ marginBottom: "0.3rem" }}>{s.value}</div>
              <div style={{ color: "#f0f2f8", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{s.label}</div>
              <div style={{ color: "#5a6a85", fontSize: "0.78rem" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
          <span style={{ color: "#4a5a75", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Designed for</span>
          {["CBUAE PTSR", "VARA Dubai", "AAOIFI Shariah", "AML/FATF", "Chainalysis"].map((tag) => (
            <span key={tag} style={{
              color: "#6a7a95", fontSize: "0.8rem", fontWeight: 500,
              padding: "0.3rem 0.8rem", borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)"
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
        color: "#4a5a75", fontSize: "0.72rem", letterSpacing: "0.1em"
      }}>
        <span>SCROLL</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect x="0.5" y="0.5" width="15" height="19" rx="7.5" stroke="rgba(212,168,67,0.3)" />
          <circle cx="8" cy="7" r="2" fill="rgba(212,168,67,0.5)">
            <animate attributeName="cy" from="7" to="13" dur="1.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="1" to="0" dur="1.4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  );
}
