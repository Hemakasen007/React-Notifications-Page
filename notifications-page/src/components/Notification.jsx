import React, { useState } from "react";
import "./Notification.css";

const Notification = ({
  avatarPath,
  fullName,
  action,
  post,
  time,
  extension,
}) => {
  const [isRead, setIsRead] = useState(false);
  const [isExtended, setIsExtended] = useState(extension);
  const toggleChecked = () => setIsRead((value) => !value);



  return (
    <div
      className={isRead ? "noti-container read" : "noti-container"}
      onClick={toggleChecked}
    >
      {/* hello */}

      {/* avatar */}
      <img className="noti-avatar" src={avatarPath} alt="rekt" />
      {/* name and infomation --- Mark Webber reacted to your recent post My first tournament today!*/}
      <div className="noti-text">
        <div className="noti-description">
          <div className="user-fullname"> {fullName} </div>
          <div>{action}</div>
          <div className="user-post">
            {post}
            <span className={isRead ? "remove-dot" : "unread-dot"}>●</span>
          </div>
        </div>

        {/* time posted */}
        <div className="noti-time">{time}</div>
        {isExtended && 
          <div className="private-message">
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </div>
        }
      </div>
    </div>
  );
};

export default Notification;
