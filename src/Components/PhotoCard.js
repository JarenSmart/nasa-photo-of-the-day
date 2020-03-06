import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PhotoCard.css";

function PhotoCard() {
  const [apod, setApod] = useState([]);
  console.log(apod);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Ta48wI2mWq1NVhBcRLhYHqCIheBSB9CWLc2yzSSu&date=2019-12-17"
      )
      .then(response => {
        setApod(response.data);
        console.log(response.data);
      })
      .catch(error => console.log("You threw an error:", error));
  }, []);

  return (
    <div className="card-container">
      <h2 className="title">{apod.title}</h2>
      <div className="img-container">
        <img alt="PhotoOfTheDay" className="nasa-img" src={apod.url} />
        <p className="card-date">{apod.date}</p>
        <p className="card-desc">{apod.explanation}</p>
      </div>
    </div>
  );
}
export default PhotoCard;
