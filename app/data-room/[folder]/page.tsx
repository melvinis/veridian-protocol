import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import LogoutButton from "@/components/data-room/LogoutButton";
import {
  getFolderById,
  canAccessFolder,
  ROLE_LABELS,
  ROLE_COLORS,
  FILE_TYPE_COLORS,
  type Role,
  type DataRoomDocument,
} from "@/lib/data-room/config";

interface PageProps {
  params: Promise<{ folder: string }>;
}

export default async function FolderPage({ params }: PageProps) {
  const { folder: folderId } = await params;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/data-room/login");

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("full_name, organization, role")
    .eq("id", user.id)
    .single();

  const role = (profile?.role || "seed_investor") as Role;
  const folder = getFolderById(folderId);

  if (!folder) notFound();

  // Access check — redirect to data room if user can't access this folder
  if (!canAccessFolder(role, folderId)) {
    redirect("/data-room");
  }

  const roleColor = ROLE_COLORS[role];

  return (
    <div style={{ minHeight: "100vh", background: "#05050f", position: "relative" }}>
      <div className="blob-gold" style={{ position: "fixed", width: "500px", height: "500px", top: "-100px", right: "-100px", pointerEvents: "none", opacity: 0.12 }} />

      {/* Top nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(5,5,15,0.92)", borderBottom: "1px solid rgba(212,168,67,0.12)",
        backdropFilter: "blur(16px)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
              <Image src="/veridian-mark.svg" alt="Veridian Protocol" width={24} height={24} />
              <span style={{ color: "#5a6a85", fontWeight: 600, fontSize: "0.85rem" }}>Veridian</span>
            </Link>
            <span style={{ color: "#3a4a60", fontSize: "0.75rem" }}>›</span>
            <Link href="/data-room" style={{ color: "#5a6a85", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>Data Room</Link>
            <span style={{ color: "#3a4a60", fontSize: "0.75rem" }}>›</span>
            <span style={{ color: "#f0f2f8", fontSize: "0.85rem", fontWeight: 600 }}>{folder.name}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
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

      {/* Content */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "3rem 2rem 5rem" }}>

        {/* Folder header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <Link
            href="/data-room"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              color: "#5a6a85", fontSize: "0.8rem", textDecoration: "none",
              marginBottom: "1.25rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a843")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5a6a85")}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Data Room
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2.5rem" }}>{folder.icon}</span>
            <div>
              <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#f0f2f8", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                {folder.name}
              </h1>
              <p style={{ color: "#8b9bb8", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                {folder.description}
              </p>
            </div>
          </div>
        </div>

        {/* Documents list */}
        <div className="glass-card" style={{ borderRadius: "16px", overflow: "hidden" }}>
          {/* Table header */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            gap: "1rem",
            padding: "0.875rem 1.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
          }}>
            <span style={{ color: "#4a5a75", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Document</span>
            <span style={{ color: "#4a5a75", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "right" }}>Updated</span>
            <span style={{ color: "#4a5a75", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "right", minWidth: "100px" }}>Action</span>
          </div>

          {folder.documents.map((doc: DataRoomDocument, i: number) => {
            const typeColor = FILE_TYPE_COLORS[doc.type] || "#8b9bb8";
            return (
              <div
                key={doc.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto auto",
                  gap: "1rem",
                  padding: "1.25rem 1.5rem",
                  borderBottom: i < folder.documents.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  alignItems: "center",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {/* Doc info */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "8px", flexShrink: 0,
                    background: `${typeColor}12`, border: `1px solid ${typeColor}25`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.62rem", fontWeight: 800, color: typeColor, letterSpacing: "0.04em",
                  }}>
                    {doc.type}
                  </div>
                  <div>
                    <div style={{ color: "#f0f2f8", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.2rem" }}>
                      {doc.name}
                    </div>
                    <div style={{ color: "#5a6a85", fontSize: "0.77rem", lineHeight: 1.5 }}>
                      {doc.description}
                      {doc.pages && (
                        <span style={{ color: "#3a4a60", marginLeft: "0.5rem" }}>
                          · {doc.pages} {doc.pages === 1 ? "page" : "pages"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Updated */}
                <div style={{ color: "#3a4a60", fontSize: "0.78rem", textAlign: "right", whiteSpace: "nowrap" }}>
                  {doc.lastUpdated}
                </div>

                {/* Action */}
                <div style={{ textAlign: "right", minWidth: "100px" }}>
                  {doc.available ? (
                    <a
                      href="#"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "0.35rem",
                        color: "#d4a843", fontSize: "0.78rem", fontWeight: 600,
                        background: "rgba(212,168,67,0.08)", border: "1px solid rgba(212,168,67,0.25)",
                        borderRadius: "6px", padding: "0.35rem 0.75rem", textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M5.5 1v6M2.5 5l3 3 3-3M1 9h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Download
                    </a>
                  ) : (
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: "0.35rem",
                      color: "#3a4a60", fontSize: "0.75rem", fontWeight: 600,
                      background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "6px", padding: "0.35rem 0.75rem",
                    }}>
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* NDA notice */}
        <div style={{
          marginTop: "1.5rem", display: "flex", gap: "0.75rem", alignItems: "flex-start",
          background: "rgba(212,168,67,0.04)", border: "1px solid rgba(212,168,67,0.1)",
          borderRadius: "10px", padding: "1rem 1.25rem",
        }}>
          <span style={{ fontSize: "1rem", flexShrink: 0 }}>🔐</span>
          <p style={{ color: "#4a5a70", fontSize: "0.77rem", lineHeight: 1.6 }}>
            All documents in this data room are confidential and subject to the terms of your non-disclosure agreement.
            Unauthorised distribution is strictly prohibited. For questions, contact{" "}
            <a href="mailto:ir@veridianprotocol.com" style={{ color: "#d4a843", textDecoration: "none" }}>
              ir@veridianprotocol.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
