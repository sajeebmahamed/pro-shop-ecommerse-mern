const  express =  require('express')
const { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders, getOrders, updateOrderToDelivered } = require('../controllers/orderController.js')
const { protect, admin } = require('../middleware/authMiddleware.js')

const router = require('express').Router()

// router.route('/').post(protect, addOrderItems)
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

module.exports = router