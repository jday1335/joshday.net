import { tokens } from "@fluentui/react-components";

// Put your Bookings "publish" URL in Vite env as VITE_BOOKINGS_URL
const bookingsUrl = import.meta.env.VITE_BOOKINGS_URL || "";

export default function Book() {
    return (
        <div style={{ height: "75vh", border: `1px solid ${tokens.colorNeutralStroke1}` }}>
            {bookingsUrl ? (
                <iframe
                    title="Microsoft Bookings"
                    src={bookingsUrl}
                    style={{ width: "100%", height: "100%", border: 0 }}
                    allow="clipboard-write; geolocation *; microphone *; camera *"
                />
            ) : (
                <div style={{ padding: 16 }}>
                    Add your Bookings URL to <code>.env</code> as <code>VITE_BOOKINGS_URL=...</code>.
                </div>
            )}
        </div>
    );
}
