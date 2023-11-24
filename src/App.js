import OrderScreen from './components/OrderScreen/OrderScreen.js';
import './App.css';

let specialBG = ""



const App = () => {
  return (
    <div className={`App ${specialBG}`}>
      <OrderScreen />
    </div>
  );
}

export default App;
