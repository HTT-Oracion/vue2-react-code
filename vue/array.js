import { ARR_METHODS } from './config';
import observeArr from './observeArr';
// 创建一个新原型
var originArrMethods = Array.prototype,
  //创建一个新对象
  arrMethods = Object.create(originArrMethods);
ARR_METHODS.map(function (methods) {
  arrMethods[methods] = function () {
    //把参数切割成一个新数组
    var args = Array.prototype.slice.call(arguments),
      rt = originArrMethods[methods].apply(this, args);

    var newArr;
    switch (methods) {
      case 'push':
      case 'unshift':
        newArr = args;
        break;
      case 'splice':
        newArr = args.slice(2);
        break;
      default:
        break;
    }
    newArr && observeArr(newArr);
    return rt;
  }
})
export {
  arrMethods
}