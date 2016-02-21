'use strict';

const expect = require('chai').expect;
const spawn = require('child_process').spawn;

describe('git.io cli', function() {
  this.timeout(5000);

  it('should return a URL from a passed url', (done) => {
    const run = spawn('node', ['src/cli.js', '-u', 'https://github.com/tanepiper']);

    let stdout = '';

    run.stdout.on('data', (data) => stdout += data);
    run.on('close',(code) => {
      expect(stdout).to.equal('https://git.io/tanepiper\n');
      expect(code).to.equal(0);
      done();
    });
  });
});
