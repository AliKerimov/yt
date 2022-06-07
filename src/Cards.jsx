import React from "react";
const Cards = (props) => {
  return (
        <div className="card">
      <a
        href={"https://www.youtube.com/watch?v=" + props.videoId}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={props.thumbnail} alt="thumbnail" />
      </a>
      <a
        href={"https://www.youtube.com/watch?v=" + props.videoId}
        target="_blank"
        rel="noreferrer noopener"
      >
        <h2>{props.title}</h2>
      </a>
      <div className="video__details">
        <a
          href={"https://www.youtube.com/channel/" + props.channelId}
          target="_blank"
          rel="noreferrer noopener"
        >
          <p>{props.channel}</p>
        </a>
      </div>
    </div>
  );
};

export default Cards;