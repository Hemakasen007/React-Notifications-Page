import React, { useState } from "react";
import "./Notification.css";

const Notification = ({avatarPath, fullName, action, post, time}) => {
  const [isRead, setIsRead] = useState(false);
  const toggleChecked = () => setIsRead((value) => !value);
  return (
    <div
      className={isRead ? "noti-container read" : "noti-container"}
      onClick={toggleChecked}
    >
      {/* hello */}

      {/* avatar */}
      <img className="noti-avatar" src="/avatar-mark-webber.webp" alt="rekt" />
      {/* name and infomation --- Mark Webber reacted to your recent post My first tournament today!*/}
      <div className="noti-text">
        <div className="noti-description">
          <div className="user-fullname"> Mark Webber </div>
          <div>reacted to your recent post</div>
          <div className="user-post">
            My first tournament today!{" "}
            <span className={isRead ? "remove-dot" : "unread-dot"}> ● </span>{" "}
          </div>
        </div>
        {/* time posted */}
        <div className="noti-time">1m ago</div>
      </div>
    </div>
  );
};

export default Notification;
