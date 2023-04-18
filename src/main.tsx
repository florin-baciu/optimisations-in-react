import { createRoot } from "react-dom/client";
import { ConfigProvider, Spin } from "antd";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { lazy, Suspense } from "react";

import { CalculatorPage } from "./pages/CalculatorPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { Template } from "./pages/TemplatePage";
import { HomePage } from "./pages/HomePage";

import { utils } from "./utils";

import "./index.css";

const links = utils.CONSTANTS.PATHS;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Template />}>
      <Route path={links.HOME} element={<HomePage />} />
      <Route path={links.ABOUT} element={<AboutUsPage />} />
      <Route path={links.CALCULATOR} element={<CalculatorPage />} />
      <Route path={links.MONITOR} element={<>monitor</>} />
    </Route>
  )
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00f",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
