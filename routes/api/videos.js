const router = require('express').Router();
const videoController = require('../../controllers/video.controller');

router.route('/path')
    .post(videoController.path);

module.exports = router;