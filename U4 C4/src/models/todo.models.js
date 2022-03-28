const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
    {
        title:{type: String, required: true},
    },
    {
        versionkey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("todo", todoSchema);