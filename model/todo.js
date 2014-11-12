var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: String,
    done: Boolean
});

module.exports = Todo;