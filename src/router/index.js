import Vue from 'vue'
import VueRouter from 'vue-router'
import { PERMISSION_MAP, getPermissionByRole } from '../config/permission'
import store from '../store/index'
import { compose } from '../util/compose'

Vue.use(VueRouter)



const getRole = () => store.state.user.role;
const getPermission = (permission) =>
  compose((obj) => obj[permission], getPermissionByRole, getRole)();


//1.getrole
//2.getpermbyrole
//3.ispermon



const routes = [
  {
    path: '/',
    name: 'first',
    component: () => import('../views/first.vue') //按需引入，路由懒加载
  },
  {
    path: '/homeview',
    name: 'homeview',
    component: () => import('../views/HomeView.vue'), //按需引入，路由懒加
    redirect: '/Progressview',
    children: [
      {
        path: '/Progressview',
        name: 'Progressview',
        component: () => import('../views/Progressview.vue') //按需引入，路由懒加载
      },
      {
        path: '/echartsview',
        name: 'echartsview',
        component: () => import('../views/echartsview.vue') //按需引入，路由懒加载
      },
      {
        path: '/componentsview',
        name: 'componentsview',
        component: () => import('../views/componentsview.vue') //按需引入，路由懒加载
      },
      { //驾驶舱
        path: '/cockpit',
        name: 'cockpit',
        component: () => import('../components/cockpit.vue'), //按需引入，路由懒加载
        redirect: '/cockpit_SalesPanel',
        children: [{
          //驾驶舱首页
          path: '/',
          name: 'cockpit_Home',
          // redirect: '/cockpit_SalesPanel',
          // component: () => import('../views/cockpit_Home.vue'),
          //首页里的菜单-
          children: []
        },
        {
          path: '/cockpit_SalesPanel',
          name: 'cockpit_SalesPanel',
          component: () => import('../views/cockpit_SalesPanel.vue')
        },
        {
          path: '/cockpit_SalesChannel',
          name: 'cockpit_SalesChannel',
          component: () => import('@/views/cockpit_SalesChannel.vue')
        },
        {
          path: '/cockpit_DealerChannel',
          name: 'cockpit_DealerChannel',
          component: () => import('@/views/cockpit_DealerChannel.vue')
        },

        {
          //驾驶舱-年度统计
          path: '/cockpit_AnnualStatistics',
          name: 'cockpit_AnnualStatistics',
          // component: () => import('../views/cockpit_AnnualStatistics.vue'),
          //年度统计里的菜单-
          children: []
        }, {
          path: '/cockpit_PurchaseSalesInventory',
          name: 'cockpit_PurchaseSalesInventory',
          component: () => import('../views/cockpit_PurchaseSalesInventory.vue')
        },
        {
          path: '/cockpit_PurchaseOnYear',
          name: 'cockpit_PurchaseOnYear',
          component: () => import('../views/cockpit_PurchaseOnYear.vue')
        }, {
          //驾驶舱-综合分析
          path: '/cockpit_Analysis',
          name: 'cockpit_Analysis',
          component: () => import('../views/cockpit_Analysis.vue'),
          //综合分析里的菜单-
          children: []
        }, {
          path: '/cockpit_DealerSales',
          name: 'cockpit_DealerSales',
          component: () => import('../views/cockpit_DealerSales.vue')
        },
        {
          path: '/cockpit_DealerSalesPurchaseSalesInventory',
          name: 'cockpit_DealerSalesPurchaseSalesInventory',
          component: () => import('../views/cockpit_DealerSalesPurchaseSalesInventory.vue')
        },
        {
          path: '/cockpit_CommercialProcurement',
          name: 'cockpit_CommercialProcurement',
          component: () => import('../views/cockpit_CommercialProcurement.vue')
        }, {
          //驾驶舱-销售完成
          path: '/cockpit_SalesCompleted',
          name: 'cockpit_SalesCompleted',
          component: () => import('../views/cockpit_SalesCompleted.vue'),
          //销售完成里的菜单-
          children: []
        }, {
          path: '/cockpit_Procurement',
          name: 'cockpit_Procurement',
          component: () => import('../views/cockpit_Procurement.vue')
        },
        {
          path: '/cockpit_DealerSalesForPurchase',
          name: 'cockpit_DealerSalesForPurchase',
          component: () => import('../views/cockpit_DealerSalesForPurchase.vue')
        },
        {
          path: '/cockpit_Sales',
          name: 'cockpit_Sales',
          component: () => import('../views/cockpit_Sales.vue')
        }

        ]
      },
      {//爬虫
        path: '/Reptile',
        name: 'Reptile',
        component: () => import('../components/Reptile.vue'), //按需引入，路由懒加载
        beforeEnter(to, from, next) {
          getPermission(PERMISSION_MAP.ABOUT_PAGE) ? next() : next("403");
        }
      }
      ,
      {//403
        path: '/403',
        name: '403',
        component: () => import('../views/403.vue') //按需引入，路由懒加载
      }
    ]
  },
]

const RouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return RouterPush.call(this, to).catch(err => err)
}
const RouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
  return RouterReplace.call(this, to).catch(err => err)
}

//监听
///hash
// window.onhashchange=function(){
//   console.log(location.hash)
// }

//html5 
// window.addEventListener('popstate',()=>{
//   console.log(window.location.pathname)
// })



const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  next()
})

router.beforeResolve((to, from, next) => {

  next()
})

router.afterEach((to, from, next) => {


})

export default router
