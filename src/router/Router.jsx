/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about-me",
                element: <About />
            },
            {
                path: "/contact-me",
                element: <Contact />
            }
        ]
    },
]);
