const router = require("express").Router();

const apiRoutes = require("./api.js");
const homeRoutes = require("./htmlroutes.js");

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;