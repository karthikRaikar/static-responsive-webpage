import React from "react";
import "./BannerComponent.scss";
// import videoImg from "./images/videoImg.svg";

const WhatisClaspls = () => {
  return (
    <div className="WhatisClps" style={{ background: "#f4f7f8" }}>
      <div className="whatisClpsHeading">
        What is Classplus Partner Program?
      </div>
      <div className="bodyTopText">
        Classplus Partner program is an opportunity for you to multiply your
        Business Revenue easily
      </div>
      <div className="bodyBtmText">
        Refer a Coaching Institute and join the partner ecosystem of
        classNameplus to avail multiple benefits.
      </div>
      <div className="videoImg">
        <img className="videosImgs" src="{videoImg}" alt="videoImg" />
      </div>
      <div className="checkoutVideoText">
        Check out this video for more information
      </div>
    </div>
  );
};

export default WhatisClaspls;
