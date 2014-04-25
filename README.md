# `gitio`

A Node.js module to call GitHub's [git.io url shortener service](https://github.com/blog/985-git-io-github-url-shortener).

## Usage

```js
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
```

## API

### gitio(url, [code], cb)

#### url

Type: `string`

The `github.com` URL to shorten.

#### code

Type: `string`

The shortened URL path.

#### callback(err, url)

Type: `function`

A callback invoked with two arguments; an error object if an error occurred,
and the shortened URL.
