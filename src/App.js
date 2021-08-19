import React, { useState, useEffect } from "react";
import Card from "./components/Card";
// import data from "./data.json";
import axios from 'axios';
function App() {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    // fetch('https://breakingbadapi.com/api/characters')
    // .then(response => response.json())
    // .then((data) => setItemList(data));
    axios
      .get("https://breakingbadapi.com/api/characters")
      .then((res) => setItemList(res.data));
  }, []);
  return (
    <div className="App">
      <header className="header">
        <img
          src="https://www.logolynx.com/images/logolynx/55/55a537ca9549600cf7d1d0b274b3bc61.png"
          alt="Breaking Bad Logo"
        />
      </header>
      <div className="cards">
        {itemList.map((item) => (
          <Card key={item.char_id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default App;

