const express = require("express");
const { 
    signup, 
    signin, 
    signout,
    forgotPassword,
    resetPassword,
    socialLogin } = require("../controllers/auth");

const { userById } = require("../controllers/user");
// import password reset validator
const { userSignupValidator, passwordResetValidator } = require("../validator");

const router = express.Router();

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

// password forgot and reset routes
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);

// use this route for social login
router.post("/social-login", socialLogin);

// any route containing :userId, app will first execute userByID()
router.param("userId", userById);

module.exports = router;
