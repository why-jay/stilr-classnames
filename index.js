var _ = {
  rest: require('lodash.rest')
};
var cx = require('classnames');
var stilr = require('stilr');

function stilrClassnames() {
  var args = arguments;
  var style = args[0];
  var classes = _.rest(args);

  classes.push(stilr.create({x: style}).x);

  return cx.apply(this, classes);
}

module.exports = stilrClassnames;
