require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', routes);
app.use('/api/v1/uploads/customer-images', express.static(path.join(__dirname, 'uploads/customer-images')));

module.exports = app;
