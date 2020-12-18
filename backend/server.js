const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const color = require('colors')
const productRoutes = require('./routes/productRoutes')

dotenv.config()
connectDB()
const app = express()

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server is running ${process.env.NODE_ENV} to the port ${PORT}`.yellow.bold))