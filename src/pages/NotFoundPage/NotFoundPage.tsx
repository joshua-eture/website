import React from "react";
import Page from "../../layout/Page/Page";
import HeaderTopBar from "../../navigation/HeaderTopBar/HeaderTopBar";
import "./NotFoundPage.css";

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = ({}) => {
  return (
    <Page
      options={{
        head: {
          title: "Joshua Eture / Page Not Found",
          description: "",
        },
      }}
    >
      <HeaderTopBar options={{ title: "Page Unavailable" }} />
      <p className="not-found-page-header">Sorry this page isn't available.</p>
      <p className="not-found-page-paragraph">
        Return to <a href="/">homepage</a>.
      </p>
    </Page>
  );
};

export default NotFoundPage;
