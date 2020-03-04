import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [photo, setPhoto] = useState([]);
  console.log(photo);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Ta48wI2mWq1NVhBcRLhYHqCIheBSB9CWLc2yzSSu"
      )
      .then(response => {
        setPhoto(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
