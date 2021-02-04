import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "../Drawer/Drawer";
import "./HeaderTopBar.css";

interface HeaderTopBarProps {
  options: {
    title: string;
    hideConnectButton?: boolean;
    whenConnectButtonClicked?: () => void;
  };
}

const HeaderTopBar: React.FC<HeaderTopBarProps> = ({
  options: { title, hideConnectButton = true, whenConnectButtonClicked },
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <header id="header-top-bar">
      <nav id="header-top-bar-menu" role="navigation">
        <div role="button" className="header-top-bar-menu-button"></div>
        <a href="/" id="logo">
          Joshua Eture / Website
        </a>
        <ul>
          <li>
            <a href="/projects" className="header-top-bar-menu-option">
              Apps & Projects
            </a>
          </li>
          <li>
            <a href="/policies" className="header-top-bar-menu-option">
              Policies
            </a>
          </li>
        </ul>
        <div
          role="button"
          className="header-top-bar-menu-button"
          onClick={() => setDrawerVisible(!drawerVisible)}
        >
          {drawerVisible ? <CloseIcon /> : <DehazeIcon />}
        </div>
      </nav>
      <div id="header-top-bar-page-title">
        {hideConnectButton ? (
          <a
            role="button"
            href="/"
            className="header-top-bar-page-title-button"
          >
            <ArrowBackIcon />
          </a>
        ) : (
          <a
            role="button"
            className="header-top-bar-page-title-button"
            onClick={whenConnectButtonClicked}
          >
            <ArrowForwardIcon />
          </a>
        )}
        <h1 id="header-top-bar-page-title-h1">{title}</h1>
      </div>
      <Drawer visible={drawerVisible} />
    </header>
  );
};

export default HeaderTopBar;
