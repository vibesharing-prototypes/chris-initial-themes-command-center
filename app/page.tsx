"use client";

import React from "react";

/* ------------------------------------------------------------------ */
/*  Theme CSS (embedded — all 3 Atlas token themes)                    */
/* ------------------------------------------------------------------ */

const themeCSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

[data-theme="lens"], :root {
  --bg-base: #ffffff;
  --bg-surface: #ffffff;
  --bg-elevated: #f3f3f3;
  --bg-overlay: #ffffff;
  --bg-inset: #fafafa;
  --border-default: #dadada;
  --border-muted: #dadada;
  --border-emphasis: #8c8e92;
  --text-primary: #282e37;
  --text-secondary: #6f7377;
  --text-muted: #a0a2a5;
  --text-disabled: #e6e6e6;
  --text-inverse: #ffffff;
  --action-default: #282e37;
  --action-hover: #464e53;
  --action-muted: #282e3718;
  --status-success: #3f6900;
  --status-success-muted: #d2ff9c;
  --status-warning: #6a5f00;
  --status-warning-muted: #fff2aa;
  --status-error: #921a1d;
  --status-error-muted: #ffedeb;
  --status-info: #006879;
  --status-info-muted: #d7f6ff;
  --accent-purple: #282e37;
  --accent-purple-muted: #fdebff;
  --accent-orange: #924c00;
  --accent-orange-muted: #ffede3;
  --brand-primary: #ee312e;
  --brand-secondary: #af292e;
  --brand-tertiary: #d3222a;
  --shadow-low: 0px 0px 2px 0px #0000001a, 0px 8px 16px 0px #0000001a;
  --shadow-medium: 0px 6px 20px 0px #161b2b1f, 0px 0px 2px 0px #0000001a;
  --shadow-high: 0px 10px 24px 0px #161b2b29, 0px 0px 2px 0px #161b2b1a;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  --font-sans: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
  --space-xs: 2px;
  --space-sm: 4px;
  --space-1: 8px;
  --space-1-5: 12px;
  --space-2: 16px;
  --space-2-5: 20px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --theme-transition: background-color 0.4s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.4s ease;
}

[data-theme="atlas-light"] {
  --bg-base: #ffffff;
  --bg-surface: #ffffff;
  --bg-elevated: #f0f0f3;
  --bg-overlay: #ffffff;
  --bg-inset: #f9f9fc;
  --border-default: #e2e2e5;
  --border-muted: #e2e2e5;
  --border-emphasis: #8f9193;
  --text-primary: #242628;
  --text-secondary: #5d5e61;
  --text-muted: #aaabae;
  --text-disabled: #e2e2e5;
  --text-inverse: #ffffff;
  --action-default: #0040d5;
  --action-hover: #4069fe;
  --action-muted: #0040d518;
  --status-success: #005f35;
  --status-success-muted: #c2ffd2;
  --status-warning: #5d5300;
  --status-warning-muted: #fff2aa;
  --status-error: #921a1d;
  --status-error-muted: #ffedeb;
  --status-info: #19519d;
  --status-info-muted: #ecf0ff;
  --accent-purple: #41005d;
  --accent-purple-muted: #f7d8ff;
  --accent-orange: #804200;
  --accent-orange-muted: #ffede3;
  --brand-primary: #ee312e;
  --brand-secondary: #af292e;
  --brand-tertiary: #d3222a;
}

[data-theme="atlas-dark"] {
  --bg-base: #1f2536;
  --bg-surface: #1f2536;
  --bg-elevated: #353b4d;
  --bg-overlay: #0b184c;
  --bg-inset: #2a3041;
  --border-default: #4c5265;
  --border-muted: #404659;
  --border-emphasis: #71768b;
  --text-primary: #ffffff;
  --text-secondary: #8a90a5;
  --text-muted: #71768b;
  --text-disabled: #4c5265;
  --text-inverse: #00293c;
  --action-default: #00b7fc;
  --action-hover: #c6e7ff;
  --action-muted: #00b7fc22;
  --status-success: #c2ffd2;
  --status-success-muted: #004525;
  --status-warning: #fff2aa;
  --status-warning-muted: #443c00;
  --status-error: #ff5450;
  --status-error-muted: #540006;
  --status-info: #e4f3ff;
  --status-info-muted: #00405b;
  --accent-purple: #fffbff;
  --accent-purple-muted: #8215b2;
  --accent-orange: #ffb780;
  --accent-orange-muted: #5e2f00;
  --brand-primary: #ee312e;
  --brand-secondary: #af292e;
  --brand-tertiary: #d3222a;
}

