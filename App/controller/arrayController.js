const Inventory = require('../models/Inventory');
const Promo = require('../models/Promo');

//--------------------------------------------------------------------------------------
//                          ARRAY OPERATORS CONTROLLER
//--------------------------------------------------------------------------------------

class ArrayController {

  //--------------------------------------------------------------------------------------
  //                          $all OPERATOR - ALL VALUES IN ARRAY
  //--------------------------------------------------------------------------------------
  static async allOperator(req, res) {
    try {
      const { field, values } = req.body;
      const query = { [field]: { $all: values } };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$all',
        description: 'Matches arrays that contain all the specified values in the query condition',
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
  //                          $size OPERATOR - ARRAY SIZE
  //--------------------------------------------------------------------------------------
  static async sizeOperator(req, res) {
    try {
      const { field, size } = req.params;
      const query = { [field]: { $size: parseInt(size) } };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: '$size',
        description: 'Matches the documents if the array size is equal to the specified size',
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
  //                          $elemMatch OPERATOR - ELEMENT MATCH
  //--------------------------------------------------------------------------------------
  static async elemMatchOperator(req, res) {
    try {
      const { field, conditions } = req.body;
      const query = { [field]: { $elemMatch: conditions } };
      const result = await Promo.find(query);
      
      res.json({
        success: true,
        operator: '$elemMatch',
        description: 'Matches documents that match specified conditions within each array element',
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
  //                          ARRAY FIELD QUERY
  //--------------------------------------------------------------------------------------
  static async arrayFieldQuery(req, res) {
    try {
      const { field, value } = req.params;
      const query = { [field]: value };
      const result = await Inventory.find(query);
      
      res.json({
        success: true,
        operator: 'Array field query',
        description: 'Matches documents where array field contains the specified value',
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

module.exports = ArrayController;
