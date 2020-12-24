const { json } = require('express')
const express = require('express')
const { authUser } = require('../controllers/userController')
const router = require('express').Router()

router.post('/login', authUser)

module.exports = router