'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _http = require('http');

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

var REQUEST_CONFIG = {
  host: 'git.io',
  port: 80,
  method: 'POST',
  path: '/'
};

var gitIo = function gitIo(address, code) {

  return new Promise(function (resolve, reject) {
    var body = 'url=' + address + (code ? '&code=' + code : '');
    var req = (0, _http.request)(Object.assign({}, REQUEST_CONFIG, { headers: { 'content-length': body.length } }), function (response) {
      if (response.statusCode >= 400) {
        return reject(_boom2['default'].create(response.statusCode, response.statusText, response));
      }
      return resolve(response.headers.location);
    });

    req.on('error', function (error) {
      reject(error);
    });

    req.write(body + '\n');
    req.end();
  });
};

exports['default'] = gitIo;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map