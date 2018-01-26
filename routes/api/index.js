const router = require("express").Router();
const articleRoutes = require("./articleRoutes");

router.use("/saved", articleRoutes);

module.exports = router;