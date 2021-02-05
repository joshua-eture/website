import React from "react";
import Page from "../../layout/Page/Page";
import HeaderTopBar from "../../navigation/HeaderTopBar/HeaderTopBar";
import "./PoliciesPage.css";

interface PoliciesPageProps {}

const PoliciesPage: React.FC<PoliciesPageProps> = ({}) => {
  return (
    <Page
      options={{
        head: {
          title: "Joshua Eture / Policies",
          description: "Agreements with Joshua Eture",
        },
      }}
    >
      <HeaderTopBar options={{ title: "Policies" }} />
      <div className="policies-text-area">
        <p id="no-policy-paragraph">
          <strong>Joshua Eture</strong> doesn't have any policy yet.
        </p>
      </div>
    </Page>
  );
};

export default PoliciesPage;
