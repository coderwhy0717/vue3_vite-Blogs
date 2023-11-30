<template>
  <div class="essay" :class="{ mode: isshow }">
    <!-- <img class="bg-img" src="http://172.16.1.48:8887/img/8.jpg" alt="" /> -->
    <div class="center">
      <template v-for="item in 100" :key="item">
        <div class="item">
          <i class="b-d">
            <i class="top-d"></i>
            <div class="time">{{ time }}</div>
            <div class="item-center">
              {{ item }}
              <div class="grid">
                <div class="items">1</div>
                <div class="items">2</div>
                <div class="items">3</div>
                <div class="items">4</div>
                <div class="items">5</div>
                <div class="items">6</div>
                <div class="items">7</div>
                <div class="items">8</div>
                <div class="items">9</div>
              </div>
            </div>
          </i>
        </div>
      </template>
    </div>
    <div class="mousemove" ref="mousemoves">123</div>
    <div v-if="isshow" class="mode-bgc"></div>
  </div>
</template>

<script setup>
import { usehomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'
import SessionStore from '@/utils/session'
import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'

const storeHome = usehomeStore()

const { index, bgcTextColor: isshow } = storeToRefs(storeHome)
const mousemoves = ref()
const time = dayjs().format('YYYY-MM-DD HH:mm')
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
.mode-bgc {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  background-color: #fff;
}
.mode {
  mix-blend-mode: difference;
}
.essay {
  position: relative;
  padding-top: 46px;
  .mousemove {
    position: absolute;
    cursor: pointer;
  }
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
  .center {
    position: relative;
    width: 50vw;
    margin: 0 auto;
  }
  @media screen and (max-width: 760px) {
    .center {
      position: relative;
      width: 80vw !important;
      margin: 0 auto;
    }
  }
  .item {
    margin: 5px 0;
    // padding-right: 100px;
  }
  .item::before {
    // content: '♥';
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    top: 15px;
    left: 0;
    background-color: #ccc;
    // transform: scaleY(0); //动态
    transition: all 1s ease;
  }
  .b-d::before {
    content: '';
    position: absolute;
    width: 2.5px;
    height: 100%;
    top: 15px;
    left: 0;
    background-color: red;
    transform: scaleY(0); //动态
    transition: all 0.5s ease;
  }
  .b-d:hover::before {
    transform: scaleY(1) !important; //让线显示 看airbnb 里的head组件
    background-color: red;
    color: red;
  }

  .top-d::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 7px;
    left: -4px;
    border-radius: 50%;
    background-color: #e89137;
    z-index: 999;
    // transform: scaleX(0); //动态
    transition: all 0.5s ease;
  }

  // 点 变红
  .item:hover {
    color: red;
    .top-d::before {
      background-color: red !important;
    }
  }

  .item-center {
    // height: 100px;
    margin: 0 20px;
    border-radius: 10px;
    // box-shadow: 0 0px 5px 3px rgb(248, 223, 1);
    border: 2px solid #409eff;
    background-image: repeating-linear-gradient(
      -45deg,
      #e8544d 0 10px,
      #fff 10px 20px,
      #75adf8 20px 30px,
      #fff 30px 40px
    );
    transition: all 0.5s ease;

    background-color: #fff;
    opacity: 0.7;
    .grid {
      width: 200px;
      height: 200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 9px;
      .items:nth-child(n) {
        background-color: #fff;
      }
      .items:nth-child(2n) {
        background-color: red;
      }
    }
  }
  .item-center:hover {
    background-position: 0 0;
  }
  // .item:nth-child(2n) {
  //   .item-center {
  //     height: 200px;
  //   }
  // }
  // .item:nth-child(5) {
  //   .item-center {
  //     height: 250px;
  //   }
  // }
  .time {
    margin: 0 20px;
  }
  .item-center:hover {
    border: 2px solid red;
    cursor: pointer;
  }
}
</style>
