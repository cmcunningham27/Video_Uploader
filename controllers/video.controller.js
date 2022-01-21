const db = require('../models');
const Videos = db.Videos;

module.exports = {
    path: function(req, res) {
        console.log(req.body.url);
        Videos.create({
            path: req.body.url,
            name: req.body.original
        }).then((data) => {
            res.status(200).send({
                url: data.path
            })
        }).catch(err => {
            res.status(500).send({ message: err.message })
        });
    },
    all: function(req, res) {
        Videos.findAll()
        .then((videos) => {
            console.log(videos, 'what is here?');
            res.status(200).send(videos)
        }).catch(err => {
            res.status(500).send({ message: err.message });
        })
    },
};