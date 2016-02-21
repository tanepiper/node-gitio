# `gitio`

A Node.js module to call GitHub's [git.io url shortener service](https://github.com/blog/985-git-io-github-url-shortener).

## Library Usage

```js
const gitio = require('gitio');

// Pass a direct URL and get back a random URL
gitio('https://github.com/tanepiper/node-gitio').then(result => {
  console.log(result);
});

// Pass an optional key to get the URL of your request
gitio('https://github.com/joyent/node', 'nodejs').then(result => {
  console.log(result);
});
```

## API

### gitio(url, [code])

#### url

Type: `string`

The `github.com` URL to shorten.

#### code

Type: `string`

The shortened URL path.


## Command line usage

Install and use from the command line.  Takes a required github.com url, and an optional code as
a second parameter.

```
> npm install -g gitio
> gitio https://github.com/tanepiper [tanepiper]
```
