import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
    foot: {
        background: tokens.colorNeutralBackground2,
        borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
        padding: "24px",
    },
    inner: { maxWidth: "1120px", margin: "0 auto", color: tokens.colorNeutralForeground2 },
});

export default function Footer() {
    const s = useStyles();
    return (
        <footer className={s.foot}>
            <div className={s.inner}>
                &copy; {new Date().getFullYear()} Josh Day. Trusted across U.S. federal and enterprise environments.
            </div>
        </footer>
    );
}