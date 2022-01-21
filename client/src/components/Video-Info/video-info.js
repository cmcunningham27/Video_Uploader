import React from 'react';

export default function VideoInfo(props) {
    console.log(props)

    const videoClick = () => {
        props.setUrl(props.path)
    }

    return (
        <>
            <p onClick={videoClick}>{props.name}</p>
        </>
    )
}