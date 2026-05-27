"use client";

const contracts = [
  { name: "DRHM ERC-20", desc: "Token contract with mint/burn restricted to MintRedeem V2. Pause function via 2-of-5 Protocol Council multisig. Upgradeable via Transparent Proxy with 48-hour timelock." },
  { name: "MintRedeem V2", desc: "EIP-712 signed order verification, slippage enforcement, atomic collateral-in / DRHM-out. Handles three collateral types with type-specific oracle routing." },
  { name: "sDRHM ERC-4626 ×3", desc: "Three independently deployed vaults (Conservative, Balanced, Aggressive) with distinct reserve allocation parameters. Daily exchange rate update from yield oracle." },
  { name: "OracleAdapter", desc: "Chainlink local/USD + sukuk NAV + gold price + RWA property NAV feeds. Circuit breaker: mint/redeem paused if oracle deviation exceeds 0.5% from 30-min TWAP." },
  { name: "PaymentRouter", desc: "Optimised transfer contract for merchant, P2P, recurring, and conditional payments. Fee collection, referral splits, fiat off-ramp triggers, programmable flow scheduler." },
  { name: "ROSCAFactory", desc: "Factory contract deploying individual savings circles. Handles contributions, sDRHM yield accrual, randomised/priority distribution, and defaulting member handling." },
  { name: "CreditScore", desc: "On-chain DRHM Score registry. ML model outputs stored as score hash. ZK credential generation interface. BNPL collateral lock/unlock logic. Undercollateralised loan origination." },
  { name: "BridgeAdapter", desc: "LayerZero CCTP cross-chain messaging for DRHM on Polygon, Base, Arbitrum, BNB Chain. CBDC bridge interface prepared for regional Digital Currency launch." },
];

const aiSystems = [
  {
    icon: "🤖",
    title: "AI Treasury Agent",
    color: "#d4a843",
    points: [
      "RL model on AWS SageMaker regional infrastructure",
      "Monitors 5 exchanges + 3 oracle feeds every 15 minutes",
      "Rebalances across 6 yield streams within governance bounds",
      "Triggers automatic bear-market yield floor at 72hr negative funding",
      "All actions logged with full explainability audit trail",
    ],
  },
  {
    icon: "🛡️",
    title: "AI Risk Sentinel",
    color: "#60c8a0",
    points: [
      "24/7 monitoring across on-chain and off-chain data",
      "Oracle manipulation detection: auto-pause at 0.3% currency deviation",
      "Run-risk alerts: flags 5× volume spikes within 1-hour windows",
      "Exchange health monitoring: margin, latency, liquidation risk",
      "30-second alert escalation to Protocol Council",
    ],
  },
  {
    icon: "📊",
    title: "DRHM Credit Score (Yr 3)",
    color: "#a78bfa",
    points: [
      "ML model trained on anonymised transaction data",
      "Monthly score updates with differential privacy",
      "Unlocks undercollateralised lending at 70% collateral ratio",
      "ZK credential export via zkMe infrastructure",
      "Zero-knowledge proofs shareable with banks, landlords, employers",
    ],
  },
];

const audits = [
  { name: "Trail of Bits", type: "Smart Contract Audit" },
  { name: "Certora", type: "Formal Verification" },
  { name: "Independent 3rd Firm", type: "Independent Review" },
  { name: "$5M Bug Bounty", type: "Ongoing Security" },
];

export default function TechnologySection() {
  return (
    <section id="technology" style={{ padding: "7rem 0", position: "relative" }}>
      <div className="section-divider" />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 2rem 0" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block" }}>Technology</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
            Institutional-Grade<br />
            <span className="text-gold-gradient">Smart Contract Architecture</span>
          </h2>
          <p style={{ color: "#8b9bb8", maxWidth: "550px", margin: "0 auto", lineHeight: 1.75, fontSize: "1.05rem" }}>
            A formally verified, AI-augmented protocol stack — triple-audited by Trail of Bits, Certora, and an independent firm.
          </p>
        </div>

        {/* Smart Contracts grid */}
        <div style={{ marginBottom: "5rem" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#f0f2f8", marginBottom: "1.5rem" }}>Smart Contract Stack</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {contracts.map((c, i) => (
              <div key={i} className="glass-card" style={{ borderRadius: "12px", padding: "1.4rem", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(212,168,67,0.2)"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#d4a843", boxShadow: "0 0 6px rgba(212,168,67,0.6)" }} />
                  <span style={{ color: "#d4a843", fontWeight: 700, fontSize: "0.9rem", fontFamily: "monospace" }}>{c.name}</span>
                </div>
                <p style={{ color: "#6a7a95", fontSize: "0.8rem", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Systems */}
        <div style={{ marginBottom: "5rem" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#f0f2f8", marginBottom: "0.5rem" }}>AI & Autonomous Systems Layer</h3>
          <p style={{ color: "#8b9bb8", fontSize: "0.9rem", marginBottom: "2rem" }}>
            Three AI-powered systems operating continuously — benchmarked at <span style={{ color: "#d4a843" }}>12.3% higher annualised returns</span> versus manual treasury strategies (Q1 2026).
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {aiSystems.map((s, i) => (
              <div key={i} className="glass-card" style={{ borderRadius: "14px", padding: "1.75rem", borderColor: `${s.color}22`, transition: "border-color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = `${s.color}44`}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = `${s.color}22`}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                <h4 style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>{s.title}</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {s.points.map((p, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.5rem", fontSize: "0.8rem", color: "#6a7a95", lineHeight: 1.5 }}>
                      <span style={{ color: s.color, flexShrink: 0, marginTop: "1px" }}>›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="glass-card-gold" style={{ borderRadius: "16px", padding: "2rem 2.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f0f2f8", marginBottom: "0.5rem" }}>Triple-Audited Security</h3>
              <p style={{ color: "#8b9bb8", fontSize: "0.875rem", maxWidth: "400px", lineHeight: 1.6 }}>
                Formal verification by Certora, independent review by Trail of Bits, and a $5M continuous bug bounty program.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {audits.map((a, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.65rem", color: "#5a6a85", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{a.type}</div>
                  <div style={{ color: "#f0d07a", fontWeight: 700, fontSize: "0.9rem" }}>{a.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
