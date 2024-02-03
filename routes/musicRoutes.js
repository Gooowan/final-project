const express = require('express');
const musicController = require('../controllers/musicController');

const router = express.Router();

router.get('/', musicController.list);
router.get('/new', musicController.newForm);
router.get('/:id', musicController.getById);
router.post('/', musicController.create);

module.exports = router;
