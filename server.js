const express = require('express')
const path = require('path')
require('dotenv').config()
const cors = require('cors')

// int app
const app = express()
app.use(cors())

// Setting port 
const PORT = process.env.PORT || 3000


// static folder
app.use(express.static(__dirname + '/public'))

// 404 page /file not found
app.use((req,res) => {
  res.sendFile(path.join(__dirname,'/public/404.html'));
})



// start server on PORT 
app.listen(PORT,()=>{ console.log(`Listening on ${PORT}`) })