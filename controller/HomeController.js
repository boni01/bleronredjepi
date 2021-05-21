const router = express.Router();

router.get("/home", (req, res) =>{
    res.render("layout", { title: "Home", layout: "index.ejs" });
})

