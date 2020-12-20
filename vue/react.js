import observe from './observe';
function defineReactData (data, key, value) {
  //递归观察 value 的类型
  observe(value);
  Object.defineProperty(data, key, {
    get () {
      console.log('响应式get', value);
      return value;
    },
    set (newValue) {
      console.log('响应式set', newValue);
      if (newValue === value) return;
      observe(newValue);
      value = newValue;
    }
  })
}

export default defineReactData;