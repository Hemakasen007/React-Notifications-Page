import React from "react";
import "./Main.css";
import Notification from "./Notification";
import notifications from "../utils/parseNotifications";

const Main = () => {
  return (
    <div className="container">
      <div className="sub-cont">
        <div className="sub-container-header">
          <div className="sub-cont-h1"> Notifications <span className="new-notifications">3</span></div>
          <div className="sub-cont-h2">Mark all as read</div>
        </div>

        <div className="notification-cont">
          {notifications.map((item, key) => (
            <Notification avatarPath={item.info.avatarPath} fullName={item.info.fullName} post={item.info.post}
             action={item.info.action} time={item.info.time} key={key}/>
          ))}
          {/* <Notification />
          <Notification/>
          <Notification/>
          <Notification/> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
