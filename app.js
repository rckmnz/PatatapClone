const
    express = require("express"),
    circles = require("./circles")

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("circles");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server initialized on port 3000.")
});
