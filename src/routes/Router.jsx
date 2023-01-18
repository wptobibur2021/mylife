import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layout/Layouts";
import HomePage from "../pages/home/HomePage";
import DashboardLayouts from "../components/backend/layout/Layouts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayouts />,
    children: [
      {
        path: "/dashboard",
        element: <h2>Dashboard</h2>,
      },
    ],
  },
]);

export default Router;
