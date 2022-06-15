<template>
  <div>
    <p>这里是按钮的练习</p>
    <el-button type="primary" :loading="true" size="medium" round
      >加载中</el-button
    >

    <p>这里是单选框的练习</p>
    <el-radio v-model="radio" label="X" @change="getValue()">X</el-radio>
    <el-radio v-model="radio" label="Y" @change="getValue()">Y</el-radio>

    <p>显示内容</p>
    <p>{{this.radioValue}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio:1,
      radioValue:''
    };
  },
  methods:{
     getValue(){
         this.radioValue = this.radio
     }
  }
};
</script>