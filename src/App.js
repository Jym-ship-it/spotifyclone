import "./App.css";
import Nowplaying from "./components/Nowplaying";
import TopComponent from "./components/TopComponent";

function App() {
  return (
    <div className="App">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </header>
      <TopComponent />
      <Nowplaying />
    </div>
  );
}

export default App;