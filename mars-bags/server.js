var express = require('express');
var app = module.exports = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./server/config');
var massive = require('massive');
var dbCtrl = require('./server/controllers/dbCtrl');
var oAuthFbCtrl = require('./server/controllers/oAuthFbCtrl');

//for oAuth will uncomment later
// app.use(session({secret: config.sessionPassword}));

// Connection to postgres db.
var connectionString = 'postgres://postgres:'+ config.PgPassword +'@localhost:'+ config.serverPort +'/Mars Bags';

//Initializing bodyParser, cors, passport & session.
app.use(bodyParser.json());
app.use(cors());
// app.use(passport.initialize());
// app.use(passport.session())

var massiveInstance = massive.connectSync({connectionString : connectionString});
app.set('db', massiveInstance);


//db read all products endpoint
app.get('/api/products', dbCtrl.readProducts);

app.listen( config.portNum, function(){
  console.log("Successfully listening");
});
