#!/usr/bin/env node
'use strict';

import gitio from './index';
import optimist from 'optimist';


let process = () => {
  let program = optimist
    .usage('Usage: $0 user/repo [-u github url] [-c code]')
    .alias('u', 'url')
    .alias('c', 'code')
    .wrap(80)
    .argv;

  let url = '';
  let code = program.c ? program.c : false;

  if (program.u) {
    url = program.u;
  } else {
    if (program._[0]) {
      if (/^(https:|http:)\/\/(github\.com)\/[A-Za-z0-9\?&=\-_\/]+$/.test(program._[0])) {
        url = program._[0];
      } else {
        url = 'https://github.com/' + program._[0];
      }
    }
  }

  if (!url) {
    return console.error(`${program.$0}: No URL passed`);
  }

  gitio(url, code).then(
    (url) => console.log(url),
    (error) => {
      console.error(`${program.$0}: Error - ${error.message}`);
      console.error();
      console.error(program.help());
    }
  );
};

process();
