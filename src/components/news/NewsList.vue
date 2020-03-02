<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src='item.img_url'>
						<div class="mui-media-body">
						  <h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                <span>发表时间 : {{item.add_time | dataFormat}}</span>
                <span>点击次数 : {{item.click}}次</span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>
  import { Toast }  from 'mint-ui'
  export default {
		created(){
			this.getNewsList()
		},
    data() {
		return {
			newsList:[]
		}
	},
	  methods:{
		  getNewsList(){
			this.$http.get('api/getnewslist').then((res)=>{
				if(res.body.status == 0){
					this.newsList=res.body.message
				}else{
					Toast('获取新闻失败！')
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
  .mui-table-view{
    li{
      h1{
        font-size: 14px
      }
    }
  }
  .mui-ellipsis{
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content:space-between; 
  }
</style>