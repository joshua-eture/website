import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./ConnectMenu.css";

interface ConnectMenuProps {
  visible: boolean;
  shouldClose: () => void;
}

const ConnectMenu: React.FC<ConnectMenuProps> = ({ visible, shouldClose }) => {
  return (
    <div
      id="connect-menu-modal"
      style={{ display: visible ? "block" : "none" }}
    >
      <div id="connect-menu">
        <header id="connect-menu-header">
          <h1>Connect</h1>
          <button onClick={shouldClose}>
            <CloseIcon />
          </button>
        </header>
        <a
          href="mailto:mailtojoshuaeture@gmail.com"
          target="_blank"
          role="button"
          className="connect-menu-option"
        >
          Send Email
        </a>
        <a
          href="https://github.com/joshua-eture"
          target="_blank"
          role="button"
          className="connect-menu-option"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/joshuaeture"
          target="_blank"
          role="button"
          className="connect-menu-option"
        >
          Instagram
        </a>
        <a
          href="https://www.twitter.com/joshuaeture"
          target="_blank"
          role="button"
          className="connect-menu-option"
        >
          Twitter
        </a>
      </div>
      <div className="overlay" onClick={shouldClose} />
    </div>
  );
};

export default ConnectMenu;
