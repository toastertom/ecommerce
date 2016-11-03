// var app = require('../../server');
// var config = require('../config');
//
//
// module.exports = function (passport) {
//
//   passport.serializeUser(function(user, done) {
//     done(null, user);
//   });
//
//   passport.deserializeUser(function(obj, done) {
//     done(null, obj);
//   });
//
//   passport.use(new FacebookStrategy({
//    clientID: config.id,
//    clientSecret: config.secret,
//    callbackURL: 'http://localhost:' + config.portNum + '/auth/facebook/callback'
//    }, function(token, refreshToken, profile, done) {
//      return done(null, profile);
//    }));
//
//    app.get('/auth/facebook', passport.authenticate('facebook'));
//
//    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
//      successRedirect: '/auth/me',
//      failureRedirect: '/login'
//    }));
// }
