import React from 'react';
import VideoPlayer from 'react-simple-video-player';

export default function Video({ url }) {
    return (
        <VideoPlayer
            url={url}
        />
    );
};