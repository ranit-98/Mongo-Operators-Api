const express = require('express');
const router = express.Router();
const EvaluationController = require('../controller/evaluationController');

//--------------------------------------------------------------------------------------
//                          EVALUATION OPERATORS ROUTES
//--------------------------------------------------------------------------------------

// $regex operator route
router.get('/regex/:field/:pattern', EvaluationController.regexOperator);

// $mod operator route
router.get('/mod/:field/:divisor/:remainder', EvaluationController.modOperator);

// $text operator route
router.get('/text/:searchTerm', EvaluationController.textOperator);

// $where operator route
router.post('/where', EvaluationController.whereOperator);

// $jsonSchema operator route
router.post('/jsonschema', EvaluationController.jsonSchemaOperator);

// $expr operator route
router.post('/expr', EvaluationController.exprOperator);

module.exports = router;
