<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img class="img1" src="../../images/menu1.png"/>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="">
          <img class="img1" src='../../images/menu2.png' />
          <!-- <span class="mui-badge">5</span> -->
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="">
          <img class="img1" src="../../images/menu3.png"/>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="">
          <img class="img1" src="../../images/menu4.png"/>
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="">
          <img class="img1" src="../../images/menu5.png" />
          <div class="mui-media-body">视频分区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="">
          <img class="img1" src="../../images/menu6.png" />
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
  created() {
    this.getLunbotu();
  },
  data() {
    return {
      lunbotuList: []
    };
  },
  methods: {
    getLunbotu() {
      this.$http
        .get("api/getlunbo")
        .then(res => {
          if (res.body.status == 0) {
            this.lunbotuList = res.body.message;
          } else {
            Toast("加载轮播图失败");
          }
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: green;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
  img{
    width: 60px;
    height: 60px;
  }
  font-size: 13px;
}
</style>