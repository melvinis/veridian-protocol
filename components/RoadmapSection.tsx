"use client";

const phases = [
  {
    label: "Phase 1",
    period: "Q4 2026 – Q2 2027",
    status: "Seed Round",
    color: "#d4a843",
    items: [
      "PTSR license application + regulatory sandbox entry",
      "VARA pre-application",
      "DRHM ERC-20, MintRedeem V2, AccessControl deployed",
      "Three sDRHM vaults + ReserveFund contracts live",
      "Gulf sovereign sukuk reserve (primary) + certified gold integration",
      "AI Risk Sentinel live from Day 1",
      "AI Treasury Agent (rule-based Phase 1)",
      "3 market maker partners signed",
      "DRHM app launched (iOS + Android)",
      "50M Insurance Fund seeded from Seed Round",
    ],
    fundingNote: "Seed: 70M — Regulatory + Development + Insurance Fund",
  },
  {
    label: "Phase 2",
    period: "Q3 2027 – Q4 2027",
    status: "Series A",
    color: "#60c8a0",
    items: [
      "Full Regional PTSR license granted",
      "VARA registration complete",
      "PaymentRouter + ROSCAFactory deployed",
      "WhatsApp Business API bot live",
      "Pendle Standardized Yield registration (sDRHM)",
      "Trade finance receivables pool (senior tranche)",
      "AI Treasury RL model live + bear-market floor automation",
      "200 merchant integrations",
      "5 Gulf employer payroll contracts (50,000 workers)",
      "Insurance Fund: 110M",
    ],
    fundingNote: "Series A: 250M — Market makers, corridors, merchants, AI",
  },
  {
    label: "Phase 3",
    period: "Q1 2028 – Q4 2028",
    status: "Series B",
    color: "#a78bfa",
    items: [
      "GCC regulatory expansion applications (Saudi, Bahrain, Qatar)",
      "CreditScore contract + ZK identity system live",
      "BNPL module deployed + merchant SDK",
      "DRT Reserve Token for institutional investors",
      "Gulf real estate token collateral (SPV structure)",
      "DRHM Score ML model live + ZK credential generation",
      "GCC remittance corridors live",
      "Institutional sDRHM product (sovereign wealth fund outreach)",
      "Pendle YT markets live",
      "Insurance Fund: 250M target",
    ],
    fundingNote: "Series B: 600M+ — RWA SPVs, GCC expansion, whitelabel",
  },
  {
    label: "Phase 4",
    period: "Year 4–5",
    status: "Full Ecosystem",
    color: "#f07a60",
    items: [
      "DGT governance token launch via VARA-regulated offering",
      "Full DAO governance live",
      "Regional Digital Currency CBDC bridge deployed",
      "DRHM positioned as yield layer above sovereign CBDC",
      "Whitelabel protocol stack licensed to 3–5 Gulf banks",
      "DRHM Score accepted by 3+ Gulf banks for expat loan underwriting",
      "DRHM deployed on 10+ chains",
      "Multi-currency GCC corridors live",
      "45B DRHM supply (Year 5 target)",
      "2.585B protocol revenue (Year 5 target)",
    ],
    fundingNote: "Revenue-funded: 2.585B Year 5 EBITDA trajectory",
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" style={{ padding: "7rem 0", position: "relative", background: "rgba(10,14,35,0.3)" }}>
      <div className="section-divider" />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 2rem 0" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block" }}>Roadmap</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
            Four Phases to<br />
            <span className="text-gold-gradient">Full GCC Ecosystem</span>
          </h2>
          <p style={{ color: "#8b9bb8", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75, fontSize: "1.05rem" }}>
            18 integrated enhancements sequenced across four phases — each capability built on a stable regulatory and technical foundation.
          </p>
        </div>

        {/* Phases */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {phases.map((phase, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ borderRadius: "16px", padding: "1.75rem", borderColor: `${phase.color}20`, position: "relative", overflow: "hidden" }}
            >
              {/* Top bar */}
              <div style={{ height: "3px", background: `linear-gradient(90deg, ${phase.color}, transparent)`, position: "absolute", top: 0, left: 0, right: 0, borderRadius: "16px 16px 0 0" }} />

              <div style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.3rem" }}>
                  <span style={{ color: phase.color, fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>{phase.label}</span>
                  <span style={{ fontSize: "0.68rem", color: "#5a6a85", background: "rgba(255,255,255,0.04)", padding: "0.2rem 0.5rem", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.07)" }}>{phase.status}</span>
                </div>
                <div style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "0.95rem" }}>{phase.period}</div>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {phase.items.map((item, j) => (
                  <li key={j} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <div className="timeline-dot" style={{ background: phase.color, boxShadow: `0 0 0 3px ${phase.color}22` }} />
                    <span style={{ color: "#6a7a95", fontSize: "0.8rem", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "0.875rem" }}>
                <p style={{ color: "#5a6a85", fontSize: "0.75rem", lineHeight: 1.5 }}>
                  <span style={{ color: phase.color, fontWeight: 700 }}>💰 </span>
                  {phase.fundingNote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Financial projection summary */}
        <div style={{ marginTop: "4rem" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#f0f2f8", marginBottom: "1.5rem" }}>Five-Year Financial Projection</h3>
          <div className="glass-card" style={{ borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Year 1</th>
                    <th>Year 2</th>
                    <th>Year 3</th>
                    <th>Year 4</th>
                    <th>Year 5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: "#f0f2f8", fontWeight: 600 }}>DRHM Supply (B)</td>
                    <td>0.5</td><td>2.5</td><td style={{ color: "#d4a843" }}>8.0</td><td>20.0</td><td style={{ color: "#f0d07a", fontWeight: 700 }}>45.0</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#f0f2f8", fontWeight: 600 }}>sDRHM Supply (B)</td>
                    <td>0.15</td><td>0.9</td><td>3.2</td><td>9.0</td><td style={{ color: "#f0d07a", fontWeight: 700 }}>22.0</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#f0f2f8", fontWeight: 600 }}>Total Revenue (M)</td>
                    <td>21</td><td>133</td><td style={{ color: "#d4a843" }}>451</td><td>1,165</td><td style={{ color: "#f0d07a", fontWeight: 700 }}>2,585</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#f0f2f8", fontWeight: 600 }}>EBITDA (M)</td>
                    <td style={{ color: "#f07a60" }}>(9)</td><td style={{ color: "#60c8a0" }}>78</td><td style={{ color: "#60c8a0" }}>361</td><td style={{ color: "#60c8a0" }}>1,025</td><td style={{ color: "#f0d07a", fontWeight: 700 }}>2,385</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#f0f2f8", fontWeight: 600 }}>Insurance Fund (M)</td>
                    <td>50</td><td>110</td><td>250</td><td>500</td><td style={{ color: "#f0d07a", fontWeight: 700 }}>1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p style={{ color: "#4a5a75", fontSize: "0.78rem", marginTop: "0.75rem" }}>
            Breakeven at Month 14 (700M supply). EBITDA expansion driven by BNPL, identity credentials, and whitelabel licensing compounding on the yield and payments base.
          </p>
        </div>

      </div>
    </section>
  );
}
