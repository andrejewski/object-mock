'use strict';
module.exports = function objectMock (obj, propertyKey, newValue) {
  var oldValue = obj[propertyKey];
  obj[propertyKey] = newValue;
  return function unmock () {
    obj[propertyKey] = oldValue;
  };
}
