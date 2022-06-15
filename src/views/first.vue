<template>
<div>
  <p>你好，这是首页</p>
  <el-row> 
    <el-button type="primary" round @click="login()">跳转至主页</el-button>
  </el-row>
  <router-link to="/homeview">homeview</router-link>
</div>
</template>

<script>
export default {
    name:'first',
    data() {
        return{
          
        }
    },
    methods:{
        login(){
            this.$router.push({name:'homeview'})
        }
    }
}
</script>