import React, { useState } from "react";
import Page from "../../layout/Page/Page";
import HeaderTopBar from "../../navigation/HeaderTopBar/HeaderTopBar";
import ConnectMenu from "../../components/ConnectMenu/ConnectMenu";
import "./HomePage.css";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const MY_AGE = new Date().getFullYear() - 2003;
  const [connectMenuVisible, setConnectMenuVisible] = useState(false);

  return (
    <Page
      options={{
        head: {
          title: "Joshua Eture / Website",
          description: `Computer programmer, ${MY_AGE}`,
        },
        style: { overflow: "hidden" },
      }}
    >
      <HeaderTopBar
        options={{
          title: "Connect with Me",
          hideConnectButton: false,
          whenConnectButtonClicked: () => setConnectMenuVisible(true),
        }}
      />
      <div className="homepage-showcase"></div>
      <ConnectMenu
        visible={connectMenuVisible}
        shouldClose={() => setConnectMenuVisible(false)}
      />
    </Page>
  );
};

export default HomePage;
