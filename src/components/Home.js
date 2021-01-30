import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import axios from "axios";
import NewsContainer from "./NewsContainer";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const fetchData = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${inputVal}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    setData(response.data.articles);
  };

  const fetchAndClear = () => {
    fetchData();
    setInputVal("");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="heading">
      <h1>
        <img id="logo" src="https://www.svgrepo.com/show/297752/skewer.svg" />
        &emsp;<span className="white">C</span>rypto
        <span className="white">T</span>andoori&emsp;
        <img id="logo" src="https://www.svgrepo.com/show/297752/skewer.svg" />
      </h1>
      <p className="slogan">The spiciest place to get Crypto News</p>

      <div>
        <input type="text" value={inputVal} onChange={handleInputChange} />
        <button className="search-button" onClick={fetchAndClear}>
          Search News
        </button>
      </div>
      {data.map((entry, index) => {
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
