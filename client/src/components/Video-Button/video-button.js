import React from 'react';
import { Widget, WidgetLoader} from 'react-cloudinary-upload-widget';
import API from '../../util/API.js';


export default function VideoButton() {

    const successCallBack = (res) => {
        console.log(res.info);
        API.savePath(res.info.url)
        .then((data) => {
            console.log(data, 'savePath data return');
        })
    };

    https://res.cloudinary.com/cmcunningham/video/upload/------path=(v1642703791/widget-upload/fbvnteynbd0pg6onte8f.mp4)

    return (
        <>
            <WidgetLoader 
            />
            <Widget
                cloudName='cmcunningham'
                resourceType='video'
                uploadPreset='video-upload'
                folder='widget-upload'
                apiKey={process.env.APIKEY}
                onSuccess={successCallBack}
             />
        </>
    );
};