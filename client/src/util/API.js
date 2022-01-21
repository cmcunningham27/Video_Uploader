import axios from 'axios';

export default {
    savePath: function(url) {
        console.log(url, 'is it here');
        return axios.post('http://localhost:3001/api/video/path', {url: url});
    },
};