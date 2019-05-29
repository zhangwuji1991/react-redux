const express = require('express')
const app     = express()
const mongoose = require('mongoose')
//连接mongo
const DB_URL = 'mongodb://21.254.181.14:8082/imooc'

mongoose.connect(DB_URL)

mongoose.connection.on('connected',function(){
    console.log('mongo connect sussess')
})

app.get('/',function(req,res){
    res.send('<h1>Hellod Word</h1>')
})

app.listen(9093,function(){
    console.log('app start port 9093')
})