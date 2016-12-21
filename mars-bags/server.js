var express = require('express');
var app = module.exports = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./server/config');
var massive = require('massive');
var stripe = require('stripe')("sk_test_VphG8qpl0LmsxQ5qvZuE241Z"); //secretkey

var oAuthFbCtrl = require('./server/controllers/oAuthFbCtrl');

//for oAuth will uncomment later
// app.use(session({secret: config.sessionPassword}));

// Connection to postgres db.
var connectionString = 'postgres://postgres:'+ config.PgPassword +'@localhost:'+ config.dbPort +'/Mars Bags';

// Middleware //Initializing bodyParser, cors, passport & session.
app.use(bodyParser.json());
app.use(cors());
// app.use(passport.initialize());
// app.use(passport.session())

var massiveInstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveInstance);

// Stripe Payments
app.get('/paysuccess', function(req, res) {
	res.render('paysuccess', {});
});

app.post('/charge', function (req, res) {
  var token = req.body.stripeToken;
  var email = req.body.stripeEmail;
  var chargeAmount = req.body.chargeAmount;
  var charge = stripe.charges.create({
    amount: chargeAmount,
    source: token
  },
  function (err, charge) {
      if(err & err.type === "StripeCardError"){
			     console.log("Your card was declined");
         }
         else {
           console.log("Your payment was successful");
       	res.redirect('/paysuccess');
      }
    })
});


var dbCtrl = require('./server/controllers/dbCtrl');
//db read all products endpoints
app.get('/api/products', dbCtrl.readProducts);
app.get('/api/product/:id', dbCtrl.readProduct);
// app.get('/api/products/create', dbCtrl.createProduct);
// app.get('/api/products/update', dbCtrl.updateProduct);
// app.get('/api/products/delete', dbCtrl.deleteProduct);


app.listen( config.nodePort, function(){
  console.log("Successfully listening");
});
