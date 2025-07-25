const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI;

//create a database connection

mongoose.connect(`${process.env.MONGO_URI}`)
 .then(()=>console.log('mongoIsConnected')).catch('error')

const app = express()
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET','POST','DELETE','PUT'],
        allowedHeaders: [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials:true
    })
)
app.use(cookieParser())
app.use(express.json())


app.listen(PORT,()=>console.log('Server is listening'))