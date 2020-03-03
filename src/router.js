
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbat/HomeContainer.vue'
import MemberContainer from './components/tabbat/MemberContainer.vue'
import ShopcarContainer from './components/tabbat/SearchContainer.vue'
import SearchContainer from './components/tabbat/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from "./components/photos/PhotoList.vue"

var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newslist',component:NewsList},
    {path:'/home/newsinfo/:id',component:NewsInfo},
    {path:'/home/photolist',component:PhotoList}
  ],
  linkActiveClass: 'mui-active'
})

export default router