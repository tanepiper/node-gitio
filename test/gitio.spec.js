import gitio from './../src';
import { expect }  from 'chai';

describe('gitio library', () => {

  it('should return a valid short url from a github url', (done) => {
    gitio('https://github.com/tanepiper/node-gitio').then((result) => {
      expect(result).to.equal('https://git.io/F6de');
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
