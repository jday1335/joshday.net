import {
    Title2,
    Subtitle2,
    Text,
    Divider,
    Button,
    Tag,
    TagGroup,
    makeStyles,
    tokens
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { useState, useEffect, useRef, useId } from "react";
import CareerTimeline from "../components/CareerTimeline";
import profileImg from "../assets/profile.jpg";

const useStyles = makeStyles({
    section: {
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "20px 0 32px",
        display: "grid",
        gap: "28px"
    },
    introCard: {
        display: "grid",
        gap: "18px",
        padding: "24px 28px",
        borderRadius: "18px",
        backgroundColor: tokens.colorNeutralBackground2,
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        boxShadow: tokens.shadow8
    },
    heroRow: {
        display: "grid",
        gap: "32px",
        alignItems: "center",
        gridTemplateColumns: "minmax(0,1fr)",
        "@media (min-width: 860px)": {
            gridTemplateColumns: "minmax(240px,300px) minmax(0,1fr)"
        }
    },
    portraitWrap: {
        position: "relative",
        width: "100%",
        maxWidth: "300px",
        margin: "0 auto",
        aspectRatio: "4 / 5",
        borderRadius: "20px",
        overflow: "hidden",
        isolation: "isolate",
        boxShadow: tokens.shadow28,
        background: `linear-gradient(135deg, ${tokens.colorBrandBackground}22, ${tokens.colorBrandBackgroundHover}11)`
    },
    portraitImg: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "saturate(1.02)",
        transform: "scale(1.02)",
        transition: "transform .6s cubic-bezier(.25,.8,.25,1)"
    },
    portraitRing: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        borderRadius: "inherit",
        boxShadow: `inset 0 0 0 2px ${tokens.colorNeutralStroke1}, inset 0 0 0 4px ${tokens.colorNeutralBackground2}99`
    },
    portraitGlow: {
        content: '""',
        position: "absolute",
        bottom: "-15%",
        left: "-10%",
        width: "140%",
        height: "60%",
        background: `radial-gradient(circle at 30% 70%, ${tokens.colorBrandBackground}55, transparent 70%)`,
        mixBlendMode: "overlay",
        opacity: 0.6
    },
    portraitHover: {
        ":hover img": { transform: "scale(1.06)" }
    },
    headingBlock: {
        display: "grid",
        gap: "14px"
    },
    headingBar: {
        display: "flex",
        alignItems: "center",
        gap: "12px"
    },
    accent: {
        width: "6px",
        height: "30px",
        borderRadius: "4px",
        background: `linear-gradient(180deg, ${tokens.colorBrandBackground} 0%, ${tokens.colorBrandBackgroundHover} 100%)`
    },
    paragraphs: {
        display: "grid",
        gap: "12px"
    },
    skillsBlock: {
        display: "flex",
        flexWrap: "wrap",
        gap: "6px",
        marginTop: "4px"
    },
    ctaRow: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginTop: "2px"
    },
    toggleTimelineBtn: {
        marginLeft: "auto"
    },
    backdrop: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.28)",
        opacity: 0,
        pointerEvents: "none",
        transition: "opacity .25s ease",
        zIndex: 90
    },
    backdropOpen: {
        opacity: 1,
        pointerEvents: "auto"
    },
    flyout: {
        position: "fixed",
        top: 0,
        right: 0,
        height: "100dvh",
        width: "clamp(340px, 42vw, 540px)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "28px 28px 36px",
        background: tokens.colorNeutralBackground2,
        borderLeft: `1px solid ${tokens.colorNeutralStroke2}`,
        boxShadow: tokens.shadow64,
        transform: "translateX(105%)",
        transition: "transform .33s cubic-bezier(.25,.8,.25,1)",
        zIndex: 100
    },
    flyoutOpen: {
        transform: "translateX(0)"
    },
    flyoutHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px"
    },
    flyoutBody: {
        overflowY: "auto",
        paddingRight: "4px",
        display: "grid",
        gap: "18px"
    }
});

const skills = [
    "Power Platform",
    "Dataverse",
    "Azure",
    "App Insights",
    "ALM / DevOps",
    "C# / .NET",
    "React",
    "Automation",
    "Telemetry",
    "Security"
];

