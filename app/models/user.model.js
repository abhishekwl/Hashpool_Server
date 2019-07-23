const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: { type: String, required: true, default: null, trim: true },
    name: { type: String, required: true, default: null, trim: true,  },
    email: { type: String, required: true, default: null, trim: true },
    phone: { type: String, required: false, default: null, trim: true, maxlength: 15 },
    image: { type: String, required: false, default: null, trim: true },
    dob: { type: Number, required: false, default: -1 },
    address: { type: String, required: false, default: null, trim: true },
    landmark: { type: String, required: false, default: null, trim: true },
    location: {
        type: {
            latitude: { type: Number, required: false, default: -1 },
            longitude: { type: Number, required: false, default: -1 }
        },
        default: { latitude: -1, longitude: -1 }
    }
});

module.exports = mongoose.model('user', userSchema);