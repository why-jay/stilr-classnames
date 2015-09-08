var expect = require('chai').expect;
var stilr = require('stilr');

var stilrCx = require('../index');

describe('Function', function() {
  it('should return a hashed class name', function () {
    stilr.clear();
    expect(stilrCx({display: 'flex'})).to.be.a('string');
  });
  it('should convert integers to px unless fontWeight', function () {
    stilr.clear();
    stilrCx({
      fontSize: 50
    });
    expect(stilr.render()).to.have.string('50px');
  });
  it('should not convert integer flex to px', function () {
    stilr.clear();
    stilrCx({
      flex: 192
    });
    expect(stilr.render()).to.have.string('192')
      .and.not.have.string('192px');
  });
  it('should not convert integer flexGrow to px', function () {
    stilr.clear();
    stilrCx({
      flexGrow: 234
    });
    expect(stilr.render()).to.have.string('234')
      .and.not.have.string('234px');
  });
  it('should not convert integer fontWeight to px', function () {
    stilr.clear();
    stilrCx({
      fontWeight: 50
    });
    expect(stilr.render()).to.have.string('50')
      .and.not.have.string('50px');
  });
  it('should not convert integer zIndex to px', function () {
    stilr.clear();
    stilrCx({
      zIndex: 110
    });
    expect(stilr.render()).to.have.string('110')
      .and.not.have.string('110px');
  });
  it('should return a string containing given a class name', function () {
    stilr.clear();
    expect(stilrCx({display: 'flex'}, 'yo')).to.have.string('yo');
  });
  it('should return a string containing given two class names', function () {
    stilr.clear();
    expect(stilrCx({display: 'flex'}, 'yo1', 'yo2'))
      .to.have.string('yo1')
      .and.have.string('yo2');
  });
  it('should return an empty string, given an empty style', function () {
    stilr.clear();
    expect(stilrCx({})).to.equal('');
  });
  it('should exclude falsy values from class names', function () {
    stilr.clear();
    expect(stilrCx({}, false, undefined, '')).to.equal('');
  });
  it('should handle pseudoclasses just like stilr does', function () {
    stilr.clear();
    stilrCx({
      ':hover': {
        color: 'red'
      }
    });
    expect(stilr.render()).to.have.string(':hover{color:red;}');
  });
  it('should handle media queries just like stilr does', function () {
    stilr.clear();
    stilrCx({
      '@media screen and (max-width:600px)': {
        fontSize: 16
      }
    });
    expect(stilr.render())
      .to.have.string('@media screen and (max-width:600px){.')
      .to.have.string('{font-size:16px;}}');
  });
  it('should help prototypal inheritance of styles', function () {
    stilr.clear();
    stilrCx({color: 'red'}, {backgroundColor: 'blue'});
    expect(stilr.render())
      .to.have.string('color:red')
      .to.have.string('background-color:blue');
  });
});
