//import express
const express = require('express');
const MovieModel = require('./model/model');
const cors = require('cors')
const path = require('path');

//ini

const app = new express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname,'/build')));

const controlRouter = require('./routes/movieRouter')
//api creation
app.use('/api/movie',controlRouter)



app.get('/*', function(req, res) { 
   res.sendFile(path.join(__dirname 
   ,'/build/index.html')); });
// port
 app.listen('3001',()=>{
    console.log('port 3001 is activated');
 })
