import React from "react";
import "./BannerComponent.scss";
// import WelcomeImg from "./images/WelcomeImg.svg";

const WelcomeCard = () => {
  return (
    <div className="sabsePehleAap" style={{ background: "#fff" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "28px",
          paddingTop: "20px",
          opacity: "0.9",
          color: "#123456",
        }}
      >
        Classplus Partner Program
      </div>
      <div className="welcomeImg">
        <img src="{WelcomeImg}" style={{ width: "100%" }} alt="Welcome" />
      </div>
      <div className="HashTag">#SabsePehleAap</div>
      <div className="bodyText">
        A program that unites all the coachings across India by helping them Go
        Online!
      </div>
      <div className="Footer">
        <button className="JoinPartnerPrgm">Join Partner Program</button>
      </div>
    </div>
  );
};

export default WelcomeCard;
