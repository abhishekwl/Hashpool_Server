const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//LOCAL
const SALT_WORK_FACTOR = 16;

const userSchema = mongoose.Schema({
    name: { type: String, required: true, default: null, trim: true },
    password: { type: String, required: true, default: null },
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

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
        if(err) return next(err);
        else {
            user.password = hash;
            next();
        }
    });
});

userSchema.methods.isPasswordValid = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isValid) => {
        if(err) return callback(err);
        else callback(null, isValid);
    });
};

module.exports = mongoose.model('user', userSchema);