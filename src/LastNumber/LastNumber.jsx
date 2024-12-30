import { useContext, useState } from "react";
import style from "./LastNumber.module.css";
import NumberContext from "../NumberContext";

function LastNumber() {
  const { lastExtracted } = useContext(NumberContext);

  return (
    <>
      <h3 className={style.title}>Ultimo numero estratto</h3>
      <div className={style.body}>{lastExtracted}</div>
    </>
  );
}

export default LastNumber;
