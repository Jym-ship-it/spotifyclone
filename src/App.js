import "./App.css";
import CurrentPlaying from "./components/CurrentPlaying";
import Library from "./components/Library";
import MusicHome from "./components/MusicHome";
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
      <div className="bodyComponents">
        <div>
          <TopComponent />
          <Library />
        </div>
        <div>
          <MusicHome/>
        </div>
        <div>
          <CurrentPlaying/>
        </div>
      </div>
      <Nowplaying />
    </div>
  );
}

export default App;
