const express = require('express')
const app = express()
const swaggerJSON = require('./swagger.json')
const swaggerUI = require('swagger-ui-express')

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))

app.listen('3000', () => {
    console.log("App is running at localhost:3000")
})