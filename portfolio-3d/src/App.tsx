import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  Database,
  Brain,
  BarChart3,
  Code2,
  LineChart,
  Sparkles,
  Workflow,
  Target,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  ExternalLink,
  Layers,
  Eye,
  Mic,
  Box,
  ShieldCheck,
  ScanLine,
  Zap,
  Cpu,
} from "lucide-react";
import {
  ResponsiveContainer,
  XAxis,
  Tooltip,
  LineChart as RechartsLineChart,
  Line,
} from "recharts";

type IconType = React.ComponentType<{ className?: string }>;
type ProjectVisualType = "finance" | "audio" | "vision";

type Project = {
  title: string;
  tag: string;
  icon: IconType;
  tech: string[];
  problem: string;
  flow: string;
  contribution: string;
  impact: string;
  metrics: string[];
  link: string;
  visual: ProjectVisualType;
};

const profile = {
  name: "Reginold Raj Malge",
  title: "M.Sc. Data Science Student | AI/ML and Analytics",
  location: "Erlangen, Germany",
  email: "reginoldraj522@gmail.com",
  phone: "+49 1634821966",
  linkedin: "https://linkedin.com/in/reginoldraj",
  github: "https://github.com/reginoldraj7777-code",
};

const navItems = ["Command", "Pipeline", "Projects", "Stack", "Fit", "Proof", "Contact"];

const marketData = [
  { day: "Jan", price: 42, risk: 20, vol: 32 },
  { day: "Feb", price: 58, risk: 28, vol: 41 },
  { day: "Mar", price: 52, risk: 23, vol: 38 },
  { day: "Apr", price: 77, risk: 40, vol: 61 },
  { day: "May", price: 72, risk: 38, vol: 57 },
  { day: "Jun", price: 91, risk: 55, vol: 75 },
  { day: "Jul", price: 88, risk: 50, vol: 69 },
  { day: "Aug", price: 104, risk: 63, vol: 82 },
];

const stats = [
  { value: "20k", label: "business records analyzed" },
  { value: "5", label: "Power BI dashboards" },
  { value: "15+", label: "SQL analytical queries" },
  { value: "6", label: "financial indicators" },
];

const pipeline: { title: string; detail: string; icon: IconType }[] = [
  { title: "Raw Data", detail: "Stock, business, audio and image datasets", icon: Layers },
  { title: "Python Processing", detail: "pandas, NumPy, cleaning and automation", icon: Code2 },
  { title: "SQL and MySQL Storage", detail: "structured querying and aggregation", icon: Database },
  { title: "Analytics", detail: "KPIs, indicators, ML and patterns", icon: Brain },
  { title: "Dashboard", detail: "Power BI, Superset and Streamlit", icon: BarChart3 },
  { title: "Insights", detail: "decision support and reporting", icon: Target },
];

