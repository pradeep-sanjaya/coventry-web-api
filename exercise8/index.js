'use strict';

const express = require('express');
const auth = require("./middleware/authenticator");
const logger = require("./middleware/logger");
const home = require("./routes/home");
const heros = require("./routes/heros");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log("moddleware function");
    next();
});

app.use(auth);
app.use(logger);
app.use("/", home);
app.use("/api/heros/", heros);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening ${PORT}`)
});


/*
create annother set of routes for admin
*/

//homework

//next week
//mongodb