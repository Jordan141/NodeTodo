const mongoose = require('mongoose');

let Schema = mongoose.Schema

const todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

let Todos = mongoose.model('Todos', todoSchema)

module.exports = Todos