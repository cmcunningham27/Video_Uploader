// import logo from './logo.svg';
import Video from './components/Video-Player/video-player.js';
import VideoButton from './components/Video-Button/video-button.js';
import '../node_modules/video-react/dist/video-react.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <VideoButton />
        <Video />
      </header>
    </div>
  );
}

export default App;
