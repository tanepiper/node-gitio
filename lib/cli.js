#!/usr/bin/env node
'use strict';

const gitio = require('./gitio');
const yargs = require('yargs');

const URL_REGEX = /^https?:\/\/(([a-z0-9\-]+\.)?(github\.(com|io))|raw\.githubusercontent\.com)(\/.*)?$/i;

const process = () => {
  const program = yargs
    .usage('Usage: $0 user/repo [-u github url] [-c code]')
    .option('u', {
     alias: 'url',
     describe: "Github url",
     demand: true
    })
    .option('c', {
     alias: 'code',
     describe: "Code",
     demand: false
    })
    .wrap(80)
    .help('h')
    .alias('h', 'help')
    .argv;

  let url = '';
  const code = program.c; // undefined OR actual --code

  if (program.u) {
    url = program.u;
  } else {
    if (program._[0]) {
      if (URL_REGEX.test(program._[0])) {
        url = program._[0];
      } else {
        url = 'https://github.com/' + program._[0];
      }
    }
  }

  //TODO: this will never be reached because yargs is demanding url option
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
