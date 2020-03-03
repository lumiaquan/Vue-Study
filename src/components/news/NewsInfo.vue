<template>
  <div>
    <div class="newsinfo-container">
      <h3 class="title">{{ news.title }}</h3>
      <p class="subtitle">
        <span>发表时间 : {{ news.add_time | dataFormat }}</span>
        <span>点击 : {{ news.click }}次</span>
      </p>

      <hr>

      <div class="content" v-html="news.content"></div>
    </div>

    <comment-box :id="id"></comment-box>
  </div>
</template>

<script>
  import { Toast }  from 'mint-ui'
  import comment from '../subcomponents/comment.vue'
export default {
  created() {
    this.getnewsinfo()
  },
  data(){
    return{
      id:this.$route.params.id,
      news: []
    }
  },
  methods:{
    getnewsinfo: function () {
      var url = 'api/getnew/' + this.id
      this.$http.get(url).then((res) => {
        if (res.body.status == 0) {
          this.news = res.body.message[0]
        }else{
          Toast('新闻获取失败！')
        }
      })
    }
  },
  components:{
    'comment-box':comment
  }
}
</script>

<style lang="scss" >
  .newsinfo-container{
    padding: 0 4px ;
    .title{
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
      color: red;
    }
    .subtitle{
      font-size: 14px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
    .content{
      img{
        width: 100% ;
      }
    }
  }
</style>