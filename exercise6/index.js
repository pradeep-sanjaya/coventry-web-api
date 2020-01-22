'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/api/heros', (req, res) => {
    res.send(['Batman', 'Spder Man', 'Thor']);
});

app.get('/api/heros/1', (req, res) => {
    res.send({
        name: 'Batman', "superPowers": ["Absolute Knowledge", "Sense of Justice", "Super Strength And Durability Via Super Pills"], "likeCount": 10
    });
});
app.listen(PORT, () => {
    console.log(`listening ${PORT}`)
});