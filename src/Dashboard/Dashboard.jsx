import EndGame from "../EndGame/EndGame";
import Extract from "../Extract/Extract";
import LastNumber from "../LastNumber/LastNumber";

function Dashboard() {
  return (
    <div className="container">
      <LastNumber />
      <Extract />
      <EndGame />
    </div>
  );
}

export default Dashboard;
