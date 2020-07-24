const express = require("express");
const {
    userById,
    allUsers,
    getUser,
    updateUser,
    deleteUser
} = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");
const { hasAuthorization } = require("../controllers/user");

const router = express.Router();

router.get("/users", allUsers);
router.get("/user/:userId", requireSignin, getUser);
router.put("/user/:userId",  requireSignin, hasAuthorization, updateUser);
router.delete("/user/:userId", requireSignin, deleteUser);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
