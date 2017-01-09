'use strict';
var path = require('path');
var express = require('express');
var app = express();

var logMiddleware = require('volleyball');

app.use(express.static('./public'))

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var session = require('express-session');
module.exports = app;


app.use(session({
  secret: 'shhh',
  resave: false,
  saveUninitialized: false
}));

// app.use(function (req, res, next) {
//   console.log('sessionnnnnnnnnn: ', req.session);
//   next();
// });

app.use('/api', require('./routes'));

app.use(function (req, res, next) {

    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }

});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname,'../../browser/index.html'))
});

// Error catching
app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});
