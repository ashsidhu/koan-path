/**
 * Created by riteshkumar on 09/05/15.
 */
var bookshelf = require('../db');

var authUser = bookshelf.Model.extend({
  tableName: 'authUsers',
  hasTimestamps: true
});
module.exports = authUser;