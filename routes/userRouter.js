const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/api/users/login', userController.fetchUser);
router.post('/api/users/register', userController.registerUser);

module.exports = router;