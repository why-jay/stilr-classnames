var _ = {
  isFinite: require('lodash.isfinite'),
  isPlainObject: require('lodash.isplainobject'),
  isString: require('lodash.isstring')
};
var cx = require('classnames');
var stilr = require('stilr');

function stilrClassnames() {
  var styleDefinition = {};
  var nonStyleArgs = [];

  for (var i = 0; i < arguments.length; i += 1) {
    var arg = arguments[i];

    if (!_.isPlainObject(arg)) {
      nonStyleArgs.push(arg);
    } else {
      var keys = Object.keys(arg);

      var nonStylePairs = {};

      for (var j = 0; j < keys.length; j += 1) {
        var key = keys[j];
        var val = arg[key];

        if (_.isFinite(val) || _.isPlainObject(val) || _.isString(val)) {
          styleDefinition[key] = val;
        } else {
          nonStylePairs[key] = val;
        }
      }

      nonStyleArgs.push(nonStylePairs);
    }
  }

  var cxArgs = nonStyleArgs;
  cxArgs.push(stilr.create({x: styleDefinition}).x);

  return cx.apply(this, cxArgs);
}

module.exports = stilrClassnames;
