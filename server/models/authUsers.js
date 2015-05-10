/**
 * Created by riteshkumar on 09/05/15.
 */
var bookshelf = require('../db');

var authUser = bookshelf.Model.extend({
  tableName: 'authUsers',
  hasTimestamps: true,
  signup: function (email, password) {
    return this.set({
      email: email, 
      password: password
    }).save()
});
module.exports = authUser;