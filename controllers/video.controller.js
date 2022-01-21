const db = require('../models');
const Videos = db.Videos;

module.exports = {
    path: function(req, res) {
        console.log(req.body.url);
        // Videos.create({
        //     path: req.body.path
        // })
    },
};