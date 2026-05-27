import Link from "next/link";
import Image from "next/image";

const navGroups = [
  {
    title: "DRHM Protocol",
    links: [
      { label: "About DRHM", href: "#about" },
      { label: "Market Opportunity", href: "#market" },
      { label: "Product Architecture", href: "#product" },
      { label: "Technology", href: "#technology" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "DRHM Token", href: "#product" },
      { label: "sDRHM Savings Vaults", href: "#product" },
      { label: "DRT Reserve Token", href: "#product" },
      { label: "BNPL Credit", href: "#features" },
      { label: "WPS Payroll", href: "#features" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Veridian Protocol", href: "/" },
      { label: "Request Access", href: "/request-access" },
      { label: "Regulatory Framework", href: "#technology" },
      { label: "Shariah Compliance", href: "#technology" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(212,168,67,0.12)", background: "rgba(5,5,15,0.95)", padding: "5rem 0 2.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(3, 1fr)", gap: "3rem", marginBottom: "4rem", flexWrap: "wrap" }}
          className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
              <Image src="/veridian-mark.svg" alt="Veridian Protocol mark" width={36} height={36} />
              <span style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "1.05rem" }}>
                Veridian<span style={{ color: "#d4a843" }}> Protocol</span>
              </span>
            </div>
            <p style={{ color: "#5a6a85", fontSize: "0.85rem", lineHeight: 1.75, maxWidth: "280px", marginBottom: "1.5rem" }}>
              Building the financial backbone of the UAE digital economy — a yield-bearing synthetic dirham for every resident, business, and institution.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {["UAE", "CBUAE PTSR", "Shariah-Cert.", "VARA"].map((tag) => (
                <span key={tag} style={{ fontSize: "0.68rem", color: "#4a5a75", border: "1px solid rgba(255,255,255,0.07)", padding: "0.2rem 0.5rem", borderRadius: "5px" }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((g) => (
            <div key={g.title}>
              <div style={{ color: "#d4a843", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>{g.title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} style={{ color: "#5a6a85", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#8b9bb8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#5a6a75")}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Request Access CTA strip */}
        <div className="glass-card-gold" style={{ borderRadius: "14px", padding: "1.75rem 2rem", marginBottom: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.3rem" }}>Ready to explore DRHM?</div>
            <p style={{ color: "#8b9bb8", fontSize: "0.875rem" }}>Submit your details for private product access and investor materials.</p>
          </div>
          <Link
            href="/request-access"
            className="btn-gold"
            style={{ padding: "0.8rem 2rem", borderRadius: "10px", fontSize: "0.95rem", textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Request Access →
          </Link>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2rem" }}>
          <div style={{ color: "#3a4a60", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} Veridian Protocol. All rights reserved.
          </div>
          <div style={{ color: "#3a4a60", fontSize: "0.75rem", maxWidth: "640px", lineHeight: 1.6, textAlign: "right" }}>
            <strong style={{ color: "#4a5a70" }}>Confidential — For Discussion Purposes Only.</strong> This website does not constitute a prospectus, offer, or solicitation to buy or sell any securities or financial instruments in any jurisdiction. DRHM tokens are not available to residents of jurisdictions where such products are restricted. Regulatory approval is pending.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
