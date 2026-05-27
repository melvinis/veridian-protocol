"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About DRHM", href: "#about" },
    { label: "Market", href: "#market" },
    { label: "Product", href: "#product" },
    { label: "Technology", href: "#technology" },
    { label: "Roadmap", href: "#roadmap" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(5, 5, 15, 0.92)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(212, 168, 67, 0.15)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <Image src="/veridian-mark.svg" alt="Veridian Protocol mark" width={34} height={34} priority />
            <span style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
              Veridian<span style={{ color: "#d4a843" }}> Protocol</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="hidden md:flex">
            <Link
              href="/data-room/login"
              className="nav-link"
              style={{ fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.35rem", textDecoration: "none" }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ opacity: 0.7 }}>
                <rect x="1" y="5" width="11" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M4 5V3.5a2.5 2.5 0 015 0V5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Data Room
            </Link>
            <Link
              href="/request-access"
              className="btn-gold"
              style={{ padding: "0.55rem 1.4rem", borderRadius: "8px", fontSize: "0.875rem", textDecoration: "none" }}
            >
              Request Access
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{ background: "none", border: "none", color: "#d4a843", cursor: "pointer", padding: "4px" }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            borderTop: "1px solid rgba(212,168,67,0.15)",
            padding: "1.25rem 0",
            display: "flex", flexDirection: "column", gap: "1.25rem"
          }}>
            {links.map((l) => (
              <a
                key={l.href} href={l.href}
                onClick={() => setMobileOpen(false)}
                className="nav-link"
                style={{ fontSize: "0.95rem" }}
              >{l.label}</a>
            ))}
            <Link
              href="/data-room/login"
              className="nav-link"
              style={{ fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.4rem" }}
              onClick={() => setMobileOpen(false)}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ opacity: 0.7 }}>
                <rect x="1" y="5" width="11" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M4 5V3.5a2.5 2.5 0 015 0V5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Data Room
            </Link>
            <Link
              href="/request-access"
              className="btn-gold"
              style={{ padding: "0.65rem 1.4rem", borderRadius: "8px", fontSize: "0.875rem", textDecoration: "none", textAlign: "center" }}
              onClick={() => setMobileOpen(false)}
            >
              Request Access
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
