const express = require('express')
const constroller = require('../controllers/category')
const router = express.Router()

////////////////Routes////////////////

router.get(
    '/category',
    constroller.getDataCategory
)

router.post(
    '/category',
    constroller.insertDataCategory
)

module.exports = router