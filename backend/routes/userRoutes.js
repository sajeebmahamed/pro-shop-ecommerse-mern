const { json } = require('express')
const express = require('express')
const { authUser, getUserProfile, registerUser } = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')
const router = require('express').Router()

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect , getUserProfile)
module.exports = router