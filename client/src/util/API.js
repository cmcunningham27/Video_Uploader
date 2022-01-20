import axios from 'axios';

export default {
    savePath: function(path) {
        return axios.post('/api/path', path);
    },
};