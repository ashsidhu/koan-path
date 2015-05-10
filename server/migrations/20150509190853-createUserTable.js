var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('users', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      email: {type: 'string', length: 40, notNull: false },
      username: {type: 'string', length: 255, notNull: false },
      location: {type: 'string', length: 255, default:'' },
    },
    ifNotExists: true
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('users', callback);
};
