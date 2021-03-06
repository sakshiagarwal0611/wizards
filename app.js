'use strict';
// Module Dependencies
// -------------------
var express     = require('express');
var bodyParser  = require('body-parser');
var errorhandler = require('errorhandler');
var http        = require('http');
var path        = require('path');
var request     = require('request');

var app = express();

// Configure Express
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.raw({type: 'application/jwt'}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.methodOverride());
app.use(express.favicon());



// Express in Development Mode
if ('development' == app.get('env')) {
  app.use(errorhandler());
}



// Custom Hello World Activity Routes
app.post('/activity/save');
app.post('/activity/validate');
app.post('/activity/publish' );
app.post('/activity/execute' );

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
