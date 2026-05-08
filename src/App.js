import './App.css';
import logo from './logo.png';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="footer">
  This project was coded by{" "}
  <a
    href="https://www.linkedin.com/in/kylee-ingalls/"
    target="_blank"
    rel="noreferrer"
  >
    Kylee Ingalls
  </a>
  , is open sourced on{" "}
  <a
    href="https://github.com/kylee-ingalls/dictionary"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>
  , and is hosted on{" "}
  <a
    href="https://search-dictionary-app.netlify.app/"
    target="_blank"
    rel="noreferrer"
  >
    Netlify
  </a>
  .
</footer>
    </div>
    </div>
  );
}

export default App;