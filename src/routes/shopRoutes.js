const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController');

router.get('/', shopControllers.shop);
router.get('/item/:id',shopControllers.getitem );
router.post('/item/:id/add', shopControllers.postitem);
router.get('/cart',shopControllers.getcart);
router.post('/cart',shopControllers.postcart);

module.exports = router;