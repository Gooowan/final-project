const express = require('express');
const musicController = require('../controllers/musicController');

const router = express.Router();

router.get('/favicon.ico', (req, res) => res.status(204).end());

router.get('/', musicController.list);
router.get('/new', musicController.newForm);

router.get('/header/set', musicController.setHeader);
// http://localhost:3400/header/set?header=yes&value=no
router.get('/header/get/:headerName', musicController.getHeader);
// http://localhost:3400/header/get/yes

router.get('/cookie/set', musicController.setCookie);
// http://localhost:3400/cookie/set?cookie=yes&val=no
router.get('/cookie/get/:cookie', musicController.getCookie);
// http://localhost:3400/cookie/get/yes

router.post('/', musicController.create);
router.get('/:id', musicController.getById);

module.exports = router;
