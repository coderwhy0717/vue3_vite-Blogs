<template>
  <div class="Head" :class="{ bgc: value1 }">
    <div class="logo" :class="{ bgca: !value1 }">
      <div class="logo-text">
        <i>l</i>
        <i>o</i>
        <i>g</i>
        <i>o</i>
      </div>
    </div>
    <div class="head-btn">
      <template v-for="(item, index) in btns" :key="index">
        <div
          class="item"
          :class="index === currentIndex && 'active'"
          @click="changeClick(index, item.url)"
        >
          {{ item.name }}
        </div>
      </template>
    </div>
    <el-switch class="mb-2" v-model="value1" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { usehomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'
import { ElSwitch } from 'element-plus'
const btns = [
  { name: '首页', url: '/home' },
  { name: '随笔', url: 'essay' },
  { name: '项目', url: 'project' },
  { name: '留言', url: '#' },
  { name: '关于我们', url: 'private' }
]
// const currentIndex = computed(() => {
//   return window.sessionStorage.getItem('index')
// })
// console.log(currentIndex.value)
const homeState = usehomeStore()
const { currentIndex, bgcTextColor: value1 } = storeToRefs(homeState)
const router = useRouter()

const changeClick = (index, url) => {
  currentIndex.value = index
  // 跳转对应页面
  router.push(url)
}
</script>

<style lang="less" scoped>
.bgc {
  background-color: #000 !important;
  opacity: 1 !important;
  background-image: linear-gradient(to left, #000, #fff);
}
.bgca {
  background-image: linear-gradient(to left, #000, #fff);
}
.mb-2 {
  height: 46px;
  margin-right: 50px;
}
.Head {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  height: 46px;
  .logo {
    flex: 1;
    text-align: center;

    .logo-text {
      width: 200px;
      height: 46px;
      line-height: 46px;
      font-size: 2vw;
      position: relative;
      right: 0;
      mix-blend-mode: difference; // 移动改变文字颜色
      transition: all 2s ease;
      i {
        font-weight: 600;
        cursor: pointer;
        animation: spread 1.5s ease-in-out infinite alternate;
      }
      i:nth-child(1) {
        animation-delay: (1 - 1) * 0.2s;
      }
      i:nth-child(2) {
        animation-delay: (2 - 1) * 0.2s;
      }
      i:nth-child(3) {
        animation-delay: (3 - 1) * 0.2s;
      }
      i:nth-child(4) {
        animation-delay: (4 - 1) * 0.2s;
      }
    }
  }
  @keyframes spread {
    to {
      color: red;
      text-shadow: 20px 0 70px red;
    }
  }

  .logo:hover {
    .logo-text {
      transform: translateX(350px);
    }
  }
  .head-btn {
    flex: 2;
    display: flex;
    align-items: center;
    .item {
      position: relative;
      margin: 0 20px;
      height: 46px;
      padding: 0 5px;
      line-height: 46px;
      cursor: pointer;
      user-select: none;
    }
  }
  .item::before {
    // content: '♥';
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: yellow;
    transform: scaleX(0); //动态
    transition: all 0.5s ease;
  }
  .item:hover::before {
    background-color: yellow;
    transform: scaleX(1); //动态
  }
  .active::before {
    transform: scaleX(1);
  }
}
</style>
