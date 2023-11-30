import { defineStore } from 'pinia'

export const usehomeStore = defineStore('usehomeStore', {
  state: () => ({
    index: 0,
    currentIndex: 0,
    bgcTextColor: false
  }),
  actions: {
    AddIndex() {
      this.index++
    },
    changeIndex(index) {
      this.currentIndex = index
    }
  },
  persist: {
    enabled: true, // true 表示开启持久化保存
    //你可以主动设置 key 名，也可以指定哪些数据保存，默认会保存当前模块全部数据。
    strategies: [
      {
        key: 'currentIndex',
        storage: localStorage,
        paths: ['currentIndex', 'bgcTextColor']
      }
    ]
  }
})
