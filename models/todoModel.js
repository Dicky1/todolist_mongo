const mongoose = require('mongoose');

const activites = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    activity_group_id: {
        type: Boolean,
        default: true
    }
});

const todos = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    activity_group_id: {
        type: Boolean,
        default: true
    }
});

const Activites = mongoose.model('Activites', activites)
const Todos = mongoose.model('Todos', todos)

module.exports = Activites
module.exports = Todos