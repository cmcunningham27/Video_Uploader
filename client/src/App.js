import { useState } from 'react';
import Video from './components/Video-Player/video-player.js';
import VideoButton from './components/Video-Button/video-button.js';
import './App.css';


function App() {
  const [url, setUrl] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <VideoButton setUrl={setUrl}/>
        <Video url={url}/>
      </header>
    </div>
  );
}

export default App;
