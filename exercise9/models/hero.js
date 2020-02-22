const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
    name: { type: String, default: "", required: true },
    image: { type: String, required: true },
    birthName: { type: String, required: true, minlength: 3, maxlength: 100 },
    superPowers: { type: [String], enum: ["Fly", "Run", "INvisible", "Cry"] },
    likeCount: { type: Number },
    deceased: Boolean
});

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;
