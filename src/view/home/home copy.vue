<template>
  <div class="home">
    <h2>home</h2>
    <h2>index: {{ index }}</h2>
    <van-button type="primary" @click="indexAdd">add++</van-button>
    <br />
    <br />
    <van-button type="primary" @click="getTo">跳转Private页面</van-button>
  </div>
</template>

<script setup>
import router from '@/router'
import { usehomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'
import SessionStore from '@/utils/session'
const storeHome = usehomeStore()

const { index } = storeToRefs(storeHome)
const getTo = () => {
  router.push('/private')
}

const coderwhy = {
  name: 'why',
  age: 18
}
const indexAdd = () => {
  storeHome.index++
  SessionStore.setCache('SessionIndex', index)
  window.sessionStorage.setItem('why', JSON.stringify(coderwhy))
}
</script>

<style lang="less" scoped>
.home {
}
</style>
