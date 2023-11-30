<template>
  <div class="App">
    <!-- <h2>App</h2> -->
    <img
      v-if="!bgcTextColor"
      class="bg-img"
      src="http://172.16.1.48:8887/img/1.jpg"
      alt=""
    />
    <Head />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import Head from './components/head/head.vue'
import { usehomeStore } from './store/modules/home'
// import { onMounted, ref } from 'vue'
// import { useRouter } from 'vue-router'
// const isshow = ref()

// const route = useRouter()
// // console.log(route.currentRoute)
const homeState = usehomeStore()
const { bgcTextColor } = storeToRefs(homeState)

// window.addEventListener('resize', () => {
//   // console.log(window)
//   if (window.innerWidth <= 760) {
//     // 正常方向或屏幕旋转180度
//     if (isshow.value === 2) return
//     console.log('移动端')
//     isshow.value = 2
//   } else if (window.innerWidth > 760) {
//     if (isshow.value === 1) return
//     isshow.value = 1
//     // 监听 当前路由 是否为pc路由 是的话不用跳转
//     console.log('pc端')
//   }
// })
</script>

<style lang="less" scoped>
.App {
  padding-top: 46px;

  .bg-img {
    width: 100%;
    height: 180%;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
  }
}
</style>
