var gitio = require('./index');

gitio('https://github.com/tanepiper/node-gitio', function(err, result) {
  if (err) throw err;
  console.log(result);
});
