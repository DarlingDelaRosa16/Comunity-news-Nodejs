const express = require('express')
const constroller = require('../controllers/comunity')
const router = express.Router()

////////////////Routes////////////////

router.get(
    '/especificComunity/:id',
    constroller.getEspesificComunity
)

router.get(
    '/comunity',
    constroller.getDataComunity
)


router.post(
    '/comunity',
    constroller.insertDataComunity
)

module.exports = router