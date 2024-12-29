import Number from "../Number/Number";
import React from "react";
import style from "./Table.module.css";
import { useContext } from "react";
import NumberContext from "../NumberContext";

function Table() {
  const numbers = useContext(NumberContext);
  console.log(numbers);
  return (
    <div className="container">
      <ul className="row">
        {numbers.map((n) => (
          <li className="col" key={n}>
            <Number n={n + 1} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
