const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController');

router.get('/',adminControllers.admin);
router.get('/create',adminControllers.getcreate);
router.post('/create',adminControllers.postcreate);
router.get('/edit/:id',adminControllers.getedit);
router.put('/edit/:id',adminControllers.putedit);
router.delete('/delete/:id',adminControllers.admindelete);

module.exports = router;