const driverModel = require('../models/driver.models');
const driverService = require('./services/driver.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklisttoken.model');


module.exports.registerDriver = async (req, res, next) => {
    
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });

}

const {fullname , email, password, vehicle} = req.body;

const isdriverExist = await driverModel.findOne({ email });
if (isdriverExist) {
    return res.status(400).json({ message: 'Driver with this email already exists' });
}



const hashPassword = await driverModel.hashPassword(password);

const driver = await driverService.createDriver({
  firstname : fullname.firstname,
    lastname : fullname.lastname,
    email,
    password: hashPassword,
    color : vehicle.color,
    vehicleType : vehicle.vehicleType,
    plate : vehicle.plate,
    capacity : vehicle.capacity,
    
});

const token = driver.generateAuthToken();

res.status(201).json({ token, driver });

}

module.exports.loginDriver = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { email, password } = req.body;
    const driver = await driverModel.findOne({ email }).select('+password');

    if (!driver) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await driver.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const token = driver.generateAuthToken();
    res.cookie('token', token, );

    res.json({ token, driver });
}

module.exports.getDriverProfile = async (req, res, next) => {
    res.json(req.driver);
}

module.exports.logoutDriver = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    await blacklistTokenModel.create({ token });

    res.clearCookie('token');
    
    return res.status(200).json({ message: 'Logged out successfully' });
}