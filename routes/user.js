const express = require('express');
const router = express.Router();

const { sayHi } = require('../controllers/userController');

router.get('/', sayHi);





module.exports = router;