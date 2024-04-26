const express = require('express');
const router = express.Router();
const customerRoutes = require('./customer');

// Main router combining all routes
router.use('/v1/customers', customerRoutes);
// router.use('/', async (req, res) => { res.status(200).json({message:"welcome to customer manager"}) });

module.exports = router;
