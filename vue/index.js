import { initState } from './init'

function Vue (options) {
  this._init(options)
}

//初始化
Vue.prototype._init = function (options) {
  // console.log(this);
  var vm = this;
  vm.$options = options;

  initState(vm);
}
export default Vue;