import React from "react";
import HomePage from "./pages/HomePage/HomPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/products-list",
    exact: false,
    main: () => <ProductListPage />,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => <ProductActionPage history={history} />,
  },
  {
    path: "/product/edit/:id",
    exact: false,
    main: ({ history }) => <ProductActionPage match={history} />,
  },
  {
    path: "",
    exact: false,
    main: ({ match }) => <NotFoundPage match={match} />,
  },
];

export default routes;
