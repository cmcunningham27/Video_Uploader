const router = require('express').Router();
const videoController = require('../../controllers/video.controller');

router.route('/path')
    .post(videoController.path);

router.route('/all')
    .get(videoController.all);

module.exports = router;