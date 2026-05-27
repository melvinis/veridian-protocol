"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/data-room";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
      return;
    }

    router.push(redirectTo);
    router.refresh();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#05050f",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background blobs */}
      <div
        className="blob-blue"
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          top: "-150px",
          left: "-150px",
          pointerEvents: "none",
        }}
      />
      <div
        className="blob-gold"
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          bottom: "-100px",
          right: "-100px",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "420px",
          padding: "2rem",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              marginBottom: "1.5rem",
            }}
          >
            <Image
              src="/veridian-mark.svg"
              alt="Veridian Protocol"
              width={36}
              height={36}
            />
            <span
              style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "1rem" }}
            >
              Veridian<span style={{ color: "#d4a843" }}> Protocol</span>
            </span>
          </Link>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(212,168,67,0.08)",
              border: "1px solid rgba(212,168,67,0.2)",
              borderRadius: "8px",
              padding: "0.35rem 0.85rem",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ fontSize: "0.75rem", color: "#d4a843", fontWeight: 600, letterSpacing: "0.06em" }}>
              🔒 DATA ROOM
            </span>
          </div>
          <h1
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              color: "#f0f2f8",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Private Access
          </h1>
          <p style={{ color: "#5a6a85", fontSize: "0.875rem", marginTop: "0.5rem" }}>
            Enter your credentials to access the data room.
          </p>
        </div>

        {/* Form */}
        <div
          className="glass-card-gold"
          style={{ borderRadius: "18px", padding: "2rem" }}
        >
          <form
            onSubmit={handleLogin}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  color: "#8b9bb8",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                  letterSpacing: "0.04em",
                }}
              >
                Email Address
              </label>
              <input
                className="input-dark"
                type="email"
                placeholder="you@organization.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  color: "#8b9bb8",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                  letterSpacing: "0.04em",
                }}
              >
                Password
              </label>
              <input
                className="input-dark"
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div
                style={{
                  background: "rgba(240,122,96,0.1)",
                  border: "1px solid rgba(240,122,96,0.3)",
                  borderRadius: "8px",
                  padding: "0.75rem 1rem",
                  color: "#f07a60",
                  fontSize: "0.82rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span>⚠️</span> {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-gold"
              style={{
                padding: "0.9rem",
                borderRadius: "10px",
                fontSize: "0.95rem",
                cursor: loading ? "not-allowed" : "pointer",
                border: "none",
                opacity: loading ? 0.7 : 1,
                marginTop: "0.25rem",
              }}
            >
              {loading ? (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ animation: "spin 0.8s linear infinite" }}
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="6"
                      stroke="rgba(0,0,0,0.3)"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 2a6 6 0 016 6"
                      stroke="#05050f"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Authenticating...
                </span>
              ) : (
                "Access Data Room →"
              )}
            </button>
          </form>
        </div>

        {/* Footer links */}
        <div style={{ textAlign: "center", marginTop: "1.75rem" }}>
          <p style={{ color: "#3a4a60", fontSize: "0.78rem", lineHeight: 1.6 }}>
            Don&apos;t have access?{" "}
            <Link
              href="/request-access"
              style={{ color: "#d4a843", textDecoration: "none" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              Request access →
            </Link>
          </p>
          <p style={{ color: "#2a3a50", fontSize: "0.75rem", marginTop: "0.5rem" }}>
            Confidential — For authorized parties only
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#05050f" }} />}>
      <LoginForm />
    </Suspense>
  );
}
