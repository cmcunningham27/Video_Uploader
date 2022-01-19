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

    return (
        <>
            <WidgetLoader />
            <Widget
                cloudName='cmcunningham'
                resourceType='video'
                uploadPreset='video-upload'
                folder='widget-upload'
                apiKey={process.env.APIKEY}
             />
        </>
    );
};