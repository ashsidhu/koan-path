var db = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgres://localhost:5432/koan_path'
});

module.exports = db;