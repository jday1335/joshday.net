import { Button, Title2, Subtitle2, tokens } from "@fluentui/react-components";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "6rem 1.5rem",
                background: `linear-gradient(180deg, ${tokens.colorNeutralBackground1} 0%, ${tokens.colorNeutralBackground2} 100%)`,
            }}
        >
            <Title2 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>
                Building secure, scalable solutions with Power Platform, Azure &amp; AI
            </Title2>

            <Subtitle2
                style={{
                    maxWidth: 900,
                    color: tokens.colorNeutralForeground2,
                    marginBottom: "2rem",
                    lineHeight: 1.6,
                }}
            >
                I'm Josh Day - a Microsoft Senior Consultant and USAF Veteran with 20+ years of
                IT experience across industries including government, banking, manufacturing,
                healthcare, and defense. I specialize in Power Platform, Azure integration, and
                modern application architectures that make organizations faster, safer, and more
                data-driven.
            </Subtitle2>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                <Button appearance="primary" as="a" href="/book">Book a consult</Button>
                <Link to="/services"><Button appearance="secondary">Explore services</Button></Link>
            </div>
        </section>
    );
}
