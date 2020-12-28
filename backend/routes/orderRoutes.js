const  express =  require('express')
const { addOrderItems } = require('../controllers/orderController.js')
const protect = require('../middleware/authMiddleware')

const router = require('express').Router()

router.route('/').post(protect, addOrderItems)

module.exports = router