
const mongoose = require("./database")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Todo = new Schema({
    id: ObjectId,
    description: String,
    done: Boolean
});

module.exports = mongoose.model("Todo", Todo)
