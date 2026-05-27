import Image from "next/image";

const tokens = [
  {
    symbol: "DRHM",
    name: "Synthetic Dirham",
    color: "#d4a843",
    bg: "rgba(212,168,67,0.08)",
    border: "rgba(212,168,67,0.3)",
    logo: "/drhm-mark.svg",
    desc: "ERC-20 token pegged 1:1 to AED via a delta-neutral reserve strategy. Freely transferable, usable for payments, and redeemable at par by KYB-cleared market makers.",
    tags: ["ERC-20", "AED Peg", "Delta-Neutral", "PTSR Compliant"],
  },
  {
    symbol: "sDRHM",
    name: "Yield-Bearing Savings",
    color: "#60c8a0",
    bg: "rgba(96,200,160,0.08)",
    border: "rgba(96,200,160,0.3)",
    logo: "/sdrhm-mark.svg",
    desc: "ERC-4626 vault distributing protocol revenue daily as an appreciating exchange rate. Three tiered strategies — Conservative (4–6%), Balanced (8–12%), Aggressive (14–22%).",
    tags: ["ERC-4626", "8–14% APY", "Daily Yield", "No Rebase"],
  },
  {
    symbol: "DRT",
    name: "Reserve Token",
    color: "#8b9bb8",
    bg: "rgba(139,155,184,0.08)",
    border: "rgba(139,155,184,0.3)",
    logo: null,
    desc: "A money-market fund share representing a direct claim on the protocol's T-bill and sukuk pool. 4–5% APY, zero derivatives exposure. Designed for pension funds and family offices.",
    tags: ["100% Sukuk", "4–5% APY", "Institutional", "No Derivatives"],
  },
  {
    symbol: "DGT",
    name: "Governance Token",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.3)",
    logo: null,
    desc: "Governs protocol parameters including collateral types, reserve allocations, fee splits, and Shariah Board appointments. Staking DGT boosts sDRHM yield multipliers. Year 3 launch via VARA.",
    tags: ["DAO Governance", "Yield Boost", "VARA Token Offering", "Year 3"],
  },
];

const vaults = [
  { name: "Conservative", symbol: "sDRHM-C", apy: "4–6%", pct: 38, reserve: "95% UAE sukuk + 5% DMCC gold", user: "Retirees, school fee savers, shariah-compliant institutional funds", color: "#8b9bb8" },
  { name: "Balanced", symbol: "sDRHM-B", apy: "8–12%", pct: 70, reserve: "80% sukuk + 10% perp hedge + 10% gold/trade finance", user: "UAE middle-income savers, SME treasuries, family offices", color: "#d4a843", flagship: true },
  { name: "Aggressive", symbol: "sDRHM-A", apy: "14–22%", pct: 100, reserve: "50% sukuk + 30% perp hedge + 20% RWA (RE + trade finance)", user: "DeFi-native yield farmers, crypto funds, Pendle YT buyers", color: "#f07a60" },
];

const yieldStreams = [
  { name: "UAE Sovereign Sukuk", pct: 52, apy: "4–5%", desc: "Primary reserve: CBUAE-approved UAE T-bills held via licensed custodians. Shariah-certified." },
  { name: "Perpetual Funding Rate", pct: 100, apy: "0–15%", desc: "Delta-neutral ETH/BTC short on regulated venues. Historically 8–12% in bull cycles." },
  { name: "Tokenized Dubai Gold", pct: 18, apy: "1–2%", desc: "DMCC-certified gold tokens earn storage lease yield. Inflation-resistant, shariah-compliant." },
  { name: "Trade Finance Receivables", pct: 45, apy: "2–4%", desc: "UAE SME invoice receivables via on-chain credit pools. 90-day AED-denominated instruments." },
  { name: "Tokenized Real Estate", pct: 30, apy: "1–3%", desc: "Dubai property rental income via VARA-regulated SPV tokens. 5–8% rental yield." },
  { name: "AED Institutional Deposits", pct: 38, apy: "3–4%", desc: "Excess stable reserves earn institutional rates from UAE licensed banks." },
];

