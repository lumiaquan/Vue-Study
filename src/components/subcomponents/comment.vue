<template>
  <div class="cmt-container">
      <h3>发表评论</h3>
      <hr>
      <textarea placeholder="请输入您想说的话(最多120字)" maxlength="120">
      </textarea>
      <mt-button type="primary" size="large">发表评论</mt-button>
      <div class="cmt-list">
          <div class="cmt-item">
              <div class="cmt-title">
                  第一楼&nbsp;&nbsp;用户 : &nbsp;&nbsp;发表时间 : 2020
              </div>
              <div class="cmt-content">
                  如果还有
              </div>
          </div>
      </div>
      <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods:{}
}
</script>

<style lang="scss" >
    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin:5px 0 ;
            font-size: 13px;
            .cmt-title{
                background-color: #ccc;
                line-height: 30px;
            }
            .cmt-content{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
</style>