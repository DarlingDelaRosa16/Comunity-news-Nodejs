const express = require('express')
const constroller = require('../controllers/user')
const router = express.Router()

////////////////Routes////////////////

router.post(
    '/checkUser',
    constroller.getDataUser
)

router.post(
    '/user',
    constroller.insertDataUser
)

module.exports = router