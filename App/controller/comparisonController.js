const Inventory = require('../models/Inventory');
const Employee = require('../models/Employee');

//--------------------------------------------------------------------------------------
//                          COMPARISON OPERATORS CONTROLLER
//--------------------------------------------------------------------------------------

class ComparisonController {
  
  //--------------------------------------------------------------------------------------
  //                          $eq OPERATOR - EQUALS
  //--------------------------------------------------------------------------------------
  static async equalOperator(req, res) {
    try {
      const { id } = req.params;
      const query = { "_id": { $eq: id } };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$eq',
        description: 'Matches values that are equal to the given value',
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
  //                          $gt OPERATOR - GREATER THAN
  //--------------------------------------------------------------------------------------
  static async greaterThanOperator(req, res) {
    try {
      const { value } = req.params;
      const numValue = parseInt(value);
      const query = { "quantity": { $gt: numValue } };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$gt',
        description: 'Matches if values are greater than the given value',
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
  //                          $lt OPERATOR - LESS THAN
  //--------------------------------------------------------------------------------------
  static async lessThanOperator(req, res) {
    try {
      const { value } = req.params;
      const numValue = parseInt(value);
      const query = { "quantity": { $lt: numValue } };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$lt',
        description: 'Matches if values are less than the given value',
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
  //                          $gte OPERATOR - GREATER THAN OR EQUAL
  //--------------------------------------------------------------------------------------
  static async greaterThanEqualOperator(req, res) {
    try {
      const { value } = req.params;
      const numValue = parseInt(value);
      const query = { "quantity": { $gte: numValue } };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$gte',
        description: 'Matches if values are greater or equal to the given value',
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
  //                          $lte OPERATOR - LESS THAN OR EQUAL
  //--------------------------------------------------------------------------------------
  static async lessThanEqualOperator(req, res) {
    try {
      const { value } = req.params;
      const numValue = parseInt(value);
      const query = { "quantity": { $lte: numValue } };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$lte',
        description: 'Matches if values are less or equal to the given value',
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
  //                          $in OPERATOR - IN ARRAY
  //--------------------------------------------------------------------------------------
  static async inOperator(req, res) {
    try {
      const { field, values } = req.body;
      const query = { [field]: { $in: values } };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$in',
        description: 'Matches any of the values in an array',
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
  //                          $nin OPERATOR - NOT IN ARRAY
  //--------------------------------------------------------------------------------------
  static async notInOperator(req, res) {
    try {
      const { field, values } = req.body;
      const query = { [field]: { $nin: values } };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$nin',
        description: 'Matches none of the values specified in an array',
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
  //                          $ne OPERATOR - NOT EQUAL
  //--------------------------------------------------------------------------------------
  static async notEqualOperator(req, res) {
    try {
      const { field, value } = req.params;
      const parsedValue = isNaN(value) ? value : parseFloat(value);
      const query = { [field]: { $ne: parsedValue } };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$ne',
        description: 'Matches values that are not equal to the given value',
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

module.exports = ComparisonController;
