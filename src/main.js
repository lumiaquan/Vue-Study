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

var vm = new Vue({
  el:'#app',
  data:{},
  methods:{},
  render: c => c(app),
  router
})