<template></template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          createdBy: null,
          createdDate: null,
          updatedBy: null,
          updatedDate: null,
          id: "1",
          name: "首页",
          url: "/common/home",
          type: 1,
          parentId: 0,
          parentName: null,
          icon: "credits",
          orderNum: 0,
          children: null,
        },
        {
          createdBy: null,
          createdDate: null,
          updatedBy: null,
          updatedDate: null,
          id: "5",
          name: "待办管理",
          url: "",
          type: 0,
          parentId: 0,
          parentName: null,
          icon: "email",
          orderNum: 1,
          children: [
            {
              createdBy: null,
              createdDate: null,
              updatedBy: null,
              updatedDate: null,
              id: "6",
              name: "待办文件",
              url: "/pend/waitinfo",
              type: 1,
              parentId: 5,
              parentName: "待办管理",
              icon: "lock",
              orderNum: 0,
              children: null,
            },
            {
              createdBy: null,
              createdDate: null,
              updatedBy: null,
              updatedDate: null,
              id: "7",
              name: "办文跟踪",
              url: "/pend/fllowinfo",
              type: 1,
              parentId: 5,
              parentName: "待办管理",
              icon: "time",
              orderNum: 1,
              children: null,
            },
          ],
        },
      ],
    };
  },
};
</script>