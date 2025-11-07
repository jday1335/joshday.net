import {
    Card,
    makeStyles,
    tokens,
    Button
} from "@fluentui/react-components";
import type { ReactNode } from "react";

const useStyles = makeStyles({
    card: {
        position: "relative",
        display: "grid",
        gap: "12px",
        padding: "18px 18px 20px",
        borderRadius: "18px",
        backgroundColor: tokens.colorNeutralBackground2,
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        boxShadow: tokens.shadow4,
        transition: "box-shadow .35s, transform .35s, border-color .35s",
        ":hover": {
            boxShadow: tokens.shadow16,
            transform: "translateY(-4px)",
            border: `1px solid ${tokens.colorBrandStroke1}`
        }
    },
    accent: {
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        padding: "2px",
        background: `linear-gradient(135deg, ${tokens.colorBrandBackground} 0%, ${tokens.colorBrandBackgroundHover} 75%)`,
        "-webkit-mask":
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        maskComposite: "exclude",
        WebkitMaskComposite: "xor",
        opacity: 0,
        transition: "opacity .4s",
        pointerEvents: "none",
        ".card:hover &": {
            opacity: 1
        }
    },
    iconWrap: {
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
        borderRadius: "14px",
        background: `linear-gradient(135deg, ${tokens.colorNeutralBackground3} 0%, ${tokens.colorNeutralBackground1} 100%)`,
        boxShadow: tokens.shadow4,
        color: tokens.colorBrandForeground1,
        fontSize: "26px"
    },
    title: {
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: 1.3,
        marginTop: "4px"
    },
    blurb: {
        fontSize: "13px",
        color: tokens.colorNeutralForeground2,
        lineHeight: 1.55
    },
    preview: {
        marginTop: "4px",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        background: `linear-gradient(120deg, ${tokens.colorNeutralBackground3} 0%, ${tokens.colorNeutralBackground2} 100%)`,
        minHeight: "110px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    badgeStrip: {
        display: "flex",
        flexWrap: "wrap",
        gap: "6px",
        marginTop: "8px"
    },
    badge: {
        fontSize: "11px",
        padding: "4px 8px",
        borderRadius: "8px",
        background: tokens.colorNeutralBackground3,
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        fontWeight: 500,
        letterSpacing: ".25px"
    },
    footer: {
        display: "flex",
        marginTop: "4px"
    },
    grow: { flex: 1 }
});

export interface ServiceCardProps {
    title: string;
    blurb: string;
    icon: ReactNode;
    tags?: string[];
    ctaHref?: string;
    preview?: ReactNode;
}

export default function ServiceCard({
    title,
    blurb,
    icon,
    tags,
    ctaHref,
    preview
}: ServiceCardProps) {
    const s = useStyles();
    return (
        <div className="card">
            <div className={s.accent} aria-hidden="true" />
            <Card className={s.card} appearance="filled" orientation="vertical">
                <div style={{ display: "flex", gap: "14px" }}>
                    <div className={s.iconWrap}>{icon}</div>
                    <div style={{ flex: 1 }}>
                        <div className={s.title}>{title}</div>
                        <div className={s.blurb}>{blurb}</div>
                    </div>
                </div>

                {preview && <div className={s.preview}>{preview}</div>}

                {tags && tags.length > 0 && (
                    <div className={s.badgeStrip}>
                        {tags.map(t => (
                            <span key={t} className={s.badge}>
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {ctaHref && (
                    <div className={s.footer}>
                        <div className={s.grow} />
                        <Button
                            as="a"
                            href={ctaHref}
                            appearance="primary"
                            size="small"
                            style={{ borderRadius: "10px" }}
                        >
                            Learn More
                        </Button>
                    </div>
                )}
            </Card>
        </div>
    );
}