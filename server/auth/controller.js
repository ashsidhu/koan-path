var User = require('../models/authUsers');

var controller = {
  signup: function (req, res, next) {
    User.where({email: req.body.email})
    .fetch()
    .then(function (user) {
      console.log(user);
    })
    res.send(200)
  }
}
module.exports = controller;