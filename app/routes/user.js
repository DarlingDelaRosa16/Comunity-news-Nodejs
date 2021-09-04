const express = require('express')
const constroller = require('../controllers/user')
const router = express.Router()

////////////////Routes////////////////

router.get(
    '/checkUser',
    constroller.getDataUser
)

router.post(
    '/user',
    constroller.insertDataUser
)

module.exports = router