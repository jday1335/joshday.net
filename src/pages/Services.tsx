import ServiceCard from "../components/ServiceCard";

const items = [
    {
        title: "Power Platform Architecture & Modernization",
        blurb:
            "Design and implementation of governed Power Platform environments, including Dataverse, Model-Driven and Canvas Apps, and ALM pipelines that meet federal compliance standards.",
    },
    {
        title: "Azure Cloud Engineering",
        blurb:
            "Experience with App Service, Functions, Logic Apps, Cosmos DB, Azure SQL, Key Vault, APIM, and automation through CLI, PowerShell, and DevOps pipelines for scalable cloud deployment.",
    },
    {
        title: "Full Stack Development",
        blurb:
            "C# (.NET 5+), React, and TypeScript development for enterprise web apps. Fluent UI and Material UI interfaces with secure APIs and modern CI/CD integration.",
    },
    {
        title: "Governance, ALM & DevOps",
        blurb:
            "Comprehensive environment strategy-solution layering, DLP enforcement, managed solution pipelines, and telemetry through Application Insights.",
    },
    {
        title: "Legacy Modernization",
        blurb:
            "Converted 60+ legacy InfoPath and SharePoint forms to modern Dataverse-driven apps, improving efficiency and maintainability for government clients.",
    },
    {
        title: "AI & Copilot Enablement",
        blurb:
            "Implement Copilot Studio and responsible AI patterns with governance, traceability, and approvals integrated into Power Platform solutions.",
    },
];

export default function Services() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
            {items.map(i => <ServiceCard key={i.title} title={i.title} blurb={i.blurb} />)}
        </div>
    );
}
