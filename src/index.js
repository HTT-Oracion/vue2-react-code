import Vue from 'vue';

let vm = new Vue({
  el: '#app',
  data () {
    return {
      title: '标题',
      project: 'vue2-proxy',
      count: 1,
      info: {
        a: {
          b: {
            c: 1
          }
        }
      },
      subjects: ['java', 'javascript', 'php'],
      students: [
        {
          id: 1,
          name: 'jack'
        },
        {
          id: 2,
          name: 'annie'
        }]
    }
  }
});
// console.log(vm.title);
// console.log(vm);
// console.log(vm.info.a);
// console.log(vm.students[0]);
// console.log(vm.info.a.b.c);
// console.log(vm.project);
vm.students.push({
  id: 3,
  name: 'doro'
})
console.log(vm.students);