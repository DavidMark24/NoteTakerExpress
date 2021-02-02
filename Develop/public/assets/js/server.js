// Required npm packages 

const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const app = express();

// PORT 

const PORT = process.env.PORT || 3000;

// Data paarsing for express app

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
