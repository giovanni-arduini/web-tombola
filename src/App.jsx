import "./App.css";
import Header from "./Header/Header.jsx";
import Table from "./Table/Table";
import { useState } from "react";
import NumberContext from "./NumberContext";
import Body from "./Body/Body";

const numbers = new Array(90).fill(0).map((_, index) => index);

function App() {
  const [remainingNumbers, setRemainingNumbers] = useState(numbers);
  const [extractedNumbers, setExtractedNumbers] = useState([]);
  const [lastExtracted, setLastExtracted] = useState();

  function extractNumber(a) {
    const i = Math.floor(Math.random() * a.length);
    const newNumber = remainingNumbers[i];

    setLastExtracted(newNumber);
    console.log(lastExtracted);
    setExtractedNumbers((extractNumbers) => [...extractNumbers, newNumber]);
    setRemainingNumbers((remainingNumbers) =>
      remainingNumbers.filter((_, index) => index !== i)
    );

    console.log(extractedNumbers);
    console.log(remainingNumbers);
  }

  const handleSumbit = (event) => {
    extractNumber(remainingNumbers);
    event.preventDefault();
  };

  return (
    <NumberContext.Provider
      value={{
        numbers,
        extractNumber,
        extractedNumbers,
        handleSumbit,
        lastExtracted,
      }}
    >
      <>
        <Header />
        <Body />
      </>
    </NumberContext.Provider>
  );
}

export default App;