const projects: Project[] = [
  {
    title: "Financial Market Analytics Dashboard",
    tag: "Flagship System",
    icon: LineChart,
    tech: ["Python", "MySQL", "Apache Superset", "SQL", "Time-Series"],
    problem: "Financial analysis often requires jumping between different sources to compare stocks, inspect trends and understand risk behavior.",
    flow: "Data ingestion -> Python and pandas -> MySQL -> SQL analytics -> Apache Superset dashboards",
    contribution: "Built the multi-stock analytics workflow, implemented indicators, designed SQL analysis and created interactive dashboard views.",
    impact: "Processed 10+ stock symbols, implemented 6 indicators, designed 15+ SQL queries and reduced manual analysis effort through automated workflows.",
    metrics: ["10+ symbols", "6 indicators", "15+ SQL queries", "5+ visual types"],
    link: "https://github.com/reginoldraj7777-code/financial-market-analytics-platform",
    visual: "finance",
  },
  {
    title: "Real-Time Speech-to-Sign Translation System",
    tag: "NLP Pipeline",
    icon: Mic,
    tech: ["Whisper ASR", "NLP", "POS Tagging", "Streamlit", "Python"],
    problem: "Spoken language needs to be converted into structured linguistic tokens before mapping to gesture outputs.",
    flow: "Audio input -> Whisper ASR -> NLP tokenization -> POS tagging -> gesture mapping -> Streamlit interface",
    contribution: "Built the 3-stage pipeline, integrated Whisper ASR, processed tokens and created multilingual interaction workflows.",
    impact: "Validated responsiveness across clean and noisy audio conditions with real-time audio samples.",
    metrics: ["3-stage pipeline", "ASR to NLP", "3+ workflows", "2 test settings"],
    link: "https://github.com/reginoldraj7777-code",
    visual: "audio",
  },
  {
    title: "Multi-Class Object Detection - CNN Model",
    tag: "Vision Model",
    icon: Eye,
    tech: ["CNN", "Computer Vision", "Python", "Deep Learning"],
    problem: "Object detection requires both localization and classification, not just image-level prediction.",
    flow: "Images -> preprocessing -> CNN features -> bounding-box regression -> classification -> validation",
    contribution: "Implemented localization plus classification setup, preprocessing, augmentation and iterative training workflow.",
    impact: "Improved robustness using scaling, flipping, normalization, rotation and validation cycles.",
    metrics: ["CNN model", "bbox head", "4+ augmentations", "validation cycles"],
    link: "https://github.com/reginoldraj7777-code",
    visual: "vision",
  },
];

const skills: { group: string; icon: IconType; items: string[] }[] = [
  { group: "Programming and Data", icon: Code2, items: ["Python", "SQL", "pandas", "NumPy", "SciPy", "EDA"] },
  { group: "Machine Learning", icon: Brain, items: ["scikit-learn", "Regression", "Classification", "Feature Engineering", "Model Evaluation", "Cross-Validation"] },
  { group: "Analytics and BI", icon: BarChart3, items: ["Power BI", "Apache Superset", "Dashboard Design", "KPI Tracking", "Analytical Reporting"] },
  { group: "Data Engineering", icon: Database, items: ["MySQL", "Data Cleaning", "ETL Concepts", "Structured Data Processing"] },
  { group: "AI Domains", icon: Cpu, items: ["CNN", "Object Detection", "NLP", "Time-Series Analytics", "Financial Analytics"] },
  { group: "Workflow", icon: Workflow, items: ["Git", "GitHub", "Jupyter Notebook", "Streamlit", "Experiment Tracking"] },
];

const roles = [
  { role: "Data Scientist", fit: "ML foundations, feature engineering, model evaluation, time-series and structured data workflows.", score: 84 },
  { role: "Applied AI/ML Engineer", fit: "Practical NLP, computer vision, CNN, ASR pipeline and end-to-end implementation.", score: 80 },
  { role: "Data Analyst", fit: "Python, SQL, Excel, KPI dashboards, reporting automation and business data analysis.", score: 92 },
  { role: "BI Analyst", fit: "Power BI, Apache Superset, dashboard design, drill-down filtering and KPI visualization.", score: 88 },
  { role: "Working Student Data/AI/Analytics - Germany", fit: "M.Sc. Data Science at FAU, practical analytics experience and strong learning orientation.", score: 90 },
];

const strengths = [
  "End-to-end analytics workflows",
  "Python and SQL-based data analysis",
  "Financial market analytics",
  "Dashboarding and KPI reporting",
  "Machine learning fundamentals",
  "NLP and computer vision exposure",
  "Data preprocessing and automation",
];

const certifications = [
  "Conference Papers: ICIOT 2025 - Financial Market Analytics; AIDE 2025 - Speech-to-Sign Translation System",
  "NPTEL: Introduction to Algorithms and Analysis - IIT Kharagpur, MOE India",
  "IBM AI Engineering",
  "Python for Everybody",
  "Microsoft Power BI Data Analyst",
  "AWS Academy Machine Learning Foundations",
  "Data Science Program - Skill Vertex",
];

