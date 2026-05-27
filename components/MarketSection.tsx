const marketStats = [
  { value: "$45B", label: "UAE Remittance Market", detail: "8.8M expatriates sending money home annually, averaging 3–5% in fees" },
  { value: "$3.7T", label: "Global Stablecoins by 2030", detail: "Citi Institute projection. Volume surged 91% in 2025 to $10.9T settled" },
  { value: "AED 600B", label: "UAE Retail Deposits", detail: "DRHM targets AED 3.2B in sDRHM savings by Year 3" },
  { value: "$350B", label: "Jebel Ali Trade Flow/yr", detail: "UAE SME invoices tokenized as 90-day AED-denominated receivables" },
];

const tailwinds = [
  {
    icon: "📜",
    title: "CBUAE PTSR Framework",
    desc: "CBUAE's Payment Token Services Regulation (effective July 2024) creates an explicit licensing pathway for AED stablecoin issuers. AE Coin licensed Dec 2024; DDSC (FAB/IHC/ADQ) approved May 2026."
  },
  {
    icon: "🏛️",
    title: "Government Digital Mandate",
    desc: "Dubai targets 90% digital transactions by 2026. CBUAE now mandates merchant acceptance of licensed dirham stablecoins across UAE mainland — the regulatory tailwind is already law."
  },
  {
    icon: "📈",
    title: "Global Stablecoin Surge",
    desc: "Stablecoin settlement volumes surged 91% in 2025. Visa, Mastercard, Klarna, and Western Union are building on stablecoin rails. Stablecoins are no longer crypto-native."
  },
  {
    icon: "⚖️",
    title: "US GENIUS Act Advantage",
    desc: "The US GENIUS Act (July 2025) prohibits yield-bearing fiat-backed stablecoins in America. This creates a structural competitive advantage for UAE-domiciled protocol designs."
  },
];

const segments = [
  { segment: "Expatriate remittances", tam: "$45B/yr", sam: "$900M/yr processed", mechanism: "DRHM corridor rails" },
  { segment: "UAE retail deposits", tam: "AED 600B", sam: "AED 3.2B in sDRHM", mechanism: "Yield savings product" },
  { segment: "SME cross-border payments", tam: "$7.8B/yr", sam: "$400M/yr", mechanism: "Programmable flows" },
  { segment: "Trade finance (Jebel Ali)", tam: "$350B/yr", sam: "$2B in RWA pools", mechanism: "Trade receivables collateral" },
  { segment: "Tokenized RWA market", tam: "$12B global (Mar 2026)", sam: "AED 1B DRHM-backed", mechanism: "RE + gold + sukuk" },
  { segment: "DeFi institutional yield", tam: "$6B Pendle TVL", sam: "AED 500M sDRHM", mechanism: "Yield tokenization" },
];

export default function MarketSection() {
  return (
    <section id="market" style={{ padding: "7rem 0", position: "relative" }}>
      <div className="section-divider" style={{ marginBottom: "0" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 2rem 0" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block" }}>Market Opportunity</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
            A Once-in-a-Generation<br />
            <span className="text-gold-gradient">Market Convergence</span>
          </h2>
          <p style={{ color: "#8b9bb8", maxWidth: "550px", margin: "0 auto", lineHeight: 1.75, fontSize: "1.05rem" }}>
            Regulatory clarity, government mandate, and global stablecoin adoption converging at exactly the moment DRHM launches.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", marginBottom: "5rem" }}>
          {marketStats.map((s, i) => (
            <div key={i} className="glass-card" style={{ borderRadius: "14px", padding: "2rem 1.5rem" }}>
              <div className="stat-number" style={{ marginBottom: "0.5rem" }}>{s.value}</div>
              <div style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{s.label}</div>
              <div style={{ color: "#5a6a85", fontSize: "0.8rem", lineHeight: 1.6 }}>{s.detail}</div>
            </div>
          ))}
        </div>

        {/* Tailwinds */}
        <div style={{ marginBottom: "5rem" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#f0f2f8", marginBottom: "2rem", textAlign: "center" }}>
            Structural Tailwinds
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {tailwinds.map((t, i) => (
              <div key={i} className="glass-card" style={{ borderRadius: "14px", padding: "1.75rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{t.icon}</span>
                <div>
                  <h4 style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{t.title}</h4>
                  <p style={{ color: "#8b9bb8", fontSize: "0.83rem", lineHeight: 1.65 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Addressable Market Table */}
        <div>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#f0f2f8", marginBottom: "1.5rem" }}>
            Addressable Market Sizing
          </h3>
          <div className="glass-card" style={{ borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Segment</th>
                    <th>TAM</th>
                    <th>SAM (Year 3 Target)</th>
                    <th>DRHM Mechanism</th>
                  </tr>
                </thead>
                <tbody>
                  {segments.map((row, i) => (
                    <tr key={i}>
                      <td style={{ color: "#f0f2f8", fontWeight: 600 }}>{row.segment}</td>
                      <td>{row.tam}</td>
                      <td style={{ color: "#d4a843" }}>{row.sam}</td>
                      <td>{row.mechanism}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
