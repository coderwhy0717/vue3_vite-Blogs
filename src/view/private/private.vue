<template>
  <div class="Private">
    <img class="bg-img" src="http://172.16.1.48:8887/img/8.jpg" alt="" />

    <h2>Private</h2>
    <h2>index: {{ index }}</h2>

    <br />
    <br />
    <h2>SessionStoreage: {{ indexss }}</h2>
  </div>
</template>

<script setup>
import { usehomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'
import SessionStore from '@/utils/session'

const storeHome = usehomeStore()
const { index } = storeToRefs(storeHome)
const indexss = SessionStore.getCache('why')

console.log(indexss)
</script>

<style lang="less" scoped>
.Private {
  .bg-img {
    width: 100%;
    height: 100%;
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
