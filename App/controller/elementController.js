const Employee = require('../models/Employee');
const Inventory = require('../models/Inventory');

//--------------------------------------------------------------------------------------
//                          ELEMENT OPERATORS CONTROLLER
//--------------------------------------------------------------------------------------

class ElementController {

  //--------------------------------------------------------------------------------------
  //                          $exists OPERATOR - FIELD EXISTS
  //--------------------------------------------------------------------------------------
  static async existsOperator(req, res) {
    try {
      const { field, value } = req.params;
      const exists = value === 'true';
      const query = { [field]: { $exists: exists } };
      const result = await Employee.find(query);
      
      res.json({
        success: true,
        operator: '$exists',
        description: 'Matches documents that have the specified field',
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
  //                          $type OPERATOR - FIELD TYPE
  //--------------------------------------------------------------------------------------
  static async typeOperator(req, res) {
    try {
      const { field, type } = req.params;
      const query = { [field]: { $type: type } };
      const result = await Employee.find(query);
      
      res.json({
        success: true,
        operator: '$type',
        description: 'Matches documents according to the specified field type',
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
  //                          COMBINED EXISTS AND CONDITION
  //--------------------------------------------------------------------------------------
  static async existsWithCondition(req, res) {
    try {
      const { field, condition } = req.body;
      const query = { [field]: { $exists: true, ...condition } };
      const result = await Employee.find(query);
      
      res.json({
        success: true,
        operator: '$exists with condition',
        description: 'Matches documents where field exists and meets additional conditions',
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

module.exports = ElementController;
