import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsContainer from "./NewsContainer";

export default function APIBitcoinNews() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const bitcoinNews = `${process.env.REACT_APP_BITCOIN_URL}${apiKey}`;

  const [bitcoinData, setBitcoinData] = useState([]);

  const fetchBitcoinData = async () => {
    const response = await axios.get(bitcoinNews);
    setBitcoinData(response.data.articles);
  };

  useEffect(() => fetchBitcoinData(), []);

  return (
    <div>
      {bitcoinData.map((entry, index) => {
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
