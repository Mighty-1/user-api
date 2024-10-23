const express = require("express");
const router = express.Router();

const alias = require("../controller/user.controller");

router.post("/create-user", alias.createUser);
router.get("/find-user", alias.findAllUsers);
router.get("/find-one/:id", alias.findById);
router.put("/update/:id", alias.updateById);
router.delete("/delete/:id", alias.deleteById);

module.exports = router;
