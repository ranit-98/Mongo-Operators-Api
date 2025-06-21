const Employee = require('../models/Employee');

//--------------------------------------------------------------------------------------
//                          LOGICAL OPERATORS CONTROLLER
//--------------------------------------------------------------------------------------

class LogicalController {

  //--------------------------------------------------------------------------------------
  //                          $and OPERATOR - LOGICAL AND
  //--------------------------------------------------------------------------------------
  static async andOperator(req, res) {
    try {
      const { conditions } = req.body;
      const query = { $and: conditions };
      const result = await Employee.find(query);
      
      res.json({
        success: true,
        operator: '$and',
        description: 'Joins two or more queries with a logical AND and returns documents that match all conditions',
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
  //                          $or OPERATOR - LOGICAL OR
  //--------------------------------------------------------------------------------------
  static async orOperator(req, res) {
    try {
      const { conditions } = req.body;
      const query = { $or: conditions };
      const result = await Employee.find(query);
      
      res.json({
        success: true,
        operator: '$or',
        description: 'Join two or more queries with a logical OR and return documents that match either query',
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
  //                          $nor OPERATOR - LOGICAL NOR
  //--------------------------------------------------------------------------------------
  static async norOperator(req, res) {
    try {
      const { conditions } = req.body;
      const query = { $nor: conditions };
      const result = await Employee.find(query);
      
      res.json({
        success: true,
        operator: '$nor',
        description: 'The logical NOR operator joins two or more queries and returns documents that do not match the given query conditions',
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
  //                          $not OPERATOR - LOGICAL NOT
  //--------------------------------------------------------------------------------------
  static async notOperator(req, res) {
    try {
      const { field, condition } = req.body;
      const query = { [field]: { $not: condition } };
      const result = await Employee.find(query);
      
      res.json({
        success: true,
        operator: '$not',
        description: 'Returns the documents that do not match the given query expression',
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

module.exports = LogicalController;
