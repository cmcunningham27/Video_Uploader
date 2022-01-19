import React from 'react';
// import { Player } from 'video-react';
import VideoPlayer from 'react-simple-video-player';

export default function Video() {
    return (
        // <Player 
        //     playsInline
        //     poster='assets/poster.png'
        //     fluid='false'
        //     width='50'
        //     // src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        //     src='https://res.cloudinary.com/cmcunningham/video/upload/v1642626063/widget-upload/rrz8q41gixfxho1ldl3e.mp4'
        // />
    <VideoPlayer
        url='https://res.cloudinary.com/cmcunningham/video/upload/v1642626063/widget-upload/rrz8q41gixfxho1ldl3e.mp4'
     />
    );
};