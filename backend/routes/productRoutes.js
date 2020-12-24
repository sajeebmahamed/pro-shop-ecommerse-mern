const { json } = require('express')
const express = require('express')
const { getProducts, getProductById } = require('../controllers/productControllers')
const router = require('express').Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
module.exports = router