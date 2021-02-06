import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { analytics } from "../../firebase";
import "./Page.css";

interface PageProps {
  options: {
    head: { title: string; description: string };
    hideConnectButton?: boolean;
    style?: React.CSSProperties;
  };
}

const Page: React.FC<PageProps> = ({ children, options }) => {
  useEffect(() => {
    document.title = options.head.title;
    analytics.logEvent("page_view", { page_title: options.head.title });
  }, []);

  return (
    <main id="page" style={options.style}>
      <Helmet>
        <title>{options.head.description}</title>
        <meta name="description" content={options.head.description} />
      </Helmet>
      {children}
    </main>
  );
};

export default Page;
