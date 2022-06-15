<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          :background-color="color1"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item
            @click="clickMenu(item)"
            v-for="item in menu"
            :index="item.path"
            :key="item.path"
            >{{ item.label }}</el-menu-item
          >
          <div class="block">
            <el-color-picker v-model="color1"></el-color-picker>
          </div>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      menu: [
        {
          path: "/Progressview",
          name: "Progressview",
          label: "进度条练习",
          url: "Progressview/Progressview",
        },
        {
          path: "/echartsview",
          name: "echartsview",
          label: "echarts练习",
          url: "echartsview/echartsview",
        },
        {
          path: "/componentsview",
          name: "componentsview",
          label: "组件的练习",
          url: "componentsview/componentsview",
        },
        {
          path: "/cockpit",
          name: "cockpit",
          label: "驾驶舱",
          url: "cockpit/cockpit",
        },
        {
          path: "/Reptile",
          name: "Reptile",
          label: "爬虫练习",
          url: "Reptile/Reptile",
        },
        
      ],
      color1: "#409EFF",
    };
  },
  methods: {
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      });
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style lang="less" scoped>
.block {
  display: flex;
  align-items: center;
  height: 60px;
  // background-color: red;
}
.el-menu {
  display: flex;
  margin: 0 -20px;
}
</style>
