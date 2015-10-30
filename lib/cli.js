#!/usr/bin/env node

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _optimist = require('optimist');

var _optimist2 = _interopRequireDefault(_optimist);

var program = _optimist2['default'].usage('Shorten URLs like the cool kids\ngitio [url] [optional code]').wrap(80).demand(1);

var argv = program.argv;
var url = argv._[0];
var code = argv._[1];

(0, _index2['default'])(url, code).then(function (url) {
  return console.log(url);
}, function (error) {
  console.error('** Error:', err.message);
  console.error();
  console.error(program.help());
});
//# sourceMappingURL=cli.js.map