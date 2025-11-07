import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import AppShell from "./AppShell";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import Book from "./pages/Book";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppShell />,
        children: [
            { index: true, element: <Home /> },
            { path: "services", element: <Services /> },
            { path: "work", element: <Work /> },
            { path: "about", element: <About /> },
            { path: "book", element: <Book /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <FluentProvider theme={webLightTheme}>
            <RouterProvider router={router} />
        </FluentProvider>
    </React.StrictMode>
);