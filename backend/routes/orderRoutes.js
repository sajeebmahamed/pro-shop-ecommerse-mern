const  express =  require('express')
const { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders } = require('../controllers/orderController.js')
const { protect } = require('../middleware/authMiddleware.js')

const router = require('express').Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)

module.exports = router