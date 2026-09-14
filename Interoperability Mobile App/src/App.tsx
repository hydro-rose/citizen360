import { useState, useEffect } from "react";

function useLiveClock() {
  const fmt = () => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes().toString().padStart(2, "0");
    const hour = h % 12 || 12;
    return `${hour}:${m}`;
  };
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
import appIcon from "@/imports/IMG_7627.JPG-removebg-preview.png";

// ─── Types ────────────────────────────────────────────────────────────────────
type Role = "citizen" | "employee" | "manager";

// ─── Data ─────────────────────────────────────────────────────────────────────
const ROLES_CFG = [
  { id: "citizen" as Role, label: "Citizen", sublabel: "Personal Access", icon: "🪪", credential: "1234 5678 9101", placeholder: "Enter your Aadhaar number", hint: "12-digit Aadhaar UID", borderColor: "border-teal-500/60", bgColor: "bg-teal-600/15", textColor: "text-teal-300", accentBg: "bg-teal-600" },
  { id: "employee" as Role, label: "Employee", sublabel: "Department Staff", icon: "🏛️", credential: "1234 ABCD 5678", placeholder: "Enter your Employee ID", hint: "Format: XXXX XXXX XXXX", borderColor: "border-blue-500/60", bgColor: "bg-blue-600/15", textColor: "text-blue-300", accentBg: "bg-blue-600" },
  { id: "manager" as Role, label: "Manager", sublabel: "Boss / Admin", icon: "👔", credential: "ABCD 1234 EFGH", placeholder: "Enter your Manager ID", hint: "Format: XXXX XXXX XXXX", borderColor: "border-violet-500/60", bgColor: "bg-violet-600/15", textColor: "text-violet-300", accentBg: "bg-violet-600" },
];

