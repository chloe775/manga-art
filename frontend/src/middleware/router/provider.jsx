import React from "react";
import {createBrowserRouter} from "react-router-dom";

import Home from "../../pages/home";
import List from "../../pages/List"
import Actu from "../../pages/Actu";
import Manga from "../../pages/Manga";

export const Provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/galerie",
    element: <List />,
  },
  {
    path: "/actualite",
    element: <Actu />,
  },
  {
    path: "/Manga",
    element: <Manga />,
  },
]);

