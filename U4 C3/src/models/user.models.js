const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        age: {type: Number, required: true},
        email: {type: String, required: true, unique: true},
        profileImage: {type: String, required: true, unique: true}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("user", userSchema);

const bookSchema = mongoose.Schema(
    {
        likes: {type: Number, required: true},
        coverImage: {type: String, required: true, unique: true},
        content: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("bookModel", bookSchema);

const publicationSchema = mongoose.Schema(
    {
        name: {type: Number, required: true}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("publicationModel", publicationSchema);

const commentSchema = mongoose.Schema(
    {
        body: {type: Number, required: true}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("commentModel", commentSchema);