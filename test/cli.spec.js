'use strict';

import { expect } from 'chai';
import { spawn } from 'child_process';

describe('git.io cli', () => {

  it('should return a URL from a passed url', (done) => {
    let run = spawn('babel-node', ['src/cli.js', 'https://github.com/tanepiper']);

    let stdout = '';

    run.stdout.on('data', (data) => stdout += data);
    run.on('close',(code) => {
      expect(stdout).to.equal('https://git.io/tanepiper\n');
      expect(code).to.equal(0);
      done();
    });
  });
});
