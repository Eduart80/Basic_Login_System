require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('./db/connection')
const PORT = process.env.PORT

// Middleware
app.use(express.json())


app.listen( PORT, ()=>{console.log(`Server started on https://localhost:${PORT}`);
})