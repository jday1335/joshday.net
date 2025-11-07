import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
    bar: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "24px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: { fontSize: "22px", fontWeight: "700", letterSpacing: "0.5px" },
    tag: { color: tokens.colorNeutralForeground3 },
});



export default function Header() {
    const s = useStyles();
    return (
        <div className={s.bar}>
            <div className={s.logo}>JoshDay.Net</div>
            <div className={s.tag}>Power Platform &#183; Azure &#183; AI</div>
        </div>
    );
}