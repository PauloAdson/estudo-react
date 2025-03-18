import React from "react";
import "./styles.css";
import logoPauloAdson from "../../assets/images/pauloadson-logo.png";

export const PostCard = ({ title, body, id, cover }) => {
  return (
    <div className="post">
      <img src={logoPauloAdson} alt={title} />
      <div className="post-content">
        <h2>
          {title} {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
