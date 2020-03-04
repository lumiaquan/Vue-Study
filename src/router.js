
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbat/HomeContainer.vue'
import MemberContainer from './components/tabbat/MemberContainer.vue'
import ShopcarContainer from './components/tabbat/ShopcarContainer.vue'
import SearchContainer from './components/tabbat/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from "./components/photos/PhotoList.vue"
import PhotoInfo from "./components/photos/PhotoInfo.vue"
import GoodsList from "./components/goods/GoodsList.vue"

var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newslist',component:NewsList},
    {path:'/home/newsinfo/:id',component:NewsInfo},
    {path:'/home/photolist',component:PhotoList},
    {path:'/home/photoinfo/:id',component:PhotoInfo},
    {path:'/home/goodslist',component:GoodsList}
  ],
  linkActiveClass: 'mui-active'
})

export default router