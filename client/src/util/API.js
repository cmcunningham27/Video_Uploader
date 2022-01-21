import axios from 'axios';

export default {
    savePath: function(url, original) {
        console.log(url, 'is it here');
        return axios.post('http://localhost:3001/api/video/path', {url: url, original: original});
    },
    videosData: function() {
        return axios.get('http://localhost:3001/api/video/all');
    }
};