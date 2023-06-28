const mongoose = require('mongoose');
const validator = require('validator');

const FreelancerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: (value) => {
            if(!validator.isLength(value, { min: 8 })) {
                throw new Error('Username cannot be less than 8');
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: (value) => {
            if(!validator.isEmail(value)) {
                throw new Error('Email value is not an email format!')
            }
        }
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        validate: (value) => {
            if(!validator.isNumeric(value)) {
                throw new Error('Not a phone contact format!')
            }
        }
    },
    skillsets: {
        type: String,
        required: true,
    },
    hobby: {
        type: String,
        required: true,
        trim: true,
        validate: (value) => {
            if(!validator.isLength(value, { max: 15 })) {
                throw new Error('Hobby cannot be more than 15');
            }
        }
    }
},
{
    versionKey: false
}
);

const Freelancer = mongoose.model('Freelancer', FreelancerSchema);

module.exports = Freelancer;
