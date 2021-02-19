const express = require('express');
require('./config/db')
const app =express()
const cors = require('cors')
const CC = require('./routes/creditCard')
const PORT = process.env.PORT || 9000;

app.use(express.json())
app.use(cors())
app.use(CC)


app.listen(PORT, ()=>{
     console.log(`Server is running on port ${PORT}`)
    })