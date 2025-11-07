import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
    makeStyles,
    tokens,
    TabList,
    Tab,
    FluentProvider,
    webLightTheme,
    Button
} from "@fluentui/react-components";
import { Dismiss24Regular, Navigation24Regular } from "@fluentui/react-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useRef, useLayoutEffect, useEffect } from "react";

const useStyles = makeStyles({
    wrap: {
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        background: "linear-gradient(135deg,#f8f9fb,#eef1f6)"
    },
    nav: {
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "linear-gradient(120deg,rgba(255,255,255,0.9),rgba(255,255,255,0.75))",
        borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
        boxShadow: tokens.shadow8
    },
    navInner: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "8px 32px"
    },
    navRow: {
        display: "flex",
        alignItems: "flex-end",
        gap: "40px",
        "@media (max-width: 780px)": {
            alignItems: "center",
            gap: "20px"
        }
    },
    leftGroup: {
        display: "flex",
        alignItems: "flex-end",
        gap: "36px",
        flex: "1 1 auto",
        minWidth: 0,
        "@media (max-width: 780px)": {
            gap: "20px"
        }
    },
    tabs: {
        gap: "4px",
        display: "flex",
        flexWrap: "wrap",
        paddingBottom: "6px",
        "@media (max-width: 780px)": {
            display: "none"
        }
    },
    tab: {
        fontWeight: 500,
        letterSpacing: ".25px",
        position: "relative",
        borderRadius: "8px",
        padding: "10px 18px",
        transition: "color .25s, background .25s",
        "&:hover": {
            background: tokens.colorNeutralBackground3,
            color: tokens.colorBrandForeground1
        },
        "&[data-selected='true']": {
            color: tokens.colorBrandForeground1
        },
        "&[data-selected='true']::after": {
            content: '""',
            position: "absolute",
            left: "10px",
            right: "10px",
            bottom: "6px",
            height: "3px",
            borderRadius: "3px",
            background: `linear-gradient(90deg, ${tokens.colorBrandBackground} 0%, ${tokens.colorBrandBackgroundHover} 100%)`
        }
    },
    tagline: {
        marginLeft: "auto",
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: ".3px",
        color: tokens.colorNeutralForeground3,
        whiteSpace: "nowrap",
        paddingBottom: "10px",
        transition: "opacity .25s",
        "@media (max-width: 1000px)": {
            display: "none"
        }
    },
    taglineHidden: {
        opacity: 0,
        pointerEvents: "none",
        visibility: "hidden"
    },
    mobileToggle: {
        marginLeft: "auto",
        display: "none",
        "@media (max-width: 780px)": {
            display: "inline-flex"
        }
    },
    backdrop: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        opacity: 0,
        pointerEvents: "none",
        transition: "opacity .3s ease",
        zIndex: 99
    },
    backdropOpen: {
        opacity: 1,
        pointerEvents: "auto"
    },
    drawer: {
        position: "fixed",
        top: 0,
        left: 0,
        height: "100dvh",
        width: "min(320px,80%)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "20px 20px 28px",
        background: tokens.colorNeutralBackground2,
        borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
        boxShadow: tokens.shadow64,
        transform: "translateX(-105%)",
        transition: "transform .35s cubic-bezier(.25,.8,.25,1)",
        zIndex: 100,
        "@media (min-width: 781px)": {
            display: "none"
        }
    },
    drawerOpen: {
        transform: "translateX(0)"
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        marginBottom: "4px"
    },
    drawerTagline: {
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: ".3px",
        color: tokens.colorNeutralForeground3
    },
    drawerTabs: {
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        marginTop: "8px"
    },
    drawerTab: {
        fontWeight: 500,
        letterSpacing: ".25px",
        textAlign: "left",
        borderRadius: "10px",
        padding: "12px 14px",
        position: "relative",
        "&[data-selected='true']": {
            background: tokens.colorNeutralBackground3,
            color: tokens.colorBrandForeground1
        }
    },
    main: { maxWidth: "1120px", margin: "0 auto", padding: "32px 28px" }
});

