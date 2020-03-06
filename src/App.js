import React from "react";
import "./App.css";
import PhotoCard from "./Components/PhotoCard";

function App() {
  return (
    <div className="App">
      <span>
        <h1>NASA Highlight of the Day</h1>
        <PhotoCard />
      </span>
    </div>
  );
}

export default App;
