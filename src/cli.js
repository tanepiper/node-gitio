#!/usr/bin/env node
'use strict';

import gitio from './index';
import optimist from 'optimist';

let program = optimist
  .usage('Shorten URLs like the cool kids\ngitio https://github.com/<path> [optional code]')
  .wrap(80)
  .demand(1);

let argv = program.argv;
let url = argv._[0];
let code = argv._[1];

gitio(url, code).then(
  (url) => console.log(url),
  (error) => {
    console.error('** Error:', error.message);
    console.error();
    console.error(program.help());
  }
);
