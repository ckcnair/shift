import "./App.css";
import NavBar from "./components/NavBar";
import Pickup from "./components/Pickup";
import Features from "./components/Features";
import PickupForm from "./components/PickupForm";
function App() {
  return (
    <div className="App">
      <NavBar />
      <PickupForm />
      <Features />
      <Pickup />
    </div>
  );
}

export default App;
