const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklisttoken.model");
const driverModel = require("../models/driver.models");
const bcrypt = require("bcrypt");


module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies?.token || 
            (req.headers.authorization && req.headers.authorization.split(' ')[1]);

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - No token provided' });
        }
        // Check if token is blacklisted
         const isblacklisted = await blacklistTokenModel.findOne({ token : token });

          if(isblacklisted){
            return res.status(401).json({ message: 'Unauthorized - Token is blacklisted' });
         }
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user
        const user = await userModel.findById(decoded.id || decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Attach user to request
        req.user = user;
        return  next();

    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized token' });
    }
};

module.exports.authDriver = async (req, res, next) => {

const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
 
console.log(token);

if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
}

const isblacklisted = await blacklistTokenModel.findOne({ token : token });

if(isblacklisted){
    return res.status(401).json({ message: 'Unauthorized - Token is blacklisted' });
}

try {
const decoded = jwt.verify(token, process.env.JWT_SECRET);

const driver = await driverModel.findById(decoded.id || decoded._id);
req.driver = driver;
return next();


} catch (err) {
    return res.status(401).json({ message: 'Unauthorized token' });
  
}
}