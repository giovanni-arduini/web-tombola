import "./App.css";
import Header from "./Header/Header.jsx";
import Table from "./Table/Table";
import { useState } from "react";
import NumberContext from "./NumberContext";
import Body from "./Body/Body";

const numbers = new Array(90).fill(0).map((_, index) => index);

function App() {
  return (
    <NumberContext.Provider value={numbers}>
      <>
        <Header />
        <Body />
      </>
    </NumberContext.Provider>
  );
}

export default App;
