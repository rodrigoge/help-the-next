const knex = require('knex');
const knexfile = require('../../knexfile');
const configuration = knexfile.development;
const connection = knex(configuration);

module.exports = connection;