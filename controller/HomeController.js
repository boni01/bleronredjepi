const express = require("express")

const router = express.Router();

router.get("/", (req, res) =>{
    res.render("layout", { title: "route home", layout: "index" });
})

router.get("/styleguide", (req, res) => {
    res.render("layout", {title: "Styleguide", layout: "styleguide"});
});

router.get("/loader", (req, res) =>{
    res.render("layout", {layout: "loader"})
})

module.exports = router