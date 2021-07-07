import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 需要添加后缀命名
// 在全局引入抽离的elementui配置项
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import "./assets/css/global.css"

import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
// axios请求拦截，在请求头对象中添加Token验证的Authorization字段
// 在 request 拦截器中，在发送请求之前先对请求进行预处理
// 展示进度条 NProgress.start()
axios.interceptors.request.use(config => {
  // console.log(config)
  // NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
