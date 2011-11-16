var http = require('http');

var getGitIoAddress = function(address, code, cb) {
  
  var body_fields = '';
  body_fields += 'url=' + address;

  // Check over the callback position
  if (code && typeof code === 'function') {
    cb = code;
  } else if (code) {
    body_fields += '&code=' + code;
  }

  var req = http.request({
    host: 'git.io',
    port: 80,
    method: 'POST',
    path: '/',
    headers: {
      'content-length': body_fields.length
    }
  }, function(res) {
    res.on('end', function() {
      console.log(res);
      var result = {
        statusCode: res.statusCode,
        url: res.headers.location || null
      }
      cb(null, result);
    });

    res.on('error', function(e) {
      cb(e);
    })
  });

  req.write(body_fields + "\n");
  req.end();
}


module.exports = getGitIoAddress;
