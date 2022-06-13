import "./App.css";
import Product from "./components/Product";
import Headerpage from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./ressources/sprite-bank-logo.svg";
import "./ressources/bank-logo.css";

function App() {
  return (
    <div className="App">
      <Headerpage />
      <div class="container">
        <Product />

        <div>
          <img src={logo} className="bKredit24" alt="logo" />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
