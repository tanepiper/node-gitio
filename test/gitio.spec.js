import gitio from './../src';
import { expect }  from 'chai';

describe('gitio library', function() {
  this.timeout(5000);

  it('should return a valid short url from a github url', (done) => {
    gitio('https://github.com/tanepiper/node-gitio').then((result) => {
      expect(result).to.equal('https://git.io/F6de');
      done();
    }, done);
  });

  it('should return a valid short url from a raw githubcontent url', (done) => {
    gitio('https://raw.githubusercontent.com/tanepiper/node-gitio/master/src/index.js').then((result) => {
      expect(result).to.equal('https://git.io/v2IQK');
      done();
    }, done);
  });

  it('should return a valid short url from a github file url', (done) => {
    gitio('https://github.com/tanepiper/node-gitio/blob/master/README.md').then((result) => {
      expect(result).to.equal('https://git.io/v2IN9');
      done();
    }, done);
  });

  it('should return a valid short url when passed a code and github url', (done) => {
    gitio('https://github.com/tanepiper/jquery.ui.pwstrength', 'pwstrength').then((result) => {
      expect(result).to.equal('https://git.io/pwstrength');
      done();
    }, done)
  });

  it('should return an error when no a valid github url', (done) => {
    gitio('http://example.com').then(() => {}, (error) => {
      expect(error).to.be.instanceOf(Error);
      done();
    });
  });
});
