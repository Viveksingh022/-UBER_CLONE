const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const driverSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        },
    },

    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
        minlength: [5, 'Email must be at least 5 characters long'],

    } ,

    password: {
        type: String,
        required: true,
        select: false, // Exclude password from query results by default
    } ,
    socketId : {
        type: String,
    } ,

    status: {
   type: String,
   enum : ['active' , 'inactive'],
   default : 'inactive',
    } ,

 vehicle : {
    color : {
        type: String,
        required: true,
        minlength: [3, 'Color must be at least 3 characters long'],
    } ,

    plate : {
        type: String,
        required: true,
        minlength: [3, 'Plate number must be at least 3 characters long'],

    } ,

    model : {
        type: String,
        minlength: [3, 'Model must be at least 3 characters long'],

    },

    capacity : {
        type: Number,
        required: true,
        min: [1, 'Capacity must be at least 1'],

    } ,
    typevehicle : {
        type: String,
        required: true,
        enum : ['car' , 'van' , 'bus' ,'auto' ,' motorcycle'],
    } ,
   location : {
    lat :{
        type: Number,
    } ,
    log :{
        type: Number,
    }
   }
 }
     
});

driverSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '12h' });
    return token;
} 

driverSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

driverSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

const driverModel = mongoose.model('Driver', driverSchema);

module.exports = driverModel;

