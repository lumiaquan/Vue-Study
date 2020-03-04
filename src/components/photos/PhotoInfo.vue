<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间 : {{ photoinfo.add_time | dataFormat }}</span>
            <span>点击次数 : {{ photoinfo.click }}次</span>
        </p>

        <hr>

<!--    缩略图区域    -->
        <div class="thumbs">
            <vue-preview
                    :list="list"
                    :thumbImageStyle="{width: '100px', height: '100px', margin: '10px'}"
                    :tapToClose="true"
                    @close="closeHandler"
                    @destroy="destroyHandler"
            />
        </div>

<!--    图片内容区域   -->
        <div class="content" v-html="photoinfo.content"></div>
<!--    评论子组件    -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
    import comment from "../subcomponents/comment.vue"
  export default {
    created() {
      this.getphotoinfo()
      this.getThumbs()
    },
    data(){
      return{
        id: this.$route.params.id,
        photoinfo: {},
        list:[]
      }
    },
    methods:{
      getphotoinfo(){
        this.$http.get('api/getimageInfo/'+this.id).then(res => {
          if(res.body.status == 0){
            this.photoinfo = res.body.message[0]
          }
        })
      },
      getThumbs(){
        this.$http.get('api/getthumimages/'+this.id).then(res => {
          if(res.body.status == 0){
            //循环每个数据 补全图片的宽和高
            res.body.message.forEach(item => {
              item.w = 600
              item.h = 400
            })
            this.list = res.body.message
            console.log(this.list)
          }
        })
      },
      // 即将关闭的时候，调用这个处理函数
      closeHandler() {
        console.log('closeHandler')
      },
      // 完全关闭之后，调用这个函数清理资源
      destroyHandler() {
        console.log('destroyHandler')
      }

    },
    components:{
      'cmt-box': comment
    }
  }
</script>

<style lang="scss" scoped>
    .photoinfo-container{
        padding: 3px;
        h3{
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content{
            font-size: 13px;
            line-height: 30px;
        }
    }
</style>