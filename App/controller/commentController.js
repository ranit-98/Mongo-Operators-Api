const Promo = require('../models/Promo');
const Employee = require('../models/Employee');

//--------------------------------------------------------------------------------------
//                          COMMENT OPERATOR CONTROLLER
//--------------------------------------------------------------------------------------

class CommentController {

  //--------------------------------------------------------------------------------------
  //                          $comment OPERATOR - ADD COMMENTS TO QUERIES
  //--------------------------------------------------------------------------------------
  static async commentOperator(req, res) {
    try {
      const { field, value, comment } = req.body;
      const query = { 
        [field]: { $eq: value }, 
        $comment: comment 
      };
      const result = await Promo.find(query);
      
      res.json({
        success: true,
        operator: '$comment',
        description: 'Associates a comment to any expression taking a query predicate',
        query: query,
        comment: comment,
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
  //                          QUERY WITH COMMENT - EMPLOYEE SEARCH
  //--------------------------------------------------------------------------------------
  static async employeeQueryWithComment(req, res) {
    try {
      const { jobRole, comment } = req.body;
      const query = { 
        "job_role": { $eq: jobRole }, 
        $comment: comment || `Find employees with job role: ${jobRole}`
      };
      const result = await Employee.find(query);
      
      res.json({
        success: true,
        operator: '$comment with employee query',
        description: 'Employee search with comment for logging and debugging',
        query: query,
        comment: query.$comment,
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

module.exports = CommentController;
