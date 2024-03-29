const express = require("express");
const router = express.Router();
const User = require("../model/UserSchema");
const controller = require("../Controllers/Controllers");
const upload = require("../Multer/ImageConfig");
// router.post("/sign", controller.userSignUp);
// router.post("/login", controller.userlogin);
router.get("/show", controller.userget);
router.get("/user/:id", controller.singleget);
router.post("/register", upload.single("img"), controller.userRegister);
router.put("/update/:id", upload.single("img"), controller.userUpdate);
router.delete("/delete/:id", controller.deleteuser);
module.exports = router;
