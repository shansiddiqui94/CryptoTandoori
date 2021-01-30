import React from "react";
import bitcoinSeed from "../Data/bitcoinSeed";
import NewsContainer from "./NewsContainer";

export default function SeedBitcoinNews() {
  const articleData = bitcoinSeed.articles;
  console.log(articleData);

  return (
    <div>
      <h1>Bitcoin News</h1>
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
