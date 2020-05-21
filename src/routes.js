import React from "react";
import HomePage from "./pages/HomePage/HomPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