export default function About() {
    const s = useStyles();
    const [timelineOpen, setTimelineOpen] = useState(false);
    const flyoutHeadingRef = useRef<HTMLDivElement | null>(null);
    const aboutHeadingId = useId();

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setTimelineOpen(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    useEffect(() => {
        if (timelineOpen && flyoutHeadingRef.current) {
            flyoutHeadingRef.current.focus();
        }
    }, [timelineOpen]);

    return (
        <section className={s.section} aria-labelledby={aboutHeadingId}>
            <div className={s.introCard}>
                <div className={s.heroRow}>
                    <figure
                        className={`${s.portraitWrap} ${s.portraitHover}`}
                        aria-label="Portrait of Josh Day"
                    >
                        <img
                            src={profileImg}
                            alt="Josh Day"
                            className={s.portraitImg}
                            loading="lazy"
                            decoding="async"
                        />
                        <span className={s.portraitRing} aria-hidden="true" />
                        <span className={s.portraitGlow} aria-hidden="true" />
                    </figure>

                    <div className={s.headingBlock}>
                        <div className={s.headingBar}>
                            <div className={s.accent} aria-hidden="true" />
                            <Title2 id={aboutHeadingId}>About Josh</Title2>
                        </div>

                        <div className={s.paragraphs}>
                            <Text as="p">
                                USAF Veteran and Microsoft Senior Consultant focused on Power Platform and Azure
                                modernization. I apply full‑stack patterns, telemetry, and secure ALM to accelerate
                                enterprise outcomes across banking, insurance, DoD, education, manufacturing,
                                healthcare, and defense.
                            </Text>
                            <Text as="p">
                                Previous roles span solution architecture, cloud engineering, and SharePoint
                                modernization—leading delivery of high‑impact apps, DevOps pipelines, and governance
                                models supporting rapid scale.
                            </Text>
                            <Text as="p">
                                Core emphasis: building resilient, observable solutions; mentoring teams on platform
                                adoption; and establishing repeatable patterns that reduce operational friction.
                            </Text>
                        </div>
                    </div>
                </div>

                <Divider appearance="brand" />

                <Subtitle2>Key Focus Areas</Subtitle2>
                <TagGroup className={s.skillsBlock} size="small">
                    {skills.map(skill => (
                        <Tag key={skill} appearance="outline">{skill}</Tag>
                    ))}
                </TagGroup>

                <div className={s.ctaRow}>
                    <Button appearance="primary" as="a" href="/work">View Work</Button>
                    <Button appearance="secondary" as="a" href="/services">Services</Button>
                    <Button appearance="outline" as="a" href="/book">Book a Session</Button>
                    <Button
                        appearance="subtle"
                        onClick={() => setTimelineOpen(o => !o)}
                        aria-expanded={timelineOpen}
                        aria-controls="career-timeline-flyout"
                        className={s.toggleTimelineBtn}
                    >
                        {timelineOpen ? "Hide Timeline" : "Career Timeline"}
                    </Button>
                </div>
            </div>

            <div
                className={`${s.backdrop} ${timelineOpen ? s.backdropOpen : ""}`}
                onClick={() => setTimelineOpen(false)}
                aria-hidden={timelineOpen ? "false" : "true"}
            />

            <aside
                id="career-timeline-flyout"
                className={`${s.flyout} ${timelineOpen ? s.flyoutOpen : ""}`}
                role={timelineOpen ? "dialog" : undefined}
                aria-label="Career timeline"
                aria-modal={timelineOpen ? "true" : undefined}
                style={{ visibility: timelineOpen ? "visible" : "hidden" }}
            >
                <div className={s.flyoutHeader}>
                    <div
                        ref={flyoutHeadingRef}
                        tabIndex={-1}
                        style={{ outline: "none" }}
                        aria-label="Career Timeline heading"
                    >
                        <Subtitle2 as="h3" style={{ margin: 0 }}>
                            Career Timeline
                        </Subtitle2>
                    </div>
                    <Button
                        icon={<Dismiss24Regular />}
                        appearance="subtle"
                        onClick={() => setTimelineOpen(false)}
                        aria-label="Close career timeline"
                    />
                </div>
                <div className={s.flyoutBody}>
                    <Text as="p" size={300} style={{ color: tokens.colorNeutralForeground3 }}>
                        Snapshot of roles emphasizing modernization, integration, and platform enablement.
                    </Text>
                    {timelineOpen && <CareerTimeline />}
                </div>
            </aside>
        </section>
    );
}
