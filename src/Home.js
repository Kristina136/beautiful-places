import "./App.css";
import Dominicana from "./countries/Dominicana";
import Alpen from "./countries/Alpen";
import Bali from "./countries/Bali";
import Poland from "./countries/Poland";

function App() {
  return (
    <div className="App">
      <h1 className="header">TOP place for Vacation </h1>
      <div className="containerHeader">
        <Dominicana />
      <Alpen />
      <Bali />
      <Poland />
      </div>

      
    </div>
  );
}

export default App;
