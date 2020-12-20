import Observer from './observer'

function observe (data) {
  //如果不是对象或者为NULL,则不进行观察
  if (typeof data !== 'object' || data === null) return;
  return new Observer(data)
}

export default observe;