* { transition: var(--theme-transition); }
svg, svg *, img, input, button span, .no-transition { transition: none !important; }
body {
  font-family: var(--font-sans);
  background-color: var(--bg-base);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

/* ------------------------------------------------------------------ */
/*  Utility                                                            */
/* ------------------------------------------------------------------ */

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* ------------------------------------------------------------------ */
/*  Diligent Logo                                                      */
/* ------------------------------------------------------------------ */

function DiligentLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 222 222" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path fill="var(--brand-primary)" d="M200.87,110.85c0,33.96-12.19,61.94-33.03,81.28c-0.24,0.21-0.42,0.43-0.66,0.64c-15.5,14.13-35.71,23.52-59.24,27.11l-1.59-1.62l35.07-201.75l1.32-3.69C178.64,30.36,200.87,65.37,200.87,110.85z"/>
        <path fill="var(--brand-secondary)" d="M142.75,12.83l-0.99,1.47L0.74,119.34L0,118.65c0,0,0-0.03,0-0.06V0.45h85.63c5.91,0,11.64,0.34,17.19,1.01h0.21c14.02,1.66,26.93,5.31,38.48,10.78C141.97,12.46,142.75,12.83,142.75,12.83z"/>
        <path fill="var(--brand-tertiary)" d="M142.75,12.83L0,118.65v99.27v3.62h85.96c7.61,0,14.94-0.58,21.99-1.66C107.95,219.89,142.75,12.83,142.75,12.83z"/>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Base Components                                                    */
/* ------------------------------------------------------------------ */

function Card({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={cn("rounded-[var(--radius-lg)] p-5", className)}
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-default)",
        boxShadow: "var(--shadow-low)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info" | "accent";
}) {
  const styles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: "var(--bg-elevated)",
      border: "1px solid var(--border-default)",
      color: "var(--text-secondary)",
    },
    success: {
      backgroundColor: "var(--status-success-muted)",
      border: "1px solid color-mix(in srgb, var(--status-success) 40%, transparent)",
      color: "var(--status-success)",
    },
    warning: {
      backgroundColor: "var(--status-warning-muted)",
      border: "1px solid color-mix(in srgb, var(--status-warning) 40%, transparent)",
      color: "var(--status-warning)",
    },
    error: {
      backgroundColor: "var(--status-error-muted)",
      border: "1px solid color-mix(in srgb, var(--status-error) 40%, transparent)",
      color: "var(--status-error)",
    },
    info: {
      backgroundColor: "var(--status-info-muted)",
      border: "1px solid color-mix(in srgb, var(--status-info) 40%, transparent)",
      color: "var(--status-info)",
    },
    accent: {
      backgroundColor: "var(--accent-purple-muted)",
      border: "1px solid color-mix(in srgb, var(--accent-purple) 40%, transparent)",
      color: "var(--accent-purple)",
    },
  };

  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase"
      style={styles[variant]}
    >
      {children}
    </span>
  );
}

