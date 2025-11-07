import {
    Title1,
    Title3,
    Subtitle2,
    Text,
    Button,
    Tag,
    TagGroup,
    makeStyles,
    tokens,
    Card,
    CardHeader
} from "@fluentui/react-components";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg"; // optional portrait reuse

const useStyles = makeStyles({
    page: {
        display: "grid",
        gap: "64px",
        padding: "56px 24px 72px",
        maxWidth: "1180px",
        margin: "0 auto"
    },
    hero: {
        display: "grid",
        gap: "40px",
        alignItems: "center",
        gridTemplateColumns: "minmax(0,1fr)",
        "@media (min-width: 980px)": {
            gridTemplateColumns: "minmax(0,1fr) minmax(420px,520px)"
        }
    },
    heroText: {
        display: "grid",
        gap: "24px"
    },
    heroHeading: {
        display: "grid",
        gap: "12px"
    },
    portraitWrap: {
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 3",
        borderRadius: "28px",
        overflow: "hidden",
        boxShadow: tokens.shadow28,
        background: `linear-gradient(135deg, ${tokens.colorBrandBackground}22, ${tokens.colorBrandBackgroundHover}11)`,
        isolation: "isolate"
    },
    portraitImg: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transform: "scale(1.04)",
        transition: "transform .6s cubic-bezier(.25,.8,.25,1)"
    },
    portraitWrapHover: {
        ":hover img": { transform: "scale(1.08)" }
    },
    accentBar: {
        width: "52px",
        height: "6px",
        borderRadius: "4px",
        background: `linear-gradient(90deg, ${tokens.colorBrandBackground} 0%, ${tokens.colorBrandBackgroundHover} 100%)`
    },
    heroActions: {
        display: "flex",
        flexWrap: "wrap",
        gap: "14px"
    },
    focusTags: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px"
    },
    sectionHeader: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "840px"
    },
    grid: {
        display: "grid",
        gap: "26px",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))"
    },
    featureCard: {
        position: "relative",
        display: "grid",
        gap: "12px",
        padding: "20px 22px 24px",
        backgroundColor: tokens.colorNeutralBackground2,
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "16px",
        boxShadow: tokens.shadow4,
        transition: "box-shadow .3s, transform .3s",
        ":hover": {
            boxShadow: tokens.shadow16,
            transform: "translateY(-4px)"
        }
    },
    featureHeader: {
        fontWeight: 600,
        fontSize: "16px"
    },
    dividerLine: {
        height: "1px",
        background: tokens.colorNeutralStroke2,
        margin: "4px 0 8px",
        borderRadius: "1px"
    },
    inlineLinkBtn: {
        marginTop: "4px",
        justifySelf: "start"
    },
    valueStrip: {
        display: "grid",
        gap: "18px",
        padding: "28px 32px",
        borderRadius: "20px",
        background: `linear-gradient(110deg, ${tokens.colorNeutralBackground2} 0%, ${tokens.colorNeutralBackground3} 100%)`,
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        boxShadow: tokens.shadow8
    },
    valueItems: {
        display: "grid",
        gap: "14px",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))"
    },
    valueItem: {
        display: "grid",
        gap: "6px",
        padding: "12px 14px 14px",
        background: tokens.colorNeutralBackground1,
        border: `1px solid ${tokens.colorNeutralStroke1}`,
        borderRadius: "12px",
        boxShadow: tokens.shadow2
    }
});

const focusAreas = ["Power Platform", "Azure", "App Architecture", "Dataverse", "Automation", "Telemetry", "DevOps", "AI / Copilot"];

