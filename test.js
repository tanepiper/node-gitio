var gitio = require('./index');

gitio('https://github.com/tanepiper/node-bitly', function(err, data) {
  if (!err && data.statusCode === 200) {
    console.log('Your URL is ' + data.url);
  } else {
    console.log(err, data)
  }
});
