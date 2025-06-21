const express = require('express');
const router = express.Router();
const ArrayController = require('../controller/arrayController');

//--------------------------------------------------------------------------------------
//                          ARRAY OPERATORS ROUTES
//--------------------------------------------------------------------------------------

// $all operator route
router.post('/all', ArrayController.allOperator);

// $size operator route
router.get('/size/:field/:size', ArrayController.sizeOperator);

// $elemMatch operator route
router.post('/elemmatch', ArrayController.elemMatchOperator);

// Array field query route
router.get('/field/:field/:value', ArrayController.arrayFieldQuery);

module.exports = router;
