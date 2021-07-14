const express = require("express");
const router = express.Router();

const { productById, read, create, remove, update, list, listRelated, listCategories, listBySearch, photo, listSearch } = require("../controllers/productController");

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
router.get("/products/search", listSearch);
router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);


router.param("productId", productById);
router.param('userId', getUserById);

module.exports = router;
