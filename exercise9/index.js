"use strict";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const auth = require("./middleware/authenticator");
const logger = require("./middleware/logger");
const home = require("./routes/home");
const heros = require("./routes/heros");

const app = express();
app.use(express.json());
app.use(cors())

mongoose
    .connect("mongodb://localhost/heros", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("database connected"))
    .catch(() => console.log("database not connected"));

app.use((req, res, next) => {
    console.log("moddleware function");
    next();
});

app.use(auth);
app.use(logger);
app.use("/", home);
app.use("/api/heros/", heros);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`listening ${PORT}`);
});

/*
create annother set of routes for admin
*/

//homework

//next week
//mongodb
