const { Model } = require("mongoose");
const postSchema = require("../Schema/postSchema");

const Post = mongoose.model("posts", postSchema)


module.exports = Post