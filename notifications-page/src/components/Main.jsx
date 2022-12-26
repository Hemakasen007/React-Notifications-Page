import React from "react";
import "./Main.css";
import Notification from "./Notification";

const Main = () => {
  return (
    <div className="container">
      <div className="sub-cont">
        <div className="sub-container-header">
          <div className="sub-cont-h1"> Notifications <span className="new-notifications">3</span></div>
          <div className="sub-cont-h2">Mark all as read</div>
        </div>

        <div className="notification-cont">
          <Notification/>
          <Notification/>
          <Notification/>
          <Notification/>
        </div>
      </div>
    </div>
  );
};

export default Main;
