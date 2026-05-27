import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import LogoutButton from "@/components/data-room/LogoutButton";
import {
  getFoldersForRole,
  ROLE_LABELS,
  ROLE_COLORS,
  ROLE_DESCRIPTIONS,
  type Role,
  type DataRoomFolder,
} from "@/lib/data-room/config";

export default async function DataRoomPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/data-room/login");

  // Fetch profile with role
  const { data: profile } = await supabase
    .from("user_profiles")
    .select("full_name, organization, role")
    .eq("id", user.id)
    .single();

  const role = (profile?.role || "seed_investor") as Role;
  const { accessible, locked } = getFoldersForRole(role);
  const roleColor = ROLE_COLORS[role];

  return (
    <div style={{ minHeight: "100vh", background: "#05050f", position: "relative" }}>
      {/* Subtle background */}
      <div className="blob-gold" style={{ position: "fixed", width: "600px", height: "600px", top: "10%", right: "-200px", pointerEvents: "none", opacity: 0.15 }} />
      <div className="blob-blue" style={{ position: "fixed", width: "500px", height: "500px", bottom: "0", left: "-150px", pointerEvents: "none", opacity: 0.2 }} />

      {/* Top nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(5,5,15,0.92)", borderBottom: "1px solid rgba(212,168,67,0.12)",
        backdropFilter: "blur(16px)",
      }}>
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
            {/* Role badge */}
            <div style={{
              background: `${roleColor}12`,
              border: `1px solid ${roleColor}30`,
              borderRadius: "999px",
              padding: "0.25rem 0.75rem",
              fontSize: "0.72rem",
              color: roleColor,
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}>
              {ROLE_LABELS[role]}
            </div>
            <LogoutButton />
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem 5rem" }}>

        {/* Welcome header */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <p style={{ color: "#5a6a85", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Welcome back
              </p>
              <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#f0f2f8", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                {profile?.full_name || user.email}
              </h1>
              {profile?.organization && (
                <p style={{ color: "#8b9bb8", fontSize: "0.9rem" }}>{profile.organization}</p>
              )}
            </div>

            {/* Access summary card */}
            <div className="glass-card" style={{
              borderRadius: "14px", padding: "1.25rem 1.5rem",
              borderColor: `${roleColor}25`, minWidth: "220px",
            }}>
              <div style={{ fontSize: "0.7rem", color: "#5a6a85", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Access Level
              </div>
              <div style={{ color: roleColor, fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.3rem" }}>
                {ROLE_LABELS[role]}
              </div>
              <p style={{ color: "#5a6a85", fontSize: "0.75rem", lineHeight: 1.5 }}>
                {ROLE_DESCRIPTIONS[role]}
              </p>
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
        </div>

        {/* Accessible folders */}
        {accessible.length > 0 && (
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#8b9bb8", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Your Folders
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
              {accessible.map((folder: DataRoomFolder) => (
                <Link
                  key={folder.id}
                  href={`/data-room/${folder.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="glass-card"
                    style={{
                      borderRadius: "14px", padding: "1.5rem",
                      transition: "all 0.25s", cursor: "pointer",
                      height: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212,168,67,0.3)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                      <span style={{ fontSize: "2rem" }}>{folder.icon}</span>
                      <span style={{ fontSize: "0.7rem", color: "#60c8a0", background: "rgba(96,200,160,0.08)", padding: "0.2rem 0.55rem", borderRadius: "999px", border: "1px solid rgba(96,200,160,0.2)", fontWeight: 600 }}>
                        {folder.documents.length} docs
                      </span>
                    </div>
                    <h3 style={{ color: "#f0f2f8", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                      {folder.name}
                    </h3>
                    <p style={{ color: "#5a6a85", fontSize: "0.78rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                      {folder.description}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#d4a843", fontSize: "0.78rem", fontWeight: 600 }}>
                      Open folder
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
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
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#3a4a60", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Restricted Folders
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
              {locked.map((folder: DataRoomFolder) => (
                <div
                  key={folder.id}
                  style={{
                    borderRadius: "14px", padding: "1.5rem",
                    background: "rgba(5,5,15,0.6)",
                    border: "1px solid rgba(255,255,255,0.04)",
                    opacity: 0.55,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "2rem", filter: "grayscale(1)", opacity: 0.4 }}>{folder.icon}</span>
                    <span style={{ fontSize: "0.7rem", color: "#3a4a60", background: "rgba(255,255,255,0.03)", padding: "0.2rem 0.55rem", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.06)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      🔒 Restricted
                    </span>
                  </div>
                  <h3 style={{ color: "#4a5a70", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                    {folder.name}
                  </h3>
                  <p style={{ color: "#2a3a50", fontSize: "0.78rem", lineHeight: 1.6 }}>
                    {folder.description}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ color: "#2a3a50", fontSize: "0.75rem", marginTop: "1.25rem", textAlign: "center" }}>
              To request elevated access, contact{" "}
              <a href="mailto:ir@veridianprotocol.com" style={{ color: "#4a5a70", textDecoration: "none" }}>
                ir@veridianprotocol.com
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
