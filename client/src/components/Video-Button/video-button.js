import React from 'react';
import { Widget, WidgetLoader} from 'react-cloudinary-upload-widget';

// require('dotenv').config();

export default function VideoButton() {

    // let myWidget = cloudinary.createUploadWidget({
    //     cloudname: 'cmcunningham',
    //     uploadPreset: 'video-upload',
    //     folder: 'widget-upload',
    //     cropping: true}, (error, result) => {
    //         if (!error && result && result.event === 'success') {
    //             console.log('Done! Here is the image info: ', result.info);
    //         }
    //     }
    // );

    // const openWidget = () => {
    //     myWidget.open();
    // };

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