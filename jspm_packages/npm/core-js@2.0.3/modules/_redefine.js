/* */ 
var global = require('./_global'),
    hide = require('./_hide'),
    SRC = require('./_uid')('src'),
    TO_STRING = 'toString',
    $toString = Function[TO_STRING],
    TPL = ('' + $toString).split(TO_STRING);
require('./_core').inspectSource = function(it) {
  return $toString.call(it);
};
(module.exports = function(O, key, val, safe) {
  if (typeof val == 'function') {
    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    val.hasOwnProperty('name') || hide(val, 'name', key);
  }
  if (O === global) {
    O[key] = val;
  } else {
    if (!safe) {
      delete O[key];
      hide(O, key, val);
    } else {
      if (O[key])
        O[key] = val;
      else
        hide(O, key, val);
    }
  }
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
