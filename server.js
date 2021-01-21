var express = require('express');
const app = require('express')();
var path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static("src"));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/src/Document.html'))
})

app.listen(PORT, ()=>{
    console.log(`http:/localhost:${PORT}`)
})