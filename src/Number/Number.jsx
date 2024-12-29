import style from "./Number.module.css";

function Number(n) {
  return <p className={style.body}>{n.n}</p>;
}

export default Number;
