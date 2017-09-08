<template>
  <div>
    count Is {{$store.state.count}}
    <button @click="increment">+5</button>
    <button @click="decrement">-3</button>

    <div>
      <p>点击yes后 跳转到yes页面 yes里面的状态随着当前页面count状态的改变而改变</p>
      <router-link :to="{name:'yes'}">yes</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
//mapGetters 工具函数 会将store中的getter映射到局部计算属性中
export default {
  // 使用对象扩展操作符把 getter 混入到 computed 中
  computed: mapGetters([
    'doneTodosCount'
  ]),
  //如果你要将 getter 映射为不同的名称，请使用一个对象：
  //  computed: mapGetters({
  //  doneTodos: 'doneTodosCount'
  // }),
  methods: mapActions([
    'increment',
    'decrement'
  ])
  //也可以定义点击事件用this.$store.commit('SOME_INCREMENT')，来调用回掉函数
}
</script>

<!-- Add "scoped"
attribute to limit CSS to this
 component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
