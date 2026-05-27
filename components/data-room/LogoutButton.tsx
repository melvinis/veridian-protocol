"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "8px",
        color: "#5a6a85",
        fontSize: "0.8rem",
        padding: "0.45rem 1rem",
        cursor: "pointer",
        transition: "all 0.2s",
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#f07a60";
        e.currentTarget.style.borderColor = "rgba(240,122,96,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#5a6a85";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M5 1H2a1 1 0 00-1 1v8a1 1 0 001 1h3M8 9l3-3-3-3M11 6H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Sign out
    </button>
  );
}
