var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'src/layouts/layout'));
app.set('views', path.join(__dirname, 'src/views'));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));
// Adjust the path for the 'stylesheets' directory
app.use('/css', express.static(path.join(__dirname, 'public/stylesheets')));
app.use('/js', express.static(path.join(__dirname, 'public/javascripts')));
app.use('/fontawesome', express.static(path.join(__dirname, 'public/fontawesome/')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// MES ROUTES
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
