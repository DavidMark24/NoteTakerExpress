// Required npm packages 

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// PORT 

const PORT = process.env.PORT || 3000;

// Data paarsing for express app

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// GET request 

app.get("/notes" , function(req, res) {
    res.sendFile(path.join(_dirname, "public/notes.html"))

});


