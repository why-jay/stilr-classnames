var _ = {
  rest: require('lodash.rest')
};
var cx = require('classnames');
var stilr = require('stilr');

function stilrClassnames() {
  var args = arguments;
  var style = args[0];
  var classes = _.rest(args);

  var finalStyle = {};
  for (var key in style) {
    if (style.hasOwnProperty(key)) {

      var val = style[key];

      finalStyle[key] = val;

    }
  }

  var allClasses = classes;
  allClasses.push(stilr.create({x: finalStyle}).x);

  var rtn = cx.apply(this, allClasses);
  return rtn;
}

module.exports = stilrClassnames;
