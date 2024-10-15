const {
  addUserController,
  showForm,
  allUserController
} = require("../controllers/user.controller.js");
const router = require("express").Router();
router.get("/", showForm);
router.get("/allUsers", allUserController);
router.post("/home", addUserController);

module.exports = router;