const ROLE_META = {
  citizen:  { name: "Rajesh Kumar Sharma", dept: "Personal Account",            badge: "Citizen",  badgeColor: "bg-teal-600/20 text-teal-300 border-teal-500/30",     photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format" },
  employee: { name: "Priya Nair",           dept: "Delhi Development Authority", badge: "Staff",    badgeColor: "bg-blue-600/20 text-blue-300 border-blue-500/30",     photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&auto=format" },
  manager:  { name: "Arvind Mehta",         dept: "Ministry of Electronics & IT",badge: "Manager",  badgeColor: "bg-violet-600/20 text-violet-300 border-violet-500/30", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format" },
};

const citizen = { name: "Rajesh Kumar Sharma", uid: "4821 6734 9012", dob: "14 Mar 1983", gender: "Male", blood: "O+", phone: "+91 98765 43210", email: "rajesh.sharma@gmail.com", address: "42, Sector 15, Rohini, New Delhi – 110089", state: "Delhi", district: "North West Delhi", religion: "Hindu", category: "General", marital: "Married", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format" };

const DOCUMENTS = [
  { name: "Aadhaar Card",       num: "4821 6734 9012",    status: "verified",  icon: "🪪" },
  { name: "PAN Card",           num: "ABCDE1234F",         status: "verified",  icon: "📋" },
  { name: "Voter ID",           num: "DL/02/123/456789",   status: "verified",  icon: "🗳️" },
  { name: "Driving Licence",    num: "DL0320110012345",    status: "verified",  icon: "🚗" },
  { name: "Passport",           num: "R1234567",           status: "expiring",  icon: "🛂" },
];

const HEALTH = {
  abha: "91-4821-6734-9012", blood: "O Positive", height: "172 cm", weight: "74 kg", bmi: "25.0",
  conditions: ["Type 2 Diabetes (Controlled)", "Hypertension"],
  allergies: ["Penicillin", "Shellfish"],
  insurance: [
    { name: "PM-JAY Ayushman Bharat", cover: "₹5,00,000", valid: "31 Mar 2027", status: "Active" },
    { name: "CGHS Delhi",              cover: "₹3,00,000", valid: "30 Sep 2026", status: "Active" },
  ],
  vaccinations: [
    { name: "COVID-19 (Covishield)", date: "12 Aug 2021", doses: 2 },
    { name: "Hepatitis B",           date: "5 Jan 2019",  doses: 3 },
    { name: "Influenza",             date: "10 Oct 2024", doses: 1 },
  ],
  appointments: [
    { doctor: "Dr. Meena Agarwal", dept: "Endocrinology", date: "15 Sep 2026", hosp: "AIIMS Delhi" },
    { doctor: "Dr. Suresh Patel",  dept: "Cardiology",    date: "28 Sep 2026", hosp: "Safdarjung Hospital" },
  ],
};

const ASSETS = {
  property: [
    { name: "Residential Flat 3BHK", loc: "Sector 15, Rohini, Delhi", area: "1,250 sq.ft", reg: "DL-NW-0042876", val: "₹1.2 Cr" },
    { name: "Agricultural Land",      loc: "Palwal, Haryana",          area: "2 Bigha",     reg: "HR-PL-88231",  val: "₹18 L" },
  ],
  vehicles: [
    { name: "Maruti Suzuki Swift", reg: "DL 3C AQ 4521", type: "Petrol", ins: "valid till Apr 2026" },
    { name: "Hero Splendor Plus",  reg: "DL 8E BX 9832", type: "Petrol", ins: "valid till Dec 2025" },
  ],
  bank: [
    { bank: "State Bank of India",  acc: "****5621", type: "Savings", branch: "Rohini Sector 15", ifsc: "SBIN0031042" },
    { bank: "Punjab National Bank", acc: "****2278", type: "Current", branch: "Pitampura, Delhi",  ifsc: "PUNB0412300" },
  ],
  pension: { scheme: "National Pension System", pran: "110034567890", tier: "Tier I + II", balance: "₹4,82,300" },
  tax: { pan: "ABCDE1234F", itr: "Filed – AY 2025-26", refund: "₹12,400 (Received)", regime: "New Tax Regime" },
};

const LEGAL = {
  fir: [{ id: "FIR/2019/0432", ps: "Rohini PS, Delhi", section: "IPC 379 (Theft)", date: "12 Mar 2019", status: "Disposed", outcome: "Acquitted" }],
  cases: [{ id: "CS/2021/1182", court: "Rohini District Court", nature: "Civil – Property Dispute", date: "5 Aug 2021", status: "Pending", next: "18 Oct 2026" }],
  traffic: [
    { challan: "DL2024082300421", offence: "Over-speeding (NH-44)", date: "23 Aug 2024", fine: "₹2,000", status: "Paid" },
    { challan: "DL2025011100089", offence: "No helmet (pillion rider)", date: "11 Jan 2025", fine: "₹1,000", status: "Paid" },
  ],
  criminal: "No criminal antecedents on record",
  policeVerification: { status: "Clear", date: "14 Feb 2024", ref: "PV/DL/2024/00831" },
};

const APPLICATIONS = [
  { id: "APP-2026-18234", title: "Senior Citizen Pension",    dept: "DoSJE Delhi",            filed: "2 Jul 2026",  elapsed: 61,  status: "Approved",         desk: "Section Officer – Pension Wing", cert: true  },
  { id: "APP-2026-00921", title: "LPG Subsidy Re-enrollment", dept: "Ministry of Petroleum",   filed: "25 Jun 2026", elapsed: 68,  status: "Action Required",  desk: "Data Entry Operator – Subsidy Cell", cert: false },
  { id: "APP-2026-31100", title: "EWS Income Certificate",    dept: "Revenue Dept., Delhi",    filed: "12 Aug 2026", elapsed: 20,  status: "In Review",        desk: "SDM Office – Rohini", cert: false },
  { id: "APP-2025-87621", title: "PM Awas Yojana (Urban)",    dept: "MoHUA",                   filed: "3 Mar 2025",  elapsed: 183, status: "Approved",         desk: "Joint Director – PMAY", cert: true  },
];

const BENEFITS = [
  { name: "PM Kisan Samman Nidhi",    amount: "₹2,000 / quarter",    status: "Active",    last: "Jun 2026" },
  { name: "PMAY Urban Housing Subsidy",amount: "₹2.67 L (disbursed)", status: "Completed", last: "Jan 2024" },
  { name: "Ujjwala Yojana",            amount: "Free LPG Connection",  status: "Active",    last: "—" },
];

const GRIEVANCES = [
  { id: "GRV-2026-04821", issue: "Wrong billing by BSES for June 2026", dept: "BSES Delhi", filed: "18 Aug 2026", eta: "25 Sep 2026", status: "Under Review", updates: ["Complaint registered (18 Aug)", "Assigned to Junior Engineer (21 Aug)", "Site inspection scheduled (28 Aug)"] },
  { id: "GRV-2025-91002", issue: "Aadhaar address update delay (>45 days)", dept: "UIDAI", filed: "3 Dec 2025", eta: "Resolved 12 Jan 2026", status: "Resolved", updates: ["Complaint registered (3 Dec)", "Escalated to UIDAI HQ (10 Dec)", "Address updated (12 Jan)"] },
];

const EMP_QUEUE = [
  { id: "APP-2026-31100", name: "Rohit Verma",   service: "EWS Income Certificate",    filed: "12 Aug", priority: "High",   docs: 3 },
  { id: "APP-2026-31205", name: "Sunita Devi",    service: "Widow Pension Application", filed: "14 Aug", priority: "High",   docs: 2 },
  { id: "APP-2026-31398", name: "Amit Saxena",    service: "Domicile Certificate",      filed: "15 Aug", priority: "Normal", docs: 4 },
  { id: "APP-2026-31502", name: "Kavya Pillai",   service: "Senior Citizen Pension",    filed: "16 Aug", priority: "Normal", docs: 2 },
  { id: "APP-2026-31614", name: "Deepak Mishra",  service: "Caste Certificate",         filed: "17 Aug", priority: "Low",    docs: 3 },
];

const EMP_VERIFY = [
  { id: "DOC-2026-0041", name: "Pradeep Kumar",   doc: "Aadhaar Card",     status: "Pending",  submitted: "Today 10:14",     app: "APP-2026-31100" },
  { id: "DOC-2026-0042", name: "Meera Sharma",    doc: "Birth Certificate", status: "Pending",  submitted: "Today 09:47",     app: "APP-2026-31205" },
  { id: "DOC-2026-0039", name: "Ramesh Gupta",    doc: "Income Proof",      status: "Verified", submitted: "Yesterday 16:22", app: "APP-2026-31002" },
  { id: "DOC-2026-0038", name: "Lata Pandit",     doc: "Caste Certificate", status: "Rejected", submitted: "Yesterday 14:05", app: "APP-2026-30987" },
];

const EMP_MONITOR = [
  { id: "APP-2026-31100", service: "EWS Income Certificate",    citizen: "Rohit Verma",  elapsed: 20, sla: 15, status: "Breached",    step: "Document Verification" },
  { id: "APP-2026-31205", service: "Widow Pension",             citizen: "Sunita Devi",  elapsed: 6,  sla: 30, status: "On Track",    step: "Initial Scrutiny" },
  { id: "APP-2026-31398", service: "Domicile Certificate",      citizen: "Amit Saxena",  elapsed: 5,  sla: 7,  status: "At Risk",     step: "Field Verification" },
  { id: "APP-2026-30921", service: "LPG Subsidy Re-enrollment", citizen: "Priya Singh",  elapsed: 68, sla: 45, status: "Breached",    step: "Pending Citizen Docs" },
];

const MGR_STAFF = [
  { name: "Priya Nair",    role: "Senior Clerk",   assigned: 8,  resolved: 5, sla: 94, status: "Online"  },
  { name: "Rajan Tiwari",  role: "Verifying Officer",assigned: 12, resolved: 9, sla: 88, status: "Online"  },
  { name: "Deepa Menon",   role: "Data Entry",     assigned: 6,  resolved: 6, sla: 100,status: "Online"  },
  { name: "Suresh Yadav",  role: "Field Officer",  assigned: 4,  resolved: 2, sla: 72, status: "On Leave" },
];

const MGR_APPROVALS = [
  { id: "APR-2026-0041", title: "Senior Citizen Pension – Rajesh Kumar",   dept: "DoSJE",   amount: "₹1,800/mo",    risk: "Low",    days: 3 },
  { id: "APR-2026-0042", title: "EWS Certificate – Rohit Verma",           dept: "Revenue", amount: "—",            risk: "Low",    days: 1 },
  { id: "APR-2026-0043", title: "PMAY Urban Subsidy – Neeta Choudhary",    dept: "MoHUA",   amount: "₹2.67 L",      risk: "High",   days: 5 },
  { id: "APR-2026-0044", title: "Widow Pension – Sunita Devi",             dept: "Welfare", amount: "₹2,500/mo",    risk: "Low",    days: 2 },
];

const MGR_CALIBRATION = [
  { service: "Income Certificate", currentSLA: 15, proposed: 10, avgActual: 8,  load: "High" },
  { service: "Widow Pension",      currentSLA: 30, proposed: 25, avgActual: 18, load: "Medium" },
  { service: "Domicile Certificate",currentSLA: 7, proposed: 5,  avgActual: 4,  load: "Low" },
  { service: "Caste Certificate",  currentSLA: 10, proposed: 10, avgActual: 9,  load: "High" },
];

// ─── Shared UI ────────────────────────────────────────────────────────────────
function Badge({ label, color }: { label: string; color: string }) {
  const map: Record<string, string> = {
    teal: "bg-teal-600/20 text-teal-300", blue: "bg-blue-600/20 text-blue-300",
    violet: "bg-violet-600/20 text-violet-300", amber: "bg-amber-500/20 text-amber-300",
    rose: "bg-rose-500/20 text-rose-300", slate: "bg-slate-600/30 text-slate-400",
    green: "bg-emerald-600/20 text-emerald-300", red: "bg-red-600/20 text-red-300",
  };
  return <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${map[color] || map.slate}`}>{label}</span>;
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = { Approved: "teal", "In Review": "blue", "Action Required": "rose", "Under Review": "amber", Resolved: "slate", verified: "teal", expiring: "amber", Paid: "teal", Pending: "amber", Verified: "teal", Rejected: "rose", Active: "teal", Completed: "slate", High: "rose", Normal: "blue", Low: "slate", "On Track": "teal", "At Risk": "amber", Breached: "rose", Online: "green", "On Leave": "slate" };
  return <Badge label={status} color={map[status] || "slate"} />;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white/5 border border-white/10 rounded-2xl p-4 ${className}`}>{children}</div>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display text-white text-base mb-3">{children}</h3>;
}

function Row({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex justify-between py-2 border-b border-white/5 last:border-0">
      <span className="text-white/40 text-xs">{label}</span>
      <span className={`text-white text-xs font-medium ${mono ? "font-mono" : ""}`}>{value}</span>
    </div>
  );
}

// ─── LOGIN ────────────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: (r: Role) => void }) {
  const time = useLiveClock();
  const [role, setRole] = useState<Role>("citizen");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const current = ROLES_CFG.find((r) => r.id === role)!;

  function normalize(s: string) { return s.replace(/\s+/g, " ").trim().toUpperCase(); }

  function handleInput(raw: string) {
    // Strip spaces, uppercase, then re-insert a space after every 4 chars
    const clean = raw.replace(/\s+/g, "").toUpperCase();
    const spaced = clean.match(/.{1,4}/g)?.join(" ") ?? clean;
    setValue(spaced);
    setError("");
  }

  function handleLogin() {
    setError("");
    if (normalize(value) !== normalize(current.credential)) { setError("Invalid code. Please check and try again."); return; }
    if (!checked) { setError("Please accept the terms to continue."); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(role); }, 1300);
  }

  return (
    <div className="flex flex-col h-full bg-[#0a1525]">
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-3 pb-1">
        <span className="text-white/60 text-[11px]">{time}</span>
        <div className="w-24 h-6 bg-black rounded-full" />
        <span className="text-white/60 text-[11px]">▲▲▲ 🔋</span>
      </div>

      {/* Centered hero */}
      <div className="flex flex-col items-center text-center px-6 pt-8 pb-6 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-teal-600/10 blur-3xl" />
        </div>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 border border-teal-500/30 relative z-10 overflow-hidden" style={{ background: "linear-gradient(135deg,#0d9488,#1a3460)" }}>
          <img src={appIcon} alt="Citizen360" className="w-10 h-10 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
        </div>
        <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1 relative z-10">National Informatics Centre · Gov of India</div>
        <h1 className="font-display text-white text-3xl relative z-10"><span className="text-teal-400">Citizen</span>360</h1>
        <p className="text-white/40 text-xs mt-2 leading-relaxed relative z-10">Unified government profile platform —<br />secure, federated access.</p>
      </div>

      {/* Login card */}
      <div className="flex-1 bg-[#0f1f3d] rounded-t-3xl px-5 pt-6 pb-4 flex flex-col overflow-y-auto scrollbar-hide">
        <div className="text-white text-sm font-semibold mb-3">Select your role</div>

        <div className="flex gap-2 mb-4">
          {ROLES_CFG.map((r) => (
            <button key={r.id} onClick={() => { setRole(r.id); setValue(""); setError(""); }}
              className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-xl border transition-all ${role === r.id ? `${r.borderColor} ${r.bgColor} ${r.textColor}` : "border-white/10 bg-white/5 text-white/40"}`}>
              <span className="text-xl">{r.icon}</span>
              <span className="text-[10px] font-bold">{r.label}</span>
              <span className="text-[9px] opacity-70">{r.sublabel}</span>
            </button>
          ))}
        </div>

        <div className={`rounded-xl border p-3 mb-4 flex items-center gap-3 ${current.bgColor} ${current.borderColor}`}>
          <span className="text-2xl">{current.icon}</span>
          <div>
            <div className={`text-xs font-semibold ${current.textColor}`}>{current.label} Access</div>
            <div className="text-white/40 text-[10px]">{role === "citizen" ? "View your personal government records" : role === "employee" ? "Manage citizen applications & services" : "Full admin — audit, assign, approve"}</div>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-white/50 text-[11px] uppercase tracking-wide block mb-1.5">{role === "citizen" ? "Aadhaar Number" : role === "employee" ? "Employee ID" : "Manager ID"}</label>
          <input type="text" value={value} onChange={(e) => handleInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin()} placeholder={current.placeholder} maxLength={14}
            className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 font-mono focus:outline-none transition-all tracking-widest ${error ? "border-rose-500/60" : "border-white/10"}`} />
          <div className="flex justify-between mt-1.5">
            <div className="text-white/30 text-[10px] ml-1">{current.hint}</div>
            {error && <div className="text-rose-400 text-[10px]">{error}</div>}
          </div>
        </div>

        <button onClick={() => setChecked(!checked)} className="flex items-start gap-3 mb-5 text-left">
          <div className={`w-4 h-4 rounded flex-shrink-0 mt-0.5 flex items-center justify-center border transition-all ${checked ? `${current.accentBg} border-transparent` : "border-white/20 bg-white/5"}`}>
            {checked && <span className="text-white text-[10px] font-bold">✓</span>}
          </div>
          <span className="text-white/40 text-[11px] leading-relaxed">I agree to the <span className="text-teal-400 underline decoration-dotted">DPDP Act, 2023</span> and Citizen360 terms of use.</span>
        </button>

        <button onClick={handleLogin} disabled={!value.trim() || loading}
          className={`w-full ${current.accentBg} disabled:bg-white/10 disabled:text-white/20 text-white font-semibold py-3.5 rounded-xl transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2`}>
          {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Signing in…</> : `Sign in as ${current.label} →`}
        </button>

        <div className="mt-auto pt-5 text-center text-white/20 text-[10px]">Secured by NIC · MeitY · UIDAI</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CITIZEN SCREENS
// ═══════════════════════════════════════════════════════════════════════════════
function CitizenHomeScreen() {
  const actionNeeded = APPLICATIONS.filter((a) => a.status === "Action Required").length;
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gradient-to-br from-[#1a3460] to-[#0d9488]/60 rounded-3xl p-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-full -translate-y-6 translate-x-6 pointer-events-none" />
        <div className="flex items-center gap-3 relative z-10">
          <img src={citizen.photo} alt="" className="w-14 h-14 rounded-2xl object-cover border-2 border-white/20" />
          <div>
            <div className="text-white text-sm font-semibold">{citizen.name}</div>
            <div className="font-mono text-teal-300 text-[11px]">UID: {citizen.uid}</div>
            <div className="text-white/50 text-[11px] mt-0.5">{citizen.address.slice(0, 35)}…</div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center relative z-10">
          <div><div className="text-white text-lg font-bold">{citizen.dob.split(" ")[2]}</div><div className="text-white/40 text-[9px] uppercase">Born</div></div>
          <div><div className="text-rose-300 text-lg font-bold">{citizen.blood}</div><div className="text-white/40 text-[9px] uppercase">Blood</div></div>
          <div><div className="text-white text-lg font-bold">{citizen.category}</div><div className="text-white/40 text-[9px] uppercase">Category</div></div>
        </div>
      </div>

      {actionNeeded > 0 && (
        <div className="bg-rose-900/30 border border-rose-500/30 rounded-2xl p-3 flex items-center gap-3">
          <span className="text-2xl">⚠️</span>
          <div><div className="text-rose-300 text-sm font-semibold">{actionNeeded} Application Needs Action</div><div className="text-rose-300/50 text-[11px]">Upload pending documents to continue</div></div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        {[{ label: "Documents", val: DOCUMENTS.length, icon: "🪪", color: "from-blue-900/50 border-blue-500/20" }, { label: "Health Records", val: "12", icon: "🏥", color: "from-teal-900/50 border-teal-500/20" }, { label: "Owned Assets", val: "4", icon: "🏠", color: "from-violet-900/50 border-violet-500/20" }, { label: "Legal Records", val: "4", icon: "⚖️", color: "from-rose-900/50 border-rose-500/20" }].map((s) => (
          <div key={s.label} className={`bg-gradient-to-br ${s.color} border rounded-2xl p-4`}>
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="text-white text-2xl font-bold">{s.val}</div>
            <div className="text-white/40 text-[11px] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <Card>
        <SectionTitle>Recent Activity</SectionTitle>
        {[{ text: "Senior Citizen Pension approved — download certificate", time: "Today", icon: "✅" }, { text: "LPG Subsidy — document upload required", time: "2 days ago", icon: "⚠️" }, { text: "AIIMS health record consent granted", time: "3 days ago", icon: "🛡️" }, { text: "BSES grievance assigned to engineer", time: "5 days ago", icon: "📣" }].map((r, i) => (
          <div key={i} className={`flex items-start gap-3 py-2 ${i < 3 ? "border-b border-white/5" : ""}`}>
            <span>{r.icon}</span>
            <div><p className="text-white/70 text-xs">{r.text}</p><p className="text-white/30 text-[10px] mt-0.5">{r.time}</p></div>
          </div>
        ))}
      </Card>
    </div>
  );
}

function CitizenIdentityScreen() {
  const [consents, setConsents] = useState([
    { dept: "HDFC Bank", scope: "Aadhaar eKYC", active: true },
    { dept: "Delhi Govt. Portal", scope: "Profile, Address", active: false },
    { dept: "AIIMS Delhi", scope: "Health Records", active: true },
  ]);
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SectionTitle>Personal Information</SectionTitle>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          {[["Full Name", citizen.name], ["Date of Birth", citizen.dob], ["Gender", citizen.gender], ["Marital Status", citizen.marital], ["Religion", citizen.religion], ["Category", citizen.category], ["State", citizen.state], ["District", citizen.district]].map(([l, v]) => (
            <div key={l}><div className="text-white/40 text-[10px] uppercase tracking-wide">{l}</div><div className="text-white text-xs font-medium mt-0.5">{v}</div></div>
          ))}
        </div>
      </Card>
      <Card>
        <SectionTitle>Contact Details</SectionTitle>
        {[["📱", "Mobile", citizen.phone], ["✉️", "Email", citizen.email], ["📍", "Address", citizen.address]].map(([icon, l, v]) => (
          <div key={l} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0">
            <span>{icon}</span><div><div className="text-white/40 text-[10px]">{l}</div><div className="text-white text-xs font-medium">{v}</div></div>
          </div>
        ))}
      </Card>
      <div>
        <SectionTitle>Linked Documents</SectionTitle>
        <div className="flex flex-col gap-2">
          {DOCUMENTS.map((d) => (
            <div key={d.name} className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
              <span className="text-2xl">{d.icon}</span>
              <div className="flex-1"><div className="text-white text-sm font-medium">{d.name}</div><div className="font-mono text-white/40 text-[11px]">{d.num}</div></div>
              <StatusBadge status={d.status} />
            </div>
          ))}
        </div>
      </div>
      <Card>
        <SectionTitle>Consent Manager (DPDP)</SectionTitle>
        {consents.map((c, i) => (
          <div key={c.dept} className={`flex items-center justify-between py-2 ${i < consents.length - 1 ? "border-b border-white/5" : ""}`}>
            <div><div className="text-white text-xs font-medium">{c.dept}</div><div className="text-white/40 text-[10px]">{c.scope}</div></div>
            <button onClick={() => setConsents((prev) => prev.map((x, j) => j === i ? { ...x, active: !x.active } : x))}
              className={`w-8 h-4 rounded-full flex items-center ${c.active ? "bg-teal-600 justify-end" : "bg-white/10 justify-start"} px-0.5 transition-all`}>
              <div className="w-3 h-3 rounded-full bg-white" />
            </button>
          </div>
        ))}
      </Card>
    </div>
  );
}

function CitizenHealthScreen() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gradient-to-br from-teal-900 to-teal-700/40 border border-teal-600/30 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3"><span className="text-2xl">🏥</span>
          <div><div className="text-white text-sm font-semibold">ABHA – Ayushman Bharat Health Account</div><div className="font-mono text-teal-300 text-[11px]">{HEALTH.abha}</div></div>
        </div>
        <div className="grid grid-cols-4 gap-2 pt-3 border-t border-white/10 text-center">
          {[["Blood", HEALTH.blood.split(" ")[0]], ["Height", "172"], ["Weight", "74 kg"], ["BMI", HEALTH.bmi]].map(([l, v]) => (
            <div key={l}><div className="text-white text-sm font-bold">{v}</div><div className="text-teal-300/60 text-[9px] uppercase">{l}</div></div>
          ))}
        </div>
      </div>
      <Card>
        <SectionTitle>Conditions & Allergies</SectionTitle>
        <div className="mb-3"><div className="text-white/40 text-[10px] uppercase mb-1.5">Chronic Conditions</div><div className="flex flex-wrap gap-1.5">{HEALTH.conditions.map((c) => <span key={c} className="bg-rose-500/15 text-rose-300 text-[11px] px-2.5 py-1 rounded-full border border-rose-500/20">{c}</span>)}</div></div>
        <div><div className="text-white/40 text-[10px] uppercase mb-1.5">Allergies</div><div className="flex gap-1.5">{HEALTH.allergies.map((a) => <span key={a} className="bg-amber-500/15 text-amber-300 text-[11px] px-2.5 py-1 rounded-full border border-amber-500/20">{a}</span>)}</div></div>
      </Card>
      <div>
        <SectionTitle>Health Insurance</SectionTitle>
        <div className="flex flex-col gap-2">{HEALTH.insurance.map((ins) => (
          <div key={ins.name} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex justify-between"><div className="text-white text-sm font-medium">{ins.name}</div><StatusBadge status={ins.status} /></div>
            <div className="flex gap-4 mt-2"><div><div className="text-white/40 text-[10px]">Coverage</div><div className="text-teal-300 text-sm font-semibold">{ins.cover}</div></div><div><div className="text-white/40 text-[10px]">Valid Till</div><div className="text-white text-sm">{ins.valid}</div></div></div>
          </div>
        ))}</div>
      </div>
      <Card>
        <SectionTitle>Vaccinations</SectionTitle>
        {HEALTH.vaccinations.map((v, i) => (
          <div key={v.name} className={`flex items-center justify-between py-2 ${i < HEALTH.vaccinations.length - 1 ? "border-b border-white/5" : ""}`}>
            <div><div className="text-white text-xs font-medium">{v.name}</div><div className="text-white/40 text-[10px]">{v.date} · {v.doses} dose{v.doses > 1 ? "s" : ""}</div></div>
            <span className="text-teal-400">✓</span>
          </div>
        ))}
      </Card>
      <div>
        <SectionTitle>Upcoming Appointments</SectionTitle>
        <div className="flex flex-col gap-2">{HEALTH.appointments.map((a) => (
          <div key={a.doctor} className="bg-blue-900/30 border border-blue-400/20 rounded-xl p-3">
            <div className="text-white text-sm font-medium">{a.doctor}</div>
            <div className="text-white/50 text-[11px]">{a.dept} · {a.hosp}</div>
            <div className="text-blue-300 text-[11px] mt-1">📅 {a.date}</div>
          </div>
        ))}</div>
      </div>
    </div>
  );
}

function CitizenAssetsScreen() {
  return (
    <div className="flex flex-col gap-4">
      <div><SectionTitle>Immovable Property</SectionTitle>
        <div className="flex flex-col gap-2">{ASSETS.property.map((p) => (
          <div key={p.name} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex justify-between"><div className="text-white text-sm font-medium">{p.name}</div><div className="text-teal-300 text-sm font-bold">{p.val}</div></div>
            <div className="text-white/50 text-[11px] mt-1">📍 {p.loc}</div>
            <div className="flex gap-4 mt-2"><div><div className="text-white/40 text-[10px]">Area</div><div className="text-white text-xs">{p.area}</div></div><div><div className="text-white/40 text-[10px]">Reg. No.</div><div className="font-mono text-white/60 text-[11px]">{p.reg}</div></div></div>
          </div>
        ))}</div>
      </div>
      <div><SectionTitle>Vehicles</SectionTitle>
        <div className="flex flex-col gap-2">{ASSETS.vehicles.map((v) => (
          <div key={v.name} className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">🚗</div>
            <div><div className="text-white text-sm font-medium">{v.name}</div><div className="font-mono text-white/50 text-[11px]">{v.reg} · {v.type}</div><div className="text-white/40 text-[10px]">Insurance {v.ins}</div></div>
          </div>
        ))}</div>
      </div>
      <div><SectionTitle>Bank Accounts</SectionTitle>
        <div className="flex flex-col gap-2">{ASSETS.bank.map((b) => (
          <div key={b.bank} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex justify-between"><div className="text-white text-sm font-semibold">{b.bank}</div><span className="bg-white/10 text-white/60 text-[10px] px-2 py-0.5 rounded-full">{b.type}</span></div>
            <div className="font-mono text-white/40 text-xs mt-1">{b.acc}</div>
            <div className="flex gap-4 mt-2"><div><div className="text-white/40 text-[10px]">Branch</div><div className="text-white text-xs">{b.branch}</div></div><div><div className="text-white/40 text-[10px]">IFSC</div><div className="font-mono text-white/60 text-[11px]">{b.ifsc}</div></div></div>
          </div>
        ))}</div>
      </div>
      <Card><SectionTitle>NPS & Tax</SectionTitle>
        <Row label="PRAN" value={ASSETS.pension.pran} mono /><Row label="NPS Balance" value={ASSETS.pension.balance} /><Row label="ITR Status" value={ASSETS.tax.itr} /><Row label="Refund" value={ASSETS.tax.refund} /><Row label="Regime" value={ASSETS.tax.regime} />
      </Card>
    </div>
  );
}

function CitizenLegalScreen() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gradient-to-br from-violet-900/60 to-violet-800/20 border border-violet-500/20 rounded-2xl p-4">
        <div className="flex items-center gap-3 mb-3"><span className="text-2xl">⚖️</span>
          <div><div className="text-white text-sm font-semibold">Legal Standing</div><div className="text-violet-300 text-xs">{LEGAL.criminal}</div></div>
        </div>
        <div className="pt-3 border-t border-white/10 flex gap-4">
          <div><div className="text-white/40 text-[10px] uppercase">Police Verification</div><div className="text-teal-300 text-xs font-semibold">{LEGAL.policeVerification.status}</div></div>
          <div><div className="text-white/40 text-[10px] uppercase">Date</div><div className="text-white text-xs">{LEGAL.policeVerification.date}</div></div>
          <div><div className="text-white/40 text-[10px] uppercase">Ref</div><div className="font-mono text-white/50 text-[10px]">{LEGAL.policeVerification.ref}</div></div>
        </div>
      </div>
      <div><SectionTitle>FIR Records</SectionTitle>
        {LEGAL.fir.map((f) => (
          <div key={f.id} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex justify-between"><div className="font-mono text-white/40 text-[10px]">{f.id}</div><StatusBadge status={f.status} /></div>
            <div className="text-white text-sm font-medium mt-1">{f.section}</div>
            <div className="text-white/50 text-[11px]">📍 {f.ps}</div>
            <div className="flex justify-between mt-2 pt-2 border-t border-white/5"><div><div className="text-white/30 text-[10px]">Filed</div><div className="text-white/60 text-xs">{f.date}</div></div><div className="text-right"><div className="text-white/30 text-[10px]">Outcome</div><div className="text-teal-300 text-xs font-semibold">{f.outcome}</div></div></div>
          </div>
        ))}
      </div>
      <div><SectionTitle>Court Cases</SectionTitle>
        {LEGAL.cases.map((c) => (
          <div key={c.id} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex justify-between"><div className="font-mono text-white/40 text-[10px]">{c.id}</div><StatusBadge status={c.status} /></div>
            <div className="text-white text-sm font-medium mt-1">{c.nature}</div>
            <div className="text-white/50 text-[11px]">🏛️ {c.court}</div>
            <div className="flex justify-between mt-2 pt-2 border-t border-white/5"><div><div className="text-white/30 text-[10px]">Filed</div><div className="text-white/60 text-xs">{c.date}</div></div><div className="text-right"><div className="text-white/30 text-[10px]">Next Hearing</div><div className="text-amber-300 text-xs font-semibold">{c.next}</div></div></div>
          </div>
        ))}
      </div>
      <div><SectionTitle>Traffic Challans</SectionTitle>
        <div className="flex flex-col gap-2">{LEGAL.traffic.map((t) => (
          <div key={t.challan} className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center">🚦</div>
            <div className="flex-1"><div className="text-white text-xs font-medium">{t.offence}</div><div className="font-mono text-white/30 text-[10px]">{t.challan} · {t.date}</div></div>
            <div className="text-right"><div className="text-amber-300 text-sm font-bold">{t.fine}</div><StatusBadge status={t.status} /></div>
          </div>
        ))}</div>
      </div>
    </div>
  );
}

function CitizenServicesScreen() {
  const [sub, setSub] = useState<"applications" | "benefits" | "grievances">("applications");
  const [selected, setSelected] = useState<string | null>(null);
  const [newGrievance, setNewGrievance] = useState(false);
  const [gText, setGText] = useState("");
  const [gFiled, setGFiled] = useState(false);

  const app = APPLICATIONS.find((a) => a.id === selected);

  if (app) {
    const progress = app.status === "Approved" ? 100 : app.status === "In Review" ? 60 : 30;
    return (
      <div className="flex flex-col gap-4">
        <button onClick={() => setSelected(null)} className="flex items-center gap-1 text-white/40 text-xs hover:text-white/60">← Back</button>
        <Card>
          <div className="flex justify-between mb-2"><StatusBadge status={app.status} /><span className="font-mono text-white/30 text-[10px]">{app.id}</span></div>
          <div className="text-white font-semibold">{app.title}</div>
          <div className="text-white/50 text-xs">{app.dept}</div>
          <div className="flex justify-between mt-3"><div><div className="text-white/30 text-[10px]">Filed</div><div className="text-white/60 text-xs">{app.filed}</div></div><div className="text-right"><div className="text-white/30 text-[10px]">Days Elapsed</div><div className="text-amber-300 text-xs font-semibold">{app.elapsed} days</div></div></div>
          <div className="mt-3"><div className="flex justify-between text-[10px] text-white/40 mb-1"><span>Progress</span><span>{progress}%</span></div><div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-teal-600 to-teal-400" style={{ width: `${progress}%` }} /></div></div>
        </Card>
        <Card><div className="text-white/40 text-[10px] uppercase mb-1">Active Desk</div><div className="text-white text-sm font-medium">{app.desk}</div></Card>
        {app.status === "Approved" && <button className="w-full bg-teal-600 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-500">⬇️ Download QR-Verified Certificate</button>}
        {app.status === "Action Required" && <div className="bg-rose-900/30 border border-rose-500/30 rounded-2xl p-4"><div className="text-rose-300 text-sm font-semibold mb-1">⚠️ Document Upload Required</div><button className="w-full bg-rose-600 text-white font-semibold py-3 rounded-xl text-sm mt-2">📎 Re-upload Query Document</button></div>}
      </div>
    );
  }

  if (newGrievance) {
    return (
      <div className="flex flex-col gap-4">
        <button onClick={() => { setNewGrievance(false); setGFiled(false); setGText(""); }} className="flex items-center gap-1 text-white/40 text-xs hover:text-white/60">← Back</button>
        <SectionTitle>File New Grievance</SectionTitle>
        {gFiled ? (
          <div className="flex flex-col items-center gap-4 pt-8 text-center">
            <div className="w-16 h-16 rounded-full bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-3xl">✅</div>
            <div><div className="font-display text-white text-lg">Grievance Filed</div><div className="text-white/40 text-sm mt-1">Ref: GRV-2026-{Math.floor(Math.random() * 90000 + 10000)}</div></div>
            <div className="text-white/40 text-xs">Expected resolution within 30 days.</div>
            <button onClick={() => { setNewGrievance(false); setGFiled(false); setGText(""); setSub("grievances"); }} className="w-full bg-teal-600 text-white py-3.5 rounded-xl font-semibold">← Back to Grievances</button>
          </div>
        ) : (
          <>
            <Card>
              {[{ l: "Department", p: "e.g. BSES, MCD, UIDAI…" }, { l: "Subject", p: "Brief title of the issue" }].map((f) => (
                <div key={f.l} className="mb-3"><label className="text-white/40 text-[10px] uppercase block mb-1">{f.l}</label><input type="text" placeholder={f.p} className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none" /></div>
              ))}
              <div><label className="text-white/40 text-[10px] uppercase block mb-1">Description</label><textarea value={gText} onChange={(e) => setGText(e.target.value)} rows={4} placeholder="Describe your issue…" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none resize-none" /></div>
            </Card>
            <button onClick={() => setGFiled(true)} disabled={!gText.trim()} className="w-full bg-rose-600 disabled:bg-white/10 disabled:text-white/20 text-white font-semibold py-3.5 rounded-xl hover:bg-rose-500 transition-all">Submit Grievance →</button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-1 bg-white/5 rounded-xl p-1">
        {(["applications", "benefits", "grievances"] as const).map((s) => (
          <button key={s} onClick={() => setSub(s)} className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold capitalize transition-all ${sub === s ? "bg-teal-600 text-white" : "text-white/50"}`}>{s}</button>
        ))}
      </div>
      {sub === "applications" && <div className="flex flex-col gap-2">{APPLICATIONS.map((a) => {
        const p = a.status === "Approved" ? 100 : a.status === "In Review" ? 60 : 30;
        return (
          <button key={a.id} onClick={() => setSelected(a.id)} className="bg-white/5 border border-white/10 rounded-xl p-3 text-left hover:bg-white/8 active:scale-[0.98] transition-all">
            <div className="flex justify-between mb-1"><StatusBadge status={a.status} /><span className="font-mono text-white/30 text-[10px]">{a.id}</span></div>
            <div className="text-white text-sm font-medium mt-1">{a.title}</div>
            <div className="text-white/40 text-[11px]">{a.dept}</div>
            <div className="flex justify-between mt-2 mb-1"><span className="text-white/30 text-[10px]">Filed {a.filed}</span><span className="text-amber-300/70 text-[10px]">{a.elapsed} days</span></div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-teal-600 to-teal-400" style={{ width: `${p}%` }} /></div>
            {a.cert && <div className="text-teal-400 text-[10px] mt-1">✅ Certificate ready</div>}
          </button>
        );
      })}</div>}
      {sub === "benefits" && <div className="flex flex-col gap-2">{BENEFITS.map((b) => (
        <div key={b.name} className="bg-white/5 border border-white/10 rounded-xl p-3">
          <div className="flex justify-between"><div className="text-white text-sm font-medium">{b.name}</div><StatusBadge status={b.status} /></div>
          <div className="flex justify-between mt-2"><div><div className="text-white/40 text-[10px]">Benefit</div><div className="text-teal-300 text-xs font-semibold">{b.amount}</div></div><div className="text-right"><div className="text-white/40 text-[10px]">Last</div><div className="text-white/60 text-xs">{b.last}</div></div></div>
        </div>
      ))}</div>}
      {sub === "grievances" && (
        <div className="flex flex-col gap-3">
          {GRIEVANCES.map((g) => (
            <div key={g.id} className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex justify-between mb-2"><StatusBadge status={g.status} /><span className="font-mono text-white/30 text-[10px]">{g.id}</span></div>
              <div className="text-white text-sm">{g.issue}</div>
              <div className="text-white/40 text-[11px]">{g.dept}</div>
              <div className="flex justify-between mt-2 pt-2 border-t border-white/5 text-[10px]">
                <div><div className="text-white/30">Filed</div><div className="text-white/60">{g.filed}</div></div>
                <div className="text-right"><div className="text-white/30">ETA</div><div className="text-white/60">{g.eta}</div></div>
              </div>
              <div className="mt-2 pt-2 border-t border-white/5">{g.updates.map((u, i) => (
                <div key={i} className="flex items-start gap-2 mb-1"><div className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${i === 0 ? "bg-teal-400" : "bg-white/20"}`} /><div className="text-white/50 text-[11px]">{u}</div></div>
              ))}</div>
            </div>
          ))}
          <button onClick={() => setNewGrievance(true)} className="w-full border border-dashed border-white/20 rounded-xl py-3 text-white/40 text-xs hover:border-rose-500/50 hover:text-rose-400 transition-all">+ File New Grievance</button>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EMPLOYEE SCREENS
// ═══════════════════════════════════════════════════════════════════════════════
function EmployeeQueueScreen() {
  const [filter, setFilter] = useState<"All" | "High" | "Normal" | "Low">("All");
  const filtered = EMP_QUEUE.filter((q) => filter === "All" || q.priority === filter);
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/20 border border-blue-500/20 rounded-2xl p-4">
        <div className="text-white/40 text-[10px] uppercase mb-1">Applications in Queue</div>
        <div className="text-white text-3xl font-bold">{EMP_QUEUE.length}</div>
        <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 text-center">
          {[["High", EMP_QUEUE.filter((q) => q.priority === "High").length, "rose"], ["Normal", EMP_QUEUE.filter((q) => q.priority === "Normal").length, "blue"], ["Low", EMP_QUEUE.filter((q) => q.priority === "Low").length, "slate"]].map(([l, v, c]) => (
            <div key={l}><div className={`text-lg font-bold ${c === "rose" ? "text-rose-300" : c === "blue" ? "text-blue-300" : "text-slate-400"}`}>{v}</div><div className="text-white/40 text-[9px] uppercase">{l}</div></div>
          ))}
        </div>
      </div>
      <div className="flex gap-1 bg-white/5 rounded-xl p-1">
        {(["All", "High", "Normal", "Low"] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${filter === f ? "bg-blue-600 text-white" : "text-white/50"}`}>{f}</button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {filtered.map((q) => (
          <div key={q.id} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex justify-between mb-1"><StatusBadge status={q.priority} /><span className="font-mono text-white/30 text-[10px]">{q.id}</span></div>
            <div className="text-white text-sm font-medium">{q.name}</div>
            <div className="text-white/50 text-[11px]">{q.service}</div>
            <div className="flex justify-between mt-2 pt-2 border-t border-white/5">
              <span className="text-white/30 text-[10px]">Filed {q.filed}</span>
              <span className="text-white/40 text-[10px]">{q.docs} docs attached</span>
            </div>
            <button className="mt-2 w-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold py-2 rounded-lg hover:bg-blue-600/30 transition-all">Open & Process →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmployeeVerificationScreen() {
  const [items, setItems] = useState(EMP_VERIFY);
  function act(id: string, action: "Verified" | "Rejected") {
    setItems((prev) => prev.map((x) => x.id === id ? { ...x, status: action } : x));
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-2">
        {[["Pending", items.filter((i) => i.status === "Pending").length, "amber"], ["Verified", items.filter((i) => i.status === "Verified").length, "teal"], ["Rejected", items.filter((i) => i.status === "Rejected").length, "rose"]].map(([l, v, c]) => (
          <div key={l} className={`bg-${c}-900/30 border border-${c}-500/20 rounded-xl p-3 text-center`}>
            <div className="text-white text-xl font-bold">{v}</div>
            <div className="text-white/40 text-[10px] uppercase">{l}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item.id} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex justify-between mb-1"><StatusBadge status={item.status} /><span className="font-mono text-white/30 text-[10px]">{item.id}</span></div>
            <div className="text-white text-sm font-medium">{item.name}</div>
            <div className="text-white/50 text-[11px]">{item.doc} · {item.submitted}</div>
            <div className="font-mono text-white/30 text-[10px] mt-0.5">Ref: {item.app}</div>
            {item.status === "Pending" && (
              <div className="flex gap-2 mt-2">
                <button onClick={() => act(item.id, "Verified")} className="flex-1 bg-teal-600/20 border border-teal-500/30 text-teal-300 text-xs font-semibold py-2 rounded-lg hover:bg-teal-600/30 transition-all">✓ Verify</button>
                <button onClick={() => act(item.id, "Rejected")} className="flex-1 bg-rose-600/20 border border-rose-500/30 text-rose-300 text-xs font-semibold py-2 rounded-lg hover:bg-rose-600/30 transition-all">✗ Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function EmployeeMonitoringScreen() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {[["Breached SLA", EMP_MONITOR.filter((m) => m.status === "Breached").length, "rose"], ["At Risk", EMP_MONITOR.filter((m) => m.status === "At Risk").length, "amber"], ["On Track", EMP_MONITOR.filter((m) => m.status === "On Track").length, "teal"], ["Avg Days", "24", "blue"]].map(([l, v, c]) => (
          <div key={l} className={`bg-${c}-900/30 border border-${c}-500/20 rounded-xl p-3`}>
            <div className={`text-xl font-bold ${c === "rose" ? "text-rose-300" : c === "amber" ? "text-amber-300" : c === "teal" ? "text-teal-300" : "text-blue-300"}`}>{v}</div>
            <div className="text-white/40 text-[10px] uppercase mt-0.5">{l}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {EMP_MONITOR.map((m) => {
          const pct = Math.min(100, Math.round((m.elapsed / m.sla) * 100));
          const barColor = m.status === "Breached" ? "from-rose-600 to-rose-400" : m.status === "At Risk" ? "from-amber-600 to-amber-400" : "from-teal-600 to-teal-400";
          return (
            <div key={m.id} className="bg-white/5 border border-white/10 rounded-xl p-3">
              <div className="flex justify-between mb-1"><StatusBadge status={m.status} /><span className="font-mono text-white/30 text-[10px]">{m.id}</span></div>
              <div className="text-white text-sm font-medium">{m.service}</div>
              <div className="text-white/50 text-[11px]">{m.citizen} · {m.step}</div>
              <div className="flex justify-between mt-2 mb-1 text-[10px]"><span className="text-white/30">Day {m.elapsed} of {m.sla}-day SLA</span><span className={m.status === "Breached" ? "text-rose-400" : "text-white/50"}>{pct}%</span></div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden"><div className={`h-full rounded-full bg-gradient-to-r ${barColor}`} style={{ width: `${Math.min(pct, 100)}%` }} /></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EmployeeUpdateScreen() {
  const [sel, setSel] = useState<string>(APPLICATIONS[0].id);
  const [note, setNote] = useState("");
  const [updated, setUpdated] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <SectionTitle>Update Application Status</SectionTitle>
      <Card>
        <div className="text-white/40 text-[10px] uppercase mb-2">Select Application</div>
        <div className="flex flex-col gap-1.5">
          {APPLICATIONS.map((a) => (
            <button key={a.id} onClick={() => { setSel(a.id); setUpdated(false); }}
              className={`flex items-center justify-between p-2.5 rounded-xl border text-left transition-all ${sel === a.id ? "border-blue-500/60 bg-blue-600/10" : "border-white/10 bg-white/5"}`}>
              <div><div className="text-white text-xs font-medium">{a.title}</div><div className="font-mono text-white/30 text-[10px]">{a.id}</div></div>
              <StatusBadge status={a.status} />
            </button>
          ))}
        </div>
      </Card>
      <Card>
        <div className="text-white/40 text-[10px] uppercase mb-2">New Status</div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {["Approved", "In Review", "Action Required", "Rejected"].map((s) => (
            <button key={s} className="bg-white/5 border border-white/10 rounded-xl py-2 text-white/60 text-xs font-medium hover:border-blue-500/40 hover:text-blue-300 transition-all">{s}</button>
          ))}
        </div>
        <div className="text-white/40 text-[10px] uppercase mb-1.5">Remarks / Note</div>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="Add internal note or citizen-facing remark…"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none resize-none" />
      </Card>
      {updated ? (
        <div className="bg-teal-900/30 border border-teal-500/30 rounded-xl p-3 flex items-center gap-2">
          <span className="text-teal-400">✅</span><span className="text-teal-300 text-sm">Status updated successfully. Citizen notified.</span>
        </div>
      ) : (
        <button onClick={() => setUpdated(true)} className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-500 transition-all active:scale-[0.98]">Update Status & Notify Citizen →</button>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MANAGER SCREENS
// ═══════════════════════════════════════════════════════════════════════════════
function ManagerOverviewScreen() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gradient-to-br from-violet-900/50 to-violet-800/20 border border-violet-500/20 rounded-2xl p-4">
        <div className="text-white/40 text-[10px] uppercase mb-1">Delhi Development Authority</div>
        <div className="font-display text-white text-xl">Department Overview</div>
        <div className="grid grid-cols-4 gap-2 mt-4 pt-3 border-t border-white/10 text-center">
          {[["Total Apps", 148, "white"], ["Approved", 91, "teal"], ["Pending", 42, "amber"], ["Breached", 15, "rose"]].map(([l, v, c]) => (
            <div key={l}><div className={`text-xl font-bold ${c === "teal" ? "text-teal-300" : c === "amber" ? "text-amber-300" : c === "rose" ? "text-rose-300" : "text-white"}`}>{v}</div><div className="text-white/40 text-[9px] uppercase leading-tight mt-0.5">{l}</div></div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[{ l: "SLA Compliance", v: "83%", s: "↑ 4% vs last month", c: "teal" }, { l: "Avg Processing", v: "11d", s: "Target: 10 days", c: "blue" }, { l: "Staff Online", v: `${MGR_STAFF.filter((s) => s.status === "Online").length}/${MGR_STAFF.length}`, s: "1 on leave", c: "amber" }, { l: "Pending Approvals", v: MGR_APPROVALS.length, s: "Needs your sign-off", c: "rose" }].map((s) => (
          <div key={s.l} className={`bg-${s.c}-900/30 border border-${s.c}-500/20 rounded-2xl p-3`}>
            <div className={`text-2xl font-bold ${s.c === "teal" ? "text-teal-300" : s.c === "blue" ? "text-blue-300" : s.c === "amber" ? "text-amber-300" : "text-rose-300"}`}>{s.v}</div>
            <div className="text-white text-xs font-medium mt-0.5">{s.l}</div>
            <div className="text-white/30 text-[10px] mt-0.5">{s.s}</div>
          </div>
        ))}
      </div>
      <Card>
        <SectionTitle>Top Services by Volume</SectionTitle>
        {[{ s: "Income Certificate", pct: 78, n: 34 }, { s: "Widow Pension", pct: 55, n: 24 }, { s: "Domicile Certificate", pct: 40, n: 18 }, { s: "Caste Certificate", pct: 32, n: 14 }].map((r) => (
          <div key={r.s} className="mb-3 last:mb-0">
            <div className="flex justify-between text-xs mb-1"><span className="text-white/70">{r.s}</span><span className="text-white/40">{r.n} apps</span></div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-400" style={{ width: `${r.pct}%` }} /></div>
          </div>
        ))}
      </Card>
    </div>
  );
}

function ManagerWorkAssignScreen() {
  const [assigned, setAssigned] = useState<Record<string, string>>({});
  const unassigned = EMP_QUEUE.slice(0, 3);
  return (
    <div className="flex flex-col gap-4">
      <SectionTitle>Work Assignment</SectionTitle>
      <div className="flex flex-col gap-2">
        {unassigned.map((q) => (
          <div key={q.id} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex justify-between mb-1"><StatusBadge status={q.priority} /><span className="font-mono text-white/30 text-[10px]">{q.id}</span></div>
            <div className="text-white text-sm font-medium">{q.name}</div>
            <div className="text-white/50 text-[11px] mb-2">{q.service}</div>
            {assigned[q.id] ? (
              <div className="flex items-center justify-between bg-teal-600/10 border border-teal-500/20 rounded-lg px-3 py-2">
                <span className="text-teal-300 text-xs">Assigned to {assigned[q.id]}</span>
                <button onClick={() => setAssigned((p) => { const n = { ...p }; delete n[q.id]; return n; })} className="text-white/30 text-[10px] hover:text-white/60">Reassign</button>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                {MGR_STAFF.filter((s) => s.status === "Online").map((s) => (
                  <button key={s.name} onClick={() => setAssigned((p) => ({ ...p, [q.id]: s.name }))}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all">
                    <span className="text-white/60 text-xs">{s.name}</span>
                    <span className="text-white/30 text-[10px]">{s.assigned} active</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ManagerStaffMonitorScreen() {
  return (
    <div className="flex flex-col gap-4">
      <SectionTitle>Staff Monitor</SectionTitle>
      <div className="flex flex-col gap-2">
        {MGR_STAFF.map((s) => (
          <div key={s.name} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <div><div className="text-white text-sm font-semibold">{s.name}</div><div className="text-white/40 text-[11px]">{s.role}</div></div>
              <StatusBadge status={s.status} />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center">
              <div><div className="text-white text-sm font-bold">{s.assigned}</div><div className="text-white/40 text-[9px] uppercase">Assigned</div></div>
              <div><div className="text-teal-300 text-sm font-bold">{s.resolved}</div><div className="text-white/40 text-[9px] uppercase">Resolved</div></div>
              <div><div className={`text-sm font-bold ${s.sla >= 90 ? "text-teal-300" : s.sla >= 75 ? "text-amber-300" : "text-rose-300"}`}>{s.sla}%</div><div className="text-white/40 text-[9px] uppercase">SLA</div></div>
            </div>
            <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden"><div className={`h-full rounded-full ${s.sla >= 90 ? "bg-teal-500" : s.sla >= 75 ? "bg-amber-500" : "bg-rose-500"}`} style={{ width: `${s.sla}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ManagerCalibrationScreen() {
  const [items, setItems] = useState(MGR_CALIBRATION);
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-amber-900/20 border border-amber-500/20 rounded-xl p-3 flex gap-2">
        <span className="text-amber-400 flex-shrink-0">⚙️</span>
        <p className="text-amber-200/60 text-[11px] leading-relaxed">Proposed SLA changes require your approval. Actual average processing times shown for reference.</p>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((r, idx) => (
          <div key={r.service} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex justify-between mb-2">
              <div className="text-white text-sm font-medium">{r.service}</div>
              <Badge label={r.load} color={r.load === "High" ? "rose" : r.load === "Medium" ? "amber" : "slate"} />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div><div className="text-white/60 text-sm font-bold">{r.currentSLA}d</div><div className="text-white/30 text-[9px] uppercase">Current SLA</div></div>
              <div><div className="text-amber-300 text-sm font-bold">{r.proposed}d</div><div className="text-white/30 text-[9px] uppercase">Proposed</div></div>
              <div><div className="text-teal-300 text-sm font-bold">{r.avgActual}d</div><div className="text-white/30 text-[9px] uppercase">Avg Actual</div></div>
            </div>
            <div className="flex gap-2 mt-3">
              <button onClick={() => setItems((prev) => prev.map((x, i) => i === idx ? { ...x, currentSLA: x.proposed } : x))}
                className="flex-1 bg-teal-600/20 border border-teal-500/30 text-teal-300 text-xs font-semibold py-2 rounded-lg hover:bg-teal-600/30 transition-all">
                ✓ Approve
              </button>
              <button className="flex-1 bg-white/5 border border-white/10 text-white/40 text-xs font-semibold py-2 rounded-lg hover:border-white/20 transition-all">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ManagerApprovalsScreen() {
  const [items, setItems] = useState(MGR_APPROVALS);
  function act(id: string, approved: boolean) {
    setItems((prev) => prev.filter((x) => x.id !== id));
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex gap-4 text-center">
        <div className="flex-1"><div className="text-white text-xl font-bold">{items.length}</div><div className="text-white/40 text-[10px] uppercase">Pending</div></div>
        <div className="w-px bg-white/10" />
        <div className="flex-1"><div className="text-rose-300 text-xl font-bold">{items.filter((i) => i.risk === "High").length}</div><div className="text-white/40 text-[10px] uppercase">High Risk</div></div>
      </div>
      {items.length === 0 && (
        <div className="flex flex-col items-center gap-3 py-12 text-center">
          <span className="text-4xl">✅</span>
          <div className="text-white text-sm font-semibold">All caught up!</div>
          <div className="text-white/40 text-xs">No pending approvals at this time.</div>
        </div>
      )}
      <div className="flex flex-col gap-2">
        {items.map((a) => (
          <div key={a.id} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex justify-between mb-1">
              <Badge label={`${a.risk} Risk`} color={a.risk === "High" ? "rose" : "slate"} />
              <span className="font-mono text-white/30 text-[10px]">{a.id}</span>
            </div>
            <div className="text-white text-sm font-medium mt-1">{a.title}</div>
            <div className="flex justify-between mt-1.5 text-[11px]">
              <span className="text-white/40">{a.dept}</span>
              {a.amount !== "—" && <span className="text-teal-300 font-semibold">{a.amount}</span>}
            </div>
            <div className="text-white/30 text-[10px] mt-0.5">Pending {a.days} day{a.days > 1 ? "s" : ""}</div>
            <div className="flex gap-2 mt-3">
              <button onClick={() => act(a.id, true)} className="flex-1 bg-teal-600/20 border border-teal-500/30 text-teal-300 text-xs font-semibold py-2.5 rounded-xl hover:bg-teal-600/30 transition-all">✓ Approve</button>
              <button onClick={() => act(a.id, false)} className="flex-1 bg-rose-600/20 border border-rose-500/30 text-rose-300 text-xs font-semibold py-2.5 rounded-xl hover:bg-rose-600/30 transition-all">✗ Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Tab Navigators ───────────────────────────────────────────────────────────
type CitizenTab = "Home" | "Identity" | "Health" | "Assets" | "Legal" | "Services";
type EmployeeTab = "Queue" | "Verify" | "Monitor" | "Update";
type ManagerTab = "Overview" | "Assign" | "Monitor" | "Calibrate" | "Approvals";

const CITIZEN_TABS: { id: CitizenTab; icon: string }[] = [
  { id: "Home", icon: "⊞" }, { id: "Identity", icon: "🪪" }, { id: "Health", icon: "🏥" },
  { id: "Assets", icon: "🏠" }, { id: "Legal", icon: "⚖️" }, { id: "Services", icon: "📋" },
];
const EMPLOYEE_TABS: { id: EmployeeTab; icon: string }[] = [
  { id: "Queue", icon: "📥" }, { id: "Verify", icon: "✅" }, { id: "Monitor", icon: "📊" }, { id: "Update", icon: "✏️" },
];
const MANAGER_TABS: { id: ManagerTab; icon: string }[] = [
  { id: "Overview", icon: "📈" }, { id: "Assign", icon: "🎯" }, { id: "Monitor", icon: "👁️" }, { id: "Calibrate", icon: "⚙️" }, { id: "Approvals", icon: "✅" },
];

function CitizenNavigator({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<CitizenTab>("Home");
  const screens: Record<CitizenTab, React.ReactNode> = {
    Home: <CitizenHomeScreen />, Identity: <CitizenIdentityScreen />, Health: <CitizenHealthScreen />,
    Assets: <CitizenAssetsScreen />, Legal: <CitizenLegalScreen />, Services: <CitizenServicesScreen />,
  };
  return <RoleShell role="citizen" title={tab} tabs={CITIZEN_TABS} activeTab={tab} onTabChange={(t) => setTab(t as CitizenTab)} onLogout={onLogout}>{screens[tab]}</RoleShell>;
}

function EmployeeNavigator({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<EmployeeTab>("Queue");
  const screens: Record<EmployeeTab, React.ReactNode> = {
    Queue: <EmployeeQueueScreen />, Verify: <EmployeeVerificationScreen />,
    Monitor: <EmployeeMonitoringScreen />, Update: <EmployeeUpdateScreen />,
  };
  return <RoleShell role="employee" title={tab} tabs={EMPLOYEE_TABS} activeTab={tab} onTabChange={(t) => setTab(t as EmployeeTab)} onLogout={onLogout}>{screens[tab]}</RoleShell>;
}

function ManagerNavigator({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<ManagerTab>("Overview");
  const screens: Record<ManagerTab, React.ReactNode> = {
    Overview: <ManagerOverviewScreen />, Assign: <ManagerWorkAssignScreen />, Monitor: <ManagerStaffMonitorScreen />,
    Calibrate: <ManagerCalibrationScreen />, Approvals: <ManagerApprovalsScreen />,
  };
  return <RoleShell role="manager" title={tab} tabs={MANAGER_TABS} activeTab={tab} onTabChange={(t) => setTab(t as ManagerTab)} onLogout={onLogout}>{screens[tab]}</RoleShell>;
}

function RoleShell({ role, title, tabs, activeTab, onTabChange, onLogout, children }: {
  role: Role; title: string; tabs: { id: string; icon: string }[]; activeTab: string;
  onTabChange: (t: string) => void; onLogout: () => void; children: React.ReactNode;
}) {
  const time = useLiveClock();
  const meta = ROLE_META[role];
  const accentActive = role === "citizen" ? "bg-teal-600" : role === "employee" ? "bg-blue-600" : "bg-violet-600";

  return (
    <>
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-3 pb-1 flex-shrink-0">
        <span className="text-white/60 text-[11px]">{time}</span>
        <div className="w-24 h-6 bg-black rounded-full" />
        <span className="text-white/60 text-[11px]">▲▲▲ 🔋</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-2.5 flex-shrink-0 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display text-white text-base"><span className="text-teal-400">Citizen</span>360</span>
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border ${meta.badgeColor}`}>{meta.badge}</span>
          </div>
          <div className="text-white/30 text-[10px]">{title}</div>
        </div>
        <div className="flex items-center gap-2">
          <img src={meta.photo} alt="" className="w-8 h-8 rounded-xl object-cover border border-white/20" />
          <button onClick={onLogout} className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white/70 text-sm transition-colors">↩</button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pt-4">{children}</div>

      {/* Tab bar */}
      <div className="flex-shrink-0 px-3 pb-5 pt-2">
        <div className="bg-[#0B1528] border border-white/10 rounded-2xl flex p-1 gap-0.5">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => onTabChange(t.id)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl transition-all ${activeTab === t.id ? `${accentActive} text-white` : "text-white/30 hover:text-white/50"}`}>
              <span className="text-sm leading-none">{t.icon}</span>
              <span className="text-[8px] font-semibold uppercase tracking-wide leading-tight">{t.id}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState<Role>("citizen");

  function handleLogin(r: Role) { setRole(r); setLoggedIn(true); }
  function handleLogout() { setLoggedIn(false); }

  return (
    <div className="flex items-center justify-center w-full h-full bg-[#0a1628]">
      <div className="relative flex flex-col bg-[#0f1f3d] overflow-hidden shadow-2xl"
        style={{ width: "min(390px,100vw)", height: "min(844px,100vh)", borderRadius: "min(44px,5vw)", border: "1px solid rgba(255,255,255,0.08)" }}>
        {!loggedIn && <LoginScreen onLogin={handleLogin} />}
        {loggedIn && role === "citizen"  && <CitizenNavigator  onLogout={handleLogout} />}
        {loggedIn && role === "employee" && <EmployeeNavigator onLogout={handleLogout} />}
        {loggedIn && role === "manager"  && <ManagerNavigator  onLogout={handleLogout} />}
      </div>
    </div>
  );
}
