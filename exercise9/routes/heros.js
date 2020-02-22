const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Hero = require("../models/hero");

router.get("/", async (req, res) => {
    try {
        // get all heros
        //let heros = await Hero.find();

        // filter by criteria
        //let heros = await Hero.find({ deceased: false });

        // sort
        //let heros = await Hero.find().sort({ name: "asc" });
        //let output = heros.map((hero) => { return hero });

        // limit
        // let heros = await Hero.find({ name: "" })
        //     .sort({ name: "asc" })
        //     .limit(2);

        // select only some columns
        let heros = await Hero.find({});

        // .select({ name: 1, birthName: 1 })
        // .limit(2);

        //let output = heros.map((hero) => { return hero.name });

        res.send(heros);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        /*
        let id = mongoose.Types.ObjectId(req.params.id);
        let heros = await Hero.find({ _id: id });
        */

        console.log(req.params.heroId);
        let heros = await Hero.find({ _id: req.params.id });

        res.status(200).send(heros);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// expected body
// {
//     "id": "10",
//     "name": "Hero1",
//     "superPowers": ["Power1", "Power2"],
//     "likeCount" : 1
// }
router.post("/", async (req, res) => {
    let theHero = new Hero({
        name: req.body.name,
        image: req.body.image,
        birthName: req.body.birthName,
        superPowers: req.body.superPowers,
        likeCount: req.body.likeCount
    });

    try {
        let hero = await theHero.save();
        res.send(hero);
    } catch (error) {
        res.send(error.message);
    }
});

router.put("/:id", async (req, res) => {
    try {
        let existsHero = await Hero.findById(req.params.id);

        if (existsHero != undefined) {
            console.log(existsHero);
            existsHero.set({
                likeCount: req.body.likeCount,
                superPowers: req.body.superPowers
            });
            await existsHero.save();

            res.status(200).send(req.params.id + " updated.");
        } else {
        }
    } catch (e) {
        res.status(500).send(e.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Hero.findOneAndDelete(req.params.id);
        res.status(200).send(req.params.id + " deleted.");
    } catch (e) {
        res.status(500).send(e.message);
    }
});

module.exports = router;
