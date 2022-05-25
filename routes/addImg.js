const express = require('express');
const router = express.Router();
const addImgControllers = require('../controllers/addImg');

router.get('/', addImgControllers.getImgs);

router.post('/', addImgControllers.createImgs);

module.exports = router;