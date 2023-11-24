import OrderScreen from "./components/OrderScreen";
import "./App.css";

let specialBG = "";

const App = () => {
  return (
    <div className={`App ${specialBG}`}>
      <OrderScreen />
    </div>
  );
};

export default App;
