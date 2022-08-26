import "./App.css";
import Content from "./views/Content";
import Header from "./views/Header";
import NavBar from "./views/NavBar";
import Basket from "./views/Basket";

import { useState } from "react";

function App() {
  const [word, setWord] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    if (word.indexOf(item) !== -1) return;
    setWord([...word, item]);
  };

  const handleChange = (item, d) => {
    const ind = word.indexOf(item);
    const arr = word;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setWord([...arr]);
  };

  console.log(word.length);

  return (
    <div className="App">
      <Header
        searchInput={(searchTerm) => setSearchTerm(searchTerm)}
        openForm={(show) => setShow(show)}
        basketLenght={word.length}
      ></Header>
      <div className="flexDirections">
        <NavBar
          filterValue={(searchTerm) => setSearchTerm(searchTerm)}
        ></NavBar>
        {show ? (
          <Content setValue={searchTerm} changeWord={handleClick}></Content>
        ) : (
          <Basket
            openForm={(show) => setShow(show)}
            word={word}
            setWord={setWord}
            handleChange={handleChange}
          ></Basket>
        )}
      </div>
    </div>
  );
}

export default App;
