const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name.'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide an email.'],
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address.',
        ],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number.'],
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Contact', contactSchema);