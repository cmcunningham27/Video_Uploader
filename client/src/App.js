import { useState, useEffect } from 'react';
import Video from './components/Video-Player/video-player.js';
import VideoButton from './components/Video-Button/video-button.js';
import API from './util/API.js';
import './App.css';


function App() {
  const [url, setUrl] = useState('');
  const [videosData, setVideosData] = useState('');

  useEffect(() => {
    API.videosData()
    .then((videos) => {
      console.log(videos.data);
      setVideosData(videos.data);
    })
    .catch(err => console.log(err));
  }, []);

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
