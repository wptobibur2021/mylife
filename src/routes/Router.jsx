import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layout/Layouts";
import HomePage from "../pages/home/HomePage";

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
]);

export default Router;
