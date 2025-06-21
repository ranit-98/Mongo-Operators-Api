const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

const configureCors = require('./App/config/corsConfig');

const comparisonRoutes = require('./App/routes/comparisonRoutes');
const logicalRoutes = require('./App/routes/logicalRoutes');
const elementRoutes = require('./App/routes/elementRoutes');
const arrayRoutes = require('./App/routes/arrayRoutes');
const evaluationRoutes = require('./App/routes/evaluationRoutes');
const commentRoutes = require('./App/routes/commentRoutes');
const dataRoutes = require('./App/routes/dataRoutes');

const app = express();

// -----------------------------
// CORS Setup - Allow Frontend Origin
// -----------------------------
app.use(configureCors());



// -----------------------------
// Middleware Setup
// -----------------------------
app.use(session({
  secret: 'employee-management-secret',
  resave: false,
  saveUninitialized: true
}));

app.use(cookieParser());
app.use(flash());
// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));

// Body parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Flash message middleware
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// -----------------------------
// Routes
// -----------------------------

//--------------------------------------------------------------------------------------
//                          API DOCUMENTATION ROUTE
//--------------------------------------------------------------------------------------
app.get('/', (req, res) => {
  res.json({
    message: 'MongoDB Query Operators API',
    version: '1.0.0',
    endpoints: {
      comparison: {
        base: '/api/comparison',
        operators: ['eq', 'gt', 'lt', 'gte', 'lte', 'in', 'nin', 'ne']
      },
      logical: {
        base: '/api/logical',
        operators: ['and', 'or', 'nor', 'not']
      },
      element: {
        base: '/api/element',
        operators: ['exists', 'type']
      },
      array: {
        base: '/api/array',
        operators: ['all', 'size', 'elemmatch']
      },
      evaluation: {
        base: '/api/evaluation',
        operators: ['regex', 'mod', 'text', 'where', 'jsonschema', 'expr']
      },
      comment: {
        base: '/api/comment',
        operators: ['comment']
      },
      data: {
        base: '/api/data',
        operations: ['seed', 'all', 'clear']
      }
    }
  });
});

//--------------------------------------------------------------------------------------
//                          API ROUTES
//--------------------------------------------------------------------------------------
app.use('/api/comparison', comparisonRoutes);
app.use('/api/logical', logicalRoutes);
app.use('/api/element', elementRoutes);
app.use('/api/array', arrayRoutes);
app.use('/api/evaluation', evaluationRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/data', dataRoutes);

//--------------------------------------------------------------------------------------
//                          ERROR HANDLING MIDDLEWARE
//--------------------------------------------------------------------------------------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error'
  });
});




// -----------------------------
// 404 Fallback Route
// -----------------------------
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

module.exports = app;
