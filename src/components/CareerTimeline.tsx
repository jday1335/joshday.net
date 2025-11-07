import { makeStyles, tokens, Text } from "@fluentui/react-components";

interface TimelineRow {
    role: string;
    org: string;
    from: string;
    to: string | "Present";
    notes: string;
}

const rows: TimelineRow[] = [
    {
        role: "Senior Consultant",
        org: "Microsoft",
        from: "Aug 2022",
        to: "Present",
        notes: "Power Platform modernization, Dataverse, ALM, telemetry, Azure integration."
    },
    {
        role: "Solutions Architect",
        org: "Atmosera",
        from: "Feb 2022",
        to: "Aug 2022",
        notes: "Cloud solution architecture and modernization planning."
    },
    {
        role: "Cloud Engineer III / Management Architect",
        org: "Planet Technologies",
        from: "Oct 2018",
        to: "Feb 2022",
        notes: "Azure app dev, DevOps pipelines, Power Platform lead (50+ apps)."
    },
    {
        role: "SharePoint Developer / Administrator",
        org: "Gallagher",
        from: "May 2017",
        to: "Oct 2018",
        notes: "Migration, modernization, and team leadership."
    },
    {
        role: "Information Manager",
        org: "United States Air Force",
        from: "Jun 2003",
        to: "Jun 2006",
        notes: "Information management, SharePoint administration, base operations."
    }
];

const useStyles = makeStyles({
    list: {
        display: "grid",
        gap: "18px",
        margin: 0,
        padding: 0,
        listStyle: "none"
    },
    item: {
        position: "relative",
        display: "grid",
        gap: "6px",
        padding: "14px 18px 16px 18px",
        backgroundColor: tokens.colorNeutralBackground2, // contrast against sidePanel bg (NeutralBackground3)
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "12px",
        boxShadow: tokens.shadow2,
        transition: "box-shadow .25s, background .25s",
        ":hover": {
            boxShadow: tokens.shadow4,
            backgroundColor: tokens.colorNeutralBackground1
        }
    },
    headerRow: {
        display: "flex",
        alignItems: "center",
        gap: "10px"
    },
    marker: {
        flexShrink: 0,
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${tokens.colorBrandBackground} 0%, ${tokens.colorBrandBackgroundHover} 100%)`,
        boxShadow: `0 0 0 3px ${tokens.colorNeutralBackground2}`
    },
    markerPast: {
        background: tokens.colorNeutralBackground4
    },
    role: {
        fontWeight: 600,
        fontSize: "15px",
        lineHeight: 1.3
    },
    metaRow: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        fontSize: "12px",
        color: tokens.colorNeutralForeground3
    },
    org: { color: tokens.colorNeutralForeground2 },
    dateRange: { fontWeight: 500 },
    presentBadge: {
        background: tokens.colorBrandBackground,
        color: tokens.colorNeutralForegroundOnBrand,
        fontSize: "11px",
        fontWeight: 600,
        padding: "2px 6px",
        borderRadius: "6px"
    },
    notes: {
        fontSize: "13px",
        color: tokens.colorNeutralForeground2,
        marginTop: "4px"
    },
    // vertical connector line
    connector: {
        content: '""',
        position: "absolute",
        left: "7px",
        top: 0,
        bottom: 0,
        width: "0",
        borderLeft: `2px solid ${tokens.colorNeutralStroke2}`,
        zIndex: 0
    },
    withConnector: {
        position: "relative",
        "&::before": {
            composes: "$connector"
        }
    }
});

export default function CareerTimeline() {
    const s = useStyles();
    return (
        <ol className={s.list} aria-label="Career timeline">
            {rows.map((r, idx) => {
                const isPresent = r.to === "Present";
                const isPast = !isPresent;
                return (
                    <li key={`${r.role}-${r.from}`} className={s.withConnector}>
                        <div className={s.item}>
                            <div className={s.headerRow}>
                                <span
                                    aria-hidden="true"
                                    className={`${s.marker} ${isPast && !isPresent ? s.markerPast : ""}`}
                                />
                                <div className={s.role}>{r.role}</div>
                            </div>
                            <div className={s.metaRow}>
                                <span className={s.org}>{r.org}</span>
                                <span className={s.dateRange}>
                                    {r.from} – {r.to}
                                </span>
                                {isPresent && <span className={s.presentBadge}>Current</span>}
                            </div>
                            <Text as="p" className={s.notes}>
                                {r.notes}
                            </Text>
                        </div>
                    </li>
                );
            })}
        </ol>
    );
}
