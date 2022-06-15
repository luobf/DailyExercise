<template>
  <div>
    <div class="month">
      <span>月份：</span>
      <el-date-picker v-model="month" type="month" placeholder="选择月">
      </el-date-picker>
    </div>

    <div class="productType">
      <span>产品类型：</span>
      <el-cascader
        clearable
        v-model="productType"
        :options="options"
        :show-all-levels="false"
      ></el-cascader>
    </div>

    <!-- echarts图表 -->
    <template>
      <div
        class="chartDom"
        ref="chartDom"
        :style="{ width: '600px', height: '300px' }"
      ></div>
    </template>

    <template>
      <el-table :data="tableData">
        <el-table-column
          show-overflow-tooltip
          v-for="item in tableLabel"
          :key="item.prop"
          :label="item.label"
          :width="item.width ? item.width : 250"
        >
          <!-- 加了这句才能显示 tableData数据 -->
          <template slot-scope="scope">
            <span>
              {{ scope.row[item.prop] }}
            </span>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>


<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      month: "",
      productType: "",
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      tableLabel: [
        { prop: "date", label: "期间" },
        { prop: "sale", label: "销售" },
        { prop: "procurement", label: "采购" },
      ],
      tableData: [
        {
          date: "本月",
          sale: 93068,
          procurement: 14346,
        },
        {
          date: "上月",
          sale: 331238,
          procurement: 277565,
        },
        {
          date: "上年同期",
          sale: 63498,
          procurement: 78467,
        },
      ],
      tableLabel2: [],
      tableData_sale: [],
      tableData_procurement: [],
    };
  },
  methods: {
    handleChange() {
      //   console.log(item)
    },

    Echarts() {
      const chartDom = this.$echarts.init(this.$refs.chartDom);
      chartDom.setOption({
        title:{
          text:'销售采购情况柱状图',
          textAlign:'',
          subtext:'副标题',
          subtextStyle:{
            color:'red'
            
          }
        },
        legend: {},
        tooltip: {},
        xAxis: {
          data: this.tableLabel2,
        },
        yAxis: {},
        series: [
          { name:'销售',type: "bar", data: this.tableData_sale ,color:'red'},
          { name:'采购',type: "bar", data: this.tableData_procurement ,color:'blue'},
        ],
      });
    },
    formatter(row, column) {
      return row.address;
    },
  },
  mounted() {
    
    this.tableLabel2 = this.tableData.map((item) => {
      return item.date;
    });

    this.tableData_sale = this.tableData.map((item) => {
      return item.sale;
    });

    this.tableData_procurement = this.tableData.map((item) => {
      return item.procurement;
    });

    this.Echarts();
  },
};
</script>

<style lang="less" scoped>
.el-scrollbar__wrap {
  overflow-x: hidden;
}
.chartDom {
  width: 100%;
  height: 300px;
  margin: 0 auto;
}
</style>