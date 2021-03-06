// Imports
const cookieSession = require('cookie-session');
const express = require('express');
const path = require('path');
const uuid = require('uuid');
const homeController = require("./controller/HomeController")

const app = express();
const port = process.env.PORT || 5000;

app.set("trust proxy", 1);

//Cookies
app.use(cookieSession({
    name: "session",
    keys: [uuid.v4(), uuid.v4()],
}));

// Static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/lib", express.static(__dirname + "public/lib"));
app.use("/sounds", express.static(__dirname + "public/sounds"))
app.use("/videos", express.static(__dirname + "public/videos"))


// Set views
app.set("views", [path.join(__dirname, "views")]);
app.set("view engine", "ejs");

app.use(homeController)

app.listen(port, () => console.info("Listening on Port " + port));