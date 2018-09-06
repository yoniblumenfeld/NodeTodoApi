const {mongoose} = require('../db/mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

module.exports = {Todo};