"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import LogoutButton from "@/components/data-room/LogoutButton";
import {
  getFoldersForRole,
  ROLE_LABELS,
  ROLE_COLORS,
  ROLE_DESCRIPTIONS,
  FILE_TYPE_COLORS,
  type Role,
  type DataRoomFolder,
} from "@/lib/data-room/config";

interface Profile {
  full_name: string | null;
  organization: string | null;
  role: string;
}

export default function DataRoomPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/data-room/login"); return; }
      setUserEmail(user.email ?? null);
      const { data } = await supabase
        .from("user_profiles")
        .select("full_name, organization, role")
        .eq("id", user.id)
        .single();
      setProfile(data);
      setLoading(false);
    };
    fetchData();
  }, [router]);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "#05050f", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: "40px", height: "40px", border: "2px solid rgba(212,168,67,0.2)", borderTopColor: "#d4a843", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 1rem" }} />
          <p style={{ color: "#4a5a75", fontSize: "0.85rem" }}>Loading data room…</p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const role = (profile?.role || "seed_investor") as Role;
  const { accessible, locked } = getFoldersForRole(role);
  const roleColor = ROLE_COLORS[role];

  return (
    <div style={{ minHeight: "100vh", background: "#05050f", position: "relative" }}>
      <div className="blob-gold" style={{ position: "fixed", width: "600px", height: "600px", top: "10%", right: "-200px", pointerEvents: "none", opacity: 0.15 }} />
      <div className="blob-blue" style={{ position: "fixed", width: "500px", height: "500px", bottom: "0", left: "-150px", pointerEvents: "none", opacity: 0.2 }} />

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(5,5,15,0.92)", borderBottom: "1px solid rgba(212,168,67,0.12)", backdropFilter: "blur(16px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <Image src="/veridian-mark.svg" alt="Veridian Protocol" width={28} height={28} />
            <span style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "0.9rem" }}>
              Veridian<span style={{ color: "#d4a843" }}> Protocol</span>
            </span>
            <span style={{ color: "#3a4a60", fontSize: "0.75rem", margin: "0 0.25rem" }}>›</span>
            <span style={{ color: "#5a6a85", fontSize: "0.82rem", fontWeight: 600 }}>Data Room</span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ background: `${roleColor}12`, border: `1px solid ${roleColor}30`, borderRadius: "999px", padding: "0.25rem 0.75rem", fontSize: "0.72rem", color: roleColor, fontWeight: 700, letterSpacing: "0.06em" }}>
              {ROLE_LABELS[role]}
            </div>
            <LogoutButton />
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem 5rem" }}>
        {/* Welcome */}
        <div style={{ marginBottom: "3rem", display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "#5a6a85", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Welcome back</p>
            <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#f0f2f8", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.5rem" }}>
              {profile?.full_name || userEmail}
            </h1>
            {profile?.organization && <p style={{ color: "#8b9bb8", fontSize: "0.9rem" }}>{profile.organization}</p>}
          </div>
          <div className="glass-card" style={{ borderRadius: "14px", padding: "1.25rem 1.5rem", borderColor: `${roleColor}25`, minWidth: "220px" }}>
            <div style={{ fontSize: "0.7rem", color: "#5a6a85", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Access Level</div>
            <div style={{ color: roleColor, fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.3rem" }}>{ROLE_LABELS[role]}</div>
            <p style={{ color: "#5a6a85", fontSize: "0.75rem", lineHeight: 1.5 }}>{ROLE_DESCRIPTIONS[role]}</p>
            <div style={{ marginTop: "0.75rem", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.7rem", color: "#60c8a0", background: "rgba(96,200,160,0.08)", padding: "0.15rem 0.5rem", borderRadius: "999px", border: "1px solid rgba(96,200,160,0.2)" }}>
                {accessible.length} folder{accessible.length !== 1 ? "s" : ""} accessible
              </span>
              {locked.length > 0 && (
                <span style={{ fontSize: "0.7rem", color: "#4a5a75", background: "rgba(255,255,255,0.03)", padding: "0.15rem 0.5rem", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {locked.length} locked
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Accessible folders */}
        {accessible.length > 0 && (
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#8b9bb8", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Your Folders</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
              {accessible.map((folder: DataRoomFolder) => (
                <Link key={folder.id} href={`/data-room/${folder.id}`} style={{ textDecoration: "none" }}>
                  <div
                    className="glass-card"
                    style={{ borderRadius: "14px", padding: "1.5rem", transition: "all 0.25s", cursor: "pointer", height: "100%" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(212,168,67,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                      <span style={{ fontSize: "2rem" }}>{folder.icon}</span>
                      <span style={{ fontSize: "0.7rem", color: "#60c8a0", background: "rgba(96,200,160,0.08)", padding: "0.2rem 0.55rem", borderRadius: "999px", border: "1px solid rgba(96,200,160,0.2)", fontWeight: 600 }}>
                        {folder.documents.length} docs
                      </span>
                    </div>
                    <h3 style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem", lineHeight: 1.4 }}>{folder.name}</h3>
                    <p style={{ color: "#5a6a85", fontSize: "0.78rem", lineHeight: 1.6, marginBottom: "1rem" }}>{folder.description}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#d4a843", fontSize: "0.78rem", fontWeight: 600 }}>
                      Open folder
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Locked folders */}
        {locked.length > 0 && (
          <div>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#8b9bb8", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>More in this Data Room</h2>
            <p style={{ color: "#5a6a85", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "1.5rem", maxWidth: "640px" }}>
              These folders are part of the full Veridian Protocol data room. They&apos;re available at higher access tiers — request elevated access to unlock them.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
              {locked.map((folder: DataRoomFolder) => (
                <div key={folder.id} style={{ borderRadius: "14px", padding: "1.5rem", background: "rgba(10,12,24,0.7)", border: "1px solid rgba(255,255,255,0.08)", position: "relative", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "2rem", opacity: 0.85 }}>{folder.icon}</span>
                    <span style={{ fontSize: "0.7rem", color: "#c8a85a", background: "rgba(212,168,67,0.08)", padding: "0.2rem 0.55rem", borderRadius: "999px", border: "1px solid rgba(212,168,67,0.22)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><rect x="2.5" y="5.5" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" /><path d="M4 5.5V4a2 2 0 0 1 4 0v1.5" stroke="currentColor" strokeWidth="1.2" /></svg>
                      Restricted
                    </span>
                  </div>
                  <h3 style={{ color: "#dbe2ee", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem", lineHeight: 1.4 }}>{folder.name}</h3>
                  <p style={{ color: "#6a7a95", fontSize: "0.78rem", lineHeight: 1.6, marginBottom: "1rem" }}>{folder.description}</p>

                  <div style={{ marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: "0.68rem", color: "#5a6a85", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                      {folder.documents.length} document{folder.documents.length !== 1 ? "s" : ""}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {folder.documents.map((doc) => (
                        <div key={doc.id} style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                          <span style={{ fontSize: "0.6rem", fontWeight: 700, color: FILE_TYPE_COLORS[doc.type] || "#8b9bb8", background: `${FILE_TYPE_COLORS[doc.type] || "#8b9bb8"}14`, border: `1px solid ${FILE_TYPE_COLORS[doc.type] || "#8b9bb8"}33`, borderRadius: "4px", padding: "0.1rem 0.35rem", letterSpacing: "0.04em", flexShrink: 0 }}>
                            {doc.type}
                          </span>
                          <span style={{ color: "#9aa8c0", fontSize: "0.78rem", lineHeight: 1.3 }}>{doc.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ color: "#5a6a85", fontSize: "0.78rem", marginTop: "1.5rem", textAlign: "center" }}>
              To request elevated access, contact{" "}
              <a href="mailto:ir@veridianprotocol.com" style={{ color: "#d4a843", textDecoration: "none" }}>ir@veridianprotocol.com</a>
            </p>
          </div>
        )}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
