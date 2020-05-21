import React from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Quản Lý Sản Phẩm",
    to: "/product-list",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

const showMenus = (menus) => {
  var result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          to={menu.to}
          label={menu.name}
          activeOnlyWhenExact={menu.exact}
        />
      );
    });
  }
  return result;
};

const Menu = () => {
  return (
    <div className="navbar navbar-default">
      <a href=" " className="navbar-brand">
        Call Api
      </a>
      <ul className="nav navbar-nav">{showMenus(menus)}</ul>
    </div>
  );
};

export default Menu;
