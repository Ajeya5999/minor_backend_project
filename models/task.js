const mongoose = require('mongoose');

// Task Schema

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

// Compiling the Schema into Model

const task = mongoose.model('Task', taskSchema);

module.exports = task;