import { makeStyles } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const useStyles = makeStyles({
    brandGroup: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        cursor: "pointer",
        userSelect: "none",
        textDecoration: "none",
        ":hover": { opacity: 0.92 }
    },
    logoImgWrap: {
        height: "50px", // ~2x previous 44px
        "@media (max-width: 640px)": {
            height: "64px" // scale down on small screens
        }
    },
    logoImg: {
        height: "100%",
        width: "auto",
        display: "block",
        objectFit: "contain",
        imageRendering: "auto"
    },
    brandText: {
        display: "none"
    }
});

export default function Header() {
    const s = useStyles();
    const navigate = useNavigate();
    return (
        <div
            className={s.brandGroup}
            onClick={() => navigate("/")}
            aria-label="joshday.net home"
            title="joshday.net"
        >
            <div className={s.logoImgWrap}>
                <img
                    src={logo}
                    alt="joshday.net logo"
                    className={s.logoImg}
                    decoding="async"
                />
            </div>
        </div>
    );
}