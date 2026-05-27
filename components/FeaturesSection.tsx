"use client";

const features = [
  {
    icon: "📈",
    title: "Pendle Yield Tokenization",
    badge: "DeFi Integration",
    desc: "sDRHM is registered as a Standardized Yield token on Pendle Finance — enabling PT/YT splits with fixed maturity dates. Creates the first AED-denominated on-chain fixed-income instrument, unlocking pension funds and endowments.",
    bullets: ["Fixed-rate PT-sDRHM instruments", "Leveraged yield via YT-sDRHM", "30/90/180/365-day AED yield curve", "Pendle $7B+ TVL ecosystem access"],
  },
  {
    icon: "⚡",
    title: "Programmable Money Flows",
    badge: "Enterprise & Retail",
    desc: "The PaymentRouter contract enables smart contract-defined payment automation. Treasury sweeps, milestone payroll, recurring remittances, and time-locked savings — all configurable, all automated.",
    bullets: ["Automated overnight sDRHM yield sweeps", "GPS-verified milestone payroll", "Recurring remittance scheduler", "Time-locked savings at enhanced APY"],
  },
  {
    icon: "💳",
    title: "DRHM-Native BNPL",
    badge: "Credit Access",
    desc: "sDRHM holders access buy-now-pay-later credit at participating merchants. No UAE credit bureau check required — accessible to 8.8M expatriates with thin credit files. sDRHM continues earning yield during the credit period.",
    bullets: ["Up to 90% of sDRHM balance as credit", "12–18% APR, 1.5–3% merchant fee", "Auto-liquidation at 105% LTV", "No collections process"],
  },
  {
    icon: "🔄",
    title: "Family Savings Circles",
    badge: "On-Chain ROSCA",
    desc: "DRHM's on-chain version of the rotating savings circle (known as chit fund, tandā, susu) eliminates the trust risk of offline ROSCAs while adding yield on waiting balances. 100M+ South Asian workers participate in ROSCAs.",
    bullets: ["5–20 members, configurable cycles", "All queued funds earn sDRHM yield", "Smart contract auto-distribution", "WhatsApp/Telegram social layer"],
  },
  {
    icon: "💬",
    title: "WhatsApp Integration",
    badge: "Mobile-First",
    desc: "90%+ of UAE blue-collar workers use WhatsApp as their primary financial channel. The DRHM WhatsApp Business API bot enables core financial actions — no app download required. Modelled on Kenya's M-Pesa.",
    bullets: ["Balance checks in any currency", "Send DRHM to any UAE mobile number", "Instant remittance corridor transfers", "Single-message sDRHM staking"],
  },
  {
    icon: "🏢",
    title: "WPS Employer Payroll",
    badge: "Enterprise Channel",
    desc: "The UAE Wage Protection System mandates electronic wages for 5M+ formal workers. DRHM payroll: sub-minute settlement, employees earn sDRHM yield from Day 1, built-in WPS compliance. One employer = 30–80K instant onboardings.",
    bullets: ["Sub-minute settlement vs 24–48hr banks", "sDRHM yield from first paycheck", "Full WPS compliance dashboard", "50 largest UAE employers targeted"],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: "7rem 0", position: "relative", background: "rgba(10,14,35,0.3)" }}>
      <div className="section-divider" />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 2rem 0" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block" }}>Product Features</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
            Built for <span className="text-gold-gradient">Every UAE Resident</span>
          </h2>
          <p style={{ color: "#8b9bb8", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75, fontSize: "1.05rem" }}>
            Eight integrated product features spanning DeFi, enterprise payroll, consumer credit, and mobile-first distribution.
          </p>
        </div>

        {/* Feature cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ borderRadius: "16px", padding: "2rem", transition: "border-color 0.25s, transform 0.25s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,168,67,0.25)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.6rem" }}>{f.icon}</span>
                <span className="badge-gold" style={{ fontSize: "0.65rem" }}>{f.badge}</span>
              </div>
              <h3 style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{f.title}</h3>
              <p style={{ color: "#8b9bb8", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{f.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {f.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#6a7a95", fontSize: "0.8rem" }}>
                    <span style={{ color: "#d4a843", marginTop: "1px", flexShrink: 0 }}>✦</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
