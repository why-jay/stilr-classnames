var expect = require('chai').expect;
var stilr = require('stilr');

var stilrCx = require('../index');

describe('Function', function() {
  it('should return a hashed class name', function () {
    stilr.clear();
    expect(stilrCx({display: 'flex'}).className).to.be.a('string');
  });
  it('should convert integers to px unless fontWeight', function () {
    stilr.clear();
    var result = stilrCx({
      returnStyle: true,
      fontSize: 50
    });
    expect(result.style).to.have.string('50px');
  });
  it('should not convert integer flex to px', function () {
    stilr.clear();
    var result = stilrCx({
      returnStyle: true,
      flex: 192
    });
    expect(result.style).to.have.string('192')
      .and.not.have.string('192px');
  });
  it('should not convert integer flexGrow to px', function () {
    stilr.clear();
    var result = stilrCx({
      returnStyle: true,
      flexGrow: 234
    });
    expect(result.style).to.have.string('234')
      .and.not.have.string('234px');
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
  it('should not convert integer zIndex to px', function () {
    stilr.clear();
    var result = stilrCx({
      returnStyle: true,
      zIndex: 110
    });
    expect(result.style).to.have.string('110')
      .and.not.have.string('110px');
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
  it('should exclude falsy values from class names', function () {
    stilr.clear();
    expect(stilrCx({}, false, undefined, '').className).to.equal('');
  });
  it('should handle pseudoclasses just like stilr does', function () {
    stilr.clear();
    var result = stilrCx({
      returnStyle: true,
      ':hover': {
        color: 'red'
      }
    });
    expect(result.style).to.have.string(':hover{color:red;}');
  });
  it('should handle media queries just like stilr does', function () {
    stilr.clear();
    var result = stilrCx({
      returnStyle: true,
      '@media screen and (max-width:600px)': {
        fontSize: 16
      }
    });
    expect(result.style)
      .to.have.string('@media screen and (max-width:600px){.')
      .to.have.string('{font-size:16px;}}');
  });
});
