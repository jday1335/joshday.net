import { Card, CardHeader, CardPreview, Text } from "@fluentui/react-components";

export default function ServiceCard(props: { title: string; blurb: string; preview?: React.ReactNode }) {
    return (
        <Card orientation="vertical" style={{ height: "100%" }}>
            <CardHeader header={<Text weight="semibold">{props.title}</Text>} />
            {props.preview && <CardPreview>{props.preview}</CardPreview>}
            <div style={{ padding: 12 }}>
                <Text>{props.blurb}</Text>
            </div>
        </Card>
    );
}