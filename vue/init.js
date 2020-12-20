import proxyData from './proxy';
import observe from './observe'
function initState (vm) {
  var options = vm.$options;

  if (options.data) {
    //对data进行初始化
    initData(vm);
  }
}


function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};

  //进行数据代理
  for (var key in data) {
    proxyData(vm, '_data', key)
  }
  //对数据进行观察
  observe(vm._data);
}
export {
  initState
}