var db = require('../db');
var bookshelf = require('bookshelf')(db);

db.schema.hasTable('users').then(function (exists) {
  if (!exists) {
    db.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.timestamps();
      user.string('email', 40);
      user.string('password', 255);
    }).then(function (){
      console.log('Created table: users');
    });
  }
});

var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  signup: function (email, password) {
    return this.set({
      email: email, 
      password: password
    }).save()
  }
});
module.exports = User;