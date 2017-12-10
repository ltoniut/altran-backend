var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index.ts');
var routes = require('./routes/routes.ts');
var users = require('./routes/users.ts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');

	// Server configuration

	// handle CORS requests
	app.use(function (req, res, next) {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
		res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,x-access-token");

		if ('OPTIONS' === req.method)
			res.send(200);
		else
			next();
	})

	// app route
	app.use('/app', express.static(path.join(__dirname, '/app')));

	// set static files location
	app.use(express.static(path.join(__dirname, "/public")));

	// Request Handlers
	const handlers = {
		getUserData: require('./app/handlers/user/getUserDataHandler'),
		getUserPolicies: require('./app/handlers/user/getUserPoliciesHandler'),
		getPolicyOwner: require('./app/handlers/policy/getPolicyOwner')
	};

	// Application routes
	routes.setup(app, handlers);
});

module.exports = app;
