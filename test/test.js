var expect = require('chai').expect;
var stilr = require('stilr');

var stilrCx = require('../index');

describe('Function', function() {
  it('should return a hashed class name', function () {
    stilr.clear();
    expect(stilrCx({display: 'flex'}).className).to.be.a('string');
  });
  it('should mark styles as !important', function () {
    stilr.clear();
    var result = stilrCx({
      returnStyle: true,
      display: 'flex'
    });
    expect(result.style).to.have.string('flex !important');
  });
  it('should convert integers to px unless fontWeight', function () {
    stilr.clear();
    var result = stilrCx({
      returnStyle: true,
      fontSize: 50
    });
    expect(result.style).to.have.string('50px');
  });
  it('should not convert integer fontWeight to px', function () {
    stilr.clear();
    var result = stilrCx({
      returnStyle: true,
      fontWeight: 50
    });
    expect(result.style).to.have.string('50')
      .and.not.have.string('50px');
  });
  it('should return a string containing given a class name', function () {
    stilr.clear();
    expect(stilrCx({display: 'flex'}, 'yo').className).to.have.string('yo');
  });
  it('should return a string containing given two class names', function () {
    stilr.clear();
    expect(stilrCx({display: 'flex'}, 'yo1', 'yo2').className)
      .to.have.string('yo1')
      .and.have.string('yo2');
  });
  it('should return an empty string, given an empty style', function () {
    stilr.clear();
    expect(stilrCx({}).className).to.equal('');
  });
});