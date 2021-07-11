const express = require("express");
const router = express.Router();

const { create, categoryById, read, update, remove, list } = require("../controllers/categoryController");
const { requireSignin, isAuth, isAdmin } = require('../controllers/authController');
const { getUserById } = require('../controllers/userController');

router.get('/category/:categoryId', read);
router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);
router.get('/categories', list);

router.param('categoryId', categoryById);
router.param('userId', getUserById);

module.exports = router;