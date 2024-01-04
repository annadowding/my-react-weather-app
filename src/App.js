import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";


function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="London"/>
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/annadowding">Anna Dowding</a> and is{" "}
          <a href="https://github.com/annadowding/my-react-weather-app">
            {" "}
            open-sourced
          </a>
          .and hosted on{" "}
          <a href="https://stellar-salmiakki-03ea04.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
