const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const color = require('colors')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server is running ${process.env.NODE_ENV} to the port ${PORT}`.yellow.bold))