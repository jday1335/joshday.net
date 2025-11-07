import { makeStyles, tokens, Text } from "@fluentui/react-components";

const useStyles = makeStyles({
    wrap: { display: "grid", gap: "12px", marginTop: "16px" },
    item: {
        padding: "12px 14px",
        borderRadius: "10px",
        backgroundColor: tokens.colorNeutralBackground3,
        border: `1px solid ${tokens.colorNeutralStroke2}`,
    },
    role: { fontWeight: 600 },
    meta: { color: tokens.colorNeutralForeground3 },
});

const rows = [
    { role: "Senior Consultant", org: "Microsoft", dates: "Aug 2022 - Present", notes: "Power Platform modernization, Dataverse, ALM, telemetry, Azure integration." },
    { role: "Solutions Architect", org: "Atmosera", dates: "Feb 2022 - Aug 2022", notes: "Cloud solution architecture and modernization planning." },
    { role: "Cloud Engineer III / Management Architect", org: "Planet Technologies", dates: "Oct 2018 - Feb 2022", notes: "Azure app dev, DevOps pipelines, Power Platform lead (50+ apps)." },
    { role: "SharePoint Developer / Administrator", org: "Gallagher", dates: "May 2017 - Oct 2018", notes: "Migration, modernization, and team leadership." },
    { role: "Information Manager", org: "United States Air Force", dates: "Jun 2003 - Jun 2006", notes: "Information management, SharePoint administration, base operations." },
];

export default function CareerTimeline() {
    const s = useStyles();
    return (
        <div className={s.wrap}>
            {rows.map(r => (
                <div key={r.role} className={s.item}>
                    <div className={s.role}>{r.role} - {r.org}</div>
                    <div className={s.meta}>{r.dates}</div>
                    <Text>{r.notes}</Text>
                </div>
            ))}
        </div>
    );
}
