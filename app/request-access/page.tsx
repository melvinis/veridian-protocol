"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const interestOptions = [
  { value: "institutional-investor", label: "Institutional Investor (sDRHM-B / sDRHM-C / DRT)" },
  { value: "defi-yield", label: "DeFi / Yield Farmer (sDRHM-A / Pendle YT)" },
  { value: "employer-payroll", label: "Employer WPS Payroll Integration" },
  { value: "remittance", label: "Remittance & Corridor Partnerships" },
  { value: "merchant", label: "Merchant / BNPL Integration" },
  { value: "investor-seed", label: "Seed / Series A Investor" },
  { value: "bank-whitelabel", label: "Bank / Financial Institution (Whitelabel)" },
  { value: "media-research", label: "Media / Research / Advisory" },
  { value: "other", label: "Other" },
];

export default function RequestAccessPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    organization: "",
    role: "",
    email: "",
    interest: "",
    aum: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formState.fullName.trim()) e.fullName = "Full name is required";
    if (!formState.organization.trim()) e.organization = "Organization is required";
    if (!formState.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) e.email = "Invalid email address";
    if (!formState.interest) e.interest = "Please select your area of interest";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#05050f", position: "relative", overflow: "hidden" }}>
      {/* Blobs */}
      <div className="blob-blue" style={{ position: "absolute", width: "600px", height: "600px", top: "-200px", left: "-200px" }} />
      <div className="blob-gold" style={{ position: "absolute", width: "400px", height: "400px", top: "20%", right: "-100px", opacity: 0.6 }} />

      {/* Nav bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(5,5,15,0.9)", borderBottom: "1px solid rgba(212,168,67,0.12)", backdropFilter: "blur(16px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <Image src="/veridian-mark.svg" alt="Veridian Protocol mark" width={30} height={30} />
            <span style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "0.95rem" }}>Veridian<span style={{ color: "#d4a843" }}> Protocol</span></span>
          </Link>
          <Link href="/" style={{ color: "#8b9bb8", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a843")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8b9bb8")}>
            ← Back to site
          </Link>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: "680px", margin: "0 auto", padding: "8rem 2rem 5rem" }}>
        {!submitted ? (
          <>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block" }}>Private Access</span>
              <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
                Request Access to <span className="text-gold-gradient">DRHM</span>
              </h1>
              <p style={{ color: "#8b9bb8", fontSize: "1rem", lineHeight: 1.7 }}>
                Submit your details below. Our team will review your request and reach out with access credentials and materials tailored to your interest.
              </p>
            </div>

            {/* Access perks */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {[
                { icon: "📄", text: "Full DRHM business plan & architecture" },
                { icon: "📊", text: "Interactive product interface preview" },
                { icon: "💼", text: "Investor deck & financial model" },
                { icon: "🤝", text: "Direct intro to the founding team" },
              ].map((p, i) => (
                <div key={i} className="glass-card" style={{ borderRadius: "10px", padding: "0.9rem 1rem", display: "flex", gap: "0.6rem", alignItems: "center" }}>
                  <span style={{ fontSize: "1.1rem" }}>{p.icon}</span>
                  <span style={{ color: "#8b9bb8", fontSize: "0.8rem" }}>{p.text}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="glass-card-gold" style={{ borderRadius: "18px", padding: "2.5rem" }}>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {/* Name + Org */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", color: "#8b9bb8", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>Full Name *</label>
                    <input className="input-dark" type="text" placeholder="Jane Smith"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })} />
                    {errors.fullName && <span style={{ color: "#f07a60", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.fullName}</span>}
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#8b9bb8", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>Organization *</label>
                    <input className="input-dark" type="text" placeholder="Acme Capital"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })} />
                    {errors.organization && <span style={{ color: "#f07a60", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.organization}</span>}
                  </div>
                </div>

                {/* Role + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", color: "#8b9bb8", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>Role / Title</label>
                    <input className="input-dark" type="text" placeholder="Chief Investment Officer"
                      value={formState.role}
                      onChange={(e) => setFormState({ ...formState, role: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#8b9bb8", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>Email Address *</label>
                    <input className="input-dark" type="email" placeholder="jane@acmecapital.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
                    {errors.email && <span style={{ color: "#f07a60", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.email}</span>}
                  </div>
                </div>

                {/* Interest */}
                <div>
                  <label style={{ display: "block", color: "#8b9bb8", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>Area of Interest *</label>
                  <div style={{ position: "relative" }}>
                    <select className="select-dark"
                      value={formState.interest}
                      onChange={(e) => setFormState({ ...formState, interest: e.target.value })}>
                      <option value="">Select your primary interest...</option>
                      {interestOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <div style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#5a6a85" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                        <path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  {errors.interest && <span style={{ color: "#f07a60", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.interest}</span>}
                </div>

                {/* AUM (conditional context) */}
                <div>
                  <label style={{ display: "block", color: "#8b9bb8", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>AUM / Capital Under Management <span style={{ color: "#4a5a75", fontWeight: 400 }}>(optional)</span></label>
                  <input className="input-dark" type="text" placeholder="e.g. $500M, €200M, Not applicable"
                    value={formState.aum}
                    onChange={(e) => setFormState({ ...formState, aum: e.target.value })} />
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", color: "#8b9bb8", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>Message <span style={{ color: "#4a5a75", fontWeight: 400 }}>(optional)</span></label>
                  <textarea className="input-dark" rows={4} placeholder="Tell us about your specific use case, timeline, or any questions you have about DRHM..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{ resize: "vertical" }} />
                </div>

                {/* Privacy note */}
                <p style={{ color: "#3a4a60", fontSize: "0.75rem", lineHeight: 1.6, textAlign: "center" }}>
                  Your information is kept strictly confidential and used only to process your access request. We do not share details with third parties.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold"
                  style={{ padding: "1rem", borderRadius: "10px", fontSize: "1rem", cursor: loading ? "not-allowed" : "pointer", border: "none", opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
                        <circle cx="9" cy="9" r="7" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
                        <path d="M9 2a7 7 0 017 7" stroke="#05050f" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Submitting...
                    </span>
                  ) : "Submit Access Request →"}
                </button>
              </form>
            </div>
          </>
        ) : (
          // Success state
          <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
            <div style={{
              width: "80px", height: "80px", borderRadius: "50%",
              background: "rgba(212,168,67,0.12)", border: "2px solid rgba(212,168,67,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "2rem", margin: "0 auto 2rem",
              boxShadow: "0 0 40px rgba(212,168,67,0.2)"
            }}>✓</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f0f2f8", marginBottom: "1rem" }}>Access Request Received</h2>
            <p style={{ color: "#8b9bb8", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "480px", margin: "0 auto 2.5rem" }}>
              Thank you, <strong style={{ color: "#f0d07a" }}>{formState.fullName}</strong>. Our team will review your request and reach out to <strong style={{ color: "#f0d07a" }}>{formState.email}</strong> within 2–3 business days with next steps.
            </p>
            <div className="glass-card-gold" style={{ borderRadius: "14px", padding: "1.5rem", maxWidth: "380px", margin: "0 auto 2.5rem", textAlign: "left" }}>
              <div style={{ color: "#d4a843", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.75rem" }}>What happens next</div>
              {[
                "Team reviews your submission (1 business day)",
                "Tailored access credentials sent to your email",
                "Intro call scheduled with the founding team",
                "Full materials & product interface unlocked",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.6rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#d4a843", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}.</span>
                  <span style={{ color: "#8b9bb8", fontSize: "0.85rem" }}>{step}</span>
                </div>
              ))}
            </div>
            <Link href="/" className="btn-outline-gold" style={{ padding: "0.8rem 2rem", borderRadius: "10px", fontSize: "0.95rem", textDecoration: "none", display: "inline-block" }}>
              ← Back to Veridian Protocol
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 560px) {
          form > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