function selfCheck() {
  return Boolean(profile.name && projects.length === 3 && pipeline.length === 6 && skills.length === 6 && roles.length === 5 && certifications.length >= 5);
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-4xl text-center">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
        <ScanLine className="h-4 w-4" /> {eyebrow}
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">
        {title}
      </motion.h2>
      {text ? <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{text}</p> : null}
    </div>
  );
}

function AmbientSystem() {
  const dots = React.useMemo(
    () => Array.from({ length: 70 }, (_, i) => ({ id: i, left: `${(i * 47) % 100}%`, top: `${(i * 73) % 100}%`, delay: (i % 11) * 0.22 })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#02030a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.20),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.22),transparent_24%),radial-gradient(circle_at_45%_85%,rgba(59,130,246,0.17),transparent_30%),linear-gradient(180deg,#02030a,#050816_45%,#02030a)]" />
      <motion.div className="absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" animate={{ x: [0, 120, 0], y: [0, 60, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute -right-48 top-56 h-[620px] w-[620px] rounded-full bg-violet-600/10 blur-3xl" animate={{ x: [0, -140, 0], y: [0, -70, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:82px_82px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
      {dots.map((dot) => (
        <motion.span key={dot.id} className="absolute h-1 w-1 rounded-full bg-cyan-100/60 shadow-[0_0_18px_rgba(103,232,249,0.95)]" style={{ left: dot.left, top: dot.top }} animate={{ y: [-18, 22, -18], opacity: [0.12, 0.85, 0.12], scale: [0.7, 1.8, 0.7] }} transition={{ duration: 8, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }} />
      ))}
    </div>
  );
}

function ProgressGlow() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.15, 0.45, 0.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -32]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-20 z-10 mx-auto h-40 max-w-6xl rounded-[3rem] bg-cyan-300/10 blur-3xl"
      style={{ opacity, y }}
    />
  );
}

function Navbar() {
  return (
    <motion.nav initial={{ y: -90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed left-1/2 top-4 z-50 w-[82%] max-w-5xl -translate-x-1/2 rounded-3xl border border-white/10 bg-[#050816]/70 px-4 py-3 shadow-2xl backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 text-sm font-bold text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-100 ring-1 ring-cyan-300/30">RM</span>
          <span className="hidden sm:inline">Reginold Raj</span>
        </a>
        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="rounded-2xl px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2.5 text-xs font-black text-slate-950 transition hover:bg-cyan-200"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}

function HologramCore() {
  const orbitItems = [
    { label: "MySQL", x: 280, y: 110 },
    { label: "EDA", x: 420, y: 170 },
    { label: "Python", x: 480, y: 280 },
    { label: "SQL", x: 420, y: 390 },
    { label: "ML", x: 280, y: 450 },
    { label: "BI", x: 140, y: 390 },
    { label: "NLP", x: 100, y: 280 },
    { label: "CV", x: 140, y: 170 },
  ];

  return (
    <div className="relative h-[560px] w-full max-w-[820px] overflow-hidden rounded-[3.2rem] border border-cyan-300/20 bg-[#050816]/85 p-8 shadow-[0_0_140px_rgba(34,211,238,0.22)] backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(34,211,238,0.20),transparent_38%),radial-gradient(circle_at_88%_16%,rgba(139,92,246,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="absolute inset-9 rounded-[2.4rem] border border-white/10 bg-slate-950/35" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="orbitGlow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="280" cy="280" r="180" fill="none" stroke="#22d3ee" strokeOpacity="0.14" strokeWidth="1.8" />
        <circle cx="280" cy="280" r="135" fill="none" stroke="#a78bfa" strokeOpacity="0.16" strokeWidth="1.6" />
        <circle cx="280" cy="280" r="95" fill="none" stroke="#22d3ee" strokeOpacity="0.12" strokeWidth="1.4" />
        <circle cx="280" cy="280" r="200" fill="url(#orbitGlow)" />

        {orbitItems.map((item) => {
          const width = item.label.length * 9 + 28;
          return (
            <g key={item.label}>
              <rect
                x={item.x - width / 2}
                y={item.y - 13}
                width={width}
                height="26"
                rx="999"
                fill="rgba(15,23,42,0.92)"
                stroke="rgba(255,255,255,0.12)"
              />
              <text x={item.x} y={item.y + 5} textAnchor="middle" fill="#7dd3fc" fontSize="10" fontWeight="900" letterSpacing="0.18em" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif">
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>

      <motion.div
        className="absolute left-[calc(50%-64px)] top-[calc(50%-64px)] flex h-32 w-32 flex-col items-center justify-center rounded-[2rem] border border-cyan-300/40 bg-cyan-300/15 text-center shadow-[0_0_80px_rgba(34,211,238,0.32)] backdrop-blur-xl"
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Brain className="mb-2 h-9 w-9 text-cyan-100" />
        <span className="text-xl font-black tracking-wide text-white">
          DATA
        </span>
        <span className="text-[9px] uppercase tracking-[0.34em] text-cyan-200">
          engine
        </span>
      </motion.div>

      <div className="absolute bottom-5 left-1/2 w-[260px] -translate-x-1/2 rounded-full border border-cyan-300/20 bg-slate-950/75 px-5 py-2.5 text-center text-[10px] font-black uppercase tracking-[0.32em] text-cyan-100 backdrop-blur-xl">
        Python · SQL · ML · BI
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative z-10 flex min-h-screen items-center overflow-hidden px-8 py-24 lg:px-14 xl:px-20">
      <div className="mx-auto grid w-full max-w-[1700px] items-center gap-16 lg:grid-cols-[0.72fr_1.28fr] 2xl:gap-24">
        <div className="min-w-0">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"><Sparkles className="h-4 w-4" /> Portfolio Command Center for AI, Data and Analytics roles in Germany</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.6rem]">
            {profile.name}
            <span className="mt-3 block bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">Data Systems Builder</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">{profile.title}. I build practical, end-to-end analytical workflows using Python, SQL, dashboards and ML foundations across finance, NLP and computer vision.</motion.p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"><MapPin className="h-4 w-4 text-cyan-300" /> {profile.location}</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"><GraduationCap className="h-4 w-4 text-cyan-300" /> M.Sc. Data Science, FAU</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"><ShieldCheck className="h-4 w-4 text-cyan-300" /> Open to Working Student roles</span>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 shadow-[0_0_42px_rgba(34,211,238,0.32)] transition hover:bg-white">Launch Projects <ArrowRight className="h-4 w-4" /></a>
            <a href="/RESUME.pdf" download className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/15"><Download className="h-4 w-4" /> Resume</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/15"><Code2 className="h-4 w-4" /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/15"><ExternalLink className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 42 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.85 }}
          className="relative z-10 hidden w-full justify-center lg:flex"
        >
          <HologramCore />
        </motion.div>
      </div>
    </section>
  );
}

function CommandDeck() {
  const points = [
    "Analyzed and validated 20k structured business records using Python, SQL, and Excel.",
    "Designed and delivered 5 interactive Power BI dashboards for operational and performance KPIs.",
    "Automated weekly data preparation and reporting workflows using Python.",
    "Created analytical reports and stakeholder presentations using Microsoft Office tools.",
  ];

  return (
    <section id="command" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Command Deck" title="Not a resume page. A data command interface." text="A premium recruiter-first view of measurable experience, practical workflows and project evidence." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-300/10 blur-2xl" />
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">signal 0{i + 1}</p>
              <h3 className="mt-4 text-5xl font-black tracking-[-0.08em] text-white">{stat.value}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-3"><BriefcaseBusiness className="text-cyan-200" /><h3 className="text-2xl font-bold text-white">Experience Signal</h3></div>
            <h4 className="text-xl font-semibold text-white">Data Analyst - CloudStudio IT Services Pvt Ltd</h4>
            <p className="mt-1 text-slate-400">Aug 2024 - Jan 2025</p>
            <div className="mt-6 space-y-3">
              {points.map((point) => (
                <div key={point} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" /> {point}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.045] p-7 backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-3"><Box className="text-cyan-200" /><h3 className="text-2xl font-bold text-white">About</h3></div>
            <p className="text-lg leading-9 text-slate-300">Data Science master's student in Germany with hands-on experience building machine learning, analytics, and dashboard systems across finance, NLP, and computer vision domains. Strong in Python, SQL, ML pipelines, and end-to-end data workflows.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">{strengths.slice(0, 6).map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm font-semibold text-cyan-50">{item}</div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PipelineSection() {
  return (
    <section id="pipeline" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Pipeline Architecture" title="Raw input becomes validated insight." text="A visual end-to-end system: Raw Data -> Python Processing -> SQL/MySQL Storage -> Analytics -> Dashboard -> Insights." />
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {pipeline.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative min-h-[190px] rounded-[2rem] border border-white/10 bg-slate-950/55 p-5 backdrop-blur-xl transition hover:-translate-y-3 hover:border-cyan-300/40">
                {i < pipeline.length - 1 ? <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-cyan-300 to-transparent lg:block" /> : null}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 p-3 text-cyan-200 ring-1 ring-cyan-300/30"><Icon /></div>
                <p className="text-xs text-slate-500">0{i + 1}</p>
                <h3 className="mt-2 font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ type }: { type: ProjectVisualType }) {
  if (type === "finance") {
    return (
      <div className="relative h-72 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/70 p-4">
        <div className="absolute left-4 top-4 z-10 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">MARKET ANALYTICS</div>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={marketData}>
            <XAxis dataKey="day" stroke="#64748b" fontSize={11} />
            <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14 }} />
            <Line type="monotone" dataKey="price" stroke="#22d3ee" strokeWidth={4} dot={false} />
            <Line type="monotone" dataKey="risk" stroke="#a78bfa" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="vol" stroke="#60a5fa" strokeWidth={2} dot={false} />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === "audio") {
    return (
      <div className="flex h-72 items-center justify-center rounded-[2rem] border border-pink-300/20 bg-slate-950/70 p-6">
        <div className="flex h-36 items-end gap-2">
          {Array.from({ length: 34 }).map((_, i) => (
            <motion.div key={i} className="w-2 rounded-full bg-gradient-to-t from-fuchsia-500 via-pink-300 to-cyan-300" animate={{ height: [18, 120 - (i % 8) * 8, 28] }} transition={{ duration: 1.35, repeat: Infinity, delay: i * 0.035 }} />
          ))}
        </div>
      </div>
    );
  }

  const detections = [
    { label: "car", box: "left-5 top-8 h-16 w-24" },
    { label: "person", box: "left-10 top-5 h-24 w-12" },
    { label: "object", box: "left-6 top-12 h-14 w-20" },
    { label: "bike", box: "left-5 top-11 h-12 w-24" },
    { label: "signal", box: "left-12 top-6 h-20 w-12" },
    { label: "box", box: "left-8 top-10 h-16 w-16" },
  ];

  return (
    <div className="relative h-72 overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-slate-950/75 p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(52,211,153,0.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.12),transparent_28%)]" />
      <div className="absolute left-5 top-5 z-10 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-emerald-100">Vision model</div>
      <div className="relative mt-10 grid h-[190px] grid-cols-3 gap-3">
        {detections.map((item, i) => (
          <motion.div key={item.label} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055]" animate={{ opacity: [0.75, 1, 0.75] }} transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.12 }}>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_55%)]" />
            <motion.div className={`absolute ${item.box} rounded-lg border-2 border-emerald-300 shadow-[0_0_22px_rgba(52,211,153,0.35)]`} animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }} />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full bg-slate-950/70 px-3 py-1 text-[10px] text-emerald-100 backdrop-blur"><span>{item.label}</span><span>{92 - i}%</span></div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-4 left-5 right-5 grid grid-cols-3 gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center">Preprocess</div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center">Detect</div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center">Validate</div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Project Universe" title="Recruiter-ready proof, not basic project cards." text="Each system is presented like a product case study: problem, architecture, contribution and measurable output." />
        <div className="space-y-10">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.article key={project.title} initial={{ opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative grid gap-7 overflow-hidden rounded-[2.7rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl backdrop-blur-2xl lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative">
                  <div className="mb-5 flex flex-wrap items-center gap-3"><div className="rounded-2xl bg-cyan-300/15 p-3 text-cyan-100"><Icon /></div><span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">{project.tag}</span></div>
                  <h3 className="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">{project.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-300">{item}</span>)}</div>
                  <div className="mt-7 space-y-4 text-sm leading-7 text-slate-300"><p><b className="text-cyan-200">Problem:</b> {project.problem}</p><p><b className="text-cyan-200">Pipeline:</b> {project.flow}</p><p><b className="text-cyan-200">My contribution:</b> {project.contribution}</p><p><b className="text-cyan-200">Impact:</b> {project.impact}</p></div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">Open GitHub <ExternalLink className="h-4 w-4" /></a>
                </div>
                <div className="relative space-y-5"><ProjectVisual type={project.visual} /><div className="grid gap-3 sm:grid-cols-2">{project.metrics.map((metric) => <div key={metric} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm font-bold text-cyan-50">{metric}</div>)}</div></div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechUniverse() {
  const flow = [
    { step: "01", title: "Collect", tools: "CSV, business logs, market data" },
    { step: "02", title: "Clean", tools: "Python, pandas, NumPy" },
    { step: "03", title: "Store", tools: "SQL, MySQL" },
    { step: "04", title: "Model", tools: "scikit-learn, NLP, CNN" },
    { step: "05", title: "Visualize", tools: "Power BI, Superset, Streamlit" },
    { step: "06", title: "Explain", tools: "Reports, dashboards, insights" },
  ];

  const pillars = [
    { name: "Python", sub: "processing", value: "Core" },
    { name: "SQL", sub: "analysis", value: "Core" },
    { name: "Power BI", sub: "dashboarding", value: "BI" },
    { name: "ML", sub: "prediction", value: "AI" },
  ];

  return (
    <div className="relative mx-auto mt-14 max-w-7xl overflow-hidden rounded-[3rem] border border-cyan-300/20 bg-[#050817]/80 p-6 shadow-[0_0_100px_rgba(34,211,238,0.15)] backdrop-blur-2xl md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_90%_45%,rgba(139,92,246,0.16),transparent_35%)]" />
      <div className="relative grid gap-6 lg:grid-cols-[0.95fr_1.25fr]">
        <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.045] p-7">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-200">Stack Operating System</p>
          <h3 className="mt-5 text-5xl font-black leading-[0.92] tracking-[-0.07em] text-white">How my stack turns raw data into decisions.</h3>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            This section is no longer a random skills cloud. It shows the exact workflow recruiters care about: data processing, SQL analytics, machine learning foundations, dashboards and communication.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {pillars.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-200">{item.value}</p>
                <h4 className="mt-2 text-2xl font-black text-white">{item.name}</h4>
                <p className="mt-1 text-sm text-slate-400">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.4rem] border border-white/10 bg-slate-950/50 p-5 md:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-violet-200">Pipeline View</p>
              <h4 className="mt-2 text-2xl font-black text-white">End-to-end data product workflow</h4>
            </div>
            <Workflow className="h-8 w-8 text-cyan-200" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {flow.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-5 transition hover:border-cyan-300/35 hover:bg-white/[0.08]"
              >
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-black text-cyan-100">{item.step}</span>
                  <div>
                    <h5 className="text-xl font-black text-white">{item.title}</h5>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.tools}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="stack" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Stack" title="Skills grouped like a real analytics system." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.group} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.075]">
                <div className="mb-5 flex items-center gap-3"><div className="rounded-2xl bg-cyan-300/15 p-3 text-cyan-200"><Icon /></div><h3 className="text-lg font-bold text-white">{skill.group}</h3></div>
                <div className="flex flex-wrap gap-2">{skill.items.map((item) => <span key={item} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-300">{item}</span>)}</div>
              </motion.div>
            );
          })}
        </div>
        <TechUniverse />
      </div>
    </section>
  );
}

function Fit() {
  return (
    <section id="fit" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Role Fit Matrix" title="Clear recruiter mapping for Germany-focused roles." />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {roles.map((item) => (
              <div key={item.role} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                <div className="flex justify-between gap-4"><h3 className="font-bold text-white">{item.role}</h3><span className="text-sm font-bold text-cyan-200">{item.score}% fit</span></div>
                <div className="mt-3 h-2 rounded-full bg-slate-800"><motion.div initial={{ width: 0 }} whileInView={{ width: `${item.score}%` }} viewport={{ once: true }} className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" /></div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.fit}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[2.2rem] border border-cyan-300/20 bg-cyan-300/[0.055] p-6 backdrop-blur-xl"><div className="mb-5 flex items-center gap-3"><Box className="text-cyan-200" /><h3 className="text-xl font-bold text-white">Core Strengths</h3></div><div className="grid gap-3">{strengths.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm font-semibold text-slate-200">{item}</div>)}</div></div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section id="proof" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Proof Layer" title="Education, papers and certifications." />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3"><GraduationCap className="text-cyan-200" /><h3 className="text-2xl font-bold text-white">Education</h3></div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-950/40 p-5"><h4 className="font-bold text-white">Friedrich-Alexander-Universitat Erlangen-Nurnberg (FAU)</h4><p className="mt-2 text-slate-300">M.Sc. Data Science - Oct 2025 - Present</p><p className="text-slate-400">Erlangen, Germany</p></div>
              <div className="rounded-3xl bg-slate-950/40 p-5"><h4 className="font-bold text-white">SRM Institute of Science and Technology</h4><p className="mt-2 text-slate-300">B.Tech Computer Science and Engineering - CGPA: 8.22/10</p><p className="text-slate-400">Chennai, India</p></div>
            </div>
          </div>
          <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3"><Award className="text-cyan-200" /><h3 className="text-2xl font-bold text-white">Achievements and Certifications</h3></div>
            <div className="space-y-3 text-sm text-slate-300">{certifications.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">{item}</div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-[3rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.14] via-blue-500/[0.08] to-violet-500/[0.14] p-8 text-center shadow-[0_0_110px_rgba(34,211,238,0.18)] backdrop-blur-xl md:p-14">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">Contact</p>
        <h2 className="mt-4 text-5xl font-black tracking-[-0.07em] text-white md:text-7xl">Let's build data-driven solutions.</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">Open to working student, internship and junior opportunities in Data Science, AI/ML, Analytics and Business Intelligence in Germany.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=reginoldraj522@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-black text-slate-950 transition hover:bg-cyan-200"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-bold text-white"><ExternalLink className="h-4 w-4" /> LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-bold text-white"><Code2 className="h-4 w-4" /> GitHub</a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-300"><span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-300" /> {profile.phone}</span><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> {profile.location}</span></div>
      </div>
    </section>
  );
}

function PortfolioChatbot() {
  const quickQuestions = [
    "What roles fit him best?",
    "Explain his finance project",
    "What are his strongest skills?",
    "How can I contact him?",
  ];

  const answers: Record<string, string> = {
    "What roles fit him best?":
      "Reginold is strongest for Working Student Data/AI/Analytics roles, Data Analyst roles, BI Analyst roles, and junior Data Science roles. His strongest evidence is Python, SQL, Power BI dashboards, financial analytics, automation, and practical ML/NLP/CV project exposure.",
    "Explain his finance project":
      "His flagship project is a Financial Market Analytics Platform built with Python, MySQL and Apache Superset. It processes multi-stock market data, calculates indicators such as moving averages, volatility, beta and returns, stores analytics in SQL, and presents insights through dashboards.",
    "What are his strongest skills?":
      "His strongest skills are Python, SQL, pandas, NumPy, MySQL, Power BI, Apache Superset, dashboarding, financial analytics, data cleaning, automation, and ML fundamentals with scikit-learn.",
    "How can I contact him?":
      `You can contact him by email at ${profile.email}, connect on LinkedIn, or review his GitHub profile for project evidence.`,
  };

  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {
      sender: "bot",
      text: "Hi, I am Reginold's portfolio assistant. Ask me about his skills, projects, role fit, or contact details.",
    },
  ]);
  const [input, setInput] = React.useState("");

  function getAnswer(question: string) {
    const clean = question.toLowerCase();
    if (answers[question]) return answers[question];
    if (clean.includes("finance") || clean.includes("market") || clean.includes("superset")) return answers["Explain his finance project"];
    if (clean.includes("role") || clean.includes("job") || clean.includes("fit")) return answers["What roles fit him best?"];
    if (clean.includes("skill") || clean.includes("tech") || clean.includes("stack")) return answers["What are his strongest skills?"];
    if (clean.includes("contact") || clean.includes("email") || clean.includes("linkedin")) return answers["How can I contact him?"];
    if (clean.includes("experience") || clean.includes("cloudstudio"))
      return "Reginold worked as a Data Analyst at CloudStudio IT Services Pvt Ltd from Aug 2024 to Jan 2025. He analyzed around 20,000 structured business records, built 5 Power BI dashboards, automated weekly data preparation workflows using Python, and prepared stakeholder-facing analytical reports.";
    if (clean.includes("project") || clean.includes("github"))
      return "His key projects include the Financial Market Analytics Platform, Speech-to-Sign Translation System, and CNN-based Object Detection System. The strongest recruiter-facing project is the financial analytics platform because it shows Python, SQL, MySQL, BI dashboards and end-to-end analytics workflow.";
    return "Good question. Based on this portfolio, the most important points are: Reginold is a Data Science master's student at FAU, strong in Python/SQL analytics, dashboarding, financial analytics, and practical ML project work. For deeper details, check the Projects and Stack sections or contact him directly.";
  }

  function sendMessage(question?: string) {
    const text = (question || input).trim();
    if (!text) return;
    setMessages((prev) => [...prev, { sender: "user", text }, { sender: "bot", text: getAnswer(text) }]);
    setInput("");
  }

  return (
    <div className="fixed bottom-6 right-6 z-[80]">
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="mb-4 w-[360px] overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-[#050817]/95 shadow-[0_0_90px_rgba(34,211,238,0.25)] backdrop-blur-2xl"
        >
          <div className="border-b border-white/10 bg-cyan-300/10 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-200">AI Portfolio Assistant</p>
                <h3 className="mt-1 text-lg font-black text-white">Ask about Reginold</h3>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-bold text-white">×</button>
            </div>
          </div>

          <div className="max-h-[330px] space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.sender === "user" ? "bg-cyan-300 text-slate-950" : "border border-white/10 bg-white/[0.06] text-slate-200"}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickQuestions.map((question) => (
                <button key={question} onClick={() => sendMessage(question)} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:text-white">
                  {question}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") sendMessage();
                }}
                placeholder="Ask about projects, skills, role fit..."
                className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
              />
              <button onClick={() => sendMessage()} className="rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-white">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}

      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300 px-5 py-4 font-black text-slate-950 shadow-[0_0_55px_rgba(34,211,238,0.45)]"
      >
        <Brain className="h-5 w-5" /> Ask Portfolio AI
      </motion.button>
    </div>
  );
}

export default function App() {
  const testsPassed = selfCheck();

  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth bg-[#02030a] font-sans text-white selection:bg-cyan-300 selection:text-slate-950">
      <style>
        {`html{scroll-behavior:smooth}body{margin:0;background:#02030a}`}
      </style>

      {!testsPassed ? (
        <div className="fixed left-4 top-4 z-[100] rounded-xl bg-red-500 px-4 py-2 text-white">
          Portfolio data check failed
        </div>
      ) : null}

      <ProgressGlow />
      <AmbientSystem />
      <Navbar />
      <PortfolioChatbot />

      <main>
        <Hero />
        <CommandDeck />
        <PipelineSection />
        <Projects />
        <Skills />
        <Fit />
        <Proof />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        Copyright {new Date().getFullYear()} Reginold Raj Malge - Data Science - AI/ML - Analytics
      </footer>
    </div>
  );
}