const express = require("express")

const router = express.Router();

router.get("/", (req, res) =>{
    res.render("layout", { title: "route home", layout: "index.ejs" });
})

router.get("/about", (req, res) => {
    res.render("layout", {title: "About", layout: "about.ejs"});
});



module.exports = router