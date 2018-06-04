var db = require("../Models");
var passport = require("passport");

module.exports = function(app) {
  app.post("/signup", passport.authenticate("local-signup", {
    failureRedirect: "/signup"
  }),
    function(req, res) {

  console.log("here");

  var today = new Date();
  var loginNow = req.body;
  console.log(db.users)

  // db.users.create({
  //     email: loginNow.email, 
  //     thepassword: loginNow.thepassword,
  //     createdAt: today,
  //     updatedAt: today 
  //   }).then(function(dbUsers) {
  //     res.redirect("/dashboard");
  //   });
    res.redirect("/dashboard");
  });

  app.post("/signin", passport.authenticate("local-signin", {
    failureRedirect: "/signin"
  }),
     function(req, res) {

    console.log("bison");
    console.log(db.users)
  
      // db.users.findOne({
      //   where: {
      //     email: req.body.email
      //   }
      // }).then(function(dbUsers) {
      //   console.log(dbUsers)
      //   res.redirect("/dashboard");
      // });
      res.redirect("/dashboard");
    });

}