export default function AppShell() {
    const s = useStyles();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const current = pathname === "/" ? "home" : pathname.replace("/", "");

    const navInnerRef = useRef<HTMLDivElement | null>(null);
    const leftGroupRef = useRef<HTMLDivElement | null>(null);
    const taglineRef = useRef<HTMLDivElement | null>(null);
    const [showTagline, setShowTagline] = useState(true);

    useLayoutEffect(() => {
        function measure() {
            if (!navInnerRef.current || !leftGroupRef.current || !taglineRef.current) return;
            const innerWidth = navInnerRef.current.clientWidth;
            const leftWidth = leftGroupRef.current.getBoundingClientRect().width;
            const tagWidth = taglineRef.current.getBoundingClientRect().width;
            const fits = leftWidth + tagWidth + 32 < innerWidth;
            setShowTagline(fits);
        }
        measure();
        const ro = new ResizeObserver(measure);
        if (navInnerRef.current) ro.observe(navInnerRef.current);
        if (leftGroupRef.current) ro.observe(leftGroupRef.current);
        window.addEventListener("resize", measure);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, []);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const closeButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (drawerOpen) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = prev;
            };
        }
    }, [drawerOpen]);

    useEffect(() => {
        if (drawerOpen && closeButtonRef.current) {
            closeButtonRef.current.focus();
        }
    }, [drawerOpen]);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setDrawerOpen(false);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    function go(value: string) {
        navigate(value === "home" ? "/" : `/${value}`);
        setDrawerOpen(false);
    }

    return (
        <FluentProvider theme={webLightTheme}>
            <div className={s.wrap}>
                <div className={s.nav}>
                    <div className={s.navInner} ref={navInnerRef}>
                        <div className={s.navRow}>
                            <div className={s.leftGroup} ref={leftGroupRef}>
                                <Header />
                                <TabList
                                    selectedValue={current}
                                    size="large"
                                    appearance="transparent"
                                    className={s.tabs}
                                    onTabSelect={(_, data) => go(data.value as string)}
                                >
                                    <Tab value="home" className={s.tab}>Home</Tab>
                                    <Tab value="services" className={s.tab}>Services</Tab>
                                    <Tab value="work" className={s.tab}>Work</Tab>
                                    <Tab value="about" className={s.tab}>About</Tab>
                                    <Tab value="book" className={s.tab}>Book</Tab>
                                </TabList>
                            </div>

                            <div
                                ref={taglineRef}
                                className={`${s.tagline} ${!showTagline ? s.taglineHidden : ""}`}
                            >
                                Power Platform &middot; Azure &middot; AI
                            </div>

                            <Button
                                aria-label="Open navigation menu"
                                className={s.mobileToggle}
                                appearance="subtle"
                                size="large"
                                onClick={() => setDrawerOpen(true)}
                            >
                                <Navigation24Regular />
                            </Button>
                        </div>
                    </div>
                </div>

                <div
                    className={`${s.backdrop} ${drawerOpen ? s.backdropOpen : ""}`}
                    onClick={() => setDrawerOpen(false)}
                    aria-hidden={drawerOpen ? "false" : "true"}
                />

                <aside
                    className={`${s.drawer} ${drawerOpen ? s.drawerOpen : ""}`}
                    role={drawerOpen ? "dialog" : undefined}
                    aria-modal={drawerOpen ? "true" : undefined}
                    aria-label="Navigation menu"
                >
                    <div className={s.drawerHeader}>
                        <Header />
                        <Button
                            ref={closeButtonRef}
                            aria-label="Close navigation menu"
                            appearance="subtle"
                            onClick={() => setDrawerOpen(false)}
                            icon={<Dismiss24Regular />}
                        />
                    </div>
                    <div className={s.drawerTagline}>
                        Power Platform &middot; Azure &middot; AI
                    </div>
                    <nav aria-label="Primary">
                        <TabList
                            selectedValue={current}
                            appearance="subtle"
                            className={s.drawerTabs}
                            onTabSelect={(_, data) => go(data.value as string)}
                        >
                            <Tab value="home" className={s.drawerTab}>Home</Tab>
                            <Tab value="services" className={s.drawerTab}>Services</Tab>
                            <Tab value="work" className={s.drawerTab}>Work</Tab>
                            <Tab value="about" className={s.drawerTab}>About</Tab>
                            <Tab value="book" className={s.drawerTab}>Book</Tab>
                        </TabList>
                    </nav>
                </aside>

                <main className={s.main}>
                    <Outlet />
                </main>

                <Footer />
            </div>
        </FluentProvider>
    );
}