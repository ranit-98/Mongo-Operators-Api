const express = require('express');
const router = express.Router();
const CommentController = require('../controller/commentController');

//--------------------------------------------------------------------------------------
//                          COMMENT OPERATOR ROUTES
//--------------------------------------------------------------------------------------

// $comment operator route
router.post('/comment', CommentController.commentOperator);

// Employee query with comment route
router.post('/employee-comment', CommentController.employeeQueryWithComment);

module.exports = router;