export default function ProductSection() {
  return (
    <section id="product" style={{ padding: "7rem 0", position: "relative" }}>
      <div className="section-divider" />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 2rem 0" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block" }}>Product Architecture</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
            Four Tokens.<br />
            <span className="text-gold-gradient">Six Yield Streams. Infinite Use Cases.</span>
          </h2>
          <p style={{ color: "#8b9bb8", maxWidth: "550px", margin: "0 auto", lineHeight: 1.75, fontSize: "1.05rem" }}>
            A vertically integrated financial protocol — not just a stablecoin, but a complete programmable money ecosystem.
          </p>
        </div>

        {/* Token Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", marginBottom: "5rem" }}>
          {tokens.map((t, i) => (
            <div
              key={i}
              style={{
                borderRadius: "16px", padding: "1.75rem",
                background: t.bg, border: `1px solid ${t.border}`,
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 12px 40px ${t.color}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                {t.logo ? (
                  <Image src={t.logo} alt={`${t.symbol} mark`} width={40} height={40} />
                ) : (
                  <span style={{
                    fontWeight: 900, fontSize: "1.1rem", color: t.color,
                    background: `${t.color}18`, padding: "0.3rem 0.7rem", borderRadius: "8px",
                    border: `1px solid ${t.color}30`, display: "inline-block", lineHeight: 1.6
                  }}>{t.symbol}</span>
                )}
                <span style={{
                  fontWeight: 900, fontSize: "1rem", color: t.color,
                  letterSpacing: "0.04em"
                }}>{t.symbol}</span>
                {i === 1 && <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#d4a843", background: "rgba(212,168,67,0.12)", padding: "0.2rem 0.5rem", borderRadius: "999px", border: "1px solid rgba(212,168,67,0.25)" }}>FLAGSHIP</span>}
              </div>
              <h3 style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "1rem", marginBottom: "0.65rem" }}>{t.name}</h3>
              <p style={{ color: "#8b9bb8", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{t.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {t.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: "0.7rem", color: t.color, background: `${t.color}10`, padding: "0.2rem 0.55rem", borderRadius: "999px", border: `1px solid ${t.color}25`, fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Vault Strategies */}
        <div style={{ marginBottom: "5rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#f0f2f8", marginBottom: "0.5rem" }}>sDRHM Vault Strategies</h3>
          <p style={{ color: "#8b9bb8", fontSize: "0.9rem", marginBottom: "2rem" }}>Three independently deployed ERC-4626 vaults serving distinct user segments.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {vaults.map((v, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  borderRadius: "14px", padding: "1.75rem",
                  borderColor: v.flagship ? "rgba(212,168,67,0.35)" : undefined,
                }}
              >
                {v.flagship && (
                  <div style={{ marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#d4a843", background: "rgba(212,168,67,0.12)", padding: "0.2rem 0.6rem", borderRadius: "999px", border: "1px solid rgba(212,168,67,0.25)" }}>⭐ FLAGSHIP</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "#5a6a85", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{v.symbol}</span>
                    <h4 style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "1.1rem", marginTop: "0.15rem" }}>{v.name}</h4>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, color: v.color, lineHeight: 1 }}>{v.apy}</div>
                    <div style={{ fontSize: "0.7rem", color: "#5a6a85", marginTop: "2px" }}>Target APY</div>
                  </div>
                </div>
                {/* Yield bar */}
                <div style={{ margin: "1rem 0", height: "5px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${v.pct}%`, background: `linear-gradient(90deg, ${v.color}88, ${v.color})`, borderRadius: "3px", transition: "width 1s ease" }} />
                </div>
                <p style={{ color: "#5a6a85", fontSize: "0.78rem", marginBottom: "0.4rem" }}>
                  <span style={{ color: "#8b9bb8", fontWeight: 600 }}>Reserve:</span> {v.reserve}
                </p>
                <p style={{ color: "#5a6a85", fontSize: "0.78rem" }}>
                  <span style={{ color: "#8b9bb8", fontWeight: 600 }}>Target user:</span> {v.user}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Yield Engine */}
        <div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#f0f2f8", marginBottom: "0.5rem" }}>Six-Stream Yield Engine</h3>
          <p style={{ color: "#8b9bb8", fontSize: "0.9rem", marginBottom: "2rem" }}>
            Diversified, all-weather revenue — maintains positive yield even through severe bear market conditions.
          </p>
          <div className="glass-card" style={{ borderRadius: "14px", padding: "0.5rem" }}>
            {yieldStreams.map((y, i) => (
              <div key={i} style={{ padding: "1.25rem 1.25rem", borderBottom: i < yieldStreams.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <span style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "0.9rem" }}>{y.name}</span>
                  <span style={{ color: "#d4a843", fontWeight: 800, fontSize: "0.95rem", whiteSpace: "nowrap" }}>{y.apy} APY</span>
                </div>
                <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", marginBottom: "0.6rem", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${y.pct}%`, background: "linear-gradient(90deg, rgba(212,168,67,0.5), #d4a843)", borderRadius: "2px" }} />
                </div>
                <p style={{ color: "#5a6a85", fontSize: "0.8rem", lineHeight: 1.5 }}>{y.desc}</p>
              </div>
            ))}
          </div>
          {/* Bear market floor callout */}
          <div className="glass-card-gold" style={{ borderRadius: "12px", padding: "1.25rem 1.5rem", marginTop: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>🛡️</span>
            <div>
              <div style={{ color: "#f0d07a", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.3rem" }}>Bear-Market Yield Floor</div>
              <p style={{ color: "#8b9bb8", fontSize: "0.83rem", lineHeight: 1.6 }}>
                When perpetual funding rates turn negative for 72+ consecutive hours, the AI treasury agent automatically shifts to sukuk and gold positions —
                maintaining a <strong style={{ color: "#d4a843" }}>guaranteed minimum 3% APY floor</strong> for all sDRHM holders regardless of market conditions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
