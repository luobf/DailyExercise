<template>
  <div>
    <el-header>
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
      >
        <!-- 一级菜单 -->
        <el-menu-item
          @click="clickMenu(item)"
          v-for="item in noChildren"
          :index="item.path + ''"
          :key="item.path"
        >
          <template slot="title">
            <span slot="title">{{ item.label }}</span>
          </template></el-menu-item
        >
        <!-- 二级菜单 -->
        <el-submenu
          v-for="item in hasChildren"
          :index="item.path + ''"
          :key="item.path"
        >
          <template slot="title">
            <span slot="title">{{ item.label }}</span>
          </template>

          <el-menu-item-group
            v-for="(subItem, subIndex) in item.children"
            :key="subItem.path"
          >
            <el-menu-item :index="subIndex + ''" @click="clickMenu(subItem)">
              {{ subItem.label }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main>
      <div class="cockpit_title">
        <div>报告名称: </div>
        <div>{{ currentPage }}</div>
      </div>
      <router-view></router-view>
      
    </el-main>
  </div>
</template>

<script>
export default {
  name: "cockpit",
  data() {
    return {
      menu: [
        {
          path: "/cockpit_Home",
          name: "cockpit_Home",
          label: "首页",
          //   url: "cockpit_Home/cockpit_Home",
          children: [
            {
              path: "/cockpit_SalesPanel",
              name: "cockpit_SalesPanel",
              label: "销售看盘",
              //   url: "cockpit_SalesPanel/cockpit_SalesPanel",
            },
            {
              path: "/cockpit_SalesChannel",
              name: "cockpit_SalesChannel",
              label: "销售渠道表现",
              //   url: "cockpit_SalesChannel/cockpit_SalesChannel",
            },
            {
              path: "/cockpit_DealerChannel",
              name: "cockpit_DealerChannel",
              label: "经销商渠道表现",
              //   url: "cockpit_DealerChannel/cockpit_DealerChannel",
            },
          ],
        },
        {
          path: "/cockpit_AnnualStatistics",
          name: "cockpit_AnnualStatistics",
          label: "年度统计",
          //   url: "cockpit_AnnualStatistics/cockpit_AnnualStatistics",
          children: [
            {
              path: "/cockpit_PurchaseSalesInventory",
              name: "cockpit_PurchaseSalesInventory",
              label: "进销存12月",
              url: "cockpit_PurchaseSalesInventory/cockpit_PurchaseSalesInventory",
            },
            {
              path: "/cockpit_PurchaseOnYear",
              name: "cockpit_PurchaseOnYear",
              label: "采购年度对比",
              url: "cockpit_PurchaseOnYear/cockpit_PurchaseOnYear",
            },
          ],
        },
        {
          path: "/cockpit_Analysis",
          name: "cockpit_Analysis",
          label: "综合分析",
          //   url: "cockpit_Analysis/cockpit_Analysis",
          children: [
            {
              path: "/cockpit_DealerSales",
              name: "cockpit_DealerSales",
              label: "经销商销售月对比",
              url: "cockpit_DealerSales/cockpit_DealerSales",
            },
            {
              path: "/cockpit_DealerSalesPurchaseSalesInventory",
              name: "cockpit_DealerSalesPurchaseSalesInventory",
              label: "经销商进销存",
              url: "cockpit_DealerSalesPurchaseSalesInventory/cockpit_DealerSalesPurchaseSalesInventory",
            },
            {
              path: "/cockpit_CommercialProcurement",
              name: "cockpit_CommercialProcurement",
              label: "商业采购汇总统计",
              url: "cockpit_CommercialProcurement/cockpit_CommercialProcurement",
            },
          ],
        },
        {
          path: "/cockpit_SalesCompleted",
          name: "cockpit_SalesCompleted",
          label: "销售完成",
          //   url: "cockpit_SalesCompleted/cockpit_SalesCompleted",
          children: [
            {
              path: "/cockpit_Procurement",
              name: "cockpit_Procurement",
              label: "采购完成情况",
              url: "cockpit_Procurement/cockpit_Procurement",
            },
            {
              path: "/cockpit_DealerSalesForPurchase",
              name: "cockpit_DealerSalesForPurchase",
              label: "经销商销售完成情况-采购数",
              url: "cockpit_DealerSalesForPurchase/cockpit_DealerSalesForPurchase",
            },
            {
              path: "/cockpit_Sales",
              name: "cockpit_Sales",
              label: "销售完成情况-销售数",
              url: "cockpit_Sales/cockpit_Sales",
            },
          ],
        },
      ],
      color1: "#409EFF",
      currentPage: "销售看盘",
    };
  },
  methods: {
    clickMenu(item) {
      //   console.log(item);
      this.$router.push({
        name: item.name,
      });
    },
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
  },
};
</script>

<style lang="less" scoped>
  .cockpit_title{
    display: flex;
  }
</style>