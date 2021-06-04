const express = require("express")

const router = express.Router();

router.get("/", (req, res) =>{
    res.render("layout", { title: "route home", layout: "index.ejs" });
})

router.get("/styleguide", (req, res) => {
    res.render("layout", {title: "Styleguide", layout: "styleguide.ejs"});
});



module.exports = router