const express = require('express')
const constroller = require('../controllers/news')
const router = express.Router()

////////////////Routes////////////////

router.get(
    '/categoryNews/:id',
    constroller.getDataNewsCategory
)

router.get(
    '/comunityNews/:id',
    constroller.getDataNewsComunity
)

router.get(
    '/detailsNews/:id',
    constroller.getDetailsNews
)

router.post(
    '/news',
    constroller.insertDataNews
)

module.exports = router