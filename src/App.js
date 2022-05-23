import "./App.css";
import Base from "./Layout/Base/Base";
import Homepage from "./Pages/Homepage/Homepage";
function App() {
  return (
    <div className="App">
      <Base>
        <Homepage></Homepage>
      </Base>
    </div>
  );
}

export default App;
