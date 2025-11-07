import { Title3, Text } from "@fluentui/react-components";
import CareerTimeline from "../components/CareerTimeline";

export default function About() {
    return (
        <section>
            <Title3>About Josh</Title3>
            <br />
            <br />
            <Text>
                I'm a USAF Veteran and Microsoft Senior Consultant focused on Power Platform and Azure
                cloud development. With experience spanning banking, insurance, DoD, education,
                manufacturing, healthcare, and defense, I bring a full-stack mindset and pragmatic
                approach to enterprise modernization.
            </Text>
            <br />
            <br />
            <Text>
                Prior roles include Solutions Architect at Atmosera, Cloud Engineer III at Planet
                Technologies, and SharePoint Administrator/Developer at Gallagher. Earlier in my career,
                I supported large-scale infrastructure projects with Dell, CSC, and the Army National Guard.
            </Text>
            <br />
            <br />
            <Text>
                My toolkit includes Power Platform, C# (.NET Core 5+), React, Azure DevOps, App Insights,
                and automation with PowerShell and CLI. I'm certified in Microsoft Power Platform
                Fundamentals and committed to helping teams adopt secure, maintainable solutions that
                deliver measurable results.
            </Text>
            <CareerTimeline />
        </section>
    );
}
