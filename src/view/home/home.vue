<template>
  <div class="home">
    <img class="bg-img" src="http://172.16.1.48:8887/img/1.jpg" alt="" />
  </div>
</template>

<script setup>
import { usehomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'
import SessionStore from '@/utils/session'
import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'
const storeHome = usehomeStore()

const { index } = storeToRefs(storeHome)

const mousemoves = ref()
const time = dayjs().format('YY-MM-DD HH:mm')
console.log(time)

// onMounted(() => {
//   window.addEventListener('mousemove', (e) => {
//     console.log('X:', e.clientX)
//     console.log('Y:', e.clientY)
//     console.log(e)
//     mousemoves.value.style.left = e.pageX - 10 + 'px'

//     mousemoves.value.style.top = e.pageY - 10 + 'px'
//   })
// })
</script>

<style lang="less" scoped>


.home {
  position: relative;
  padding-top: 100px;
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
