export type Role =
  | "seed_investor"
  | "series_a"
  | "institutional"
  | "strategic_partner";

export interface DataRoomDocument {
  id: string;
  name: string;
  type: "PDF" | "XLSX" | "PPTX" | "DOCX";
  description: string;
  pages?: number;
  lastUpdated: string;
  available: boolean;
}

export interface DataRoomFolder {
  id: string;
  name: string;
  description: string;
  icon: string;
  roles: Role[];
  documents: DataRoomDocument[];
}

export const ROLE_LABELS: Record<Role, string> = {
  seed_investor: "Seed Investor",
  series_a: "Series A",
  institutional: "Institutional",
  strategic_partner: "Strategic Partner",
};

export const ROLE_COLORS: Record<Role, string> = {
  seed_investor: "#d4a843",
  series_a: "#60c8a0",
  institutional: "#8b9bb8",
  strategic_partner: "#a78bfa",
};

export const ROLE_DESCRIPTIONS: Record<Role, string> = {
  seed_investor: "Access to overview and pitch materials",
  series_a: "Access to financials and technical docs",
  institutional: "Access to legal, regulatory and full architecture",
  strategic_partner: "Full data room access including incorporation",
};

export const DATA_ROOM_FOLDERS: DataRoomFolder[] = [
  {
    id: "pitch-deck",
    name: "Pitch Deck & Executive Summary",
    description: "Investor-facing overview materials and executive summaries.",
    icon: "📊",
    roles: ["seed_investor", "series_a", "institutional", "strategic_partner"],
    documents: [
      {
        id: "exec-summary",
        name: "Executive Summary",
        type: "PDF",
        description: "One-page protocol overview for investors",
        pages: 1,
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "investor-deck",
        name: "Investor Presentation Deck",
        type: "PPTX",
        description: "32-slide comprehensive investor presentation",
        pages: 32,
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "protocol-overview",
        name: "DRHM Protocol Whitepaper",
        type: "PDF",
        description: "Detailed whitepaper on the protocol architecture and yield mechanics",
        pages: 28,
        lastUpdated: "May 2026",
        available: false,
      },
    ],
  },
  {
    id: "financial-model",
    name: "Financial Model & Projections",
    description: "5-year financial model, cap table, and use of funds analysis.",
    icon: "💰",
    roles: ["series_a", "institutional", "strategic_partner"],
    documents: [
      {
        id: "financial-model",
        name: "5-Year Financial Model",
        type: "XLSX",
        description: "Full revenue, expense and cash flow projections",
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "cap-table",
        name: "Cap Table & Dilution Analysis",
        type: "XLSX",
        description: "Current and post-raise ownership structure",
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "use-of-funds",
        name: "Use of Funds — Seed Round",
        type: "PDF",
        description: "Detailed allocation of seed capital across workstreams",
        pages: 5,
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "revenue-streams",
        name: "Revenue Projections by Stream",
        type: "XLSX",
        description: "Six-stream yield engine financial breakdown by year",
        lastUpdated: "May 2026",
        available: false,
      },
    ],
  },
  {
    id: "legal-regulatory",
    name: "Legal & Regulatory",
    description:
      "Regulatory pathway documentation, compliance frameworks, and legal filings.",
    icon: "⚖️",
    roles: ["institutional", "strategic_partner"],
    documents: [
      {
        id: "ptsr-roadmap",
        name: "PTSR Licensing Roadmap",
        type: "PDF",
        description: "Step-by-step regulatory licensing pathway and timeline",
        pages: 12,
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "compliance-framework",
        name: "Regulatory Compliance Framework",
        type: "PDF",
        description: "AML/KYC, FATF, and regional compliance documentation",
        pages: 22,
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "shariah-charter",
        name: "Shariah Board Charter & Certifications",
        type: "PDF",
        description: "AAOIFI-certified board structure and certification letters",
        pages: 8,
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "aml-policy",
        name: "AML/KYC Policy Documentation",
        type: "PDF",
        description: "Full AML programme and KYC onboarding procedures",
        pages: 35,
        lastUpdated: "May 2026",
        available: false,
      },
    ],
  },
  {
    id: "technical",
    name: "Technical Architecture",
    description:
      "Smart contract specifications, security audits, and system design documents.",
    icon: "🔧",
    roles: ["series_a", "institutional", "strategic_partner"],
    documents: [
      {
        id: "smart-contract-spec",
        name: "Smart Contract Architecture — Full Spec",
        type: "PDF",
        description:
          "Complete technical specification for all 8 protocol contracts",
        pages: 48,
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "security-audits",
        name: "Security Audit Reports",
        type: "PDF",
        description: "Trail of Bits and Certora audit findings and remediations",
        pages: 62,
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "ai-treasury",
        name: "AI Treasury Agent — Technical Design",
        type: "PDF",
        description:
          "RL model architecture, training data, and performance benchmarks",
        pages: 24,
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "api-docs",
        name: "API & Integration Documentation",
        type: "PDF",
        description: "Full integration guide for merchants, partners, and WPS employers",
        pages: 40,
        lastUpdated: "May 2026",
        available: false,
      },
    ],
  },
  {
    id: "incorporation",
    name: "Company Incorporation",
    description:
      "Corporate structure, founding agreements, and entity documentation.",
    icon: "🏢",
    roles: ["strategic_partner"],
    documents: [
      {
        id: "articles",
        name: "Articles of Incorporation",
        type: "PDF",
        description: "Corporate charter and founding documents",
        pages: 15,
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "shareholder-agreement",
        name: "Shareholder Agreement Template",
        type: "PDF",
        description: "Standard shareholder agreement framework",
        pages: 28,
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "founder-agreements",
        name: "Founding Team Agreements",
        type: "PDF",
        description: "Vesting schedules and founder equity terms",
        pages: 18,
        lastUpdated: "May 2026",
        available: false,
      },
      {
        id: "cap-table-detailed",
        name: "Cap Table — Full Detail",
        type: "XLSX",
        description: "Complete equity structure including all option pools",
        lastUpdated: "May 2026",
        available: false,
      },
    ],
  },
];

export function getFoldersForRole(role: Role): {
  accessible: DataRoomFolder[];
  locked: DataRoomFolder[];
} {
  const accessible = DATA_ROOM_FOLDERS.filter((f) => f.roles.includes(role));
  const locked = DATA_ROOM_FOLDERS.filter((f) => !f.roles.includes(role));
  return { accessible, locked };
}

export function getFolderById(id: string): DataRoomFolder | undefined {
  return DATA_ROOM_FOLDERS.find((f) => f.id === id);
}

export function canAccessFolder(role: Role, folderId: string): boolean {
  const folder = getFolderById(folderId);
  return folder ? folder.roles.includes(role) : false;
}

export const FILE_TYPE_COLORS: Record<string, string> = {
  PDF: "#f07a60",
  XLSX: "#60c8a0",
  PPTX: "#d4a843",
  DOCX: "#8b9bb8",
};
