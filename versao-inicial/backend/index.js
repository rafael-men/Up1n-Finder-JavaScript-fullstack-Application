const express = require('express')
const consign = require('consign')
const db = require('./config/db.js')
const app = express()

app.db = db

consign()
.then('./config/middlewares.js')
.then('./api')
.then('./config/routes.js')
.into(app)



app.listen(3002, () => {
    console.log('Back End Runnning')
})
