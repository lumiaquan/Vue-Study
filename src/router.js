
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbat/HomeContainer.vue'
import MemberContainer from './components/tabbat/MemberContainer.vue'
import ShopcarContainer from './components/tabbat/SearchContainer.vue'
import SearchContainer from './components/tabbat/ShopcarContainer.vue'

var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer}
  ],
  linkActiveClass: 'mui-active'
})

export default router