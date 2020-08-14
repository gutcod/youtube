import React, { useContext } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

export const NavBar = () => {
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
  };
  return (
    <Menu
      mode="horizontal"
      theme="dark"
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <Menu.Item>
        <NavLink to="/home">Home</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/link">Links</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/" onClick={logoutHandler}>
          Выход
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};
