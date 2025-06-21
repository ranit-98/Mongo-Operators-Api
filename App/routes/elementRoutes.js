const express = require('express');
const router = express.Router();
const ElementController = require('../controller/elementController');

//--------------------------------------------------------------------------------------
//                          ELEMENT OPERATORS ROUTES
//--------------------------------------------------------------------------------------

// $exists operator route
router.get('/exists/:field/:value', ElementController.existsOperator);

// $type operator route
router.get('/type/:field/:type', ElementController.typeOperator);

// $exists with condition route
router.post('/exists-condition', ElementController.existsWithCondition);

module.exports = router;
