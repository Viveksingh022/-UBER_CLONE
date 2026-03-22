const express = require('express');
const router = express.Router();
const app = express();
const {body} = require('express-validator'); 
const usercontroller = require('../Controller/user.controller');

app.use(express.json());

router.post('/register',[
    body('email').isEmail().withMessage("Invalid message"),
    body ('fullname').isLength({min:3}).withMessage("fullname must be atleast 3 characters long"),
    body('password').isLength({min:6}).withMessage("password must be atleast 6 characters long")
]
,
usercontroller.registerUser
);



module.exports = router;