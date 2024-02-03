const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/product'

const app = express()

mongoose.connect(url)

const con = mongoose.connection

con.on('open', () =>{
    console.log('connected....')
})


app.use(express.json())

const productRouter = require('./routes/product')
app.use('/product', productRouter)


app.listen(9000,() =>{
    console.log('server started')
} )
