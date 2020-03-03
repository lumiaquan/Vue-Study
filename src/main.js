// 入口文件

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from './App.vue'

import { Header } from 'mint-ui'
Vue.component(Header.name, Header);
import MUI from '../lib/mui/css/mui.min.css'
import icons from '../lib/mui/css/icons-extra.css'
import appcss from '../lib/mui/css/app.css'

import router from './router.js'

import { Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button)

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true




// 导入格式化时间插件
import moment from "moment"
// 定义过滤器
Vue.filter('dataFormat',(dataStr,pattern = "YYYY-MM-DD HH:mm:ss")=>{
  return moment(dataStr).format(pattern)
})

var vm = new Vue({
  el:'#app',
  data:{},
  methods:{},
  render: c => c(app),
  router
})