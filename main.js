const express = require("express");
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const port = process.env.PORT || 5000;
const session = require("express-session");
const router = require('./routes/router');
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride('_method'));
app.use(
    session({
        secret: "SecretToken",
    })
);
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));
app.use(router);

app.set("view engine", "ejs");

app.listen(port, console.log(`Notre serveur tourne sur http://localhost:${port}`)); 