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

      var passed = (res.statusCode < 300 && res.statusCode >= 200);
      if (passed) {
        cb(null, res.headers.location);
      } else { 
        cb(new Error('Git.io ' + res.headers.status));
      }
    });

    res.on('error', function(e) {
      cb(e);
    })
  });

  req.write(body_fields + "\n");
  req.end();
}


module.exports = getGitIoAddress;
