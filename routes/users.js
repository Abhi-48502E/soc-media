const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("yoo its user route")
})
module.exports = router