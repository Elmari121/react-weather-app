import React from "react";
import Weather from "./weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

<footer>
This project was created by Elmari Robberts and is open-sourced on 
<a href="https://github.com/Elmari121/react-weather-app" target="_blank" rel="noopener noreferrer"> GitHub.</a> 
and hosted on <a href="https://bejewelled-pony-7f1ece.netlify.app/" target="_blank" rel="noopener noreferrer"> Netlify.</a>
    </footer>
    </div>

    </div>
  );
}


