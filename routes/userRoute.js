const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/authController');

const { getUserById } = require('../controllers/userController');

router.get('/user/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    })
});

router.param('userId', getUserById);


module.exports = router;