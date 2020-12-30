const { json } = require('express')
const express = require('express')
const { getProducts, getProductById, deleteProduct, updateProduct, createProduct } = require('../controllers/productControllers')
const { protect, admin } = require('../middleware/authMiddleware')
const router = require('express').Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router
    .route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)

module.exports = router