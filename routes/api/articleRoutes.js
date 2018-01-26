const router = require("express").Router();
const articleController = require("../../controllers/articleControllers");

router.route("/saved")
    .get(articleController.findAll)


module.exports = router;