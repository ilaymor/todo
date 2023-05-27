const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },

    completed: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('task', taskSchema);