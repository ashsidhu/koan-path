var db = require('../db');
var bookshelf = require('bookshelf');

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

db.schema.dropTable('users');
var User = bookshelf(db).Model.extend({
  tableName: 'users',
  hasTimestamps: true,
});
module.exports = User;