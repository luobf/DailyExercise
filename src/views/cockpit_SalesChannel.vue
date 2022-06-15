<template>
  <div>
    cockpit_SalesChannel
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser()"
      @del="delUser()"
    >
    </common-table>
  </div>
</template>


<script>
import CommonTable from "../components/commonTable.vue";
export default {
  name: "cockpit_SalesChannel",
  components: {
    CommonTable,
  },
  data() {
    return {
      tableData: [
        {
          date: "上年同期",
          sale: 63498,
          procurement: 78467,
        },
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
          sale: 1675178,
          procurement: 1965688,
        },
        {
          date: "本月",
          sale: 2335875,
          procurement: 299831,
        },
        {
          date: "上月",
          sale: 8688478,
          procurement: 7305624,
        },
      ],
      tableLabel: [
        { prop: 'date', label: "期间" },
        { prop: 'sale', label: "销售" },
        { prop: 'procurement', label: "采购" },
      ],
      config: {
        page: 1,
        total: 30,
      },
    };
  },
  methods: {
    getList() {},
    editUser() {},
    delUser() {},
  },
};
</script>


<style lang="less" scoped>
</style>