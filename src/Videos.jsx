import React from "react";
import Cards from "./Cards";

const Videos = (props) => {
  let list = "";

  if (!Array.isArray(props.videos)) {
    list = props.videos.items.map((el) => (
      <Cards
        key={el.id.videoId}
        title={el.snippet.title}
        videoId={el.id.videoId}
        channel={el.snippet.channelTitle}
        thumbnail={el.snippet.thumbnails.high.url}
        channelId={el.snippet.channelId}
        date={el.snippet.publishTime}
      />
    ));
  }
  return (
    <section className="cards">
      {list}
      {props.check && <h1>You have reach the daily search quote!</h1>}
    </section>
  );
};

export default Videos;