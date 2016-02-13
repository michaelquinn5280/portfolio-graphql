import express from 'express';
//var express = require('express')
//import process from 'process';

let path = require('path'); 
let app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.listen(process.env.PORT || 3000);