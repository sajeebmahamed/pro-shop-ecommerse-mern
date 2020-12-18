const { json } = require('express')
const express = require('express')
const  asyncHandler = require('express-async-handler')
const router = require('express').Router()
const Product = require('../models/productModel')

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))
router.get('/:id', asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
        if(product) {
            res.json(product)
        } else {
            res.status(400).json({ message: 'Product not found ' })
        }
}))
module.exports = router