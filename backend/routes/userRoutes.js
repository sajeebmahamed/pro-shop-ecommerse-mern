const { json } = require('express')
const express = require('express')
const { authUser, getUserProfile } = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')
const router = require('express').Router()

router.post('/login', authUser)
router.route('/profile').get(protect , getUserProfile)
module.exports = router