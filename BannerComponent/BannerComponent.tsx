import React from "react";

import { BannerComponentProps } from "./BannerComponent.types";
import "./BannerComponent.scss";
import WhatisClaspls from "./WhatIsClaspls";
import WelcomeCard from "./WelcomeCard";

const BannerComponent: React.FC<BannerComponentProps> = () => (
  <div className="classNameplusPrgm">
    <WelcomeCard />
    <WhatisClaspls />
  </div>
);

export default BannerComponent;
