import { Title3, Text } from "@fluentui/react-components";

export default function Work() {
    const highlights = [
        "Supported multiple government agencies in migration and modernization efforts using Power Platform.",
        "Converted 60+ legacy InfoPath forms into comprehensive Power Platform solutions.",
        "Replaced complex spreadsheets with Dataverse-driven Model-Driven Apps for improved management.",
        "Developed Azure resource automation (CLI/Fluent API) and DevOps pipelines for multi-environment deployments.",
        "Hosted App-in-a-Day workshops to enable client teams for sustainable Power Platform growth.",
    ];
    return (
        <section>
            <Title3>Recent Achievements</Title3>
            <ul>{highlights.map(h => <li key={h}><Text>{h}</Text></li>)}</ul>
            <Text style={{ opacity: 0.8 }}>Full portfolio available upon request (NDA).</Text>
        </section>
    );
}