function Button({
  children,
  variant = "primary",
  className,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  const styles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "var(--action-default)",
      color: "var(--text-inverse)",
      border: "1px solid var(--action-default)",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "var(--action-default)",
      border: "1px solid var(--action-default)",
    },
    ghost: {
      backgroundColor: "var(--bg-elevated)",
      color: "var(--text-secondary)",
      border: "1px solid var(--border-default)",
    },
  };

  return (
    <button
      onClick={onClick}
      className={cn("rounded-[var(--radius-md)] px-4 py-1.5 text-xs font-medium transition-opacity hover:opacity-80", className)}
      style={styles[variant]}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type DetectedRisk = {
  id: string;
  title: string;
  severity: "critical" | "high" | "medium";
  source: string;
  detectedAt: string;
  summary: string;
  currentDisclosure: string | null;
  disclosureGap: string;
  recommendedAction: string;
  affectedFilings: string[];
};

const detectedRisks: DetectedRisk[] = [
  {
    id: "risk-1",
    title: "Taiwan Strait Geopolitical Tensions",
    severity: "critical",
    source: "Risk Intelligence + News Monitoring",
    detectedAt: "Today, 8:47 AM",
    summary: "Escalating tensions in the Taiwan Strait may disrupt semiconductor supply chain. 47% of our chip suppliers have Taiwan-based operations.",
    currentDisclosure: "Item 1A mentions 'general supply chain risks' but does not specifically address semiconductor concentration or geopolitical exposure.",
    disclosureGap: "No specific disclosure of semiconductor supply concentration or Taiwan geopolitical risk",
    recommendedAction: "Update Item 1A Risk Factors to include specific semiconductor supply chain and geopolitical risk language",
    affectedFilings: ["10-K Risk Factors", "Upcoming 10-Q MD&A"],
  },
  {
    id: "risk-2",
    title: "Critical Vendor Cybersecurity Breach",
    severity: "high",
    source: "Vendor Intelligence",
    detectedAt: "Today, 9:12 AM",
    summary: "CloudSecure Inc. (our primary data processing vendor) disclosed a ransomware incident. They process customer PII under 3 of our data processing agreements.",
    currentDisclosure: "Item 1A includes cybersecurity risks but focuses on direct company systems, not vendor/third-party exposure.",
    disclosureGap: "Third-party data processor breach exposure not specifically disclosed",
    recommendedAction: "Assess notification obligations under state breach laws; consider 8-K materiality; update vendor risk disclosure",
    affectedFilings: ["Potential 8-K", "10-K Risk Factors", "Privacy Policy"],
  },
  {
    id: "risk-3",
    title: "EU Digital Markets Act Enforcement Pattern",
    severity: "high",
    source: "Regulatory Watch",
    detectedAt: "Today, 7:23 AM",
    summary: "EC initiated enforcement actions against 3 companies in our sector for DMA non-compliance. Pattern analysis suggests our EU operations may face similar scrutiny.",
    currentDisclosure: "10-K mentions EU regulatory environment generally but DMA-specific risks not detailed.",
    disclosureGap: "DMA compliance risks and potential enforcement exposure not disclosed",
    recommendedAction: "Add DMA-specific risk factor; brief board on EU regulatory exposure; review compliance posture",
    affectedFilings: ["10-K Risk Factors", "Board Risk Committee Materials"],
  },
];

const agents = [
  { name: "Risk Intelligence", lastRun: "8 min ago", state: "ALERT" },
  { name: "Regulatory Watch", lastRun: "15 min ago", state: "ALERT" },
  { name: "Vendor Intelligence", lastRun: "32 min ago", state: "ALERT" },
  { name: "Board Materials Monitor", lastRun: "1 hr ago", state: "Needs attention" },
  { name: "10K Disclosure Tracker", lastRun: "2 hr ago", state: "Review recommended" },
];

const workflowStages = [
  { id: "detect", label: "Risk Detected", status: "completed" as const },
  { id: "assess", label: "Assess & Prioritize", status: "current" as const },
  { id: "draft", label: "Draft Updates", status: "pending" as const },
  { id: "review", label: "Legal Review", status: "pending" as const },
  { id: "notify", label: "Notify Board", status: "pending" as const },
  { id: "file", label: "File/Disclose", status: "pending" as const },
];

const recentApps = [
  { name: "Boards", description: "Finalized Q1 board meeting agenda and uploaded supporting materials to the board book.", lastUsed: "Jan 16" },
  { name: "Entities", description: "Verified annual report filings for 3 subsidiaries; all jurisdictions current.", lastUsed: "Jan 15" },
  { name: "Policy Manager", description: "Reviewed attestation status for updated Code of Conduct; 94% employee completion.", lastUsed: "Jan 14" },
  { name: "Diligent AI Reporting", description: "Generated executive summary of legal department KPIs for leadership review.", lastUsed: "Jan 12" },
];

const nextActions = [
  { title: "Review Taiwan supply chain risk assessment", detail: "Critical severity. 47% of chip suppliers have Taiwan operations. May require 10K Item 1A update.", app: "Risk Intelligence" },
  { title: "Assess vendor breach notification obligations", detail: "CloudSecure incident may trigger state breach notification laws. Check DPA terms.", app: "Vendor Intelligence" },
  { title: "Brief Audit Committee on emerging risks", detail: "Board meeting in 12 days. Current materials don't reflect these risks.", app: "Boards" },
  { title: "Coordinate with CFO on disclosure approach", detail: "Financial impact assessment needed for materiality determination.", app: "AI Reporting" },
];

const whatsNew = [
  { title: "Boards: Consent agenda workflows", detail: "Streamline routine approvals with new consent agenda templates and e-signatures." },
  { title: "Entities: Jurisdiction alerts", detail: "Get notified of filing deadline changes and regulatory updates by jurisdiction." },
  { title: "AI Reporting: Natural language queries", detail: "Ask questions in plain English and get instant governance insights." },
];

const activityLog = [
  "Risk Intelligence: 3 emerging risks detected requiring disclosure review (8:47 AM)",
  "Regulatory Watch: EU DMA enforcement pattern identified affecting our sector (7:23 AM)",
  "Vendor Intelligence: CloudSecure Inc. cybersecurity incident reported (9:12 AM)",
  "Board Materials Monitor: Gap detected between current materials and emerging risks",
  "10K Disclosure Tracker: Current risk factors flagged for review",
];

const stakeholders = [
  { name: "Sarah Chen", role: "Securities Counsel", task: "Review 10K disclosure language and materiality assessment", gradient: "from-blue-500 to-purple-500" },
  { name: "Michael Torres", role: "CFO", task: "Financial impact assessment and MD&A implications", gradient: "from-green-500 to-blue-500" },
  { name: "Board Audit Committee", role: "3 members", task: "Risk oversight and disclosure approval", gradient: "from-orange-500 to-red-500" },
];

/* ------------------------------------------------------------------ */
/*  Section Components                                                 */
/* ------------------------------------------------------------------ */

function TopNav() {
  return (
    <div
      className="sticky top-0 z-10 px-6 py-4 backdrop-blur"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg-base) 90%, transparent)",
        borderBottom: "1px solid var(--border-default)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <DiligentLogo className="h-7 w-auto" />
            <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              GRC Command Center
            </span>
          </div>
          <Badge variant="info">General Counsel</Badge>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">Recent activity (5)</Button>
          <div
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)]"
            style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-default)", color: "var(--text-secondary)" }}
          >
            <span
              className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full"
              style={{ backgroundColor: "var(--status-error)", boxShadow: "0 0 0 2px var(--bg-base)" }}
            />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
        </div>
      </div>
    </div>
  );
}

