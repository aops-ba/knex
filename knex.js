// Knex.js
// --------------
//     (c) 2013-present Tim Griesser
//     Knex may be freely distributed under the MIT license.
//     For details and documentation:
//     http://knexjs.org

const BADebug = require("./lib/badebug.js");
global.__KNEXBADEBUG = new BADebug;

module.exports = require('./lib/index');
