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
  /** Path inside the `data-room-files` Supabase Storage bucket */
  storagePath?: string;
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
  strategic_partner: "Full data room access including incorporation and transaction",
};

const ALL: Role[] = ["seed_investor", "series_a", "institutional", "strategic_partner"];
const SERIES_A_PLUS: Role[] = ["series_a", "institutional", "strategic_partner"];
const INSTITUTIONAL_PLUS: Role[] = ["institutional", "strategic_partner"];
const STRATEGIC_ONLY: Role[] = ["strategic_partner"];

export const DATA_ROOM_FOLDERS: DataRoomFolder[] = [
  {
    id: "pitch-deck",
    name: "Pitch Deck & Executive Summary",
    description: "Investor-facing overview materials and executive summaries.",
    icon: "📊",
    roles: ALL,
    documents: [
      {
        id: "exec-summary",
        name: "Executive Summary",
        type: "DOCX",
        description: "One-page protocol overview for investors",
        lastUpdated: "May 2026",
        available: true,
        storagePath: "Pitch Deck & Executive Summary/Executive Summary.docx",
      },
      {
        id: "investor-deck",
        name: "Investor Presentation Deck",
        type: "PPTX",
        description: "32-slide comprehensive investor presentation",
        lastUpdated: "May 2026",
        available: true,
        storagePath: "Pitch Deck & Executive Summary/Investor Presentation Deck.pptx",
      },
      {
        id: "protocol-overview",
        name: "DRHM Protocol Whitepaper",
        type: "DOCX",
        description: "Detailed whitepaper on the protocol architecture and yield mechanics, with full mathematical formulations",
        pages: 16,
        lastUpdated: "May 2026",
        available: true,
        storagePath: "Pitch Deck & Executive Summary/Veridian_DRHM_Protocol_Whitepaper.docx",
      },
    ],
  },
  {
    id: "corporate-strategy",
    name: "Corporate Strategy",
    description: "Business plan, strategic roadmap, and go-to-market documentation.",
    icon: "🗺️",
    roles: SERIES_A_PLUS,
    documents: [
      {
        id: "business-plan",
        name: "Veridian Protocol Business Plan 2026",
        type: "DOCX",
        description: "Comprehensive business plan covering strategy, operations, and growth targets",
        lastUpdated: "May 2026",
        available: true,
        storagePath: "Corporate Strategy/Veridian_Protocol_FZCO_Business_Plan_2026_V1.1.docx",
      },
    ],
  },
  {
    id: "financial-model",
    name: "Financial Model & Projections",
    description: "5-year financial model, cap table, and use of funds analysis.",
    icon: "💰",
    roles: SERIES_A_PLUS,
    documents: [
      {
        id: "financial-model",
        name: "5-Year Financial Model",
        type: "XLSX",
        description: "Full revenue, expense and cash flow projections",
        lastUpdated: "May 2026",
        available: true,
        storagePath: "Financial Model & Projections/Veridian_DRHM_5Year_Financial_Model.xlsx",
      },
      {
        id: "cap-table",
        name: "Cap Table & Dilution Analysis",
        type: "XLSX",
        description: "Current and post-raise ownership structure",
        lastUpdated: "May 2026",
        available: true,
        storagePath: "Financial Model & Projections/Veridian_DRHM_Cap_Table_Dilution.xlsx",
      },
      {
        id: "use-of-funds",
        name: "Use of Funds — Seed Round",
        type: "PDF",
        description: "Detailed allocation of seed capital across workstreams",
        pages: 2,
        lastUpdated: "May 2026",
        available: true,
        storagePath: "Financial Model & Projections/Veridian_DRHM_Use_of_Funds_Seed_Round.pdf",
      },
      {
        id: "revenue-streams",
        name: "Revenue Projections by Stream",
        type: "XLSX",
        description: "Six-stream yield engine financial breakdown by year",
        lastUpdated: "May 2026",
        available: true,
        storagePath: "Financial Model & Projections/Veridian_DRHM_Revenue_Projections_by_Stream.xlsx",
      },
    ],
  },
  {
    id: "banking",
    name: "Banking & Management Accounting",
    description:
      "Bank accounts, unaudited management accounts, founder loans and expense records.",
    icon: "🏦",
    roles: INSTITUTIONAL_PLUS,
    documents: [
      {
        id: "bank-account-details",
        name: "Bank Account Details",
        type: "DOCX",
        description: "Offshore (USD) and local (AED) account details with anti-fraud protocol",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Banking & Management Accounting/VP-DR-03-BANK-001 Bank Account Details.docx",
      },
      {
        id: "management-accounts",
        name: "Management Accounts",
        type: "DOCX",
        description: "Unaudited management accounts from incorporation to date",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Banking & Management Accounting/VP-DR-03-MGMT-001 Management Accounts.docx",
      },
      {
        id: "founder-loan-records",
        name: "Founder Loan & Contribution Records",
        type: "DOCX",
        description: "Interest-free director loan log and repayment terms",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Banking & Management Accounting/VP-DR-03-LOAN-001 Founder Loan & Contribution Records.docx",
      },
      {
        id: "expense-records",
        name: "Expense Records Log",
        type: "DOCX",
        description: "Expense log and category summary (template for receipts)",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Banking & Management Accounting/VP-DR-03-EXP-001 Expense Records Log.docx",
      },
    ],
  },
  {
    id: "legal-regulatory",
    name: "Legal & Regulatory",
    description:
      "Regulatory pathway documentation, compliance frameworks, and legal filings.",
    icon: "⚖️",
    roles: INSTITUTIONAL_PLUS,
    documents: [
      {
        id: "ptsr-roadmap",
        name: "PTSR Licensing Roadmap",
        type: "PDF",
        description: "Step-by-step regulatory licensing pathway and timeline",
        pages: 16,
        lastUpdated: "May 2026",
        available: true,
        storagePath:
          "Legal & Regulatory/Veridian_DRHM_PTSR_Licensing_Roadmap.pdf",
      },
      {
        id: "compliance-framework",
        name: "Regulatory Compliance Framework",
        type: "PDF",
        description: "AML/KYC, FATF, and regional compliance documentation",
        pages: 17,
        lastUpdated: "May 2026",
        available: true,
        storagePath:
          "Legal & Regulatory/Veridian_DRHM_Regulatory_Compliance_Framework.pdf",
      },
      {
        id: "shariah-charter",
        name: "Shariah Board Charter & Certifications",
        type: "PDF",
        description: "AAOIFI-aligned board structure and certification letters",
        pages: 16,
        lastUpdated: "May 2026",
        available: true,
        storagePath:
          "Legal & Regulatory/Veridian_DRHM_Shariah_Board_Charter_and_Certifications.pdf",
      },
      {
        id: "aml-policy",
        name: "AML/KYC Policy Documentation",
        type: "PDF",
        description: "Full AML programme and KYC onboarding procedures",
        pages: 24,
        lastUpdated: "May 2026",
        available: true,
        storagePath:
          "Legal & Regulatory/Veridian_DRHM_AML_KYC_Policy_Documentation.pdf",
      },
      {
        id: "no-litigation",
        name: "No Litigation Confirmation",
        type: "DOCX",
        description: "Directors' confirmation that the Company is litigation-free and in good standing",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Legal & Regulatory/VP-DR-04-NLC-001 No Litigation Confirmation.docx",
      },
      {
        id: "power-of-attorney",
        name: "Power of Attorney Deed",
        type: "DOCX",
        description: "Executed power of attorney deed granting authority to act on behalf of the Company",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Legal & Regulatory/VP-DR-04-POA-001 Power of Attorney Deed.docx",
      },
    ],
  },
  {
    id: "technical",
    name: "Technical Architecture",
    description:
      "Smart contract specifications, security audits, and system design documents.",
    icon: "🔧",
    roles: SERIES_A_PLUS,
    documents: [
      {
        id: "smart-contract-spec",
        name: "Smart Contract Architecture — Full Spec",
        type: "PDF",
        description:
          "Complete technical specification for all 8 protocol contracts",
        pages: 26,
        lastUpdated: "May 2026",
        available: true,
        storagePath:
          "Technical Architecture/Veridian_DRHM_Smart_Contract_Architecture_Full_Spec.pdf",
      },
      {
        id: "security-audits",
        name: "Security Audit Reports",
        type: "PDF",
        description: "Trail of Bits and Certora audit findings and remediations",
        pages: 20,
        lastUpdated: "May 2026",
        available: true,
        storagePath:
          "Technical Architecture/Veridian_DRHM_Security_Audit_Reports.pdf",
      },
      {
        id: "ai-treasury",
        name: "AI Treasury Agent — Technical Design",
        type: "PDF",
        description:
          "RL model architecture, training data, and performance benchmarks",
        pages: 12,
        lastUpdated: "May 2026",
        available: true,
        storagePath:
          "Technical Architecture/Veridian_DRHM_AI_Treasury_Agent_Technical_Design.pdf",
      },
      {
        id: "api-docs",
        name: "API & Integration Documentation",
        type: "PDF",
        description: "Full integration guide for merchants, partners, and WPS employers",
        pages: 14,
        lastUpdated: "May 2026",
        available: true,
        storagePath:
          "Technical Architecture/Veridian_DRHM_API_and_Integration_Documentation.pdf",
      },
      {
        id: "repository-access-process",
        name: "Repository Access Process — Clean-Room Protocol",
        type: "DOCX",
        description: "Controlled process governing source-code review during due diligence",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Technical Architecture/VP-DR-05-RAP-001 Repository Access Process.docx",
      },
    ],
  },
  {
    id: "intellectual-property",
    name: "Intellectual Property",
    description:
      "IP asset description, founder assignment, open-source review and licence inventory.",
    icon: "🧠",
    roles: INSTITUTIONAL_PLUS,
    documents: [
      {
        id: "ip-asset-description",
        name: "IP Asset Description",
        type: "DOCX",
        description: "Inventory of the DRHM intellectual property by component",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Intellectual Property/VP-DR-02-IPA-001 IP Asset Description.docx",
      },
      {
        id: "ip-assignment",
        name: "IP Assignment Agreement (founders → company)",
        type: "DOCX",
        description: "Deed assigning all founder-developed IP to the Company — confirms clean title",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Intellectual Property/VP-DR-02-IP-ASSIGN-001-2026 IP Assignment Agreement.docx",
      },
      {
        id: "open-source-list",
        name: "Open-Source Component List",
        type: "DOCX",
        description: "Dependency inventory with copyleft / GPL risk assessment",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Intellectual Property/VP-DR-02-OSS-001 Open-Source Component List.docx",
      },
      {
        id: "third-party-licences",
        name: "Third-Party Licence Inventory",
        type: "DOCX",
        description: "Commercial services and licences with change-of-control transferability",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Intellectual Property/VP-DR-02-TPI-001 Third-Party Licence Inventory.docx",
      },
      {
        id: "founder-ip-waivers",
        name: "Founder IP Waiver Confirmations",
        type: "DOCX",
        description: "Both founders waive personal IP claims and confirm full assignment",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Intellectual Property/VP-DR-02-IPW-001 Founder IP Waiver Confirmations.docx",
      },
    ],
  },
  {
    id: "incorporation",
    name: "Company Incorporation",
    description:
      "Corporate structure, founding agreements, registers and entity documentation.",
    icon: "🏢",
    roles: STRATEGIC_ONLY,
    documents: [
      {
        id: "moa",
        name: "Memorandum & Articles of Association",
        type: "PDF",
        description: "Executed MOA — RAK Innovation City",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Company Incorporation/VP-DR-01-001 Memorandum and Articles of Association.pdf",
      },
      {
        id: "shareholders-agreement",
        name: "Shareholders Agreement",
        type: "PDF",
        description: "Executed shareholders agreement between the founders",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Company Incorporation/VP-DR-01-002 Shareholders Agreement.pdf",
      },
      {
        id: "ubo-declaration-melvine",
        name: "UBO Declaration Form — Melvine Mathews Kurian",
        type: "PDF",
        description: "Ultimate beneficial owner declaration (signed) — Melvine Mathews Kurian, CTO",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Company Incorporation/VP-DR-01-003 UBO Declaration Form - Melvine Mathews Kurian - signed.pdf",
      },
      {
        id: "ubo-declaration-serif",
        name: "UBO Declaration Form — Serif Can Elmas",
        type: "PDF",
        description: "Ultimate beneficial owner declaration (signed) — Serif Can Elmas, CEO",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Company Incorporation/VP-DR-01-003 UBO Declaration Form - Serif Can Elmas - signed.pdf",
      },
      {
        id: "source-of-wealth-melvine",
        name: "Source of Wealth Form — Melvine Mathews Kurian",
        type: "PDF",
        description: "Source of wealth declaration (signed) — Melvine Mathews Kurian, CTO",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Company Incorporation/VP-DR-01-004 Source of Wealth Form - Melvine Mathews Kurian - signed.pdf",
      },
      {
        id: "source-of-wealth-serif",
        name: "Source of Wealth Form — Serif Can Elmas",
        type: "PDF",
        description: "Source of wealth declaration (signed) — Serif Can Elmas, CEO",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Company Incorporation/VP-DR-01-004 Source of Wealth Form - Serif Can Elmas - signed.pdf",
      },
      {
        id: "client-confirmation-melvine",
        name: "Client Confirmation Letter — Melvine Mathews Kurian",
        type: "PDF",
        description: "Signed client confirmation letter — Melvine Mathews Kurian, CTO",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Company Incorporation/VP-DR-01-005 Client Confirmation Letter - Melvine Mathews Kurian - signed.pdf",
      },
      {
        id: "client-confirmation-serif",
        name: "Client Confirmation Letter — Serif Can Elmas",
        type: "PDF",
        description: "Signed client confirmation letter — Serif Can Elmas, CEO",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Company Incorporation/VP-DR-01-005 Client Confirmation Letter - Serif Can Elmas - signed.pdf",
      },
      {
        id: "register-of-members",
        name: "Register of Members",
        type: "DOCX",
        description: "Shareholdings: Class A 80 / Class B 20",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Company Incorporation/VP-DR-01-ROM-001 Register of Members.docx",
      },
      {
        id: "register-of-directors",
        name: "Register of Directors",
        type: "DOCX",
        description: "Current and former directors",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Company Incorporation/VP-DR-01-ROD-001 Register of Directors.docx",
      },
      {
        id: "share-certificate-confirmation",
        name: "Share Certificate Confirmation",
        type: "DOCX",
        description: "Confirmation of share certificates 001 (Class A) and 002 (Class B)",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Company Incorporation/VP-DR-01-SC-001 Share Certificate Confirmation.docx",
      },
      {
        id: "board-minutes",
        name: "Board Minutes — First Meeting & Transaction",
        type: "DOCX",
        description: "Resolutions BR-001 to BR-009, including engagement with Neo Digital",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Company Incorporation/VP-DR-01-BM-001-2026 Board Minutes.docx",
      },
    ],
  },
  {
    id: "people",
    name: "Team & People",
    description: "Founder profiles, CVs and key-person information.",
    icon: "👥",
    roles: SERIES_A_PLUS,
    documents: [
      {
        id: "founder-cvs",
        name: "Founder Profiles & CVs",
        type: "DOCX",
        description: "Profiles for Melvine Mathews Kurian (CTO) and Serif Can Elmas (CEO)",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Team & People/VP-DR-06-CV-001 Founder Profiles and CVs.docx",
      },
    ],
  },
  {
    id: "transaction",
    name: "Transaction — Neo Digital",
    description:
      "Deal documents for the proposed Neo Digital Services investment and acquisition.",
    icon: "🤝",
    roles: STRATEGIC_ONLY,
    documents: [
      {
        id: "data-room-index",
        name: "Master Data Room Index",
        type: "DOCX",
        description: "Complete index of all data-room documents with status and priority upload list",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Transaction - Neo Digital/VP-DR-00-INDEX-001 Master Data Room Index.docx",
      },
      {
        id: "mutual-nda",
        name: "Mutual Non-Disclosure Agreement",
        type: "DOCX",
        description: "Mutual NDA between Veridian Protocol and Neo Digital Services",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Transaction - Neo Digital/VP-NDA-001-2026 Mutual NDA - Neo Digital.docx",
      },
      {
        id: "term-sheet",
        name: "Indicative Term Sheet",
        type: "DOCX",
        description: "Non-binding term sheet for the staged investment and acquisition",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Transaction - Neo Digital/VP-TS-001-2026 Indicative Term Sheet.docx",
      },
      {
        id: "cip",
        name: "Confidential Information Package (CIP)",
        type: "DOCX",
        description: "Acquirer-facing overview of the platform, IP, team and transaction",
        lastUpdated: "June 2026",
        available: true,
        storagePath: "Transaction - Neo Digital/VP-CIP-001-2026 Confidential Information Package.docx",
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
