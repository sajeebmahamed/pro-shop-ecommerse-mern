const { json } = require('express')
const express = require('express')
const { authUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUser, getUserById, updateUser } = require('../controllers/userController')
const { protect, admin } = require('../middleware/authMiddleware')
const router = require('express').Router()

router.route('/').post(registerUser)
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect , getUserProfile)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
// router.route('/:id').delete(protect, admin, deleteUser)
router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)
module.exports = router