const express = require('express');
const router = express.Router();
const ComparisonController = require('../controller/comparisonController');

//--------------------------------------------------------------------------------------
//                          COMPARISON OPERATORS ROUTES
//--------------------------------------------------------------------------------------

// $eq operator route
router.get('/eq/:id', ComparisonController.equalOperator);

// $gt operator route
router.get('/gt/:value', ComparisonController.greaterThanOperator);

// $lt operator route
router.get('/lt/:value', ComparisonController.lessThanOperator);

// $gte operator route
router.get('/gte/:value', ComparisonController.greaterThanEqualOperator);

// $lte operator route
router.get('/lte/:value', ComparisonController.lessThanEqualOperator);

// $in operator route
router.post('/in', ComparisonController.inOperator);

// $nin operator route
router.post('/nin', ComparisonController.notInOperator);

// $ne operator route
router.get('/ne/:field/:value', ComparisonController.notEqualOperator);

module.exports = router;
