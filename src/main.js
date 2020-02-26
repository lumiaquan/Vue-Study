// 入口文件

import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './App.vue'

import { Header } from 'mint-ui'
Vue.component(Header.name, Header);
import MUI from '../lib/mui/css/mui.min.css'



var vm = new Vue({
  el:'#app',
  data:{},
  methods:{},
  render: c => c(app)
})