function AlertHero() {
  return (
    <header
      className="rounded-[var(--radius-xl)] p-10"
      style={{
        border: "1px solid color-mix(in srgb, var(--status-error) 40%, transparent)",
        background: `linear-gradient(135deg, color-mix(in srgb, var(--status-error) 10%, transparent), var(--bg-base))`,
      }}
    >
      <div className="flex justify-center mb-4">
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
          style={{
            border: "1px solid color-mix(in srgb, var(--status-error) 50%, transparent)",
            backgroundColor: "var(--status-error-muted)",
            color: "var(--status-error)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--status-error)" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--status-error)" }} />
          </span>
          Agents Detected Emerging Risks
        </span>
      </div>

      <h1 className="text-center text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
        3 risks require disclosure review
      </h1>
      <p className="mt-4 text-center text-sm max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
        Your monitoring agents detected emerging risks that may not be adequately disclosed in current SEC filings
        or Board meeting materials. Review recommended before the Feb 28 Board meeting.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        {[
          { count: 1, label: "Critical", color: "var(--status-error)" },
          { count: 2, label: "High", color: "var(--status-warning)" },
          { count: 3, label: "Filings Affected", color: "var(--action-default)" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[var(--radius-md)] px-4 py-2 text-center"
            style={{
              border: `1px solid color-mix(in srgb, ${item.color} 40%, transparent)`,
              backgroundColor: `color-mix(in srgb, ${item.color} 10%, transparent)`,
            }}
          >
            <p className="text-2xl font-semibold" style={{ color: item.color }}>{item.count}</p>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border-default)" }}>
        <p className="text-xs text-center uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Response Workflow</p>
        <div className="flex items-center justify-center gap-2">
          {workflowStages.map((stage, idx) => (
            <React.Fragment key={stage.id}>
              <div
                className="flex items-center gap-2 rounded-[var(--radius-sm)] px-3 py-1.5 text-xs"
                style={{
                  backgroundColor: stage.status === "completed"
                    ? "var(--status-success-muted)"
                    : stage.status === "current"
                    ? "var(--status-warning-muted)"
                    : "var(--bg-elevated)",
                  color: stage.status === "completed"
                    ? "var(--status-success)"
                    : stage.status === "current"
                    ? "var(--status-warning)"
                    : "var(--text-muted)",
                  ...(stage.status === "current" ? { boxShadow: `0 0 0 2px color-mix(in srgb, var(--status-warning) 50%, transparent)` } : {}),
                }}
              >
                {stage.status === "completed" && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                )}
                <span className="font-medium">{stage.label}</span>
              </div>
              {idx < workflowStages.length - 1 && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={stage.status === "completed" ? "var(--status-success)" : "var(--border-default)"} strokeWidth="2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}

function AgentStatusBar() {
  return (
    <div
      className="mt-4 rounded-[var(--radius-lg)] px-4 py-3"
      style={{
        backgroundColor: "var(--bg-elevated)",
        border: "1px solid var(--border-default)",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          Legal Monitoring Agents
        </span>
      </div>
      <div className="flex flex-wrap gap-3">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="flex items-center gap-2 rounded-[var(--radius-md)] px-3 py-2 text-sm"
            style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-default)" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: agent.state === "ALERT" ? "var(--status-warning)" : "var(--text-muted)",
              }}
            />
            <span className="font-medium" style={{ color: "var(--text-primary)" }}>{agent.name}</span>
            <span style={{ color: "var(--text-muted)" }}>·</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>{agent.lastRun}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RiskCards() {
  const severityColor = (severity: string) => {
    if (severity === "critical") return "var(--status-error)";
    if (severity === "high") return "var(--status-warning)";
    return "var(--accent-orange)";
  };

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>Detected Risks Requiring Review</h2>
          <Badge variant="error">{detectedRisks.length} risks</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost">Review detection sources</Button>
          <Button variant="secondary">Assign Owners &rarr;</Button>
        </div>
      </div>

      <div className="space-y-4">
        {detectedRisks.map((risk) => {
          const color = severityColor(risk.severity);
          return (
            <Card key={risk.id} className="p-0 overflow-hidden" style={{ borderColor: `color-mix(in srgb, ${color} 40%, transparent)` } as React.CSSProperties}>
              <div
                className="flex items-start gap-4 px-5 py-4"
                style={{ background: `linear-gradient(to right, color-mix(in srgb, ${color} 10%, transparent), transparent)` }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)]"
                  style={{ backgroundColor: `color-mix(in srgb, ${color} 20%, transparent)` }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <path d="M12 9v4M12 17h.01" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>{risk.title}</h3>
                    <Badge variant={risk.severity === "critical" ? "error" : "warning"}>{risk.severity}</Badge>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                    <span>{risk.source}</span>
                    <span>&middot;</span>
                    <span>{risk.detectedAt}</span>
                  </div>
                  <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>{risk.summary}</p>
                </div>
              </div>

              <div className="px-5 py-4" style={{ borderTop: "1px solid var(--border-default)", backgroundColor: "color-mix(in srgb, var(--bg-base) 50%, transparent)" }}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Current Disclosure</p>
                    <p
                      className="text-sm rounded-[var(--radius-sm)] p-3"
                      style={{ color: "var(--text-secondary)", backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border-default)" }}
                    >
                      {risk.currentDisclosure || <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>No specific disclosure found</span>}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider mb-2 flex items-center gap-1" style={{ color: "var(--status-error)" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                      </svg>
                      Disclosure Gap
                    </p>
                    <p
                      className="text-sm rounded-[var(--radius-sm)] p-3"
                      style={{
                        color: "var(--text-primary)",
                        backgroundColor: "var(--status-error-muted)",
                        border: "1px solid color-mix(in srgb, var(--status-error) 30%, transparent)",
                      }}
                    >
                      {risk.disclosureGap}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>Affected filings:</span>
                  {risk.affectedFilings.map((filing) => (
                    <Badge key={filing}>{filing}</Badge>
                  ))}
                </div>
              </div>

              <div
                className="px-5 py-3 flex items-center justify-between"
                style={{ borderTop: "1px solid var(--border-default)", backgroundColor: "var(--bg-surface)" }}
              >
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--status-success)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                  </svg>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    <span className="font-medium" style={{ color: "var(--status-success)" }}>Recommended:</span> {risk.recommendedAction}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost">View Details</Button>
                  <Button variant="secondary">Draft Update</Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function PromptBox() {
  return (
    <div className="mt-8">
      <Card className="p-6">
        <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
          What do you need to do?
        </h3>
        <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
          Ask questions or choose an action below. Work entirely within Diligent.
        </p>

        <div
          className="mt-4 flex items-center gap-2 rounded-[var(--radius-md)] p-3"
          style={{ backgroundColor: "var(--bg-base)", border: "1px solid var(--border-default)" }}
        >
          <input
            type="text"
            readOnly
            className="flex-1 bg-transparent px-2 py-2 text-base focus:outline-none"
            style={{ color: "var(--text-primary)" }}
            placeholder="Ask a question or describe what you need..."
          />
          <div
            className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)]"
            style={{ backgroundColor: "var(--action-default)", color: "var(--text-inverse)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </div>
        </div>

        <div className="mt-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Or start with</p>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {[
              { label: "Start Workflow", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
              { label: "Draft Document", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" },
              { label: "Run Report", icon: "M18 20V10M12 20V4M6 20v-6" },
              { label: "AI Search", icon: "M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" },
              { label: "Schedule", icon: "M3 4h18v18H3zM16 2v4M8 2v4M3 10h18" },
              { label: "Draft Email", icon: "M2 4h20v16H2zM22 6l-10 7L2 6" },
            ].map((action) => (
              <button
                key={action.label}
                className="group flex flex-col items-center gap-1.5 rounded-[var(--radius-md)] p-3 transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  border: "1px solid var(--border-default)",
                  color: "var(--text-secondary)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d={action.icon} />
                </svg>
                <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

function QuickActions() {
  const actions = [
    { label: "Draft 10K Updates", detail: "AI-assisted risk factor drafting", color: "var(--action-default)", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M12 18v-6M9 15h6" },
    { label: "Compare Disclosures", detail: "Gap analysis vs. current filings", color: "var(--accent-purple)", icon: "M18 20V10M12 20V4M6 20v-6" },
    { label: "Notify Board", detail: "Draft memo to Audit Committee", color: "var(--status-success)", icon: "M2 4h20v16H2zM22 6l-10 7L2 6" },
    { label: "Start Full Workflow", detail: "Coordinate all stakeholders", color: "var(--accent-orange)", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
  ];

  return (
    <section className="mt-8">
      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Risk Response Actions</h3>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>Complete these steps to address detected risks</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {actions.map((action) => (
            <button
              key={action.label}
              className="flex items-center gap-3 rounded-[var(--radius-md)] p-4 text-left transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border-default)" }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)]"
                style={{ backgroundColor: `color-mix(in srgb, ${action.color} 10%, transparent)` }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={action.color} strokeWidth="2">
                  <path d={action.icon} />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{action.label}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{action.detail}</p>
              </div>
            </button>
          ))}
        </div>
      </Card>
    </section>
  );
}

function StakeholderPanel() {
  return (
    <section className="mt-8">
      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Stakeholders to Involve</h3>
          <button className="text-xs hover:underline" style={{ color: "var(--action-default)" }}>Add stakeholder +</button>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {stakeholders.map((person) => (
            <div
              key={person.name}
              className="rounded-[var(--radius-md)] p-4"
              style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border-default)" }}
            >
              <div className="flex items-center gap-3">
                <div className={cn("h-10 w-10 rounded-full bg-gradient-to-br", person.gradient)} />
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{person.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{person.role}</p>
                </div>
              </div>
              <p className="mt-3 text-xs" style={{ color: "var(--text-secondary)" }}>{person.task}</p>
              <Button variant="ghost" className="mt-3 w-full">Assign Task</Button>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

function RecentAppsGrid() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>Pick up where you left off</h2>
      <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>Continue working in your Diligent applications</p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {recentApps.map((app) => (
          <a
            key={app.name}
            href="#"
            className="group block rounded-[var(--radius-lg)] px-4 py-3 transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-default)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{app.name}</h3>
                  <Badge>{app.lastUsed}</Badge>
                </div>
                <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{app.description}</p>
              </div>
              <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--text-muted)" }}>
                Open
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function NextActionsSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>
        Since everything&apos;s under control, get ahead of a few things
      </h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-3">
          {nextActions.map((action) => (
            <div
              key={action.title}
              className="rounded-[var(--radius-lg)] px-5 py-4"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-default)" }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>{action.title}</h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{action.detail}</p>
                  <div className="mt-3">
                    <Badge variant="info">{action.app}</Badge>
                  </div>
                </div>
                <Button variant="secondary" className="shrink-0">Open in app</Button>
              </div>
            </div>
          ))}
        </div>

        <Card className="p-5">
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>What&apos;s New</p>
          <h3 className="mt-2 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>Good to Know &amp; Good to Go</h3>
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            Learn more about features and capabilities you already have today.
          </p>
          <div className="mt-4 space-y-3">
            {whatsNew.map((item) => (
              <a
                key={item.title}
                href="#"
                className="block rounded-[var(--radius-md)] px-4 py-3 transition-opacity hover:opacity-80"
                style={{ backgroundColor: "var(--bg-base)", border: "1px solid var(--border-default)" }}
              >
                <h4 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{item.title}</h4>
                <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{item.detail}</p>
                <p className="mt-3 text-xs uppercase tracking-widest" style={{ color: "var(--action-default)" }}>Open</p>
              </a>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-14 px-5 py-5" style={{ borderTop: "1px solid var(--border-default)", backgroundColor: "var(--bg-base)" }}>
      <div className="flex items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>System log</p>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Recent system activity (last 24 hours)</p>
        </div>
      </div>
      <div className="mt-4 grid gap-2">
        {activityLog.map((entry) => (
          <div key={entry} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--status-success)" }} />
            <span>{entry}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Theme Switcher                                                     */
/* ------------------------------------------------------------------ */

type ThemeId = "lens" | "atlas-light" | "atlas-dark";

const themes: { id: ThemeId; name: string; description: string; preview: { bg: string; surface: string; action: string; text: string } }[] = [
  {
    id: "lens",
    name: "Lens",
    description: "Base Diligent design system",
    preview: { bg: "#ffffff", surface: "#f3f3f3", action: "#282e37", text: "#282e37" },
  },
  {
    id: "atlas-light",
    name: "Atlas Light",
    description: "Concrete palette, indigo actions",
    preview: { bg: "#ffffff", surface: "#f0f0f3", action: "#0040d5", text: "#242628" },
  },
  {
    id: "atlas-dark",
    name: "Atlas Dark",
    description: "Storm palette, sky actions",
    preview: { bg: "#1f2536", surface: "#353b4d", action: "#00b7fc", text: "#ffffff" },
  },
];

function ThemeSwitcher({
  currentTheme,
  onThemeChange,
}: {
  currentTheme: ThemeId;
  onThemeChange: (theme: ThemeId) => void;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div
          className="absolute bottom-16 right-0 w-72 rounded-[var(--radius-lg)] p-4 no-transition"
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-default)",
            boxShadow: "var(--shadow-high)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Theme
            </p>
            <button
              onClick={() => setOpen(false)}
              className="h-6 w-6 flex items-center justify-center rounded-full hover:opacity-70"
              style={{ color: "var(--text-muted)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id);
                }}
                className={cn(
                  "w-full rounded-[var(--radius-md)] p-3 text-left transition-opacity hover:opacity-90",
                )}
                style={{
                  backgroundColor: currentTheme === theme.id ? "var(--action-muted)" : "var(--bg-elevated)",
                  border: currentTheme === theme.id
                    ? "1.5px solid var(--action-default)"
                    : "1px solid var(--border-default)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1 shrink-0">
                    <div className="h-4 w-4 rounded-full" style={{ backgroundColor: theme.preview.bg, border: "1px solid rgba(128,128,128,0.3)" }} />
                    <div className="h-4 w-4 rounded-full" style={{ backgroundColor: theme.preview.surface, border: "1px solid rgba(128,128,128,0.3)" }} />
                    <div className="h-4 w-4 rounded-full" style={{ backgroundColor: theme.preview.action }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{theme.name}</p>
                    <p className="text-[11px] truncate" style={{ color: "var(--text-muted)" }}>{theme.description}</p>
                  </div>
                  {currentTheme === theme.id && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--action-default)" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{
          backgroundColor: "var(--action-default)",
          color: "var(--text-inverse)",
          boxShadow: "var(--shadow-high)",
        }}
        title="Switch theme"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Page() {
  const [theme, setTheme] = React.useState<ThemeId>("lens");

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
      <div className="min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
        <div
          className="overflow-hidden rounded-[var(--radius-xl)] mx-auto max-w-6xl my-6"
          style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-default)", boxShadow: "var(--shadow-low)" }}
        >
          <TopNav />
          <div className="px-6">
            <div className="mt-6">
              <AlertHero />
            </div>
            <AgentStatusBar />
            <RiskCards />
            <PromptBox />
            <QuickActions />
            <StakeholderPanel />
            <RecentAppsGrid />
            <NextActionsSection />
            <Footer />
          </div>
        </div>

        <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
      </div>
    </>
  );
}