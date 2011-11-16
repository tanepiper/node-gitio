Nodejs git.io module
====================

A simple module to call the [git.io url shortner service](https://github.com/blog/985-git-io-github-url-shortener) with
nodejs, the module returns a simple object with the status code and URL if created.

Usage
-----

    var gitio = require('gitio');

    // Pass a direct URL and get back a random URL
    gitio('https://github.com/tanepiper/node-gitio', function(err, result) {
      if (err) throw err;
      console.log(result);
    });

    // Pass an optional key to get the URL of your request
    gitio('https://github.com/joyent/node', 'nodejs', function(err, result) {
      if (err) throw err;
      console.log(result);
    });
