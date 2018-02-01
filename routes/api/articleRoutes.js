const router = require("express").Router();
const articleController = require("../../controllers/articleController.js");


// matches with /api/articles
router.route("/")
    .get(articleController.findAll)
    .post(articleController.save);

// matches with /api/articles/:id
router.route("/:id")
    .delete(articleController.remove);


module.exports = router;