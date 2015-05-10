var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('authUsers', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      password: {type: 'string', length: 256, notNull: false },
      user_id: {type: 'int'}
    },
    ifNotExists: true
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('authUsers', callback);
};
