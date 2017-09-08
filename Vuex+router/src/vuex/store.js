import Vue from 'vue'
import Vuex from 'vuex'
import {
  SOME_INCREMENT
} from './mutation-types' //将所有常量放在单独文件里面

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = { //改变state状态 方式提交(commit) 一个mutation
  // 我们能够通过使用“ES2015 属性名表达式”功能，来使用常量作为函数名称
  //increment=》字符串类型（type） 和 回调函数(handler) 要触发类型为increment的mutation需要组件调用this.$store.commit('要触发类型为increment的mutation需要调用store')
  [SOME_INCREMENT](state) {
    state.count = state.count + 5
  },
  decrement(state) {
    state.count = state.count - 3
  }
}
//注意 commit 传入Payload ,this.$store.commit传递一个额外的参数  这个参数称为Patload
//例子：
//const mutations={
//     increment(state,n){
//         state.count +=n;
//     }
// }
//传入vuex.Store实例后 组件使用this.$store.commit('increment',{n:10});Payload为对象描述性更好
//可以单独传一个值，this.$store.commit('increment',10);
const actions = {
  //不可以改变state的状态值 只能提交(commit) mutation
  //   SOME_INCREMENT(context) { //Action 处理函数接收一个上下文对象(context object)
  //     context.commit('SOME_INCREMENT')
  //   }
  //ES2015 参数解构 来简化代码
  increment: ({
    commit
  }) => commit(SOME_INCREMENT),
  decrement: ({
    commit
  }) => commit('decrement')
}

const getters = { //是视为store的计算属性 将接受state作为第一个参数
  doneTodosCount: state => { //函数将导出再store.getters对象上面 //this.$store.gettters.doneTodos //-->[{count:0}]
    return alert(state.count)
  }
}
export default new Vuex.Store({ //状态存储 将所有的变量事件都存储道Store实例当中，以便组件的读取状态
  state,
  mutations,
  actions,
  getters
})
