const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const ConnectToDb = require('./DATABASE/database');
const userRoutes = require('./routes/user.routes');

const app = express();


ConnectToDb();

app.use(cors());

app.get('/' , (req , res) => {
    res.send("jai  shree ram ")
})

// app.listen(3000, () => {
//     console.log("server is listening port 3000")
// });

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/user' , userRoutes);

module.exports = app;