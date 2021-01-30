import React from "react";
import businessSeed from "../data/businessSeed";
import NewsContainer from "./NewsContainer";

export default function SeedHeadline() {
  const articleData = businessSeed.articles;

  return (
    <div>
      <h1>Headlines</h1>
      {articleData.map((entry, index) => {
        return (
          <div>
            <NewsContainer
              title={entry.title}
              author={entry.author}
              urlToImage={entry.urlToImage}
              description={entry.description}
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
}
