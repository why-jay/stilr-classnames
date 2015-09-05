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
    if (key === 'returnStyle') {
      // This is a special key that is used in our tests.
      // See tests.
      continue;
    }
    if (style.hasOwnProperty(key)) {

      var val = style[key];

      finalStyle[key] = val;

    }
  }

  var allClasses = classes;
  allClasses.push(stilr.create({x: finalStyle}).x);

  var rtn = {
    className: cx.apply(this, allClasses)
  };
  if (style.returnStyle) {
    rtn.style = stilr.render();
  }
  return rtn;
}

module.exports = stilrClassnames;
