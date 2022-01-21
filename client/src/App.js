import { useState, useEffect } from 'react';
import Video from './components/Video-Player/video-player.js';
import VideoButton from './components/Video-Button/video-button.js';
import VideoInfo from './components/Video-Info/video-info.js';
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

  console.log(videosData, 'how do i get name')

  return (
    <div className="App">
      <header className="App-header">
        <VideoButton setUrl={setUrl}/>
        <Video url={url}/>
        {videosData.length  ? videosData.map((video, i) => {
          return (
            <VideoInfo
            key={i}
            {...video}
            setUrl={setUrl}
            />
          )
        }) : null}
      </header>
    </div>
  );
}

export default App;
