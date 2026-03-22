const mongoose = require("mongoose");

function ConnectTODB() {
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log(" Error in connecting to database: " + err);
    });
}

module.exports = ConnectTODB;