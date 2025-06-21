const express = require('express');
const router = express.Router();
const LogicalController = require('../controller/logicalController');

//--------------------------------------------------------------------------------------
//                          LOGICAL OPERATORS ROUTES
//--------------------------------------------------------------------------------------

// $and operator route
router.post('/and', LogicalController.andOperator);

// $or operator route
router.post('/or', LogicalController.orOperator);

// $nor operator route
router.post('/nor', LogicalController.norOperator);

// $not operator route
router.post('/not', LogicalController.notOperator);

module.exports = router;
