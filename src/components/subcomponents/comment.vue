<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入您想说的话(最多120字)" maxlength="120" v-model="myComment">
      </textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="index">
                <div class="cmt-title">
                    &nbsp;第{{ index+1 }}楼&nbsp;&nbsp;用户 : {{ item.user_name }}&nbsp;&nbsp;发表时间 : {{ item.add_time | dataFormat }}
                </div>
                <div class="cmt-content">
                    {{ item.content == 'undefined' ? '此用户很懒，没有评论' : item.content }}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="loadingmore">加载更多</mt-button>
    </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    created() {
      this.getcomments()
    },
    data() {
      return {
        comments:[],
        pageIndex: 1,
        myComment: ''
      }
    },
    methods: {
      getcomments(){
        this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(res => {
          if(res.body.status == 0){
            this.comments = this.comments.concat(res.body.message)
            console.log(this.comments)
          }else{
            Toast('获取评论数据失败！')
          }
        })
      },
      loadingmore(){
        this.pageIndex++
        this.getcomments()
      },
      postComment(){
        if(this.myComment == ''){
          Toast('评论不能为空！')
        }else{
          this.$http.post('api/postcomment/'+ this.id ,{ content: this.myComment.trim() }).then(res => {
            if(res.body.status = 0){
              var cmt = { user_name: 'Magisk', add_time: Date.now(), content: this.myComment}
              this.comments.unshift(cmt)
              this.myComment = ''
              Toast('发表评论成功！')
            }
          })
        }
      }
    },
    props:[
      'id'
    ]
  }
</script>

<style lang="scss">
    .cmt-container {

        h3 {
            font-size: 18px;
            margin: 0 5px;
        }

        textarea {
            width: 99%;
            font-size: 14px;
            height: 85px;

        }

        .cmt-item{
            margin: 0 5px;
        }

        .cmt-list {
            margin: 5px 0;
            font-size: 13px;

            .cmt-title {
                background-color: #ccc;
                line-height: 30px;
            }

            .cmt-content {
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
</style>