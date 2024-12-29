import Number from "../Number/Number";
import { useContext } from "react";
import NumberContext from "../NumberContext";

function Table() {
  const numbers = useContext(NumberContext);
  console.log(numbers);
  return numbers.map((n) => <Number key={n} n={n + 1} />);
}

export default Table;
