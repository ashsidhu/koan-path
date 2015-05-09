/**
 * Created by riteshkumar on 09/05/15.
 */
var db = require('../db');
var bookshelf = require('bookshelf');

var authUser = bookshelf(db).Model.extend({
  tableName: 'authUsers',
  hasTimestamps: true
});
module.exports = authUser;