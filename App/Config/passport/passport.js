var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, users) {
    var Users = users;
    var LocalStrategy = require('passport-local').Strategy;
    console.log("hello1")
    passport.serializeUser(function(users, done) {
        
        done(null, users.id);
      });
    
      passport.deserializeUser(function(id, done) {
        
        Users.findById(id).then(function(users) {
            if (users) {
                done(null, users.get());
            } else {
                done(users.errors, null);
            }
        });
      });

  passport.use('local-signup', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'thepassword',
        passReqToCallback: true
    },

    function(req, email, thepassword, done) {
        console.log(email, thepassword)
        var generateHash = function(thepassword) {
            return bCrypt.hashSync(thepassword, bCrypt.genSaltSync(8), null);
        };
        
        Users.findOne({
            where: {
                email: email
            }
        }).then(function(foundUser) {
            console.log("test", thepassword)
            if (foundUser)
            {
                return done(null, false, {
                    message: 'Sorry, email already in use'
                });
            } else {
                var userPassword = generateHash(thepassword);
                var data =
                    {
                        email: email,
                        thepassword: userPassword,
                    };
                    console.log("fdf", data.password)
                Users.create(data).then(function(newUser, created) {
                    if (!newUser) {
                        return done(null, false);
                    }
                    if (newUser) {
                        return done(null, newUser);
                    }
                });
            }
        });
    }
  ));


  passport.use('local-signin', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'thepassword',
        passReqToCallback: true
    },

    function(req, email, thepassword, done) {
        
        var Users = users;
        var isValidPassword = function(userpass, thepassword) {
            return bCrypt.compareSync(thepassword, userpass);
        }
        
        Users.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(users) {
            if (!users) {
                return done(null, false, {
                    message: 'Sorry, user does not exist'
                });
            } 

            if (!isValidPassword(users.thepassword, thepassword)) {
                return done(null, false, {
                    message: 'Password Incorrect!'
                });
 
            }

            var userinfo = users.get();
            return done(null, userinfo);
 
        }).catch(function(err) {
            console.log("Error:", err);
 
            return done(null, false, {
                message: 'Something went wrong with signing in'
            });
        });
     }
  ));

}