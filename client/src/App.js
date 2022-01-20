// import logo from './logo.svg';
import Video from './components/Video-Player/video-player.js';
import VideoButton from './components/Video-Button/video-button.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoButton />
        <Video />
      </header>
    </div>
  );
}

export default App;
