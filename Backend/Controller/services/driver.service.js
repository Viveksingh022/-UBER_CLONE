const { model } = require('mongoose');
const driverModel = require('../../models/driver.models');


module.exports.createDriver = async ({
     firstname, lastname, email, password,
     color, vehicleType, plate,capacity
}) => {
    if (!firstname || !lastname || !email || !password || !color || !vehicleType || !plate || !capacity) {
        throw new Error('All fields are required');
    }

    const driver = await driverModel.create({
        fullname : {
            firstname,
            lastname,
        },
        email,
        password,
        vehicle : {
            color,
            typevehicle: vehicleType,
            plate,
            capacity,
        }
    
    });

    return driver;
};