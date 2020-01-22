'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3000;
const HEROS = [
    { id: 1, name: "Batman", "superPowers": ["Power1", "Power2", "Power3"], likeCount: 10 },
    { id: 2, name: "SuperMan", "superPowers": ["Power1", "Power2", "Power3", "Power4"], likeCount: 1000 },
    { id: 3, name: "Arrow", "superPowers": ["Power1", "Power2", "Power3", "Power4", "Power5"], likeCount: 100 },
    { id: 4, name: "Ranjan", "superPowers": ["Power1", "Power2"], likeCount: 20 }
];

var validate = (hero) => {
    if (typeof hero === 'object') {
        if (
            'name' in hero
        ) {
            return true;
        }
    }

    return false;
};


app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/api/heros', (req, res) => {
    res.send(HEROS);
});

app.get('/api/heros/:id', (req, res) => {
    if (!isNaN(req.params.id)) {
        //res.send(HEROS[req.params.id]);
        //res.send(getHeroById(HEROS, req.params.id));
        var found = HEROS.find(h => h.id == req.params.id);
        if (found) {
            res.send(found);
        } else {
            res.status(404).send("not found");
        }
    } else {
        res.status(400).send("Body id is not valid");
    }

});

// expected body
// {
//     "id": "10",
//     "name": "Hero1",
//     "superPowers": ["Power1", "Power2"],
//     "likeCount" : 1
// }
app.post('/api/heros', (req, res) => {

    if (validate(req.body)) {
        var hero = {
            id: HEROS.length + 1,
            name: req.body.name,
            superPowers: req.body.superPowers,
            likeCount: req.body.likeCount
        }

        HEROS.push(hero);
        console.log(hero);

        res.send(hero);
    } else {
        res.status(300).send("request body is incorrect");
    }
});

app.put('/api/heros/:id', (req, res) => {

    if (validate(req.body)) {
        var hero = {
            name: req.body.name,
            superPowers: req.body.superPowers,
            likeCount: req.body.likeCount
        }

        var found = HEROS.find(h => h.id == req.params.id);
        if (found) {
            found.name = hero.name;
            found.superPowers = hero.superPowers;
            found.likeCount = hero.likeCount;

            res.send(found);
        } else {
            res.status(404).send("Not found");
        }

    } else {
        res.status(300).send("Request body is incorrect");
    }
});

app.delete("/api/heros/:id", (req, res) => {
    var found = HEROS.find(h => h.id == parseInt(req.params.id));

    let deleteIndex = HEROS.indexOf(found);

    if (found) {
        HEROS.splice(deleteIndex, 1);
        res.send(found);
    } else {
        res.status(404).send("Not found");
    }
});

app.listen(PORT, () => {
    console.log(`listening ${PORT}`)
});