import React from "react";
import "./Notification.css";

const Notification = () => {
  return (
    <div className="noti-container">
      {/* hello */}

      {/* avatar */}
      <img className="noti-avatar" src="/avatar-mark-webber.webp" alt="rekt" />
      {/* name and infomation --- Mark Webber reacted to your recent post My first tournament today!*/}
      <div className="noti-text">
        <div className="noti-description">
          <div> Mark Webber </div>
          <div>reacted to your recent post</div>
          <div>My first tournament today!</div>
        </div>
        {/* time posted */}
        <div className="noti-time">1m ago</div>
      </div>
    </div>
  );
};

export default Notification;
