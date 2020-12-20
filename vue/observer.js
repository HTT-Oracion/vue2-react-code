import defineReactData from './react';
import { arrMethods } from './array';
import observeArr from './observeArr';
function Observer (data) {
  //data 是数组
  if (Array.isArray(data)) {
    data.__proto__ = arrMethods;
    observeArr(data);
  } else { //data 是对象的情况
    this.walk(data);
  }
}

Observer.prototype.walk = function (data) {
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
      value = data[key];
    defineReactData(data, key, value);
  }
}
export default Observer;