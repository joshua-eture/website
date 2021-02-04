import React from "react";
import "./Drawer.css";

interface DrawerProps {
  visible: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ visible }) => {
  return (
    <nav
      id="drawer"
      role="navigation"
      style={{ display: visible ? "block" : "none" }}
    >
      <a href="/projects" role="button" className="drawer-nav-option">
        Apps & Projects
      </a>
      <a href="/policies" role="button" className="drawer-nav-option">
        Policies
      </a>
    </nav>
  );
};

export default Drawer;
