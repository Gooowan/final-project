const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('/', userController.getUserListController);
router.get('/new', userController.getUserFormController);
router.get('/:id', userController.getUserByIdController);
router.get('/:id/update', userController.getUserUpdateFormController);

router.put('/:id', userController.putUserController);
router.post('/', userController.postUserController);
router.delete('/:id', userController.deleteUserController);
router.patch('/:id', userController.patchUserController);

module.exports = router;