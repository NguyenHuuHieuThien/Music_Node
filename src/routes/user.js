const express = require('express');
const router = express.Router();
const UserController = require('../app/Controllers/UserController')

router.post('/create', UserController.create)
router.post('/login', UserController.login)
router.get('/:username', UserController.searchUsername)

router.get('/', UserController.show)


module.exports = router