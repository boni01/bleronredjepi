const express = require("express")

const router = express.Router();

router.get("/", (req, res) =>{
    res.render("layout", { title: "Home", layout: "index" });
});

router.get("/styleguide", (req, res) => {
    res.render("layout", {title: "Styleguide", layout: "styleguide"});
});

router.get("/documentation", (req, res) => {
    res.render("layout", {title: "Documentation", layout: "documentation"})
});

module.exports = router