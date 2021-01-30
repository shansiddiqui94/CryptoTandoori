import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsContainer from "./NewsContainer";

export default function APIBusinessNews() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const headLineNews = `${process.env.REACT_APP_TOP_HL_URL}${apiKey}`;

  const [headlineData, setHeadlineData] = useState([]);

  // headline
  const fetchHeadLineData = async () => {
    const response = await axios.get(headLineNews);
    setHeadlineData(response.data.articles);
  };

  useEffect(() => fetchHeadLineData(), []);

  return (
    <div>
      {headlineData.map((entry, index) => {
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
