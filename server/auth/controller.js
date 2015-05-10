var User = require('./userModel');

var controller = {
  signup: function (req, res, next) {
    (new User)
    .signup(req.body.email, req.body.password)
    .then(function (){
      res.status(200)
      .send('OK')
    })
  }
}
module.exports = controller;