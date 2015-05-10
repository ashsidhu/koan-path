var bookshelf = require('../db');

var Users = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true
});
module.exports = Users