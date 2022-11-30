import React from "react";

import {pageHOC} from "../components";

const Home = () => {
  return <div></div>;
};

// wrapping home with HOC > pageHOC
export default pageHOC(
  Home,
  <>
    Welcome To Avax Gods <br /> a Web3 NFT Card Game
  </>,
  <>
    Connect your WEB3.0 wallet to start playing <br /> the ultimate Web3 Battle
    Card Game !
  </>
);
