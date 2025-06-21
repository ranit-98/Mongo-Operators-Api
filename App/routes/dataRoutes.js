const express = require('express');
const router = express.Router();
const DataController = require('../controller/dataController');

//--------------------------------------------------------------------------------------
//                          DATA MANAGEMENT ROUTES
//--------------------------------------------------------------------------------------

// Seed database route
router.post('/seed', DataController.seedDatabase);

// Get all data route
router.get('/all', DataController.getAllData);

// Clear all data route
router.delete('/clear', DataController.clearAllData);

module.exports = router;
