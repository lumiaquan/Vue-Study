<template>
<!--  顶部滑动条  -->
  <div>
      <div id="slider" class="mui-slider ">
          <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
              <div class="mui-scroll">
                  <a :class="['mui-control-item', item.id== 0 ? 'mui-active' : '']" href="" v-for="item in msg" :key="item.id" @click="getImgList(item.id)">
                      {{ item.title }}
                  </a>
              </div>
          </div>

      </div>
<!--  图片列表区域    -->
      <ul>
          <router-link v-for="item in imglist" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
              <img v-lazy="item.img_url">
              <div class="info">
                  <h1 class="info-title">{{ item.title }}</h1>
                  <dib class="info-body" v-html="item.content">  </dib>
              </div>
          </router-link>
      </ul>
  </div>
</template>

<script>
  import mui from '../../../lib/mui/js/mui.min.js'
  import webviewGroup from '../../../lib/mui/js/webviewGroup.js'
  import { Toast } from 'mint-ui'

export default {
  created() {
    this.getAllCategory()
    this.getImgList(0)
  },
    mounted() {
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      })
    },

  data(){
    return {
      msg: [],
      imglist:[]
    }
  },
  methods:{
      getAllCategory(){
        this.$http.get('api/getimgcategory').then(res => {
          if(res.body.status == 0){
            res.body.message.unshift( {title:'全部',id:0 })
            this.msg = res.body.message
          }else{
            Toast('获取数据失败')
          }
        })
      },
    getImgList(id){
        this.$http.get('api/getimages/'+id).then(res => {
          if(res.body.status == 0) {
            this.imglist = res.body.message
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
    ul{
        padding: 0 10px;
        li{
            position: relative;
            margin-bottom: 10px;
            box-shadow: 0 0 6px #999;
            img{
                width: 100%;
                vertical-align: middle;
            }
            text-align: center;
            background-color: #ccc;
            list-style: none;
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info{
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0,0,0,0.4);
                max-height: 85px;
                .info-title{
                    font-size: 14px;
                }
                .info-body{
                    font-size: 13px;
                }
            }
        }
    }
</style>