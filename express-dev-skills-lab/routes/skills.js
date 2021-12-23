var express = require("express");
var router = express.Router();

// connect the database somehow?
// const skillsDb = require("..");

// import the skills controller
const skillsCtrl = require("../controllers/skills");

// this is where we write all the routes that our skills will need
// router.get as so on

router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new);
router.get("/:id", skillsCtrl.show);
router.post("/", skillsCtrl.create);
router.delete("/:id", skillsCtrl.delete);
// to update
router.get("/:id/edit", skillsCtrl.edit);
router.put("/:id", skillsCtrl.update);

module.exports = router;
