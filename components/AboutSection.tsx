"use client";

const pillars = [
  {
    icon: "◈",
    title: "Synthetic Dirham",
    desc: "DRHM is an ERC-20 token pegged 1:1 to AED through a delta-neutral reserve strategy. Freely transferable, redeemable at par by KYB-cleared market makers, and CBUAE PTSR-aligned."
  },
  {
    icon: "⟁",
    title: "Yield-Bearing Savings",
    desc: "sDRHM is an ERC-4626 vault that distributes 8–14% APY daily via an appreciating exchange rate. Three vault tiers — Conservative, Balanced, and Aggressive — serve every risk appetite."
  },
  {
    icon: "⬡",
    title: "UAE-Native Reserves",
    desc: "Backed by UAE sovereign sukuk, DMCC-certified tokenized gold, Dubai real estate tokens, and trade finance receivables. No global stablecoin can replicate this AED-native reserve composition."
  },
  {
    icon: "◎",
    title: "AI-Autonomous Treasury",
    desc: "A reinforcement-learning treasury agent rebalances across six yield streams every 15 minutes, maintaining a 3% APY floor in bear markets and optimising for maximum yield within governance bounds."
  },
  {
    icon: "⟐",
    title: "Shariah-Certified",
    desc: "A three-member AAOIFI-certified Shariah Supervisory Board reviews all yield mechanisms, collateral types, and smart contract logic quarterly. The SSB holds veto power over any non-compliant income stream."
  },
  {
    icon: "⊕",
    title: "Financial Identity",
    desc: "Every DRHM transaction builds a verifiable on-chain financial identity. The DRHM Score unlocks undercollateralised lending and BNPL credit — giving UAE's 8.8M expatriates their first merit-based credit system."
  },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "7rem 0", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block" }}>About DRHM</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
            A Complete Financial Backbone<br />
            <span className="text-gold-gradient">for the UAE Digital Economy</span>
          </h2>
          <p style={{ color: "#8b9bb8", maxWidth: "600px", margin: "0 auto", lineHeight: 1.75, fontSize: "1.05rem" }}>
            DRHM is not just a stablecoin — it&apos;s a savings layer, a payments rail, a credit system,
            and a programmable money platform. All built within the CBUAE&apos;s regulatory framework.
          </p>
        </div>

        {/* Core proposition highlight */}
        <div className="glass-card-gold gold-glow" style={{ borderRadius: "16px", padding: "2rem 2.5rem", marginBottom: "4rem", position: "relative", overflow: "hidden" }}>
          <div className="blob-gold" style={{ position: "absolute", width: "300px", height: "300px", top: "-100px", right: "-50px", pointerEvents: "none", opacity: 0.5 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ color: "#d4a843", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Core Proposition</div>
            <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", color: "#f0f2f8", lineHeight: 1.75, fontWeight: 500 }}>
              Every UAE resident — expatriate worker, SME treasurer, retail saver, institutional fund — gets a single protocol
              that <strong style={{ color: "#f0d07a" }}>pays yield on their dirham</strong>, moves money instantly across borders at near-zero cost,
              builds their financial identity, and unlocks credit without a UAE bank account.{" "}
              <span style={{ color: "#d4a843" }}>Nothing like this exists in the market today.</span>
            </p>
          </div>
        </div>

        {/* Pillars grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ borderRadius: "14px", padding: "1.75rem", transition: "border-color 0.25s, transform 0.25s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,168,67,0.3)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                background: "rgba(212,168,67,0.1)", border: "1px solid rgba(212,168,67,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.3rem", color: "#d4a843", marginBottom: "1rem"
              }}>{p.icon}</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f0f2f8", marginBottom: "0.6rem" }}>{p.title}</h3>
              <p style={{ color: "#8b9bb8", fontSize: "0.875rem", lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
