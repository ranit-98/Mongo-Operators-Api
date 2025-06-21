const Inventory = require('../models/Inventory');
const Promo = require('../models/Promo');

//--------------------------------------------------------------------------------------
//                          EVALUATION OPERATORS CONTROLLER
//--------------------------------------------------------------------------------------

class EvaluationController {

  //--------------------------------------------------------------------------------------
  //                          $regex OPERATOR - REGULAR EXPRESSION
  //--------------------------------------------------------------------------------------
  static async regexOperator(req, res) {
    try {
      const { field, pattern } = req.params;
      const { options = 'i' } = req.query; // Default case insensitive
      const query = { [field]: { $regex: pattern, $options: options } };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$regex',
        description: 'Select documents that match the given regular expression',
        query: query,
        count: result.length,
        results: result
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  }

  //--------------------------------------------------------------------------------------
  //                          $mod OPERATOR - MODULO OPERATION
  //--------------------------------------------------------------------------------------
  static async modOperator(req, res) {
    try {
      const { field, divisor, remainder } = req.params;
      const query = { [field]: { $mod: [parseInt(divisor), parseInt(remainder)] } };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$mod',
        description: 'Matches documents where a given field value is equal to the remainder after being divided by a specified value',
        query: query,
        count: result.length,
        results: result
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  }

  //--------------------------------------------------------------------------------------
  //                          $text OPERATOR - TEXT SEARCH
  //--------------------------------------------------------------------------------------
  static async textOperator(req, res) {
    try {
      const { searchTerm } = req.params;
      const { caseSensitive = false, diacriticSensitive = false } = req.query;
      
      // Create text index if it doesn't exist
      await Inventory.collection.createIndex({ "name": "text" });
      
      const query = { 
        $text: { 
          $search: searchTerm,
          $caseSensitive: caseSensitive === 'true',
          $diacriticSensitive: diacriticSensitive === 'true'
        } 
      };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$text',
        description: 'Perform a text search on the indicated field',
        query: query,
        count: result.length,
        results: result
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  }

  //--------------------------------------------------------------------------------------
  //                          $where OPERATOR - JAVASCRIPT EXPRESSION
  //--------------------------------------------------------------------------------------
  static async whereOperator(req, res) {
    try {
      const { jsExpression } = req.body;
      const query = { $where: jsExpression };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$where',
        description: 'Matches documents that satisfy a JavaScript expression',
        query: query,
        count: result.length,
        results: result
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  }

  //--------------------------------------------------------------------------------------
  //                          $jsonSchema OPERATOR - JSON SCHEMA VALIDATION
  //--------------------------------------------------------------------------------------
  static async jsonSchemaOperator(req, res) {
    try {
      const { schema } = req.body;
      const query = { $jsonSchema: schema };
      const result = await Promo.find(query);
      
      res.json({
        success: true,
        operator: '$jsonSchema',
        description: 'Validate the document according to the given JSON schema',
        query: query,
        count: result.length,
        results: result
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  }

  //--------------------------------------------------------------------------------------
  //                          $expr OPERATOR - AGGREGATION EXPRESSION
  //--------------------------------------------------------------------------------------
  static async exprOperator(req, res) {
    try {
      const { expression } = req.body;
      const query = { $expr: expression };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$expr',
        description: 'Allows use of aggregation expressions within the query language',
        query: query,
        count: result.length,
        results: result
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  }
}

module.exports = EvaluationController;
