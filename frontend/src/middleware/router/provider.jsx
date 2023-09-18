import React from "react";
import {createBrowserRouter} from "react-router-dom";

import Home from "../../pages/home";

export const Provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
]);