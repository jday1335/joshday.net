import ServiceCard from "../components/ServiceCard";
import {
    Database24Regular,
    Cloud24Regular,
    Code24Regular,
    ShieldLock24Regular,
    ArrowSync24Regular,
    Sparkle24Regular
} from "@fluentui/react-icons";
import { makeStyles, tokens, Title2, Text } from "@fluentui/react-components";

const useStyles = makeStyles({
    wrap: {
        maxWidth: "1180px",
        margin: "0 auto",
        display: "grid",
        gap: "42px",
        padding: "32px 4px 48px"
    },
    header: {
        display: "grid",
        gap: "16px",
        padding: "0 20px"
    },
    grid: {
        display: "grid",
        gap: "28px",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))"
    },
    halo: {
        position: "absolute",
        top: "-160px",
        left: "50%",
        width: "620px",
        height: "620px",
        transform: "translateX(-50%)",
        background: `radial-gradient(circle at 50% 50%, ${tokens.colorBrandBackground}25, transparent 70%)`,
        filter: "blur(40px)",
        zIndex: -1,
        pointerEvents: "none"
    }
});

const items = [
    {
        title: "Power Platform Architecture & Modernization",
        blurb:
            "Governed environment strategy, Dataverse modeling, solution layering, scalable ALM pipelines and compliance alignment.",
        icon: <Database24Regular />,
        tags: ["Dataverse", "ALM", "Environments", "Model-Driven", "Canvas", "Power Automate"],
        preview: gradientBlock("Dataverse schema", ["Entities", "Relationships", "Telemetry"])
    },
    {
        title: "Azure Cloud Engineering",
        blurb:
            "Designing resilient workloads with Functions, App Service, APIM, Cosmos DB, Key Vault, and automated infra pipelines.",
        icon: <Cloud24Regular />,
        tags: ["Functions", "APIM", "Key Vault", "Web Apps", "Azure AI Service", "Cosmos", "Azure SQL", "Azure Architecture", "AI Foundry", "Entra ID", "App Insights"],
        preview: gradientBlock("Cloud pillars", ["Scale", "Security", "Resilience"])
    },
    {
        title: "Full Stack Development",
        blurb:
            "Enterprise React + .NET solutions with typed contracts, component libraries, performance profiling, and secure APIs.",
        icon: <Code24Regular />,
        tags: ["React", ".NET", "TypeScript", "JavaScript", "SPFx"],
        preview: gradientBlock("Stack", ["React", "C#", "CI/CD"])
    },
    {
        title: "Governance, ALM & DevOps",
        blurb:
            "DLP policy design, managed solution pipelines, quality gates, layered RBAC, and instrumentation via App Insights.",
        icon: <ShieldLock24Regular />,
        tags: ["DLP", "RBAC", "Telemetry"],
        preview: gradientBlock("Governance flow", ["Policy", "Pipeline", "Monitor"])
    },
    {
        title: "Legacy Modernization",
        blurb:
            "Refactoring InfoPath / classic SharePoint forms into modern Dataverse apps—improved maintainability & auditability.",
        icon: <ArrowSync24Regular />,
        tags: ["Refactor", "SharePoint", "Forms"],
        preview: gradientBlock("Modernization phases", ["Assess", "Design", "Migrate"])
    },
    {
        title: "AI & Copilot Enablement",
        blurb:
            "Patterns for Copilot Studio, prompt orchestration, retrieval, responsible AI guardrails, and audit instrumentation.",
        icon: <Sparkle24Regular />,
        tags: ["Copilot", "Prompting", "Responsible AI"],
        preview: gradientBlock("AI workflow", ["Intent", "Context", "Response"])
    }
];

function gradientBlock(title: string, chips: string[]) {
    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 10,
                padding: "12px 16px",
                background:
                    "linear-gradient(140deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 100%)",
                backdropFilter: "blur(6px)"
            }}
        >
            <div
                style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: ".5px",
                    textTransform: "uppercase",
                    color: tokens.colorNeutralForeground3
                }}
            >
                {title}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {chips.map(c => (
                    <span
                        key={c}
                        style={{
                            fontSize: 11,
                            padding: "4px 8px",
                            borderRadius: 6,
                            background: tokens.colorNeutralBackground3,
                            border: `1px solid ${tokens.colorNeutralStroke2}`,
                            letterSpacing: ".3px"
                        }}
                    >
                        {c}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Services() {
    const s = useStyles();
    return (
        <div className={s.wrap}>
            <div className={s.header}>
                <Title2>Services & Capabilities</Title2>
                <Text as="p" style={{ color: tokens.colorNeutralForeground2, maxWidth: 860 }}>
                    Outcome‑driven engagements spanning architecture, modernization, governance and AI enablement.
                    Each service emphasizes secure patterns, observability, and accelerated delivery.
                </Text>
            </div>
            <div className={s.grid}>
                {items.map(i => (
                    <ServiceCard
                        key={i.title}
                        title={i.title}
                        blurb={i.blurb}
                        icon={i.icon}
                        tags={i.tags}
                        preview={i.preview}
                        ctaHref="/book"
                    />
                ))}
            </div>
            <div className={s.halo} aria-hidden="true" />
        </div>
    );
}
