import React from 'react';
import { Widget, WidgetLoader} from 'react-cloudinary-upload-widget';


export default function VideoButton() {

    const successCallBack = (e) => {
        console.log(e.info.path);

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