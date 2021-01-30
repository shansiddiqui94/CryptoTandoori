import React from "react";

export default function NewsContainer(props) {
  return (
    <div className="news-container">
      <h4 class="news-title">{props.title}</h4>
      <h4>{props.author}</h4>
      <img
        src={
          props.urlToImage
            ? props.urlToImage
            : "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
        alt="image"
      />
      <p>{props.description}</p>
    </div>
  );
}
