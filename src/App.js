import "./App.css";
import NavBar from "./components/NavBar";
import Pickup from "./components/Pickup";
import DateCard from "./components/DateCard";
import PickupForm from "./components/PickupForm";
function App() {
  return (
    <div className="App">
      <NavBar />
      <PickupForm />
      <Pickup />
    </div>
  );
}

export default App;
