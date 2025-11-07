import {
    Title2,
    Title3,
    Subtitle2,
    Text,
    Button,
    makeStyles,
    tokens
} from "@fluentui/react-components";
import {
    ArrowTrending24Regular,
    Toolbox24Regular,
    DataPie24Regular,
    Organization24Regular
} from "@fluentui/react-icons";
import { useMemo } from "react";

const useStyles = makeStyles({
    page: {
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "40px 24px 72px",
        display: "grid",
        gap: "64px",
        "@media (max-width: 700px)": {
            padding: "28px 16px 56px",
            gap: "48px"
        }
    },
    hero: {
        display: "grid",
        gap: "28px",
        background: `linear-gradient(135deg, ${tokens.colorNeutralBackground2} 0%, ${tokens.colorNeutralBackground3} 100%)`,
        padding: "36px 42px",
        borderRadius: "24px",
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        boxShadow: tokens.shadow8,
        "@media (max-width: 700px)": {
            padding: "28px 20px",
            borderRadius: "20px"
        }
    },
    accentBar: {
        width: "58px",
        height: "6px",
        borderRadius: "4px",
        background: `linear-gradient(90deg, ${tokens.colorBrandBackground} 0%, ${tokens.colorBrandBackgroundHover} 100%)`
    },
    heroHeader: { display: "grid", gap: "12px" },

    /* Card grid inside strips */
    sectionsGrid: {
        display: "grid",
        gap: "34px",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        "@media (max-width: 700px)": {
            gridTemplateColumns: "1fr",
            gap: "20px"
        }
    },
    card: {
        display: "grid",
        gap: "18px",
        padding: "24px 26px 28px",
        background: tokens.colorNeutralBackground1,
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "22px",
        boxShadow: tokens.shadow4,
        position: "relative",
        transition: "box-shadow .35s, transform .35s, border-color .35s",
        overflowWrap: "anywhere",
        "@media (max-width: 700px)": {
            padding: "20px 18px 22px",
            borderRadius: "18px"
        },
        ":hover": {
            boxShadow: tokens.shadow16,
            transform: "translateY(-4px)",
            border: `1px solid ${tokens.colorBrandStroke1}`
        }
    },
    cardHeader: {
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        "@media (max-width: 480px)": {
            gap: "14px"
        }
    },
    iconWrap: {
        width: "56px",
        height: "56px",
        flex: "0 0 56px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: "1 / 1",
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${tokens.colorBrandBackground} 0%, ${tokens.colorBrandBackgroundHover} 100%)`,
        color: tokens.colorNeutralForegroundOnBrand,
        boxShadow: `0 4px 10px -2px ${tokens.colorNeutralShadowAmbient}, 0 2px 4px ${tokens.colorNeutralShadowKey}, 0 0 0 4px ${tokens.colorNeutralBackground1}`,
        transition: "transform .35s, box-shadow .35s",
        "@media (max-width: 480px)": {
            width: "48px",
            height: "48px",
            flex: "0 0 48px"
        },
        ":hover": { transform: "scale(1.06)" }
    },
    cardTitle: { fontSize: "17px", fontWeight: 600, lineHeight: 1.25, marginBottom: "6px" },
    blurb: {
        fontSize: "13px",
        color: tokens.colorNeutralForeground2,
        lineHeight: 1.55,
        "@media (max-width: 480px)": { fontSize: "12.75px" }
    },

    /* Snapshot Metrics strip */
    metricsStrip: {
        display: "grid",
        gap: "24px",
        padding: "32px 36px",
        borderRadius: "28px",
        background: `linear-gradient(110deg, ${tokens.colorNeutralBackground2} 0%, ${tokens.colorNeutralBackground3} 100%)`,
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        boxShadow: tokens.shadow8,
        "@media (max-width: 700px)": {
            padding: "26px 20px",
            borderRadius: "22px",
            gap: "20px"
        }
    },
    metricsGrid: {
        display: "grid",
        gap: "18px",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        "@media (max-width: 700px)": {
            gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
            gap: "14px"
        }
    },
    metricCard: {
        display: "grid",
        gap: "6px",
        padding: "14px 16px 16px",
        background: tokens.colorNeutralBackground1,
        border: `1px solid ${tokens.colorNeutralStroke1}`,
        borderRadius: "16px",
        boxShadow: tokens.shadow2,
        transition: "box-shadow .3s",
        "@media (max-width: 700px)": {
            padding: "12px 12px 14px"
        },
        ":hover": { boxShadow: tokens.shadow8 }
    },
    metricValue: { fontSize: "22px", fontWeight: 700 },

    /* Capability tags */
    tagGroup: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginTop: "6px"
    },
    tag: {
        fontSize: "11px",
        padding: "4px 8px",
        borderRadius: "8px",
        background: tokens.colorNeutralBackground3,
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        fontWeight: 500,
        letterSpacing: ".25px"
    },
    ctaRow: {
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        marginTop: "8px",
        "@media (max-width: 480px)": {
            gap: "8px"
        }
    },
    ndaNote: { fontSize: "12px", color: tokens.colorNeutralForeground3, marginTop: "4px" },

    /* Delivery Themes strip */
    themesStrip: {
        display: "grid",
        gap: "24px",
        padding: "32px 36px",
        borderRadius: "28px",
        background: `linear-gradient(115deg, ${tokens.colorNeutralBackground2} 0%, ${tokens.colorNeutralBackground3} 90%)`,
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        boxShadow: tokens.shadow8,
        "@media (max-width: 700px)": {
            padding: "26px 20px",
            borderRadius: "22px",
            gap: "20px"
        }
    },

    /* Selected Highlights strip */
    highlightsStrip: {
        display: "grid",
        gap: "24px",
        padding: "32px 36px",
        borderRadius: "28px",
        background: `linear-gradient(115deg, ${tokens.colorNeutralBackground2} 0%, ${tokens.colorNeutralBackground3} 95%)`,
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        boxShadow: tokens.shadow8,
        "@media (max-width: 700px)": {
            padding: "26px 20px",
            borderRadius: "22px",
            gap: "20px"
        }
    },
    highlightsGrid: {
        display: "grid",
        gap: "18px",
        gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
        "@media (max-width: 920px)": {
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))"
        },
        "@media (max-width: 700px)": {
            gridTemplateColumns: "1fr",
            gap: "14px"
        }
    },
    highlightCard: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "40px 1fr",
        gap: "16px",
        alignItems: "flex-start",
        padding: "16px 20px 18px",
        background: tokens.colorNeutralBackground1,
        border: `1px solid ${tokens.colorNeutralStroke1}`,
        borderRadius: "16px",
        boxShadow: tokens.shadow2,
        transition: "box-shadow .3s, transform .3s, border-color .3s",
        overflowWrap: "anywhere",
        "@media (max-width: 700px)": {
            gridTemplateColumns: "32px 1fr",
            padding: "14px 16px 16px"
        },
        ":hover": {
            boxShadow: tokens.shadow8,
            transform: "translateY(-3px)",
            border: `1px solid ${tokens.colorBrandStroke1}`
        }
    },
    bulletWrap: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    highlightBullet: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: `linear-gradient(140deg, ${tokens.colorBrandBackground} 0%, ${tokens.colorBrandBackgroundHover} 100%)`,
        boxShadow: `0 0 0 3px ${tokens.colorNeutralBackground1}`,
        flexShrink: 0,
        "@media (max-width: 700px)": {
            width: "14px",
            height: "14px",
            boxShadow: `0 0 0 2px ${tokens.colorNeutralBackground1}`
        }
    },
    highlightText: {
        fontSize: "14px",
        lineHeight: 1.55,
        color: tokens.colorNeutralForeground1,
        "@media (max-width: 700px)": {
            fontSize: "13.25px",
            lineHeight: 1.5
        }
    }
});

export default function Work() {
    const s = useStyles();

    const highlights = useMemo(
        () => [
            "Supported multiple government agencies in migration and modernization initiatives leveraging Power Platform & Azure patterns.",
            "Converted 60+ legacy InfoPath forms into consolidated Dataverse / Model-Driven and Canvas application suites.",
            "Replaced complex spreadsheet silos with governed Dataverse models improving auditability & data integrity.",
            "Engineered Azure automation (CLI, ARM, Bicep, Fluent SDK) and CI/CD pipelines for multi-environment deployments.",
            "Delivered enablement workshops (App-in-a-Day, ALM governance) accelerating internal capability adoption."
        ],
        []
    );

    const metrics = [
        { value: "60+", label: "Legacy Forms Modernized" },
        { value: "50+", label: "Power Apps Delivered" },
        { value: "12", label: "Environments Governed" },
        { value: "100%", label: "Telemetry Coverage (Apps)" }
    ];

    const capabilityTags = [
        "Dataverse", "Model-Driven", "Canvas", "ALM", "DevOps",
        "Azure Functions", "APIM", "CI/CD", "Telemetry", "Governance", "Copilot"
    ];

    return (
        <main className={s.page} aria-labelledby="work-heading">
            {/* HERO */}
            <section className={s.hero}>
                <div className={s.heroHeader}>
                    <div className={s.accentBar} aria-hidden="true" />
                    <Title2 id="work-heading">Recent Impact & Delivery</Title2>
                    <Subtitle2 style={{ color: tokens.colorNeutralForeground2, lineHeight: 1.5 }}>
                        Selected outcomes from architecture, modernization, and enablement engagements across
                        regulated and enterprise environments.
                    </Subtitle2>
                </div>

                <div className={s.tagGroup}>
                    {capabilityTags.map(t => (
                        <span key={t} className={s.tag}>{t}</span>
                    ))}
                </div>

                <div className={s.ctaRow}>
                    <Button appearance="primary" as="a" href="/book">Discuss a Project</Button>
                    <Button appearance="secondary" as="a" href="/services">View Services</Button>
                </div>
                <Text className={s.ndaNote}>Extended portfolio available on request (NDA).</Text>
            </section>

            {/* METRICS */}
            <section aria-labelledby="metrics-heading" className={s.metricsStrip}>
                <Title3 id="metrics-heading">Snapshot Metrics</Title3>
                <div className={s.metricsGrid}>
                    {metrics.map(m => (
                        <div key={m.label} className={s.metricCard}>
                            <div className={s.metricValue}>{m.value}</div>
                            <Text size={300}>{m.label}</Text>
                        </div>
                    ))}
                </div>
            </section>

            {/* DELIVERY THEMES (wrapped in themed strip) */}
            <section aria-labelledby="delivery-heading" className={s.themesStrip}>
                <Title3 id="delivery-heading">Delivery Themes</Title3>
                <div className={s.sectionsGrid}>
                    <div className={s.card}>
                        <div className={s.cardHeader}>
                            <div className={s.iconWrap}><ArrowTrending24Regular /></div>
                            <div>
                                <div className={s.cardTitle}>Modernization & Consolidation</div>
                                <Text className={s.blurb}>
                                    Streamlined scattered legacy assets into structured Dataverse solutions with
                                    enforceable schemas, security roles, and lifecycle automation.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardHeader}>
                            <div className={s.iconWrap}><Toolbox24Regular /></div>
                            <div>
                                <div className={s.cardTitle}>Operational Enablement</div>
                                <Text className={s.blurb}>
                                    Workshops & templates seeded internal teams with patterns (ALM, telemetry,
                                    environment strategy) reducing ramp time & defects.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardHeader}>
                            <div className={s.iconWrap}><DataPie24Regular /></div>
                            <div>
                                <div className={s.cardTitle}>Governed Data & Insight</div>
                                <Text className={s.blurb}>
                                    Introduced observability (App Insights, custom logs) driving proactive issue
                                    detection and measurable adoption KPIs.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardHeader}>
                            <div className={s.iconWrap}><Organization24Regular /></div>
                            <div>
                                <div className={s.cardTitle}>Scalable Architecture</div>
                                <Text className={s.blurb}>
                                    Defined solution layers (core, integration, experience) and automated pipelines
                                    enabling safe multi-env promotion & rollback.
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SELECTED HIGHLIGHTS */}
            <section aria-labelledby="highlights-heading" className={s.highlightsStrip}>
                <Title3 id="highlights-heading">Selected Highlights</Title3>
                <div className={s.highlightsGrid}>
                    {highlights.map(h => (
                        <div key={h} className={s.highlightCard}>
                            <div className={s.bulletWrap}>
                                <span className={s.highlightBullet} aria-hidden="true" />
                            </div>
                            <Text className={s.highlightText}>{h}</Text>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
