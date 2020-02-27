<template>
  <div>
    <h1>home</h1>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>

import {Toast} from 'mint-ui'

export default {
  created(){
    this.getLunbotu()
  },
  data(){
    return{
      lunbotuList:[]
    }
  },
  methods:{
    getLunbotu(){
      this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(res=>{
        if(res.body.status == 0){
          this.lunbotuList = res.body.message
          console.log(res.body)
        }else {
          Toast('加载轮播图失败')
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
  .mint-swipe{
    height:200px;
    .mint-swipe-item{
      &:nth-child(1){
        background-color: red;
      }
      &:nth-child(2){
        background-color: blue
      }
      &:nth-child(3){
        background-color: green
      }
      img{
        width:100%;
        height:100%;
      }
    }
  }
</style>