export default function Home() {
    const s = useStyles();

    return (
        <main className={s.page} aria-labelledby="home-hero-heading">
            {/* HERO */}
            <section className={s.hero}>
                <div className={`${s.portraitWrap} ${s.portraitWrapHover}`} aria-hidden="true">
                    <img
                        src={profileImg}
                        alt="Josh Day"
                        className={s.portraitImg}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className={s.heroText}>
                    <div className={s.heroHeading}>
                        <div className={s.accentBar} aria-hidden="true" />
                        <Title1 id="home-hero-heading">
                            Building secure, scalable solutions on Power Platform, Azure & AI
                        </Title1>
                        <Subtitle2 style={{ color: tokens.colorNeutralForeground2, lineHeight: 1.5 }}>
                            Delivering modernization patterns, telemetry-first design, and governed ALM that
                            accelerate enterprise adoption while reducing technical debt.
                        </Subtitle2>
                    </div>

                    <TagGroup size="small" className={s.focusTags}>
                        {focusAreas.map(f => (
                            <Tag key={f} appearance="outline">{f}</Tag>
                        ))}
                    </TagGroup>

                    <div className={s.heroActions}>
                        <Button appearance="primary" as="a" href="/book">Book a Consult</Button>
                        <Button appearance="secondary" as="a" href="/services">Explore Services</Button>
                        <Button appearance="outline" as="a" href="/work">View Work</Button>
                    </div>
                </div>
            </section>

            {/* CORE OFFERINGS */}
            <section aria-labelledby="offerings-heading">
                <div className={s.sectionHeader}>
                    <Title3 id="offerings-heading">Core Advisory & Delivery</Title3>
                    <Text as="p" style={{ color: tokens.colorNeutralForeground2 }}>
                        Targeted engagements focusing on strategy, implementation acceleration, or remediation.
                        Each offering is grounded in secure patterns, observability, and maintainability.
                    </Text>
                </div>
                <div className={s.grid}>
                    <div className={s.featureCard}>
                        <div className={s.featureHeader}>Platform Modernization</div>
                        <div className={s.dividerLine} />
                        <Text size={300}>
                            Assess legacy workloads, define modernization roadmap, consolidate shadow IT
                            solutions into governed Power Platform + Azure patterns.
                        </Text>
                        <Link to="/services">
                            <Button className={s.inlineLinkBtn} size="small" appearance="subtle">
                                Learn more
                            </Button>
                        </Link>
                    </div>
                    <div className={s.featureCard}>
                        <div className={s.featureHeader}>Solution Architecture</div>
                        <div className={s.dividerLine} />
                        <Text size={300}>
                            End‑to‑end architecture for scalable apps: domain modeling, Dataverse strategy,
                            API integration, identity, telemetry, resiliency.
                        </Text>
                        <Link to="/work">
                            <Button className={s.inlineLinkBtn} size="small" appearance="subtle">
                                See examples
                            </Button>
                        </Link>
                    </div>
                    <div className={s.featureCard}>
                        <div className={s.featureHeader}>ALM & Governance</div>
                        <div className={s.dividerLine} />
                        <Text size={300}>
                            DevOps pipelines, environment strategy, solution packaging, automated quality
                            gates, layered security, and cost management practices.
                        </Text>
                        <Link to="/services">
                            <Button className={s.inlineLinkBtn} size="small" appearance="subtle">
                                Learn more
                            </Button>
                        </Link>
                    </div>
                    <div className={s.featureCard}>
                        <div className={s.featureHeader}>AI / Copilot Enablement</div>
                        <div className={s.dividerLine} />
                        <Text size={300}>
                            Identify high‑impact automation and conversational scenarios; design prompt
                            orchestration, retrieval, and responsible AI guardrails.
                        </Text>
                        <Link to="/services">
                            <Button className={s.inlineLinkBtn} size="small" appearance="subtle">
                                Learn more
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* VALUE STRIP */}
            <section aria-labelledby="value-heading" className={s.valueStrip}>
                <Title3 id="value-heading">Delivery Principles</Title3>
                <div className={s.valueItems}>
                    <div className={s.valueItem}>
                        <Text weight="semibold">Telemetry‑First</Text>
                        <Text size={300}>Instrumentation baked in early for proactive insight & reliability.</Text>
                    </div>
                    <div className={s.valueItem}>
                        <Text weight="semibold">Secure by Design</Text>
                        <Text size={300}>Least privilege, data boundaries, identity layering & threat modeling.</Text>
                    </div>
                    <div className={s.valueItem}>
                        <Text weight="semibold">Repeatable Patterns</Text>
                        <Text size={300}>Composable templates accelerate future workloads and reduce drift.</Text>
                    </div>
                    <div className={s.valueItem}>
                        <Text weight="semibold">Governed Scale</Text>
                        <Text size={300}>Guardrails ensure innovation without chaos: environments, ALM, policy.</Text>
                    </div>
                </div>
                <Button appearance="primary" as="a" href="/book" style={{ marginTop: "8px", width: "fit-content" }}>
                    Start a Conversation
                </Button>
            </section>
        </main>
    );
}
