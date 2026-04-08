const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const ConnectToDb = require('./DATABASE/database');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');
const blacklistTokenModel = require('./models/blacklisttoken.model');
const driverRoutes = require('./routes/driver.routes'); 

const app = express();


ConnectToDb();

app.use(cors());

app.get('/' , (req , res) => {
    res.send("jai  shree ram ")
})

// app.listen(3000, () => {
//     console.log("server is listening port 3000")
// });

// Parse JSON even if Postman content-type is missing/incorrect.
app.use(express.json({ type: '*/*' }));
app.use(express.urlencoded({extended : true}));
app.use('/user' , userRoutes);
app.use(cookieParser());
app.use('/driver' , driverRoutes);




module.exports = app;

