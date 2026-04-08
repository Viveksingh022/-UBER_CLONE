const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const usercontroller = require('../Controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Invalid message'),
        body('fullname.firstname')  
            .isLength({ min: 3 })
            .withMessage('firstname must be atleast 3 characters long'),
        body('fullname.lastname')    
            .optional({ values: 'falsy' })
            .isLength({ min: 3 })
            .withMessage('lastname must be atleast 3 characters long'),
        body('password')
            .isLength({ min: 6 })
            .withMessage('password must be atleast 6 characters long'),
    ],
    usercontroller.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('password must be atleast 6 characters long'),
], usercontroller.loginUser); 


router.get('/profile', authMiddleware.authUser, usercontroller.getUserProfile);
router.get('/logout', authMiddleware.authUser,usercontroller.logoutUser); 
module.exports = router;






