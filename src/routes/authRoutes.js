const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController');

router.get('/login',authControllers.getlogin);
router.post('/login',authControllers.postlogin);
router.get('/register',authControllers.getregister );
router.post('/register',authControllers.postregister);
router.get('/logout',authControllers.getlogout);

module.exports = router;