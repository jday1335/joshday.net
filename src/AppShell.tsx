import { Outlet, Link, useLocation } from "react-router-dom";
import { makeStyles, tokens, TabList, Tab } from "@fluentui/react-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const useStyles = makeStyles({
    wrap: { minHeight: "100vh", display: "grid", gridTemplateRows: "auto 1fr auto" },
    nav: {
        background: tokens.colorNeutralBackground1,
        position: "sticky",
        top: 0,
        zIndex: 10,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: tokens.colorNeutralStroke1,
        boxShadow: tokens.shadow4,
    },
    main: { maxWidth: "1120px", margin: "0 auto", padding: "24px" },
});

export default function AppShell() {
    const s = useStyles();
    const { pathname } = useLocation();
    const current = pathname === "/" ? "home" : pathname.replace("/", "");

    return (
        <div className={s.wrap}>
            <div className={s.nav}>
                <Header />
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 12px" }}>
                    <TabList selectedValue={current} size="large" appearance="subtle">
                        <Tab value="home"><Link to="/">Home</Link></Tab>
                        <Tab value="services"><Link to="/services">Services</Link></Tab>
                        <Tab value="work"><Link to="/work">Work</Link></Tab>
                        <Tab value="about"><Link to="/about">About</Link></Tab>
                        <Tab value="book"><Link to="/book">Book</Link></Tab>
                    </TabList>
                </div>
            </div>

            <main className={s.main}>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}