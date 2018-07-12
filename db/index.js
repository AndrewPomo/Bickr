const pgp = require('pg-promise')();

module.exports = pgp('postgres://andrew:password@localhost:5432/bickr');
