const db = require('../models');
const Videos = db.Videos;

module.exports = {
    path: function(req, res) {
        console.log(req.body.url);
        Videos.create({
            path: req.body.url
        }).then((data) => {
            res.status(200).send({
                url: data.path
            })
        }).catch(err => {
            res.status(500).send({ message: err.message })
        });
    },
};