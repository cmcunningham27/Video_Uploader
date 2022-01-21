const router = require('express').Router();
const videoRoutes = require('./videos');

router.use('/video', videoRoutes);

module.exports = router;