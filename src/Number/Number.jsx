import NumberContext from "../NumberContext";
import style from "./Number.module.css";
import { useContext } from "react";

function Number(n) {
  const { extractedNumbers, lastExtracted } = useContext(NumberContext);
  const isExtracted = extractedNumbers.includes(n.n);

  // return n === lastExtracted || extractedNumbers.includes(n) ? (
  //   <p className={(style.body, style.extracted)}>{n.n}</p>
  // ) : (
  return (
    <p className={`${style.body} ${isExtracted ? style.extracted : ""}`}>
      {n.n}
    </p>
  );
  // );
}

export default Number;
