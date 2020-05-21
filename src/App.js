import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu.";
import ProductList from "./components/ProductList/ProductList";
import routes from "./routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const showContenMenu = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }
  return <Switch>{result}</Switch>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Menu />

        <div className="container">
          <div className="row">
            {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-info mb-10">
              Thêm sản phẩm
            </button>

            <ProductList />
          </div> */}
            {showContenMenu(routes)}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
