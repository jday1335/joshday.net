import { Button, tokens } from "@fluentui/react-components";

// .env.local should have VITE_BOOKING_URL=...
const bookingUrl = import.meta.env.VITE_BOOKING_URL ?? "";

export default function Book() {
    return (
        <div
            style={{
                // Size to content; remove forced viewport height
                width: "100%",
                maxWidth: 760,
                margin: "32px auto",
                border: `1px solid ${tokens.colorNeutralStroke1}`,
                borderRadius: 8,
                background: tokens.colorNeutralBackground2,
                overflow: "hidden",
                boxShadow: tokens.shadow4,
            }}
        >
            <div
                style={{
                    padding: "14px 18px",
                    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
                    background: tokens.colorNeutralBackground3,
                    fontSize: 15,
                    fontWeight: 500,
                }}
            >
                Book a Session
            </div>

            <div
                style={{
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                }}
            >
                {bookingUrl ? (
                    <>
                        <p style={{ margin: 0, lineHeight: 1.5 }}>
                            Book a session to discuss your organization's needs around Azure, Power Platform,
                            and AI / Copilot solutions. Whether you want to modernize existing applications,
                            architect new solutions, or explore how AI can enhance processes—I'm here to help.
                        </p>
                        <Button
                            appearance="primary"
                            as="a"
                            href={bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ alignSelf: "start", minWidth: 220 }}
                        >
                            Schedule Now
                        </Button>
                    </>
                ) : (
                    <div
                        style={{
                            padding: 24,
                            textAlign: "center",
                            color: tokens.colorNeutralForeground3,
                            fontSize: 13,
                        }}
                    >
                        Add <code>VITE_BOOKING_URL</code> to <code>.env.local</code> and restart the dev server.
                    </div>
                )}
            </div>
        </div>
    );
}
