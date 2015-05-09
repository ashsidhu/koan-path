var db = require('../db');
var bookshelf = require('bookshelf');

var Users = bookshelf(db).Model.extend({
  tableName: 'users',
  hasTimestamps: true
});
module.exports = Users