import Vue from 'vue'

import { Button, Select,Menu,Submenu,
  MenuItem,Row,Container,Header,Main,
  Footer,Progress,ColorPicker,Radio,MenuItemGroup,
  DatePicker,Cascader,Table,TableColumn,Pagination

} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'
import './CSS/reset.css'
import './CSS/border.css'

import App from './App.vue'
import router from './router'
import store from './store'

import * as echarts from 'echarts/core';

import { init as permissionInit } from "./config/permission";
permissionInit()

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false


Vue.use(Button)
Vue.use(Select)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)

Vue.use(Progress)

Vue.use(ColorPicker)

Vue.use(Radio)

Vue.use(DatePicker)

Vue.use(Cascader)

Vue.use(Table)
Vue.use(TableColumn)

Vue.use(Pagination)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
