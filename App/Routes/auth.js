var authController = require('../Controllers/authcontroller');
var path = require("path");

module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.get('/logout', authController.logout);

    function isLoggedIn(req, res, next) {
      if (req.isAuthenticated()) {
          return next();
      } else {
        console.log("didn't work")
        res.redirect('/signin')
      }
  }

     app.get('/dashboard', isLoggedIn, authController.dashboard);
}

