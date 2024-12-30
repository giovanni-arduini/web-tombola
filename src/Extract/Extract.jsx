import NumberContext from "../NumberContext";
import style from "./Extract.module.css";
import { useContext, useState } from "react";

function Extract() {
  const { numbers, extractNumber, handleSumbit } = useContext(NumberContext);

  return (
    <form onSubmit={handleSumbit}>
      <button className={style.btn}>Estrai!</button>;
    </form>
  );
}

export default Extract;
