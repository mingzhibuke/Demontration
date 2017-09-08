<template>
  <div>
    <div class="box">
      count Is {{$store.state.count}}
      <button @click="increment">+5</button>
      <button @click="decrement">-3</button>
    </div>
    <p>点击加减,count的状态将改变,hello主页面的count也会随着改变</p>
    <br><br>
    <router-link :to="{name:'hello'}">跳转到主页</router-link>
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


<style >
   .box{
     background: gainsboro;
     width: 100px;
     height: 100px;
     text-align: center;
     margin:0 auto;
     line-height: 100px;
   }
</style>
