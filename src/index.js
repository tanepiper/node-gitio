'use strict';

import { request } from 'http';
import Boom from 'boom';

const REQUEST_CONFIG = {
  host: 'git.io',
  port: 80,
  method: 'POST',
  path: '/'
};

var gitIo = (address, code) => {

  return new Promise((resolve, reject) => {
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
        return resolve(response.headers.location);
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(body + '\n');
    req.end();

  });
};

export default gitIo;
