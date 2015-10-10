'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _starwarsNamesJson = require('./starwars-names.json');

var _starwarsNamesJson2 = _interopRequireDefault(_starwarsNamesJson);

module.exports = {
  all: _starwarsNamesJson2['default'],
  getAll: _starwarsNamesJson2['default'],
  random: (0, _uniqueRandomArray2['default'])(_starwarsNamesJson2['default'])
};
