import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/header/Header.js";
import "./components/header/Header.scss";
import Card from "./components/card/Card.js";
import "./components/card/Card.scss";

// const axios = require('axios');


 


function App() {
  const [data, setData] = useState({});


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ZGzNA1vDIuf2m2dzTyWSJZrS6Y5D4mSmUdSUVb69')
  .then((res) => setData(res.data))
  
  .catch((err) => console.log(err));
    
  }, []);

  return (
    <div className="App">
      <Header />
      <Card data={data} />
    </div>
  );
}

export default App;
