import React from 'react';
import { Widget, WidgetLoader} from 'react-cloudinary-upload-widget';
import API from '../../util/API.js';


export default function VideoButton({ setUrl }) {

    const successCallBack = (res) => {
        console.log(res.info);
        API.savePath(res.info.url, res.info.original_filename)
        .then((res) => {
            setUrl(res.data.url);
        })
        .catch(err => console.log(err));
    };

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