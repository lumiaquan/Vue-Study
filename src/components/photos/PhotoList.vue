<template>
  <div>
      <div id="slider" class="mui-slider ">
          <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
              <div class="mui-scroll">
                  <a :class="['mui-control-item', item.id== 0 ? 'mui-active' : '']" href="" v-for="item in msg" :key="item.id">
                      {{ item.title }}
                  </a>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
  import muijs from '../../../lib/mui/js/mui.min'
  import webviewGroup from '../../../lib/mui/js/webviewGroup'
  import { Toast } from 'mint-ui'

export default {
    mounted() {
      muijs('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      })
    },
  created() {
      this.getAllCategory()
  },
  data(){
    return {
      msg: []
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
      }
  }
}
</script>

<style lang="scss" scoped>

</style>