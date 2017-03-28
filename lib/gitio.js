'use strict';

const request = require('https').request;
const Boom = require('boom');

const URL_REGEX = /^https?:\/\/(([a-z0-9\-]+\.)?(github\.(com|io))|raw\.githubusercontent\.com)(\/.*)?$/i;
const REQUEST_CONFIG = {
  host: 'git.io',
  method: 'POST',
  path: '/create'
};

const gitIo = (address, code) => {

  return new Promise((resolve, reject) => {

    address = address.replace(/^http:\/\//i, 'https://');

    if (!URL_REGEX.test(address)) {
      return reject(Boom.badData('The url ' + address + ' is not a valid address for git.io'));
    }

    const body = 'url='+address +
                 (code ? '&code='+code : '');

    const req = request(
      Object.assign(
        {},
        REQUEST_CONFIG,
        { headers: { 'content-length': body.length } }
      ), (response) => {

        if (response.statusCode >= 400) {
          return reject(Boom.create(response.statusCode, response.statusMessage, response));
        }

        const output = [];

        response.setEncoding('utf8');
        response.on('data', (data) => output.push(data.toString()));
        response.on('end', () => resolve('https://git.io/' + output.join('')));
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(body + '\n');
    req.end();

  });
};

module.exports = gitIo;
