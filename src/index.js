'use strict';

import { request } from 'https';
import Boom from 'boom';

const REQUEST_CONFIG = {
  host: 'git.io',
  method: 'POST',
  path: '/create'
};

var gitIo = (address, code) => {

  return new Promise((resolve, reject) => {

    address = address.replace(/^http:\/\//i, 'https://');

    let body = 'url=' + address + (code ? '&code=' + code : '');
    let req = request(
      Object.assign(
        {},
        REQUEST_CONFIG,
        { headers: { 'content-length': body.length } }
      ), (response) => {
        if (response.statusCode >= 400) {
          return reject(Boom.create(response.statusCode, response.statusText, response));
        }

        var output = [];

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

export default gitIo;
