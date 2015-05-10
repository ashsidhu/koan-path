var knex = require('knex')({
  client: 'pg',
  //connection: process.env.DATABASE_URL || 'postgres://localhost:5432/koan_path'
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : 'pointer',
    database : 'koan_path',
    charset  : 'utf8'
  }
});

var db = require('bookshelf')(knex);

module.exports = db;