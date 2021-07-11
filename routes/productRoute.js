const express = require("express");
const router = express.Router();

const { productById, read, create, remove, update, list } = require("../controllers/productController");

const { requireSignin, isAuth, isAdmin } = require('../controllers/authController');
const { getUserById } = require('../controllers/userController');

router.get("/product/:productId", read);
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.delete(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
router.put(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);
router.get("/products", list);


router.param("productId", productById);
router.param('userId', getUserById);

module.exports = router;
